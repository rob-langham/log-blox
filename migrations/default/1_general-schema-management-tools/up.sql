DROP TYPE IF EXISTS column_tuple cascade;

CREATE type column_tuple AS (col_name TEXT, col_type TEXT);


CREATE procedure create_table_if_not_exists(
	schema_name text,
    managed_table_name TEXT,
    columns_to_create column_tuple[]
) LANGUAGE plpgsql AS  $$

declare
    existing_columns TEXT[];
    columns_to_drop TEXT[];
   	col column_tuple;
   del_col text;
BEGIN
	-- check if the table already exists
    IF NOT EXISTS (
        SELECT 1
        FROM information_schema.tables
        WHERE table_name = managed_table_name
        AND table_schema = schema_name
    ) THEN
        -- create the table with the "id" column as the primary key
        EXECUTE 'CREATE TABLE ' || quote_ident(schema_name) || '.' || quote_ident(managed_table_name) || ' (id TEXT PRIMARY KEY);';
    END IF;

    -- get the list of existing columns in the table
    SELECT array_agg(column_name)
    INTO existing_columns
    FROM information_schema.columns
    WHERE table_name = managed_table_name
    AND table_schema = schema_name;
   
    -- drop any columns not included in the "columns_to_create" parameter
    SELECT array_agg(column_name)
    INTO columns_to_drop
    FROM information_schema.columns
    WHERE table_name = managed_table_name
    AND table_schema = schema_name
    AND column_name != 'id'
    and not exists (select 1 from unnest(columns_to_create) where col_name = column_name);

    FOREACH del_col IN array coalesce(columns_to_drop, array[]::text[]) LOOP
        EXECUTE 'ALTER TABLE ' || quote_ident(schema_name) || '.' || quote_ident(managed_table_name) || ' DROP COLUMN ' || quote_ident(del_col);
    END LOOP;
       
    -- create any columns that don't already exist del_cpl
    FOREACH col IN array columns_to_create LOOP
        IF NOT col.col_name = ANY(existing_columns) THEN
            EXECUTE 'ALTER TABLE ' || quote_ident(schema_name) || '.' || quote_ident(managed_table_name) || ' ADD COLUMN ' || quote_ident(col.col_name) || ' ' || col.col_type;
        END IF;
    END LOOP;
END;
$$;
