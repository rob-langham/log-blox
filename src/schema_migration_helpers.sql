-- Should never be used by anything defined outside of this file
DROP TYPE IF EXISTS column_tuple cascade;

CREATE type column_tuple AS (col_name TEXT, col_type TEXT);

CREATE procedure create_table_if_not_exists(
	schema_name text,
    managed_table_name TEXT,
    columns_to_create column_tuple[]
) LANGUAGE plpgsql AS  $$
declare
    columns_to_drop TEXT[];
   	col column_tuple;
BEGIN
	-- check if the table already exists
    IF NOT EXISTS (
        SELECT 1
        FROM information_schema.tables
        WHERE table_name = managed_table_name
        AND table_schema = schema_name
    ) THEN
        -- create the table with the "id" column as the primary key
        EXECUTE 'CREATE TABLE ' || quote_ident(schema_name) || '.' || quote_ident(managed_table_name) || ' ("id" TEXT, "network" text, primary key ("id", "network")) PARTITION BY LIST ("network");';
    END IF;

    -- drop any columns not included in the "columns_to_create" parameter
    SELECT array_agg(column_name)
    INTO columns_to_drop
    FROM information_schema.columns
    WHERE table_name = managed_table_name
    AND table_schema = schema_name
    AND column_name != 'id'
    and not exists (select 1 from unnest(columns_to_create) where col_name = column_name);

    -- create any columns that don't already exist del_cpl
    FOREACH col IN array columns_to_create LOOP
        EXECUTE 'ALTER TABLE ' || quote_ident(schema_name) || '.' || quote_ident(managed_table_name) || ' ADD COLUMN if not exists ' || quote_ident(col.col_name) || ' ' || col.col_type;
    END LOOP;
END;
$$;

CREATE OR REPLACE procedure create_table_network_partition(
	schema_name text,
    managed_table_name TEXT,
    network TEXT
) LANGUAGE plpgsql AS  $$
DECLARE
BEGIN
    EXECUTE 'CREATE TABLE if not exists ' || quote_ident(schema_name) || '.' || quote_ident(managed_table_name || '_' || network) || ' partition of ' || quote_ident(schema_name) || '.' || quote_ident(managed_table_name) || ' for values in (''' || network || ''');';
END;
$$;
