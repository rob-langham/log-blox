import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  jsonb: any;
};

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "balance_collected_event" */
  balance_collected_event: Array<Balance_Collected_Event>;
  /** fetch aggregated fields from the table: "balance_collected_event" */
  balance_collected_event_aggregate: Balance_Collected_Event_Aggregate;
  /** fetch data from the table: "balance_collected_event" using primary key columns */
  balance_collected_event_by_pk?: Maybe<Balance_Collected_Event>;
  /** fetch data from the table: "collateral_added_event" */
  collateral_added_event: Array<Collateral_Added_Event>;
  /** fetch aggregated fields from the table: "collateral_added_event" */
  collateral_added_event_aggregate: Collateral_Added_Event_Aggregate;
  /** fetch data from the table: "collateral_added_event" using primary key columns */
  collateral_added_event_by_pk?: Maybe<Collateral_Added_Event>;
  /** fetch data from the table: "collateral_removed_event" */
  collateral_removed_event: Array<Collateral_Removed_Event>;
  /** fetch aggregated fields from the table: "collateral_removed_event" */
  collateral_removed_event_aggregate: Collateral_Removed_Event_Aggregate;
  /** fetch data from the table: "collateral_removed_event" using primary key columns */
  collateral_removed_event_by_pk?: Maybe<Collateral_Removed_Event>;
  /** fetch data from the table: "contango_yield_admin_changed_event" */
  contango_yield_admin_changed_event: Array<Contango_Yield_Admin_Changed_Event>;
  /** fetch aggregated fields from the table: "contango_yield_admin_changed_event" */
  contango_yield_admin_changed_event_aggregate: Contango_Yield_Admin_Changed_Event_Aggregate;
  /** fetch data from the table: "contango_yield_admin_changed_event" using primary key columns */
  contango_yield_admin_changed_event_by_pk?: Maybe<Contango_Yield_Admin_Changed_Event>;
  /** fetch data from the table: "contango_yield_beacon_upgraded_event" */
  contango_yield_beacon_upgraded_event: Array<Contango_Yield_Beacon_Upgraded_Event>;
  /** fetch aggregated fields from the table: "contango_yield_beacon_upgraded_event" */
  contango_yield_beacon_upgraded_event_aggregate: Contango_Yield_Beacon_Upgraded_Event_Aggregate;
  /** fetch data from the table: "contango_yield_beacon_upgraded_event" using primary key columns */
  contango_yield_beacon_upgraded_event_by_pk?: Maybe<Contango_Yield_Beacon_Upgraded_Event>;
  /** fetch data from the table: "contango_yield_upgraded_event" */
  contango_yield_upgraded_event: Array<Contango_Yield_Upgraded_Event>;
  /** fetch aggregated fields from the table: "contango_yield_upgraded_event" */
  contango_yield_upgraded_event_aggregate: Contango_Yield_Upgraded_Event_Aggregate;
  /** fetch data from the table: "contango_yield_upgraded_event" using primary key columns */
  contango_yield_upgraded_event_by_pk?: Maybe<Contango_Yield_Upgraded_Event>;
  /** fetch data from the table: "contract_traded_event" */
  contract_traded_event: Array<Contract_Traded_Event>;
  /** fetch aggregated fields from the table: "contract_traded_event" */
  contract_traded_event_aggregate: Contract_Traded_Event_Aggregate;
  /** fetch data from the table: "contract_traded_event" using primary key columns */
  contract_traded_event_by_pk?: Maybe<Contract_Traded_Event>;
  /** fetch data from the table: "initialized_event" */
  initialized_event: Array<Initialized_Event>;
  /** fetch aggregated fields from the table: "initialized_event" */
  initialized_event_aggregate: Initialized_Event_Aggregate;
  /** fetch data from the table: "initialized_event" using primary key columns */
  initialized_event_by_pk?: Maybe<Initialized_Event>;
  /** fetch data from the table: "paused_event" */
  paused_event: Array<Paused_Event>;
  /** fetch aggregated fields from the table: "paused_event" */
  paused_event_aggregate: Paused_Event_Aggregate;
  /** fetch data from the table: "paused_event" using primary key columns */
  paused_event_by_pk?: Maybe<Paused_Event>;
  /** fetch data from the table: "position_closed_event" */
  position_closed_event: Array<Position_Closed_Event>;
  /** fetch aggregated fields from the table: "position_closed_event" */
  position_closed_event_aggregate: Position_Closed_Event_Aggregate;
  /** fetch data from the table: "position_closed_event" using primary key columns */
  position_closed_event_by_pk?: Maybe<Position_Closed_Event>;
  /** fetch data from the table: "position_delivered_event" */
  position_delivered_event: Array<Position_Delivered_Event>;
  /** fetch aggregated fields from the table: "position_delivered_event" */
  position_delivered_event_aggregate: Position_Delivered_Event_Aggregate;
  /** fetch data from the table: "position_delivered_event" using primary key columns */
  position_delivered_event_by_pk?: Maybe<Position_Delivered_Event>;
  /** fetch data from the table: "position_liquidated_event" */
  position_liquidated_event: Array<Position_Liquidated_Event>;
  /** fetch aggregated fields from the table: "position_liquidated_event" */
  position_liquidated_event_aggregate: Position_Liquidated_Event_Aggregate;
  /** fetch data from the table: "position_liquidated_event" using primary key columns */
  position_liquidated_event_by_pk?: Maybe<Position_Liquidated_Event>;
  /** fetch data from the table: "position_upserted_event" */
  position_upserted_event: Array<Position_Upserted_Event>;
  /** fetch aggregated fields from the table: "position_upserted_event" */
  position_upserted_event_aggregate: Position_Upserted_Event_Aggregate;
  /** fetch data from the table: "position_upserted_event" using primary key columns */
  position_upserted_event_by_pk?: Maybe<Position_Upserted_Event>;
  /** fetch data from the table: "role_admin_changed_event" */
  role_admin_changed_event: Array<Role_Admin_Changed_Event>;
  /** fetch aggregated fields from the table: "role_admin_changed_event" */
  role_admin_changed_event_aggregate: Role_Admin_Changed_Event_Aggregate;
  /** fetch data from the table: "role_admin_changed_event" using primary key columns */
  role_admin_changed_event_by_pk?: Maybe<Role_Admin_Changed_Event>;
  /** fetch data from the table: "role_granted_event" */
  role_granted_event: Array<Role_Granted_Event>;
  /** fetch aggregated fields from the table: "role_granted_event" */
  role_granted_event_aggregate: Role_Granted_Event_Aggregate;
  /** fetch data from the table: "role_granted_event" using primary key columns */
  role_granted_event_by_pk?: Maybe<Role_Granted_Event>;
  /** fetch data from the table: "role_revoked_event" */
  role_revoked_event: Array<Role_Revoked_Event>;
  /** fetch aggregated fields from the table: "role_revoked_event" */
  role_revoked_event_aggregate: Role_Revoked_Event_Aggregate;
  /** fetch data from the table: "role_revoked_event" using primary key columns */
  role_revoked_event_by_pk?: Maybe<Role_Revoked_Event>;
  /** fetch data from the table: "unpaused_event" */
  unpaused_event: Array<Unpaused_Event>;
  /** fetch aggregated fields from the table: "unpaused_event" */
  unpaused_event_aggregate: Unpaused_Event_Aggregate;
  /** fetch data from the table: "unpaused_event" using primary key columns */
  unpaused_event_by_pk?: Maybe<Unpaused_Event>;
};

export type Query_RootBalance_Collected_EventArgs = {
  distinct_on?: InputMaybe<Array<Balance_Collected_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Balance_Collected_Event_Order_By>>;
  where?: InputMaybe<Balance_Collected_Event_Bool_Exp>;
};

export type Query_RootBalance_Collected_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Balance_Collected_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Balance_Collected_Event_Order_By>>;
  where?: InputMaybe<Balance_Collected_Event_Bool_Exp>;
};

export type Query_RootBalance_Collected_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Query_RootCollateral_Added_EventArgs = {
  distinct_on?: InputMaybe<Array<Collateral_Added_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Collateral_Added_Event_Order_By>>;
  where?: InputMaybe<Collateral_Added_Event_Bool_Exp>;
};

export type Query_RootCollateral_Added_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collateral_Added_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Collateral_Added_Event_Order_By>>;
  where?: InputMaybe<Collateral_Added_Event_Bool_Exp>;
};

export type Query_RootCollateral_Added_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Query_RootCollateral_Removed_EventArgs = {
  distinct_on?: InputMaybe<Array<Collateral_Removed_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Collateral_Removed_Event_Order_By>>;
  where?: InputMaybe<Collateral_Removed_Event_Bool_Exp>;
};

export type Query_RootCollateral_Removed_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collateral_Removed_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Collateral_Removed_Event_Order_By>>;
  where?: InputMaybe<Collateral_Removed_Event_Bool_Exp>;
};

export type Query_RootCollateral_Removed_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Query_RootContango_Yield_Admin_Changed_EventArgs = {
  distinct_on?: InputMaybe<Array<Contango_Yield_Admin_Changed_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contango_Yield_Admin_Changed_Event_Order_By>>;
  where?: InputMaybe<Contango_Yield_Admin_Changed_Event_Bool_Exp>;
};

export type Query_RootContango_Yield_Admin_Changed_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contango_Yield_Admin_Changed_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contango_Yield_Admin_Changed_Event_Order_By>>;
  where?: InputMaybe<Contango_Yield_Admin_Changed_Event_Bool_Exp>;
};

export type Query_RootContango_Yield_Admin_Changed_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Query_RootContango_Yield_Beacon_Upgraded_EventArgs = {
  distinct_on?: InputMaybe<Array<Contango_Yield_Beacon_Upgraded_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contango_Yield_Beacon_Upgraded_Event_Order_By>>;
  where?: InputMaybe<Contango_Yield_Beacon_Upgraded_Event_Bool_Exp>;
};

export type Query_RootContango_Yield_Beacon_Upgraded_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contango_Yield_Beacon_Upgraded_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contango_Yield_Beacon_Upgraded_Event_Order_By>>;
  where?: InputMaybe<Contango_Yield_Beacon_Upgraded_Event_Bool_Exp>;
};

export type Query_RootContango_Yield_Beacon_Upgraded_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Query_RootContango_Yield_Upgraded_EventArgs = {
  distinct_on?: InputMaybe<Array<Contango_Yield_Upgraded_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contango_Yield_Upgraded_Event_Order_By>>;
  where?: InputMaybe<Contango_Yield_Upgraded_Event_Bool_Exp>;
};

export type Query_RootContango_Yield_Upgraded_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contango_Yield_Upgraded_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contango_Yield_Upgraded_Event_Order_By>>;
  where?: InputMaybe<Contango_Yield_Upgraded_Event_Bool_Exp>;
};

export type Query_RootContango_Yield_Upgraded_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Query_RootContract_Traded_EventArgs = {
  distinct_on?: InputMaybe<Array<Contract_Traded_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Traded_Event_Order_By>>;
  where?: InputMaybe<Contract_Traded_Event_Bool_Exp>;
};

export type Query_RootContract_Traded_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Traded_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Traded_Event_Order_By>>;
  where?: InputMaybe<Contract_Traded_Event_Bool_Exp>;
};

export type Query_RootContract_Traded_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Query_RootInitialized_EventArgs = {
  distinct_on?: InputMaybe<Array<Initialized_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Initialized_Event_Order_By>>;
  where?: InputMaybe<Initialized_Event_Bool_Exp>;
};

export type Query_RootInitialized_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Initialized_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Initialized_Event_Order_By>>;
  where?: InputMaybe<Initialized_Event_Bool_Exp>;
};

export type Query_RootInitialized_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Query_RootPaused_EventArgs = {
  distinct_on?: InputMaybe<Array<Paused_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Paused_Event_Order_By>>;
  where?: InputMaybe<Paused_Event_Bool_Exp>;
};

export type Query_RootPaused_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Paused_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Paused_Event_Order_By>>;
  where?: InputMaybe<Paused_Event_Bool_Exp>;
};

export type Query_RootPaused_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Query_RootPosition_Closed_EventArgs = {
  distinct_on?: InputMaybe<Array<Position_Closed_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Position_Closed_Event_Order_By>>;
  where?: InputMaybe<Position_Closed_Event_Bool_Exp>;
};

export type Query_RootPosition_Closed_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Position_Closed_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Position_Closed_Event_Order_By>>;
  where?: InputMaybe<Position_Closed_Event_Bool_Exp>;
};

export type Query_RootPosition_Closed_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Query_RootPosition_Delivered_EventArgs = {
  distinct_on?: InputMaybe<Array<Position_Delivered_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Position_Delivered_Event_Order_By>>;
  where?: InputMaybe<Position_Delivered_Event_Bool_Exp>;
};

export type Query_RootPosition_Delivered_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Position_Delivered_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Position_Delivered_Event_Order_By>>;
  where?: InputMaybe<Position_Delivered_Event_Bool_Exp>;
};

export type Query_RootPosition_Delivered_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Query_RootPosition_Liquidated_EventArgs = {
  distinct_on?: InputMaybe<Array<Position_Liquidated_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Position_Liquidated_Event_Order_By>>;
  where?: InputMaybe<Position_Liquidated_Event_Bool_Exp>;
};

export type Query_RootPosition_Liquidated_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Position_Liquidated_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Position_Liquidated_Event_Order_By>>;
  where?: InputMaybe<Position_Liquidated_Event_Bool_Exp>;
};

export type Query_RootPosition_Liquidated_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Query_RootPosition_Upserted_EventArgs = {
  distinct_on?: InputMaybe<Array<Position_Upserted_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Position_Upserted_Event_Order_By>>;
  where?: InputMaybe<Position_Upserted_Event_Bool_Exp>;
};

export type Query_RootPosition_Upserted_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Position_Upserted_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Position_Upserted_Event_Order_By>>;
  where?: InputMaybe<Position_Upserted_Event_Bool_Exp>;
};

export type Query_RootPosition_Upserted_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Query_RootRole_Admin_Changed_EventArgs = {
  distinct_on?: InputMaybe<Array<Role_Admin_Changed_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Role_Admin_Changed_Event_Order_By>>;
  where?: InputMaybe<Role_Admin_Changed_Event_Bool_Exp>;
};

export type Query_RootRole_Admin_Changed_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Admin_Changed_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Role_Admin_Changed_Event_Order_By>>;
  where?: InputMaybe<Role_Admin_Changed_Event_Bool_Exp>;
};

export type Query_RootRole_Admin_Changed_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Query_RootRole_Granted_EventArgs = {
  distinct_on?: InputMaybe<Array<Role_Granted_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Role_Granted_Event_Order_By>>;
  where?: InputMaybe<Role_Granted_Event_Bool_Exp>;
};

export type Query_RootRole_Granted_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Granted_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Role_Granted_Event_Order_By>>;
  where?: InputMaybe<Role_Granted_Event_Bool_Exp>;
};

export type Query_RootRole_Granted_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Query_RootRole_Revoked_EventArgs = {
  distinct_on?: InputMaybe<Array<Role_Revoked_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Role_Revoked_Event_Order_By>>;
  where?: InputMaybe<Role_Revoked_Event_Bool_Exp>;
};

export type Query_RootRole_Revoked_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Revoked_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Role_Revoked_Event_Order_By>>;
  where?: InputMaybe<Role_Revoked_Event_Bool_Exp>;
};

export type Query_RootRole_Revoked_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Query_RootUnpaused_EventArgs = {
  distinct_on?: InputMaybe<Array<Unpaused_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Unpaused_Event_Order_By>>;
  where?: InputMaybe<Unpaused_Event_Bool_Exp>;
};

export type Query_RootUnpaused_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Unpaused_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Unpaused_Event_Order_By>>;
  where?: InputMaybe<Unpaused_Event_Bool_Exp>;
};

export type Query_RootUnpaused_Event_By_PkArgs = {
  id: Scalars["String"];
};

/** select columns of table "balance_collected_event" */
export enum Balance_Collected_Event_Select_Column {
  /** column name */
  Amount = "amount",
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  To = "to",
  /** column name */
  Token = "token",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** Ordering options when selecting data from "balance_collected_event". */
export type Balance_Collected_Event_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_hash?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** Boolean expression to filter rows from the table "balance_collected_event". All fields are combined with a logical 'AND'. */
export type Balance_Collected_Event_Bool_Exp = {
  _and?: InputMaybe<Array<Balance_Collected_Event_Bool_Exp>>;
  _not?: InputMaybe<Balance_Collected_Event_Bool_Exp>;
  _or?: InputMaybe<Array<Balance_Collected_Event_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  block_hash?: InputMaybe<String_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  log_index?: InputMaybe<Numeric_Comparison_Exp>;
  to?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["numeric"]>;
  _gt?: InputMaybe<Scalars["numeric"]>;
  _gte?: InputMaybe<Scalars["numeric"]>;
  _in?: InputMaybe<Array<Scalars["numeric"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["numeric"]>;
  _lte?: InputMaybe<Scalars["numeric"]>;
  _neq?: InputMaybe<Scalars["numeric"]>;
  _nin?: InputMaybe<Array<Scalars["numeric"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]>;
  _gt?: InputMaybe<Scalars["String"]>;
  _gte?: InputMaybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]>;
  _in?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]>;
  _lt?: InputMaybe<Scalars["String"]>;
  _lte?: InputMaybe<Scalars["String"]>;
  _neq?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]>;
  _nin?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "balance_collected_event" */
export type Balance_Collected_Event = {
  __typename?: "balance_collected_event";
  amount?: Maybe<Scalars["numeric"]>;
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id: Scalars["String"];
  log_index?: Maybe<Scalars["numeric"]>;
  to?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "balance_collected_event" */
export type Balance_Collected_Event_Aggregate = {
  __typename?: "balance_collected_event_aggregate";
  aggregate?: Maybe<Balance_Collected_Event_Aggregate_Fields>;
  nodes: Array<Balance_Collected_Event>;
};

/** aggregate fields of "balance_collected_event" */
export type Balance_Collected_Event_Aggregate_Fields = {
  __typename?: "balance_collected_event_aggregate_fields";
  avg?: Maybe<Balance_Collected_Event_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Balance_Collected_Event_Max_Fields>;
  min?: Maybe<Balance_Collected_Event_Min_Fields>;
  stddev?: Maybe<Balance_Collected_Event_Stddev_Fields>;
  stddev_pop?: Maybe<Balance_Collected_Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Balance_Collected_Event_Stddev_Samp_Fields>;
  sum?: Maybe<Balance_Collected_Event_Sum_Fields>;
  var_pop?: Maybe<Balance_Collected_Event_Var_Pop_Fields>;
  var_samp?: Maybe<Balance_Collected_Event_Var_Samp_Fields>;
  variance?: Maybe<Balance_Collected_Event_Variance_Fields>;
};

/** aggregate fields of "balance_collected_event" */
export type Balance_Collected_Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Balance_Collected_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Balance_Collected_Event_Avg_Fields = {
  __typename?: "balance_collected_event_avg_fields";
  amount?: Maybe<Scalars["Float"]>;
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate max on columns */
export type Balance_Collected_Event_Max_Fields = {
  __typename?: "balance_collected_event_max_fields";
  amount?: Maybe<Scalars["numeric"]>;
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  to?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Balance_Collected_Event_Min_Fields = {
  __typename?: "balance_collected_event_min_fields";
  amount?: Maybe<Scalars["numeric"]>;
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  to?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Balance_Collected_Event_Stddev_Fields = {
  __typename?: "balance_collected_event_stddev_fields";
  amount?: Maybe<Scalars["Float"]>;
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Balance_Collected_Event_Stddev_Pop_Fields = {
  __typename?: "balance_collected_event_stddev_pop_fields";
  amount?: Maybe<Scalars["Float"]>;
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Balance_Collected_Event_Stddev_Samp_Fields = {
  __typename?: "balance_collected_event_stddev_samp_fields";
  amount?: Maybe<Scalars["Float"]>;
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Balance_Collected_Event_Sum_Fields = {
  __typename?: "balance_collected_event_sum_fields";
  amount?: Maybe<Scalars["numeric"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  log_index?: Maybe<Scalars["numeric"]>;
};

/** aggregate var_pop on columns */
export type Balance_Collected_Event_Var_Pop_Fields = {
  __typename?: "balance_collected_event_var_pop_fields";
  amount?: Maybe<Scalars["Float"]>;
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Balance_Collected_Event_Var_Samp_Fields = {
  __typename?: "balance_collected_event_var_samp_fields";
  amount?: Maybe<Scalars["Float"]>;
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Balance_Collected_Event_Variance_Fields = {
  __typename?: "balance_collected_event_variance_fields";
  amount?: Maybe<Scalars["Float"]>;
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** select columns of table "collateral_added_event" */
export enum Collateral_Added_Event_Select_Column {
  /** column name */
  Amount = "amount",
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Cost = "cost",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  PositionId = "positionId",
  /** column name */
  Symbol = "symbol",
  /** column name */
  Trader = "trader",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** Ordering options when selecting data from "collateral_added_event". */
export type Collateral_Added_Event_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_hash?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  positionId?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  trader?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "collateral_added_event". All fields are combined with a logical 'AND'. */
export type Collateral_Added_Event_Bool_Exp = {
  _and?: InputMaybe<Array<Collateral_Added_Event_Bool_Exp>>;
  _not?: InputMaybe<Collateral_Added_Event_Bool_Exp>;
  _or?: InputMaybe<Array<Collateral_Added_Event_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  block_hash?: InputMaybe<String_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  cost?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  log_index?: InputMaybe<Numeric_Comparison_Exp>;
  positionId?: InputMaybe<Numeric_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  trader?: InputMaybe<String_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "collateral_added_event" */
export type Collateral_Added_Event = {
  __typename?: "collateral_added_event";
  amount?: Maybe<Scalars["numeric"]>;
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  cost?: Maybe<Scalars["numeric"]>;
  id: Scalars["String"];
  log_index?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
  symbol?: Maybe<Scalars["String"]>;
  trader?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "collateral_added_event" */
export type Collateral_Added_Event_Aggregate = {
  __typename?: "collateral_added_event_aggregate";
  aggregate?: Maybe<Collateral_Added_Event_Aggregate_Fields>;
  nodes: Array<Collateral_Added_Event>;
};

/** aggregate fields of "collateral_added_event" */
export type Collateral_Added_Event_Aggregate_Fields = {
  __typename?: "collateral_added_event_aggregate_fields";
  avg?: Maybe<Collateral_Added_Event_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Collateral_Added_Event_Max_Fields>;
  min?: Maybe<Collateral_Added_Event_Min_Fields>;
  stddev?: Maybe<Collateral_Added_Event_Stddev_Fields>;
  stddev_pop?: Maybe<Collateral_Added_Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Collateral_Added_Event_Stddev_Samp_Fields>;
  sum?: Maybe<Collateral_Added_Event_Sum_Fields>;
  var_pop?: Maybe<Collateral_Added_Event_Var_Pop_Fields>;
  var_samp?: Maybe<Collateral_Added_Event_Var_Samp_Fields>;
  variance?: Maybe<Collateral_Added_Event_Variance_Fields>;
};

/** aggregate fields of "collateral_added_event" */
export type Collateral_Added_Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Collateral_Added_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Collateral_Added_Event_Avg_Fields = {
  __typename?: "collateral_added_event_avg_fields";
  amount?: Maybe<Scalars["Float"]>;
  block_number?: Maybe<Scalars["Float"]>;
  cost?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
};

/** aggregate max on columns */
export type Collateral_Added_Event_Max_Fields = {
  __typename?: "collateral_added_event_max_fields";
  amount?: Maybe<Scalars["numeric"]>;
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  cost?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
  symbol?: Maybe<Scalars["String"]>;
  trader?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Collateral_Added_Event_Min_Fields = {
  __typename?: "collateral_added_event_min_fields";
  amount?: Maybe<Scalars["numeric"]>;
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  cost?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
  symbol?: Maybe<Scalars["String"]>;
  trader?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Collateral_Added_Event_Stddev_Fields = {
  __typename?: "collateral_added_event_stddev_fields";
  amount?: Maybe<Scalars["Float"]>;
  block_number?: Maybe<Scalars["Float"]>;
  cost?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Collateral_Added_Event_Stddev_Pop_Fields = {
  __typename?: "collateral_added_event_stddev_pop_fields";
  amount?: Maybe<Scalars["Float"]>;
  block_number?: Maybe<Scalars["Float"]>;
  cost?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Collateral_Added_Event_Stddev_Samp_Fields = {
  __typename?: "collateral_added_event_stddev_samp_fields";
  amount?: Maybe<Scalars["Float"]>;
  block_number?: Maybe<Scalars["Float"]>;
  cost?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Collateral_Added_Event_Sum_Fields = {
  __typename?: "collateral_added_event_sum_fields";
  amount?: Maybe<Scalars["numeric"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  cost?: Maybe<Scalars["numeric"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
};

/** aggregate var_pop on columns */
export type Collateral_Added_Event_Var_Pop_Fields = {
  __typename?: "collateral_added_event_var_pop_fields";
  amount?: Maybe<Scalars["Float"]>;
  block_number?: Maybe<Scalars["Float"]>;
  cost?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Collateral_Added_Event_Var_Samp_Fields = {
  __typename?: "collateral_added_event_var_samp_fields";
  amount?: Maybe<Scalars["Float"]>;
  block_number?: Maybe<Scalars["Float"]>;
  cost?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Collateral_Added_Event_Variance_Fields = {
  __typename?: "collateral_added_event_variance_fields";
  amount?: Maybe<Scalars["Float"]>;
  block_number?: Maybe<Scalars["Float"]>;
  cost?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
};

/** select columns of table "collateral_removed_event" */
export enum Collateral_Removed_Event_Select_Column {
  /** column name */
  Amount = "amount",
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Cost = "cost",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  PositionId = "positionId",
  /** column name */
  Symbol = "symbol",
  /** column name */
  Trader = "trader",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** Ordering options when selecting data from "collateral_removed_event". */
export type Collateral_Removed_Event_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_hash?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  positionId?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  trader?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "collateral_removed_event". All fields are combined with a logical 'AND'. */
export type Collateral_Removed_Event_Bool_Exp = {
  _and?: InputMaybe<Array<Collateral_Removed_Event_Bool_Exp>>;
  _not?: InputMaybe<Collateral_Removed_Event_Bool_Exp>;
  _or?: InputMaybe<Array<Collateral_Removed_Event_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  block_hash?: InputMaybe<String_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  cost?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  log_index?: InputMaybe<Numeric_Comparison_Exp>;
  positionId?: InputMaybe<Numeric_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  trader?: InputMaybe<String_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "collateral_removed_event" */
export type Collateral_Removed_Event = {
  __typename?: "collateral_removed_event";
  amount?: Maybe<Scalars["numeric"]>;
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  cost?: Maybe<Scalars["numeric"]>;
  id: Scalars["String"];
  log_index?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
  symbol?: Maybe<Scalars["String"]>;
  trader?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "collateral_removed_event" */
export type Collateral_Removed_Event_Aggregate = {
  __typename?: "collateral_removed_event_aggregate";
  aggregate?: Maybe<Collateral_Removed_Event_Aggregate_Fields>;
  nodes: Array<Collateral_Removed_Event>;
};

/** aggregate fields of "collateral_removed_event" */
export type Collateral_Removed_Event_Aggregate_Fields = {
  __typename?: "collateral_removed_event_aggregate_fields";
  avg?: Maybe<Collateral_Removed_Event_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Collateral_Removed_Event_Max_Fields>;
  min?: Maybe<Collateral_Removed_Event_Min_Fields>;
  stddev?: Maybe<Collateral_Removed_Event_Stddev_Fields>;
  stddev_pop?: Maybe<Collateral_Removed_Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Collateral_Removed_Event_Stddev_Samp_Fields>;
  sum?: Maybe<Collateral_Removed_Event_Sum_Fields>;
  var_pop?: Maybe<Collateral_Removed_Event_Var_Pop_Fields>;
  var_samp?: Maybe<Collateral_Removed_Event_Var_Samp_Fields>;
  variance?: Maybe<Collateral_Removed_Event_Variance_Fields>;
};

/** aggregate fields of "collateral_removed_event" */
export type Collateral_Removed_Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Collateral_Removed_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Collateral_Removed_Event_Avg_Fields = {
  __typename?: "collateral_removed_event_avg_fields";
  amount?: Maybe<Scalars["Float"]>;
  block_number?: Maybe<Scalars["Float"]>;
  cost?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
};

/** aggregate max on columns */
export type Collateral_Removed_Event_Max_Fields = {
  __typename?: "collateral_removed_event_max_fields";
  amount?: Maybe<Scalars["numeric"]>;
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  cost?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
  symbol?: Maybe<Scalars["String"]>;
  trader?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Collateral_Removed_Event_Min_Fields = {
  __typename?: "collateral_removed_event_min_fields";
  amount?: Maybe<Scalars["numeric"]>;
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  cost?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
  symbol?: Maybe<Scalars["String"]>;
  trader?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Collateral_Removed_Event_Stddev_Fields = {
  __typename?: "collateral_removed_event_stddev_fields";
  amount?: Maybe<Scalars["Float"]>;
  block_number?: Maybe<Scalars["Float"]>;
  cost?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Collateral_Removed_Event_Stddev_Pop_Fields = {
  __typename?: "collateral_removed_event_stddev_pop_fields";
  amount?: Maybe<Scalars["Float"]>;
  block_number?: Maybe<Scalars["Float"]>;
  cost?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Collateral_Removed_Event_Stddev_Samp_Fields = {
  __typename?: "collateral_removed_event_stddev_samp_fields";
  amount?: Maybe<Scalars["Float"]>;
  block_number?: Maybe<Scalars["Float"]>;
  cost?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Collateral_Removed_Event_Sum_Fields = {
  __typename?: "collateral_removed_event_sum_fields";
  amount?: Maybe<Scalars["numeric"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  cost?: Maybe<Scalars["numeric"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
};

/** aggregate var_pop on columns */
export type Collateral_Removed_Event_Var_Pop_Fields = {
  __typename?: "collateral_removed_event_var_pop_fields";
  amount?: Maybe<Scalars["Float"]>;
  block_number?: Maybe<Scalars["Float"]>;
  cost?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Collateral_Removed_Event_Var_Samp_Fields = {
  __typename?: "collateral_removed_event_var_samp_fields";
  amount?: Maybe<Scalars["Float"]>;
  block_number?: Maybe<Scalars["Float"]>;
  cost?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Collateral_Removed_Event_Variance_Fields = {
  __typename?: "collateral_removed_event_variance_fields";
  amount?: Maybe<Scalars["Float"]>;
  block_number?: Maybe<Scalars["Float"]>;
  cost?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
};

/** select columns of table "contango_yield_admin_changed_event" */
export enum Contango_Yield_Admin_Changed_Event_Select_Column {
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  NewAdmin = "newAdmin",
  /** column name */
  PreviousAdmin = "previousAdmin",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** Ordering options when selecting data from "contango_yield_admin_changed_event". */
export type Contango_Yield_Admin_Changed_Event_Order_By = {
  block_hash?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  newAdmin?: InputMaybe<Order_By>;
  previousAdmin?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/**
 * Boolean expression to filter rows from the table
 * "contango_yield_admin_changed_event". All fields are combined with a logical 'AND'.
 */
export type Contango_Yield_Admin_Changed_Event_Bool_Exp = {
  _and?: InputMaybe<Array<Contango_Yield_Admin_Changed_Event_Bool_Exp>>;
  _not?: InputMaybe<Contango_Yield_Admin_Changed_Event_Bool_Exp>;
  _or?: InputMaybe<Array<Contango_Yield_Admin_Changed_Event_Bool_Exp>>;
  block_hash?: InputMaybe<String_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  log_index?: InputMaybe<Numeric_Comparison_Exp>;
  newAdmin?: InputMaybe<String_Comparison_Exp>;
  previousAdmin?: InputMaybe<String_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "contango_yield_admin_changed_event" */
export type Contango_Yield_Admin_Changed_Event = {
  __typename?: "contango_yield_admin_changed_event";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id: Scalars["String"];
  log_index?: Maybe<Scalars["numeric"]>;
  newAdmin?: Maybe<Scalars["String"]>;
  previousAdmin?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "contango_yield_admin_changed_event" */
export type Contango_Yield_Admin_Changed_Event_Aggregate = {
  __typename?: "contango_yield_admin_changed_event_aggregate";
  aggregate?: Maybe<Contango_Yield_Admin_Changed_Event_Aggregate_Fields>;
  nodes: Array<Contango_Yield_Admin_Changed_Event>;
};

/** aggregate fields of "contango_yield_admin_changed_event" */
export type Contango_Yield_Admin_Changed_Event_Aggregate_Fields = {
  __typename?: "contango_yield_admin_changed_event_aggregate_fields";
  avg?: Maybe<Contango_Yield_Admin_Changed_Event_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Contango_Yield_Admin_Changed_Event_Max_Fields>;
  min?: Maybe<Contango_Yield_Admin_Changed_Event_Min_Fields>;
  stddev?: Maybe<Contango_Yield_Admin_Changed_Event_Stddev_Fields>;
  stddev_pop?: Maybe<Contango_Yield_Admin_Changed_Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contango_Yield_Admin_Changed_Event_Stddev_Samp_Fields>;
  sum?: Maybe<Contango_Yield_Admin_Changed_Event_Sum_Fields>;
  var_pop?: Maybe<Contango_Yield_Admin_Changed_Event_Var_Pop_Fields>;
  var_samp?: Maybe<Contango_Yield_Admin_Changed_Event_Var_Samp_Fields>;
  variance?: Maybe<Contango_Yield_Admin_Changed_Event_Variance_Fields>;
};

/** aggregate fields of "contango_yield_admin_changed_event" */
export type Contango_Yield_Admin_Changed_Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contango_Yield_Admin_Changed_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Contango_Yield_Admin_Changed_Event_Avg_Fields = {
  __typename?: "contango_yield_admin_changed_event_avg_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate max on columns */
export type Contango_Yield_Admin_Changed_Event_Max_Fields = {
  __typename?: "contango_yield_admin_changed_event_max_fields";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  newAdmin?: Maybe<Scalars["String"]>;
  previousAdmin?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Contango_Yield_Admin_Changed_Event_Min_Fields = {
  __typename?: "contango_yield_admin_changed_event_min_fields";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  newAdmin?: Maybe<Scalars["String"]>;
  previousAdmin?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Contango_Yield_Admin_Changed_Event_Stddev_Fields = {
  __typename?: "contango_yield_admin_changed_event_stddev_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Contango_Yield_Admin_Changed_Event_Stddev_Pop_Fields = {
  __typename?: "contango_yield_admin_changed_event_stddev_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Contango_Yield_Admin_Changed_Event_Stddev_Samp_Fields = {
  __typename?: "contango_yield_admin_changed_event_stddev_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Contango_Yield_Admin_Changed_Event_Sum_Fields = {
  __typename?: "contango_yield_admin_changed_event_sum_fields";
  block_number?: Maybe<Scalars["numeric"]>;
  log_index?: Maybe<Scalars["numeric"]>;
};

/** aggregate var_pop on columns */
export type Contango_Yield_Admin_Changed_Event_Var_Pop_Fields = {
  __typename?: "contango_yield_admin_changed_event_var_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Contango_Yield_Admin_Changed_Event_Var_Samp_Fields = {
  __typename?: "contango_yield_admin_changed_event_var_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Contango_Yield_Admin_Changed_Event_Variance_Fields = {
  __typename?: "contango_yield_admin_changed_event_variance_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** select columns of table "contango_yield_beacon_upgraded_event" */
export enum Contango_Yield_Beacon_Upgraded_Event_Select_Column {
  /** column name */
  Beacon = "beacon",
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** Ordering options when selecting data from "contango_yield_beacon_upgraded_event". */
export type Contango_Yield_Beacon_Upgraded_Event_Order_By = {
  beacon?: InputMaybe<Order_By>;
  block_hash?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/**
 * Boolean expression to filter rows from the table
 * "contango_yield_beacon_upgraded_event". All fields are combined with a logical 'AND'.
 */
export type Contango_Yield_Beacon_Upgraded_Event_Bool_Exp = {
  _and?: InputMaybe<Array<Contango_Yield_Beacon_Upgraded_Event_Bool_Exp>>;
  _not?: InputMaybe<Contango_Yield_Beacon_Upgraded_Event_Bool_Exp>;
  _or?: InputMaybe<Array<Contango_Yield_Beacon_Upgraded_Event_Bool_Exp>>;
  beacon?: InputMaybe<String_Comparison_Exp>;
  block_hash?: InputMaybe<String_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  log_index?: InputMaybe<Numeric_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "contango_yield_beacon_upgraded_event" */
export type Contango_Yield_Beacon_Upgraded_Event = {
  __typename?: "contango_yield_beacon_upgraded_event";
  beacon?: Maybe<Scalars["String"]>;
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id: Scalars["String"];
  log_index?: Maybe<Scalars["numeric"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "contango_yield_beacon_upgraded_event" */
export type Contango_Yield_Beacon_Upgraded_Event_Aggregate = {
  __typename?: "contango_yield_beacon_upgraded_event_aggregate";
  aggregate?: Maybe<Contango_Yield_Beacon_Upgraded_Event_Aggregate_Fields>;
  nodes: Array<Contango_Yield_Beacon_Upgraded_Event>;
};

/** aggregate fields of "contango_yield_beacon_upgraded_event" */
export type Contango_Yield_Beacon_Upgraded_Event_Aggregate_Fields = {
  __typename?: "contango_yield_beacon_upgraded_event_aggregate_fields";
  avg?: Maybe<Contango_Yield_Beacon_Upgraded_Event_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Contango_Yield_Beacon_Upgraded_Event_Max_Fields>;
  min?: Maybe<Contango_Yield_Beacon_Upgraded_Event_Min_Fields>;
  stddev?: Maybe<Contango_Yield_Beacon_Upgraded_Event_Stddev_Fields>;
  stddev_pop?: Maybe<Contango_Yield_Beacon_Upgraded_Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contango_Yield_Beacon_Upgraded_Event_Stddev_Samp_Fields>;
  sum?: Maybe<Contango_Yield_Beacon_Upgraded_Event_Sum_Fields>;
  var_pop?: Maybe<Contango_Yield_Beacon_Upgraded_Event_Var_Pop_Fields>;
  var_samp?: Maybe<Contango_Yield_Beacon_Upgraded_Event_Var_Samp_Fields>;
  variance?: Maybe<Contango_Yield_Beacon_Upgraded_Event_Variance_Fields>;
};

/** aggregate fields of "contango_yield_beacon_upgraded_event" */
export type Contango_Yield_Beacon_Upgraded_Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contango_Yield_Beacon_Upgraded_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Contango_Yield_Beacon_Upgraded_Event_Avg_Fields = {
  __typename?: "contango_yield_beacon_upgraded_event_avg_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate max on columns */
export type Contango_Yield_Beacon_Upgraded_Event_Max_Fields = {
  __typename?: "contango_yield_beacon_upgraded_event_max_fields";
  beacon?: Maybe<Scalars["String"]>;
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Contango_Yield_Beacon_Upgraded_Event_Min_Fields = {
  __typename?: "contango_yield_beacon_upgraded_event_min_fields";
  beacon?: Maybe<Scalars["String"]>;
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Contango_Yield_Beacon_Upgraded_Event_Stddev_Fields = {
  __typename?: "contango_yield_beacon_upgraded_event_stddev_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Contango_Yield_Beacon_Upgraded_Event_Stddev_Pop_Fields = {
  __typename?: "contango_yield_beacon_upgraded_event_stddev_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Contango_Yield_Beacon_Upgraded_Event_Stddev_Samp_Fields = {
  __typename?: "contango_yield_beacon_upgraded_event_stddev_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Contango_Yield_Beacon_Upgraded_Event_Sum_Fields = {
  __typename?: "contango_yield_beacon_upgraded_event_sum_fields";
  block_number?: Maybe<Scalars["numeric"]>;
  log_index?: Maybe<Scalars["numeric"]>;
};

/** aggregate var_pop on columns */
export type Contango_Yield_Beacon_Upgraded_Event_Var_Pop_Fields = {
  __typename?: "contango_yield_beacon_upgraded_event_var_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Contango_Yield_Beacon_Upgraded_Event_Var_Samp_Fields = {
  __typename?: "contango_yield_beacon_upgraded_event_var_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Contango_Yield_Beacon_Upgraded_Event_Variance_Fields = {
  __typename?: "contango_yield_beacon_upgraded_event_variance_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** select columns of table "contango_yield_upgraded_event" */
export enum Contango_Yield_Upgraded_Event_Select_Column {
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Id = "id",
  /** column name */
  Implementation = "implementation",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** Ordering options when selecting data from "contango_yield_upgraded_event". */
export type Contango_Yield_Upgraded_Event_Order_By = {
  block_hash?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  implementation?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/**
 * Boolean expression to filter rows from the table
 * "contango_yield_upgraded_event". All fields are combined with a logical 'AND'.
 */
export type Contango_Yield_Upgraded_Event_Bool_Exp = {
  _and?: InputMaybe<Array<Contango_Yield_Upgraded_Event_Bool_Exp>>;
  _not?: InputMaybe<Contango_Yield_Upgraded_Event_Bool_Exp>;
  _or?: InputMaybe<Array<Contango_Yield_Upgraded_Event_Bool_Exp>>;
  block_hash?: InputMaybe<String_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  implementation?: InputMaybe<String_Comparison_Exp>;
  log_index?: InputMaybe<Numeric_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "contango_yield_upgraded_event" */
export type Contango_Yield_Upgraded_Event = {
  __typename?: "contango_yield_upgraded_event";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id: Scalars["String"];
  implementation?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "contango_yield_upgraded_event" */
export type Contango_Yield_Upgraded_Event_Aggregate = {
  __typename?: "contango_yield_upgraded_event_aggregate";
  aggregate?: Maybe<Contango_Yield_Upgraded_Event_Aggregate_Fields>;
  nodes: Array<Contango_Yield_Upgraded_Event>;
};

/** aggregate fields of "contango_yield_upgraded_event" */
export type Contango_Yield_Upgraded_Event_Aggregate_Fields = {
  __typename?: "contango_yield_upgraded_event_aggregate_fields";
  avg?: Maybe<Contango_Yield_Upgraded_Event_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Contango_Yield_Upgraded_Event_Max_Fields>;
  min?: Maybe<Contango_Yield_Upgraded_Event_Min_Fields>;
  stddev?: Maybe<Contango_Yield_Upgraded_Event_Stddev_Fields>;
  stddev_pop?: Maybe<Contango_Yield_Upgraded_Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contango_Yield_Upgraded_Event_Stddev_Samp_Fields>;
  sum?: Maybe<Contango_Yield_Upgraded_Event_Sum_Fields>;
  var_pop?: Maybe<Contango_Yield_Upgraded_Event_Var_Pop_Fields>;
  var_samp?: Maybe<Contango_Yield_Upgraded_Event_Var_Samp_Fields>;
  variance?: Maybe<Contango_Yield_Upgraded_Event_Variance_Fields>;
};

/** aggregate fields of "contango_yield_upgraded_event" */
export type Contango_Yield_Upgraded_Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contango_Yield_Upgraded_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Contango_Yield_Upgraded_Event_Avg_Fields = {
  __typename?: "contango_yield_upgraded_event_avg_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate max on columns */
export type Contango_Yield_Upgraded_Event_Max_Fields = {
  __typename?: "contango_yield_upgraded_event_max_fields";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  implementation?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Contango_Yield_Upgraded_Event_Min_Fields = {
  __typename?: "contango_yield_upgraded_event_min_fields";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  implementation?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Contango_Yield_Upgraded_Event_Stddev_Fields = {
  __typename?: "contango_yield_upgraded_event_stddev_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Contango_Yield_Upgraded_Event_Stddev_Pop_Fields = {
  __typename?: "contango_yield_upgraded_event_stddev_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Contango_Yield_Upgraded_Event_Stddev_Samp_Fields = {
  __typename?: "contango_yield_upgraded_event_stddev_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Contango_Yield_Upgraded_Event_Sum_Fields = {
  __typename?: "contango_yield_upgraded_event_sum_fields";
  block_number?: Maybe<Scalars["numeric"]>;
  log_index?: Maybe<Scalars["numeric"]>;
};

/** aggregate var_pop on columns */
export type Contango_Yield_Upgraded_Event_Var_Pop_Fields = {
  __typename?: "contango_yield_upgraded_event_var_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Contango_Yield_Upgraded_Event_Var_Samp_Fields = {
  __typename?: "contango_yield_upgraded_event_var_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Contango_Yield_Upgraded_Event_Variance_Fields = {
  __typename?: "contango_yield_upgraded_event_variance_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** select columns of table "contract_traded_event" */
export enum Contract_Traded_Event_Select_Column {
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Fill = "fill",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  PositionId = "positionId",
  /** column name */
  Symbol = "symbol",
  /** column name */
  Trader = "trader",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** Ordering options when selecting data from "contract_traded_event". */
export type Contract_Traded_Event_Order_By = {
  block_hash?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  fill?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  positionId?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  trader?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "contract_traded_event". All fields are combined with a logical 'AND'. */
export type Contract_Traded_Event_Bool_Exp = {
  _and?: InputMaybe<Array<Contract_Traded_Event_Bool_Exp>>;
  _not?: InputMaybe<Contract_Traded_Event_Bool_Exp>;
  _or?: InputMaybe<Array<Contract_Traded_Event_Bool_Exp>>;
  block_hash?: InputMaybe<String_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  fill?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  log_index?: InputMaybe<Numeric_Comparison_Exp>;
  positionId?: InputMaybe<Numeric_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  trader?: InputMaybe<String_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars["jsonb"]>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars["jsonb"]>;
  _eq?: InputMaybe<Scalars["jsonb"]>;
  _gt?: InputMaybe<Scalars["jsonb"]>;
  _gte?: InputMaybe<Scalars["jsonb"]>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars["String"]>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars["String"]>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars["String"]>>;
  _in?: InputMaybe<Array<Scalars["jsonb"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["jsonb"]>;
  _lte?: InputMaybe<Scalars["jsonb"]>;
  _neq?: InputMaybe<Scalars["jsonb"]>;
  _nin?: InputMaybe<Array<Scalars["jsonb"]>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "contract_traded_event" */
export type Contract_Traded_Event = {
  __typename?: "contract_traded_event";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  fill?: Maybe<Scalars["jsonb"]>;
  id: Scalars["String"];
  log_index?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
  symbol?: Maybe<Scalars["String"]>;
  trader?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "contract_traded_event" */
export type Contract_Traded_EventFillArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "contract_traded_event" */
export type Contract_Traded_Event_Aggregate = {
  __typename?: "contract_traded_event_aggregate";
  aggregate?: Maybe<Contract_Traded_Event_Aggregate_Fields>;
  nodes: Array<Contract_Traded_Event>;
};

/** aggregate fields of "contract_traded_event" */
export type Contract_Traded_Event_Aggregate_Fields = {
  __typename?: "contract_traded_event_aggregate_fields";
  avg?: Maybe<Contract_Traded_Event_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Contract_Traded_Event_Max_Fields>;
  min?: Maybe<Contract_Traded_Event_Min_Fields>;
  stddev?: Maybe<Contract_Traded_Event_Stddev_Fields>;
  stddev_pop?: Maybe<Contract_Traded_Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contract_Traded_Event_Stddev_Samp_Fields>;
  sum?: Maybe<Contract_Traded_Event_Sum_Fields>;
  var_pop?: Maybe<Contract_Traded_Event_Var_Pop_Fields>;
  var_samp?: Maybe<Contract_Traded_Event_Var_Samp_Fields>;
  variance?: Maybe<Contract_Traded_Event_Variance_Fields>;
};

/** aggregate fields of "contract_traded_event" */
export type Contract_Traded_Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contract_Traded_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Contract_Traded_Event_Avg_Fields = {
  __typename?: "contract_traded_event_avg_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
};

/** aggregate max on columns */
export type Contract_Traded_Event_Max_Fields = {
  __typename?: "contract_traded_event_max_fields";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
  symbol?: Maybe<Scalars["String"]>;
  trader?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Contract_Traded_Event_Min_Fields = {
  __typename?: "contract_traded_event_min_fields";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
  symbol?: Maybe<Scalars["String"]>;
  trader?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Contract_Traded_Event_Stddev_Fields = {
  __typename?: "contract_traded_event_stddev_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Contract_Traded_Event_Stddev_Pop_Fields = {
  __typename?: "contract_traded_event_stddev_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Contract_Traded_Event_Stddev_Samp_Fields = {
  __typename?: "contract_traded_event_stddev_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Contract_Traded_Event_Sum_Fields = {
  __typename?: "contract_traded_event_sum_fields";
  block_number?: Maybe<Scalars["numeric"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
};

/** aggregate var_pop on columns */
export type Contract_Traded_Event_Var_Pop_Fields = {
  __typename?: "contract_traded_event_var_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Contract_Traded_Event_Var_Samp_Fields = {
  __typename?: "contract_traded_event_var_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Contract_Traded_Event_Variance_Fields = {
  __typename?: "contract_traded_event_variance_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
};

/** select columns of table "initialized_event" */
export enum Initialized_Event_Select_Column {
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  TransactionHash = "transaction_hash",
  /** column name */
  Version = "version",
}

/** Ordering options when selecting data from "initialized_event". */
export type Initialized_Event_Order_By = {
  block_hash?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "initialized_event". All fields are combined with a logical 'AND'. */
export type Initialized_Event_Bool_Exp = {
  _and?: InputMaybe<Array<Initialized_Event_Bool_Exp>>;
  _not?: InputMaybe<Initialized_Event_Bool_Exp>;
  _or?: InputMaybe<Array<Initialized_Event_Bool_Exp>>;
  block_hash?: InputMaybe<String_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  log_index?: InputMaybe<Numeric_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
  version?: InputMaybe<Numeric_Comparison_Exp>;
};

/** columns and relationships of "initialized_event" */
export type Initialized_Event = {
  __typename?: "initialized_event";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id: Scalars["String"];
  log_index?: Maybe<Scalars["numeric"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["numeric"]>;
};

/** aggregated selection of "initialized_event" */
export type Initialized_Event_Aggregate = {
  __typename?: "initialized_event_aggregate";
  aggregate?: Maybe<Initialized_Event_Aggregate_Fields>;
  nodes: Array<Initialized_Event>;
};

/** aggregate fields of "initialized_event" */
export type Initialized_Event_Aggregate_Fields = {
  __typename?: "initialized_event_aggregate_fields";
  avg?: Maybe<Initialized_Event_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Initialized_Event_Max_Fields>;
  min?: Maybe<Initialized_Event_Min_Fields>;
  stddev?: Maybe<Initialized_Event_Stddev_Fields>;
  stddev_pop?: Maybe<Initialized_Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Initialized_Event_Stddev_Samp_Fields>;
  sum?: Maybe<Initialized_Event_Sum_Fields>;
  var_pop?: Maybe<Initialized_Event_Var_Pop_Fields>;
  var_samp?: Maybe<Initialized_Event_Var_Samp_Fields>;
  variance?: Maybe<Initialized_Event_Variance_Fields>;
};

/** aggregate fields of "initialized_event" */
export type Initialized_Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Initialized_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Initialized_Event_Avg_Fields = {
  __typename?: "initialized_event_avg_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  version?: Maybe<Scalars["Float"]>;
};

/** aggregate max on columns */
export type Initialized_Event_Max_Fields = {
  __typename?: "initialized_event_max_fields";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["numeric"]>;
};

/** aggregate min on columns */
export type Initialized_Event_Min_Fields = {
  __typename?: "initialized_event_min_fields";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["numeric"]>;
};

/** aggregate stddev on columns */
export type Initialized_Event_Stddev_Fields = {
  __typename?: "initialized_event_stddev_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  version?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Initialized_Event_Stddev_Pop_Fields = {
  __typename?: "initialized_event_stddev_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  version?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Initialized_Event_Stddev_Samp_Fields = {
  __typename?: "initialized_event_stddev_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  version?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Initialized_Event_Sum_Fields = {
  __typename?: "initialized_event_sum_fields";
  block_number?: Maybe<Scalars["numeric"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  version?: Maybe<Scalars["numeric"]>;
};

/** aggregate var_pop on columns */
export type Initialized_Event_Var_Pop_Fields = {
  __typename?: "initialized_event_var_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  version?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Initialized_Event_Var_Samp_Fields = {
  __typename?: "initialized_event_var_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  version?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Initialized_Event_Variance_Fields = {
  __typename?: "initialized_event_variance_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  version?: Maybe<Scalars["Float"]>;
};

/** select columns of table "paused_event" */
export enum Paused_Event_Select_Column {
  /** column name */
  Account = "account",
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** Ordering options when selecting data from "paused_event". */
export type Paused_Event_Order_By = {
  account?: InputMaybe<Order_By>;
  block_hash?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "paused_event". All fields are combined with a logical 'AND'. */
export type Paused_Event_Bool_Exp = {
  _and?: InputMaybe<Array<Paused_Event_Bool_Exp>>;
  _not?: InputMaybe<Paused_Event_Bool_Exp>;
  _or?: InputMaybe<Array<Paused_Event_Bool_Exp>>;
  account?: InputMaybe<String_Comparison_Exp>;
  block_hash?: InputMaybe<String_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  log_index?: InputMaybe<Numeric_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "paused_event" */
export type Paused_Event = {
  __typename?: "paused_event";
  account?: Maybe<Scalars["String"]>;
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id: Scalars["String"];
  log_index?: Maybe<Scalars["numeric"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "paused_event" */
export type Paused_Event_Aggregate = {
  __typename?: "paused_event_aggregate";
  aggregate?: Maybe<Paused_Event_Aggregate_Fields>;
  nodes: Array<Paused_Event>;
};

/** aggregate fields of "paused_event" */
export type Paused_Event_Aggregate_Fields = {
  __typename?: "paused_event_aggregate_fields";
  avg?: Maybe<Paused_Event_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Paused_Event_Max_Fields>;
  min?: Maybe<Paused_Event_Min_Fields>;
  stddev?: Maybe<Paused_Event_Stddev_Fields>;
  stddev_pop?: Maybe<Paused_Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Paused_Event_Stddev_Samp_Fields>;
  sum?: Maybe<Paused_Event_Sum_Fields>;
  var_pop?: Maybe<Paused_Event_Var_Pop_Fields>;
  var_samp?: Maybe<Paused_Event_Var_Samp_Fields>;
  variance?: Maybe<Paused_Event_Variance_Fields>;
};

/** aggregate fields of "paused_event" */
export type Paused_Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Paused_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Paused_Event_Avg_Fields = {
  __typename?: "paused_event_avg_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate max on columns */
export type Paused_Event_Max_Fields = {
  __typename?: "paused_event_max_fields";
  account?: Maybe<Scalars["String"]>;
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Paused_Event_Min_Fields = {
  __typename?: "paused_event_min_fields";
  account?: Maybe<Scalars["String"]>;
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Paused_Event_Stddev_Fields = {
  __typename?: "paused_event_stddev_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Paused_Event_Stddev_Pop_Fields = {
  __typename?: "paused_event_stddev_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Paused_Event_Stddev_Samp_Fields = {
  __typename?: "paused_event_stddev_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Paused_Event_Sum_Fields = {
  __typename?: "paused_event_sum_fields";
  block_number?: Maybe<Scalars["numeric"]>;
  log_index?: Maybe<Scalars["numeric"]>;
};

/** aggregate var_pop on columns */
export type Paused_Event_Var_Pop_Fields = {
  __typename?: "paused_event_var_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Paused_Event_Var_Samp_Fields = {
  __typename?: "paused_event_var_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Paused_Event_Variance_Fields = {
  __typename?: "paused_event_variance_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** select columns of table "position_closed_event" */
export enum Position_Closed_Event_Select_Column {
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  ClosedCost = "closedCost",
  /** column name */
  ClosedQuantity = "closedQuantity",
  /** column name */
  Collateral = "collateral",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  PositionId = "positionId",
  /** column name */
  RealisedPnL = "realisedPnL",
  /** column name */
  Symbol = "symbol",
  /** column name */
  TotalFees = "totalFees",
  /** column name */
  Trader = "trader",
  /** column name */
  TransactionHash = "transaction_hash",
  /** column name */
  TxFees = "txFees",
}

/** Ordering options when selecting data from "position_closed_event". */
export type Position_Closed_Event_Order_By = {
  block_hash?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  closedCost?: InputMaybe<Order_By>;
  closedQuantity?: InputMaybe<Order_By>;
  collateral?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  positionId?: InputMaybe<Order_By>;
  realisedPnL?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  totalFees?: InputMaybe<Order_By>;
  trader?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  txFees?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "position_closed_event". All fields are combined with a logical 'AND'. */
export type Position_Closed_Event_Bool_Exp = {
  _and?: InputMaybe<Array<Position_Closed_Event_Bool_Exp>>;
  _not?: InputMaybe<Position_Closed_Event_Bool_Exp>;
  _or?: InputMaybe<Array<Position_Closed_Event_Bool_Exp>>;
  block_hash?: InputMaybe<String_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  closedCost?: InputMaybe<Numeric_Comparison_Exp>;
  closedQuantity?: InputMaybe<Numeric_Comparison_Exp>;
  collateral?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  log_index?: InputMaybe<Numeric_Comparison_Exp>;
  positionId?: InputMaybe<Numeric_Comparison_Exp>;
  realisedPnL?: InputMaybe<Numeric_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  totalFees?: InputMaybe<Numeric_Comparison_Exp>;
  trader?: InputMaybe<String_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
  txFees?: InputMaybe<Numeric_Comparison_Exp>;
};

/** columns and relationships of "position_closed_event" */
export type Position_Closed_Event = {
  __typename?: "position_closed_event";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  closedCost?: Maybe<Scalars["numeric"]>;
  closedQuantity?: Maybe<Scalars["numeric"]>;
  collateral?: Maybe<Scalars["numeric"]>;
  id: Scalars["String"];
  log_index?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
  realisedPnL?: Maybe<Scalars["numeric"]>;
  symbol?: Maybe<Scalars["String"]>;
  totalFees?: Maybe<Scalars["numeric"]>;
  trader?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
  txFees?: Maybe<Scalars["numeric"]>;
};

/** aggregated selection of "position_closed_event" */
export type Position_Closed_Event_Aggregate = {
  __typename?: "position_closed_event_aggregate";
  aggregate?: Maybe<Position_Closed_Event_Aggregate_Fields>;
  nodes: Array<Position_Closed_Event>;
};

/** aggregate fields of "position_closed_event" */
export type Position_Closed_Event_Aggregate_Fields = {
  __typename?: "position_closed_event_aggregate_fields";
  avg?: Maybe<Position_Closed_Event_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Position_Closed_Event_Max_Fields>;
  min?: Maybe<Position_Closed_Event_Min_Fields>;
  stddev?: Maybe<Position_Closed_Event_Stddev_Fields>;
  stddev_pop?: Maybe<Position_Closed_Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Position_Closed_Event_Stddev_Samp_Fields>;
  sum?: Maybe<Position_Closed_Event_Sum_Fields>;
  var_pop?: Maybe<Position_Closed_Event_Var_Pop_Fields>;
  var_samp?: Maybe<Position_Closed_Event_Var_Samp_Fields>;
  variance?: Maybe<Position_Closed_Event_Variance_Fields>;
};

/** aggregate fields of "position_closed_event" */
export type Position_Closed_Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Position_Closed_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Position_Closed_Event_Avg_Fields = {
  __typename?: "position_closed_event_avg_fields";
  block_number?: Maybe<Scalars["Float"]>;
  closedCost?: Maybe<Scalars["Float"]>;
  closedQuantity?: Maybe<Scalars["Float"]>;
  collateral?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  realisedPnL?: Maybe<Scalars["Float"]>;
  totalFees?: Maybe<Scalars["Float"]>;
  txFees?: Maybe<Scalars["Float"]>;
};

/** aggregate max on columns */
export type Position_Closed_Event_Max_Fields = {
  __typename?: "position_closed_event_max_fields";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  closedCost?: Maybe<Scalars["numeric"]>;
  closedQuantity?: Maybe<Scalars["numeric"]>;
  collateral?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
  realisedPnL?: Maybe<Scalars["numeric"]>;
  symbol?: Maybe<Scalars["String"]>;
  totalFees?: Maybe<Scalars["numeric"]>;
  trader?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
  txFees?: Maybe<Scalars["numeric"]>;
};

/** aggregate min on columns */
export type Position_Closed_Event_Min_Fields = {
  __typename?: "position_closed_event_min_fields";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  closedCost?: Maybe<Scalars["numeric"]>;
  closedQuantity?: Maybe<Scalars["numeric"]>;
  collateral?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
  realisedPnL?: Maybe<Scalars["numeric"]>;
  symbol?: Maybe<Scalars["String"]>;
  totalFees?: Maybe<Scalars["numeric"]>;
  trader?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
  txFees?: Maybe<Scalars["numeric"]>;
};

/** aggregate stddev on columns */
export type Position_Closed_Event_Stddev_Fields = {
  __typename?: "position_closed_event_stddev_fields";
  block_number?: Maybe<Scalars["Float"]>;
  closedCost?: Maybe<Scalars["Float"]>;
  closedQuantity?: Maybe<Scalars["Float"]>;
  collateral?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  realisedPnL?: Maybe<Scalars["Float"]>;
  totalFees?: Maybe<Scalars["Float"]>;
  txFees?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Position_Closed_Event_Stddev_Pop_Fields = {
  __typename?: "position_closed_event_stddev_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  closedCost?: Maybe<Scalars["Float"]>;
  closedQuantity?: Maybe<Scalars["Float"]>;
  collateral?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  realisedPnL?: Maybe<Scalars["Float"]>;
  totalFees?: Maybe<Scalars["Float"]>;
  txFees?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Position_Closed_Event_Stddev_Samp_Fields = {
  __typename?: "position_closed_event_stddev_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  closedCost?: Maybe<Scalars["Float"]>;
  closedQuantity?: Maybe<Scalars["Float"]>;
  collateral?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  realisedPnL?: Maybe<Scalars["Float"]>;
  totalFees?: Maybe<Scalars["Float"]>;
  txFees?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Position_Closed_Event_Sum_Fields = {
  __typename?: "position_closed_event_sum_fields";
  block_number?: Maybe<Scalars["numeric"]>;
  closedCost?: Maybe<Scalars["numeric"]>;
  closedQuantity?: Maybe<Scalars["numeric"]>;
  collateral?: Maybe<Scalars["numeric"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
  realisedPnL?: Maybe<Scalars["numeric"]>;
  totalFees?: Maybe<Scalars["numeric"]>;
  txFees?: Maybe<Scalars["numeric"]>;
};

/** aggregate var_pop on columns */
export type Position_Closed_Event_Var_Pop_Fields = {
  __typename?: "position_closed_event_var_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  closedCost?: Maybe<Scalars["Float"]>;
  closedQuantity?: Maybe<Scalars["Float"]>;
  collateral?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  realisedPnL?: Maybe<Scalars["Float"]>;
  totalFees?: Maybe<Scalars["Float"]>;
  txFees?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Position_Closed_Event_Var_Samp_Fields = {
  __typename?: "position_closed_event_var_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  closedCost?: Maybe<Scalars["Float"]>;
  closedQuantity?: Maybe<Scalars["Float"]>;
  collateral?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  realisedPnL?: Maybe<Scalars["Float"]>;
  totalFees?: Maybe<Scalars["Float"]>;
  txFees?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Position_Closed_Event_Variance_Fields = {
  __typename?: "position_closed_event_variance_fields";
  block_number?: Maybe<Scalars["Float"]>;
  closedCost?: Maybe<Scalars["Float"]>;
  closedQuantity?: Maybe<Scalars["Float"]>;
  collateral?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  realisedPnL?: Maybe<Scalars["Float"]>;
  totalFees?: Maybe<Scalars["Float"]>;
  txFees?: Maybe<Scalars["Float"]>;
};

/** select columns of table "position_delivered_event" */
export enum Position_Delivered_Event_Select_Column {
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  DeliveredQuantity = "deliveredQuantity",
  /** column name */
  DeliveryCost = "deliveryCost",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  PositionId = "positionId",
  /** column name */
  Symbol = "symbol",
  /** column name */
  To = "to",
  /** column name */
  TotalFees = "totalFees",
  /** column name */
  Trader = "trader",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** Ordering options when selecting data from "position_delivered_event". */
export type Position_Delivered_Event_Order_By = {
  block_hash?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  deliveredQuantity?: InputMaybe<Order_By>;
  deliveryCost?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  positionId?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
  totalFees?: InputMaybe<Order_By>;
  trader?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "position_delivered_event". All fields are combined with a logical 'AND'. */
export type Position_Delivered_Event_Bool_Exp = {
  _and?: InputMaybe<Array<Position_Delivered_Event_Bool_Exp>>;
  _not?: InputMaybe<Position_Delivered_Event_Bool_Exp>;
  _or?: InputMaybe<Array<Position_Delivered_Event_Bool_Exp>>;
  block_hash?: InputMaybe<String_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  deliveredQuantity?: InputMaybe<Numeric_Comparison_Exp>;
  deliveryCost?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  log_index?: InputMaybe<Numeric_Comparison_Exp>;
  positionId?: InputMaybe<Numeric_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  to?: InputMaybe<String_Comparison_Exp>;
  totalFees?: InputMaybe<Numeric_Comparison_Exp>;
  trader?: InputMaybe<String_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "position_delivered_event" */
export type Position_Delivered_Event = {
  __typename?: "position_delivered_event";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  deliveredQuantity?: Maybe<Scalars["numeric"]>;
  deliveryCost?: Maybe<Scalars["numeric"]>;
  id: Scalars["String"];
  log_index?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
  symbol?: Maybe<Scalars["String"]>;
  to?: Maybe<Scalars["String"]>;
  totalFees?: Maybe<Scalars["numeric"]>;
  trader?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "position_delivered_event" */
export type Position_Delivered_Event_Aggregate = {
  __typename?: "position_delivered_event_aggregate";
  aggregate?: Maybe<Position_Delivered_Event_Aggregate_Fields>;
  nodes: Array<Position_Delivered_Event>;
};

/** aggregate fields of "position_delivered_event" */
export type Position_Delivered_Event_Aggregate_Fields = {
  __typename?: "position_delivered_event_aggregate_fields";
  avg?: Maybe<Position_Delivered_Event_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Position_Delivered_Event_Max_Fields>;
  min?: Maybe<Position_Delivered_Event_Min_Fields>;
  stddev?: Maybe<Position_Delivered_Event_Stddev_Fields>;
  stddev_pop?: Maybe<Position_Delivered_Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Position_Delivered_Event_Stddev_Samp_Fields>;
  sum?: Maybe<Position_Delivered_Event_Sum_Fields>;
  var_pop?: Maybe<Position_Delivered_Event_Var_Pop_Fields>;
  var_samp?: Maybe<Position_Delivered_Event_Var_Samp_Fields>;
  variance?: Maybe<Position_Delivered_Event_Variance_Fields>;
};

/** aggregate fields of "position_delivered_event" */
export type Position_Delivered_Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Position_Delivered_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Position_Delivered_Event_Avg_Fields = {
  __typename?: "position_delivered_event_avg_fields";
  block_number?: Maybe<Scalars["Float"]>;
  deliveredQuantity?: Maybe<Scalars["Float"]>;
  deliveryCost?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  totalFees?: Maybe<Scalars["Float"]>;
};

/** aggregate max on columns */
export type Position_Delivered_Event_Max_Fields = {
  __typename?: "position_delivered_event_max_fields";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  deliveredQuantity?: Maybe<Scalars["numeric"]>;
  deliveryCost?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
  symbol?: Maybe<Scalars["String"]>;
  to?: Maybe<Scalars["String"]>;
  totalFees?: Maybe<Scalars["numeric"]>;
  trader?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Position_Delivered_Event_Min_Fields = {
  __typename?: "position_delivered_event_min_fields";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  deliveredQuantity?: Maybe<Scalars["numeric"]>;
  deliveryCost?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
  symbol?: Maybe<Scalars["String"]>;
  to?: Maybe<Scalars["String"]>;
  totalFees?: Maybe<Scalars["numeric"]>;
  trader?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Position_Delivered_Event_Stddev_Fields = {
  __typename?: "position_delivered_event_stddev_fields";
  block_number?: Maybe<Scalars["Float"]>;
  deliveredQuantity?: Maybe<Scalars["Float"]>;
  deliveryCost?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  totalFees?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Position_Delivered_Event_Stddev_Pop_Fields = {
  __typename?: "position_delivered_event_stddev_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  deliveredQuantity?: Maybe<Scalars["Float"]>;
  deliveryCost?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  totalFees?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Position_Delivered_Event_Stddev_Samp_Fields = {
  __typename?: "position_delivered_event_stddev_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  deliveredQuantity?: Maybe<Scalars["Float"]>;
  deliveryCost?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  totalFees?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Position_Delivered_Event_Sum_Fields = {
  __typename?: "position_delivered_event_sum_fields";
  block_number?: Maybe<Scalars["numeric"]>;
  deliveredQuantity?: Maybe<Scalars["numeric"]>;
  deliveryCost?: Maybe<Scalars["numeric"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
  totalFees?: Maybe<Scalars["numeric"]>;
};

/** aggregate var_pop on columns */
export type Position_Delivered_Event_Var_Pop_Fields = {
  __typename?: "position_delivered_event_var_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  deliveredQuantity?: Maybe<Scalars["Float"]>;
  deliveryCost?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  totalFees?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Position_Delivered_Event_Var_Samp_Fields = {
  __typename?: "position_delivered_event_var_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  deliveredQuantity?: Maybe<Scalars["Float"]>;
  deliveryCost?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  totalFees?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Position_Delivered_Event_Variance_Fields = {
  __typename?: "position_delivered_event_variance_fields";
  block_number?: Maybe<Scalars["Float"]>;
  deliveredQuantity?: Maybe<Scalars["Float"]>;
  deliveryCost?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  totalFees?: Maybe<Scalars["Float"]>;
};

/** select columns of table "position_liquidated_event" */
export enum Position_Liquidated_Event_Select_Column {
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Collateral = "collateral",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  OpenCost = "openCost",
  /** column name */
  OpenQuantity = "openQuantity",
  /** column name */
  PositionId = "positionId",
  /** column name */
  RealisedPnL = "realisedPnL",
  /** column name */
  Symbol = "symbol",
  /** column name */
  Trader = "trader",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** Ordering options when selecting data from "position_liquidated_event". */
export type Position_Liquidated_Event_Order_By = {
  block_hash?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  collateral?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  openCost?: InputMaybe<Order_By>;
  openQuantity?: InputMaybe<Order_By>;
  positionId?: InputMaybe<Order_By>;
  realisedPnL?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  trader?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "position_liquidated_event". All fields are combined with a logical 'AND'. */
export type Position_Liquidated_Event_Bool_Exp = {
  _and?: InputMaybe<Array<Position_Liquidated_Event_Bool_Exp>>;
  _not?: InputMaybe<Position_Liquidated_Event_Bool_Exp>;
  _or?: InputMaybe<Array<Position_Liquidated_Event_Bool_Exp>>;
  block_hash?: InputMaybe<String_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  collateral?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  log_index?: InputMaybe<Numeric_Comparison_Exp>;
  openCost?: InputMaybe<Numeric_Comparison_Exp>;
  openQuantity?: InputMaybe<Numeric_Comparison_Exp>;
  positionId?: InputMaybe<Numeric_Comparison_Exp>;
  realisedPnL?: InputMaybe<Numeric_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  trader?: InputMaybe<String_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "position_liquidated_event" */
export type Position_Liquidated_Event = {
  __typename?: "position_liquidated_event";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  collateral?: Maybe<Scalars["numeric"]>;
  id: Scalars["String"];
  log_index?: Maybe<Scalars["numeric"]>;
  openCost?: Maybe<Scalars["numeric"]>;
  openQuantity?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
  realisedPnL?: Maybe<Scalars["numeric"]>;
  symbol?: Maybe<Scalars["String"]>;
  trader?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "position_liquidated_event" */
export type Position_Liquidated_Event_Aggregate = {
  __typename?: "position_liquidated_event_aggregate";
  aggregate?: Maybe<Position_Liquidated_Event_Aggregate_Fields>;
  nodes: Array<Position_Liquidated_Event>;
};

/** aggregate fields of "position_liquidated_event" */
export type Position_Liquidated_Event_Aggregate_Fields = {
  __typename?: "position_liquidated_event_aggregate_fields";
  avg?: Maybe<Position_Liquidated_Event_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Position_Liquidated_Event_Max_Fields>;
  min?: Maybe<Position_Liquidated_Event_Min_Fields>;
  stddev?: Maybe<Position_Liquidated_Event_Stddev_Fields>;
  stddev_pop?: Maybe<Position_Liquidated_Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Position_Liquidated_Event_Stddev_Samp_Fields>;
  sum?: Maybe<Position_Liquidated_Event_Sum_Fields>;
  var_pop?: Maybe<Position_Liquidated_Event_Var_Pop_Fields>;
  var_samp?: Maybe<Position_Liquidated_Event_Var_Samp_Fields>;
  variance?: Maybe<Position_Liquidated_Event_Variance_Fields>;
};

/** aggregate fields of "position_liquidated_event" */
export type Position_Liquidated_Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Position_Liquidated_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Position_Liquidated_Event_Avg_Fields = {
  __typename?: "position_liquidated_event_avg_fields";
  block_number?: Maybe<Scalars["Float"]>;
  collateral?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  openCost?: Maybe<Scalars["Float"]>;
  openQuantity?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  realisedPnL?: Maybe<Scalars["Float"]>;
};

/** aggregate max on columns */
export type Position_Liquidated_Event_Max_Fields = {
  __typename?: "position_liquidated_event_max_fields";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  collateral?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  openCost?: Maybe<Scalars["numeric"]>;
  openQuantity?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
  realisedPnL?: Maybe<Scalars["numeric"]>;
  symbol?: Maybe<Scalars["String"]>;
  trader?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Position_Liquidated_Event_Min_Fields = {
  __typename?: "position_liquidated_event_min_fields";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  collateral?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  openCost?: Maybe<Scalars["numeric"]>;
  openQuantity?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
  realisedPnL?: Maybe<Scalars["numeric"]>;
  symbol?: Maybe<Scalars["String"]>;
  trader?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Position_Liquidated_Event_Stddev_Fields = {
  __typename?: "position_liquidated_event_stddev_fields";
  block_number?: Maybe<Scalars["Float"]>;
  collateral?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  openCost?: Maybe<Scalars["Float"]>;
  openQuantity?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  realisedPnL?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Position_Liquidated_Event_Stddev_Pop_Fields = {
  __typename?: "position_liquidated_event_stddev_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  collateral?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  openCost?: Maybe<Scalars["Float"]>;
  openQuantity?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  realisedPnL?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Position_Liquidated_Event_Stddev_Samp_Fields = {
  __typename?: "position_liquidated_event_stddev_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  collateral?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  openCost?: Maybe<Scalars["Float"]>;
  openQuantity?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  realisedPnL?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Position_Liquidated_Event_Sum_Fields = {
  __typename?: "position_liquidated_event_sum_fields";
  block_number?: Maybe<Scalars["numeric"]>;
  collateral?: Maybe<Scalars["numeric"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  openCost?: Maybe<Scalars["numeric"]>;
  openQuantity?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
  realisedPnL?: Maybe<Scalars["numeric"]>;
};

/** aggregate var_pop on columns */
export type Position_Liquidated_Event_Var_Pop_Fields = {
  __typename?: "position_liquidated_event_var_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  collateral?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  openCost?: Maybe<Scalars["Float"]>;
  openQuantity?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  realisedPnL?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Position_Liquidated_Event_Var_Samp_Fields = {
  __typename?: "position_liquidated_event_var_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  collateral?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  openCost?: Maybe<Scalars["Float"]>;
  openQuantity?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  realisedPnL?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Position_Liquidated_Event_Variance_Fields = {
  __typename?: "position_liquidated_event_variance_fields";
  block_number?: Maybe<Scalars["Float"]>;
  collateral?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  openCost?: Maybe<Scalars["Float"]>;
  openQuantity?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  realisedPnL?: Maybe<Scalars["Float"]>;
};

/** select columns of table "position_upserted_event" */
export enum Position_Upserted_Event_Select_Column {
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Collateral = "collateral",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  OpenCost = "openCost",
  /** column name */
  OpenQuantity = "openQuantity",
  /** column name */
  PositionId = "positionId",
  /** column name */
  RealisedPnL = "realisedPnL",
  /** column name */
  Symbol = "symbol",
  /** column name */
  TotalFees = "totalFees",
  /** column name */
  Trader = "trader",
  /** column name */
  TransactionHash = "transaction_hash",
  /** column name */
  TxFees = "txFees",
}

/** Ordering options when selecting data from "position_upserted_event". */
export type Position_Upserted_Event_Order_By = {
  block_hash?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  collateral?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  openCost?: InputMaybe<Order_By>;
  openQuantity?: InputMaybe<Order_By>;
  positionId?: InputMaybe<Order_By>;
  realisedPnL?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  totalFees?: InputMaybe<Order_By>;
  trader?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  txFees?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "position_upserted_event". All fields are combined with a logical 'AND'. */
export type Position_Upserted_Event_Bool_Exp = {
  _and?: InputMaybe<Array<Position_Upserted_Event_Bool_Exp>>;
  _not?: InputMaybe<Position_Upserted_Event_Bool_Exp>;
  _or?: InputMaybe<Array<Position_Upserted_Event_Bool_Exp>>;
  block_hash?: InputMaybe<String_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  collateral?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  log_index?: InputMaybe<Numeric_Comparison_Exp>;
  openCost?: InputMaybe<Numeric_Comparison_Exp>;
  openQuantity?: InputMaybe<Numeric_Comparison_Exp>;
  positionId?: InputMaybe<Numeric_Comparison_Exp>;
  realisedPnL?: InputMaybe<Numeric_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  totalFees?: InputMaybe<Numeric_Comparison_Exp>;
  trader?: InputMaybe<String_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
  txFees?: InputMaybe<Numeric_Comparison_Exp>;
};

/** columns and relationships of "position_upserted_event" */
export type Position_Upserted_Event = {
  __typename?: "position_upserted_event";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  collateral?: Maybe<Scalars["numeric"]>;
  id: Scalars["String"];
  log_index?: Maybe<Scalars["numeric"]>;
  openCost?: Maybe<Scalars["numeric"]>;
  openQuantity?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
  realisedPnL?: Maybe<Scalars["numeric"]>;
  symbol?: Maybe<Scalars["String"]>;
  totalFees?: Maybe<Scalars["numeric"]>;
  trader?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
  txFees?: Maybe<Scalars["numeric"]>;
};

/** aggregated selection of "position_upserted_event" */
export type Position_Upserted_Event_Aggregate = {
  __typename?: "position_upserted_event_aggregate";
  aggregate?: Maybe<Position_Upserted_Event_Aggregate_Fields>;
  nodes: Array<Position_Upserted_Event>;
};

/** aggregate fields of "position_upserted_event" */
export type Position_Upserted_Event_Aggregate_Fields = {
  __typename?: "position_upserted_event_aggregate_fields";
  avg?: Maybe<Position_Upserted_Event_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Position_Upserted_Event_Max_Fields>;
  min?: Maybe<Position_Upserted_Event_Min_Fields>;
  stddev?: Maybe<Position_Upserted_Event_Stddev_Fields>;
  stddev_pop?: Maybe<Position_Upserted_Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Position_Upserted_Event_Stddev_Samp_Fields>;
  sum?: Maybe<Position_Upserted_Event_Sum_Fields>;
  var_pop?: Maybe<Position_Upserted_Event_Var_Pop_Fields>;
  var_samp?: Maybe<Position_Upserted_Event_Var_Samp_Fields>;
  variance?: Maybe<Position_Upserted_Event_Variance_Fields>;
};

/** aggregate fields of "position_upserted_event" */
export type Position_Upserted_Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Position_Upserted_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Position_Upserted_Event_Avg_Fields = {
  __typename?: "position_upserted_event_avg_fields";
  block_number?: Maybe<Scalars["Float"]>;
  collateral?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  openCost?: Maybe<Scalars["Float"]>;
  openQuantity?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  realisedPnL?: Maybe<Scalars["Float"]>;
  totalFees?: Maybe<Scalars["Float"]>;
  txFees?: Maybe<Scalars["Float"]>;
};

/** aggregate max on columns */
export type Position_Upserted_Event_Max_Fields = {
  __typename?: "position_upserted_event_max_fields";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  collateral?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  openCost?: Maybe<Scalars["numeric"]>;
  openQuantity?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
  realisedPnL?: Maybe<Scalars["numeric"]>;
  symbol?: Maybe<Scalars["String"]>;
  totalFees?: Maybe<Scalars["numeric"]>;
  trader?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
  txFees?: Maybe<Scalars["numeric"]>;
};

/** aggregate min on columns */
export type Position_Upserted_Event_Min_Fields = {
  __typename?: "position_upserted_event_min_fields";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  collateral?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  openCost?: Maybe<Scalars["numeric"]>;
  openQuantity?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
  realisedPnL?: Maybe<Scalars["numeric"]>;
  symbol?: Maybe<Scalars["String"]>;
  totalFees?: Maybe<Scalars["numeric"]>;
  trader?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
  txFees?: Maybe<Scalars["numeric"]>;
};

/** aggregate stddev on columns */
export type Position_Upserted_Event_Stddev_Fields = {
  __typename?: "position_upserted_event_stddev_fields";
  block_number?: Maybe<Scalars["Float"]>;
  collateral?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  openCost?: Maybe<Scalars["Float"]>;
  openQuantity?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  realisedPnL?: Maybe<Scalars["Float"]>;
  totalFees?: Maybe<Scalars["Float"]>;
  txFees?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Position_Upserted_Event_Stddev_Pop_Fields = {
  __typename?: "position_upserted_event_stddev_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  collateral?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  openCost?: Maybe<Scalars["Float"]>;
  openQuantity?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  realisedPnL?: Maybe<Scalars["Float"]>;
  totalFees?: Maybe<Scalars["Float"]>;
  txFees?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Position_Upserted_Event_Stddev_Samp_Fields = {
  __typename?: "position_upserted_event_stddev_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  collateral?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  openCost?: Maybe<Scalars["Float"]>;
  openQuantity?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  realisedPnL?: Maybe<Scalars["Float"]>;
  totalFees?: Maybe<Scalars["Float"]>;
  txFees?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Position_Upserted_Event_Sum_Fields = {
  __typename?: "position_upserted_event_sum_fields";
  block_number?: Maybe<Scalars["numeric"]>;
  collateral?: Maybe<Scalars["numeric"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  openCost?: Maybe<Scalars["numeric"]>;
  openQuantity?: Maybe<Scalars["numeric"]>;
  positionId?: Maybe<Scalars["numeric"]>;
  realisedPnL?: Maybe<Scalars["numeric"]>;
  totalFees?: Maybe<Scalars["numeric"]>;
  txFees?: Maybe<Scalars["numeric"]>;
};

/** aggregate var_pop on columns */
export type Position_Upserted_Event_Var_Pop_Fields = {
  __typename?: "position_upserted_event_var_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  collateral?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  openCost?: Maybe<Scalars["Float"]>;
  openQuantity?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  realisedPnL?: Maybe<Scalars["Float"]>;
  totalFees?: Maybe<Scalars["Float"]>;
  txFees?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Position_Upserted_Event_Var_Samp_Fields = {
  __typename?: "position_upserted_event_var_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  collateral?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  openCost?: Maybe<Scalars["Float"]>;
  openQuantity?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  realisedPnL?: Maybe<Scalars["Float"]>;
  totalFees?: Maybe<Scalars["Float"]>;
  txFees?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Position_Upserted_Event_Variance_Fields = {
  __typename?: "position_upserted_event_variance_fields";
  block_number?: Maybe<Scalars["Float"]>;
  collateral?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
  openCost?: Maybe<Scalars["Float"]>;
  openQuantity?: Maybe<Scalars["Float"]>;
  positionId?: Maybe<Scalars["Float"]>;
  realisedPnL?: Maybe<Scalars["Float"]>;
  totalFees?: Maybe<Scalars["Float"]>;
  txFees?: Maybe<Scalars["Float"]>;
};

/** select columns of table "role_admin_changed_event" */
export enum Role_Admin_Changed_Event_Select_Column {
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  NewAdminRole = "newAdminRole",
  /** column name */
  PreviousAdminRole = "previousAdminRole",
  /** column name */
  Role = "role",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** Ordering options when selecting data from "role_admin_changed_event". */
export type Role_Admin_Changed_Event_Order_By = {
  block_hash?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  newAdminRole?: InputMaybe<Order_By>;
  previousAdminRole?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "role_admin_changed_event". All fields are combined with a logical 'AND'. */
export type Role_Admin_Changed_Event_Bool_Exp = {
  _and?: InputMaybe<Array<Role_Admin_Changed_Event_Bool_Exp>>;
  _not?: InputMaybe<Role_Admin_Changed_Event_Bool_Exp>;
  _or?: InputMaybe<Array<Role_Admin_Changed_Event_Bool_Exp>>;
  block_hash?: InputMaybe<String_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  log_index?: InputMaybe<Numeric_Comparison_Exp>;
  newAdminRole?: InputMaybe<String_Comparison_Exp>;
  previousAdminRole?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "role_admin_changed_event" */
export type Role_Admin_Changed_Event = {
  __typename?: "role_admin_changed_event";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id: Scalars["String"];
  log_index?: Maybe<Scalars["numeric"]>;
  newAdminRole?: Maybe<Scalars["String"]>;
  previousAdminRole?: Maybe<Scalars["String"]>;
  role?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "role_admin_changed_event" */
export type Role_Admin_Changed_Event_Aggregate = {
  __typename?: "role_admin_changed_event_aggregate";
  aggregate?: Maybe<Role_Admin_Changed_Event_Aggregate_Fields>;
  nodes: Array<Role_Admin_Changed_Event>;
};

/** aggregate fields of "role_admin_changed_event" */
export type Role_Admin_Changed_Event_Aggregate_Fields = {
  __typename?: "role_admin_changed_event_aggregate_fields";
  avg?: Maybe<Role_Admin_Changed_Event_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Role_Admin_Changed_Event_Max_Fields>;
  min?: Maybe<Role_Admin_Changed_Event_Min_Fields>;
  stddev?: Maybe<Role_Admin_Changed_Event_Stddev_Fields>;
  stddev_pop?: Maybe<Role_Admin_Changed_Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Role_Admin_Changed_Event_Stddev_Samp_Fields>;
  sum?: Maybe<Role_Admin_Changed_Event_Sum_Fields>;
  var_pop?: Maybe<Role_Admin_Changed_Event_Var_Pop_Fields>;
  var_samp?: Maybe<Role_Admin_Changed_Event_Var_Samp_Fields>;
  variance?: Maybe<Role_Admin_Changed_Event_Variance_Fields>;
};

/** aggregate fields of "role_admin_changed_event" */
export type Role_Admin_Changed_Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Role_Admin_Changed_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Role_Admin_Changed_Event_Avg_Fields = {
  __typename?: "role_admin_changed_event_avg_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate max on columns */
export type Role_Admin_Changed_Event_Max_Fields = {
  __typename?: "role_admin_changed_event_max_fields";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  newAdminRole?: Maybe<Scalars["String"]>;
  previousAdminRole?: Maybe<Scalars["String"]>;
  role?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Role_Admin_Changed_Event_Min_Fields = {
  __typename?: "role_admin_changed_event_min_fields";
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  newAdminRole?: Maybe<Scalars["String"]>;
  previousAdminRole?: Maybe<Scalars["String"]>;
  role?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Role_Admin_Changed_Event_Stddev_Fields = {
  __typename?: "role_admin_changed_event_stddev_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Role_Admin_Changed_Event_Stddev_Pop_Fields = {
  __typename?: "role_admin_changed_event_stddev_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Role_Admin_Changed_Event_Stddev_Samp_Fields = {
  __typename?: "role_admin_changed_event_stddev_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Role_Admin_Changed_Event_Sum_Fields = {
  __typename?: "role_admin_changed_event_sum_fields";
  block_number?: Maybe<Scalars["numeric"]>;
  log_index?: Maybe<Scalars["numeric"]>;
};

/** aggregate var_pop on columns */
export type Role_Admin_Changed_Event_Var_Pop_Fields = {
  __typename?: "role_admin_changed_event_var_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Role_Admin_Changed_Event_Var_Samp_Fields = {
  __typename?: "role_admin_changed_event_var_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Role_Admin_Changed_Event_Variance_Fields = {
  __typename?: "role_admin_changed_event_variance_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** select columns of table "role_granted_event" */
export enum Role_Granted_Event_Select_Column {
  /** column name */
  Account = "account",
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  Role = "role",
  /** column name */
  Sender = "sender",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** Ordering options when selecting data from "role_granted_event". */
export type Role_Granted_Event_Order_By = {
  account?: InputMaybe<Order_By>;
  block_hash?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "role_granted_event". All fields are combined with a logical 'AND'. */
export type Role_Granted_Event_Bool_Exp = {
  _and?: InputMaybe<Array<Role_Granted_Event_Bool_Exp>>;
  _not?: InputMaybe<Role_Granted_Event_Bool_Exp>;
  _or?: InputMaybe<Array<Role_Granted_Event_Bool_Exp>>;
  account?: InputMaybe<String_Comparison_Exp>;
  block_hash?: InputMaybe<String_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  log_index?: InputMaybe<Numeric_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  sender?: InputMaybe<String_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "role_granted_event" */
export type Role_Granted_Event = {
  __typename?: "role_granted_event";
  account?: Maybe<Scalars["String"]>;
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id: Scalars["String"];
  log_index?: Maybe<Scalars["numeric"]>;
  role?: Maybe<Scalars["String"]>;
  sender?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "role_granted_event" */
export type Role_Granted_Event_Aggregate = {
  __typename?: "role_granted_event_aggregate";
  aggregate?: Maybe<Role_Granted_Event_Aggregate_Fields>;
  nodes: Array<Role_Granted_Event>;
};

/** aggregate fields of "role_granted_event" */
export type Role_Granted_Event_Aggregate_Fields = {
  __typename?: "role_granted_event_aggregate_fields";
  avg?: Maybe<Role_Granted_Event_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Role_Granted_Event_Max_Fields>;
  min?: Maybe<Role_Granted_Event_Min_Fields>;
  stddev?: Maybe<Role_Granted_Event_Stddev_Fields>;
  stddev_pop?: Maybe<Role_Granted_Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Role_Granted_Event_Stddev_Samp_Fields>;
  sum?: Maybe<Role_Granted_Event_Sum_Fields>;
  var_pop?: Maybe<Role_Granted_Event_Var_Pop_Fields>;
  var_samp?: Maybe<Role_Granted_Event_Var_Samp_Fields>;
  variance?: Maybe<Role_Granted_Event_Variance_Fields>;
};

/** aggregate fields of "role_granted_event" */
export type Role_Granted_Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Role_Granted_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Role_Granted_Event_Avg_Fields = {
  __typename?: "role_granted_event_avg_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate max on columns */
export type Role_Granted_Event_Max_Fields = {
  __typename?: "role_granted_event_max_fields";
  account?: Maybe<Scalars["String"]>;
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  role?: Maybe<Scalars["String"]>;
  sender?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Role_Granted_Event_Min_Fields = {
  __typename?: "role_granted_event_min_fields";
  account?: Maybe<Scalars["String"]>;
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  role?: Maybe<Scalars["String"]>;
  sender?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Role_Granted_Event_Stddev_Fields = {
  __typename?: "role_granted_event_stddev_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Role_Granted_Event_Stddev_Pop_Fields = {
  __typename?: "role_granted_event_stddev_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Role_Granted_Event_Stddev_Samp_Fields = {
  __typename?: "role_granted_event_stddev_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Role_Granted_Event_Sum_Fields = {
  __typename?: "role_granted_event_sum_fields";
  block_number?: Maybe<Scalars["numeric"]>;
  log_index?: Maybe<Scalars["numeric"]>;
};

/** aggregate var_pop on columns */
export type Role_Granted_Event_Var_Pop_Fields = {
  __typename?: "role_granted_event_var_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Role_Granted_Event_Var_Samp_Fields = {
  __typename?: "role_granted_event_var_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Role_Granted_Event_Variance_Fields = {
  __typename?: "role_granted_event_variance_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** select columns of table "role_revoked_event" */
export enum Role_Revoked_Event_Select_Column {
  /** column name */
  Account = "account",
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  Role = "role",
  /** column name */
  Sender = "sender",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** Ordering options when selecting data from "role_revoked_event". */
export type Role_Revoked_Event_Order_By = {
  account?: InputMaybe<Order_By>;
  block_hash?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "role_revoked_event". All fields are combined with a logical 'AND'. */
export type Role_Revoked_Event_Bool_Exp = {
  _and?: InputMaybe<Array<Role_Revoked_Event_Bool_Exp>>;
  _not?: InputMaybe<Role_Revoked_Event_Bool_Exp>;
  _or?: InputMaybe<Array<Role_Revoked_Event_Bool_Exp>>;
  account?: InputMaybe<String_Comparison_Exp>;
  block_hash?: InputMaybe<String_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  log_index?: InputMaybe<Numeric_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  sender?: InputMaybe<String_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "role_revoked_event" */
export type Role_Revoked_Event = {
  __typename?: "role_revoked_event";
  account?: Maybe<Scalars["String"]>;
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id: Scalars["String"];
  log_index?: Maybe<Scalars["numeric"]>;
  role?: Maybe<Scalars["String"]>;
  sender?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "role_revoked_event" */
export type Role_Revoked_Event_Aggregate = {
  __typename?: "role_revoked_event_aggregate";
  aggregate?: Maybe<Role_Revoked_Event_Aggregate_Fields>;
  nodes: Array<Role_Revoked_Event>;
};

/** aggregate fields of "role_revoked_event" */
export type Role_Revoked_Event_Aggregate_Fields = {
  __typename?: "role_revoked_event_aggregate_fields";
  avg?: Maybe<Role_Revoked_Event_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Role_Revoked_Event_Max_Fields>;
  min?: Maybe<Role_Revoked_Event_Min_Fields>;
  stddev?: Maybe<Role_Revoked_Event_Stddev_Fields>;
  stddev_pop?: Maybe<Role_Revoked_Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Role_Revoked_Event_Stddev_Samp_Fields>;
  sum?: Maybe<Role_Revoked_Event_Sum_Fields>;
  var_pop?: Maybe<Role_Revoked_Event_Var_Pop_Fields>;
  var_samp?: Maybe<Role_Revoked_Event_Var_Samp_Fields>;
  variance?: Maybe<Role_Revoked_Event_Variance_Fields>;
};

/** aggregate fields of "role_revoked_event" */
export type Role_Revoked_Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Role_Revoked_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Role_Revoked_Event_Avg_Fields = {
  __typename?: "role_revoked_event_avg_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate max on columns */
export type Role_Revoked_Event_Max_Fields = {
  __typename?: "role_revoked_event_max_fields";
  account?: Maybe<Scalars["String"]>;
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  role?: Maybe<Scalars["String"]>;
  sender?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Role_Revoked_Event_Min_Fields = {
  __typename?: "role_revoked_event_min_fields";
  account?: Maybe<Scalars["String"]>;
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  role?: Maybe<Scalars["String"]>;
  sender?: Maybe<Scalars["String"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Role_Revoked_Event_Stddev_Fields = {
  __typename?: "role_revoked_event_stddev_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Role_Revoked_Event_Stddev_Pop_Fields = {
  __typename?: "role_revoked_event_stddev_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Role_Revoked_Event_Stddev_Samp_Fields = {
  __typename?: "role_revoked_event_stddev_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Role_Revoked_Event_Sum_Fields = {
  __typename?: "role_revoked_event_sum_fields";
  block_number?: Maybe<Scalars["numeric"]>;
  log_index?: Maybe<Scalars["numeric"]>;
};

/** aggregate var_pop on columns */
export type Role_Revoked_Event_Var_Pop_Fields = {
  __typename?: "role_revoked_event_var_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Role_Revoked_Event_Var_Samp_Fields = {
  __typename?: "role_revoked_event_var_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Role_Revoked_Event_Variance_Fields = {
  __typename?: "role_revoked_event_variance_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** select columns of table "unpaused_event" */
export enum Unpaused_Event_Select_Column {
  /** column name */
  Account = "account",
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** Ordering options when selecting data from "unpaused_event". */
export type Unpaused_Event_Order_By = {
  account?: InputMaybe<Order_By>;
  block_hash?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "unpaused_event". All fields are combined with a logical 'AND'. */
export type Unpaused_Event_Bool_Exp = {
  _and?: InputMaybe<Array<Unpaused_Event_Bool_Exp>>;
  _not?: InputMaybe<Unpaused_Event_Bool_Exp>;
  _or?: InputMaybe<Array<Unpaused_Event_Bool_Exp>>;
  account?: InputMaybe<String_Comparison_Exp>;
  block_hash?: InputMaybe<String_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  log_index?: InputMaybe<Numeric_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "unpaused_event" */
export type Unpaused_Event = {
  __typename?: "unpaused_event";
  account?: Maybe<Scalars["String"]>;
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id: Scalars["String"];
  log_index?: Maybe<Scalars["numeric"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "unpaused_event" */
export type Unpaused_Event_Aggregate = {
  __typename?: "unpaused_event_aggregate";
  aggregate?: Maybe<Unpaused_Event_Aggregate_Fields>;
  nodes: Array<Unpaused_Event>;
};

/** aggregate fields of "unpaused_event" */
export type Unpaused_Event_Aggregate_Fields = {
  __typename?: "unpaused_event_aggregate_fields";
  avg?: Maybe<Unpaused_Event_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Unpaused_Event_Max_Fields>;
  min?: Maybe<Unpaused_Event_Min_Fields>;
  stddev?: Maybe<Unpaused_Event_Stddev_Fields>;
  stddev_pop?: Maybe<Unpaused_Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Unpaused_Event_Stddev_Samp_Fields>;
  sum?: Maybe<Unpaused_Event_Sum_Fields>;
  var_pop?: Maybe<Unpaused_Event_Var_Pop_Fields>;
  var_samp?: Maybe<Unpaused_Event_Var_Samp_Fields>;
  variance?: Maybe<Unpaused_Event_Variance_Fields>;
};

/** aggregate fields of "unpaused_event" */
export type Unpaused_Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Unpaused_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Unpaused_Event_Avg_Fields = {
  __typename?: "unpaused_event_avg_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate max on columns */
export type Unpaused_Event_Max_Fields = {
  __typename?: "unpaused_event_max_fields";
  account?: Maybe<Scalars["String"]>;
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Unpaused_Event_Min_Fields = {
  __typename?: "unpaused_event_min_fields";
  account?: Maybe<Scalars["String"]>;
  block_hash?: Maybe<Scalars["String"]>;
  block_number?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  log_index?: Maybe<Scalars["numeric"]>;
  transaction_hash?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Unpaused_Event_Stddev_Fields = {
  __typename?: "unpaused_event_stddev_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Unpaused_Event_Stddev_Pop_Fields = {
  __typename?: "unpaused_event_stddev_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Unpaused_Event_Stddev_Samp_Fields = {
  __typename?: "unpaused_event_stddev_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Unpaused_Event_Sum_Fields = {
  __typename?: "unpaused_event_sum_fields";
  block_number?: Maybe<Scalars["numeric"]>;
  log_index?: Maybe<Scalars["numeric"]>;
};

/** aggregate var_pop on columns */
export type Unpaused_Event_Var_Pop_Fields = {
  __typename?: "unpaused_event_var_pop_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Unpaused_Event_Var_Samp_Fields = {
  __typename?: "unpaused_event_var_samp_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Unpaused_Event_Variance_Fields = {
  __typename?: "unpaused_event_variance_fields";
  block_number?: Maybe<Scalars["Float"]>;
  log_index?: Maybe<Scalars["Float"]>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "balance_collected_event" */
  delete_balance_collected_event?: Maybe<Balance_Collected_Event_Mutation_Response>;
  /** delete single row from the table: "balance_collected_event" */
  delete_balance_collected_event_by_pk?: Maybe<Balance_Collected_Event>;
  /** delete data from the table: "collateral_added_event" */
  delete_collateral_added_event?: Maybe<Collateral_Added_Event_Mutation_Response>;
  /** delete single row from the table: "collateral_added_event" */
  delete_collateral_added_event_by_pk?: Maybe<Collateral_Added_Event>;
  /** delete data from the table: "collateral_removed_event" */
  delete_collateral_removed_event?: Maybe<Collateral_Removed_Event_Mutation_Response>;
  /** delete single row from the table: "collateral_removed_event" */
  delete_collateral_removed_event_by_pk?: Maybe<Collateral_Removed_Event>;
  /** delete data from the table: "contango_yield_admin_changed_event" */
  delete_contango_yield_admin_changed_event?: Maybe<Contango_Yield_Admin_Changed_Event_Mutation_Response>;
  /** delete single row from the table: "contango_yield_admin_changed_event" */
  delete_contango_yield_admin_changed_event_by_pk?: Maybe<Contango_Yield_Admin_Changed_Event>;
  /** delete data from the table: "contango_yield_beacon_upgraded_event" */
  delete_contango_yield_beacon_upgraded_event?: Maybe<Contango_Yield_Beacon_Upgraded_Event_Mutation_Response>;
  /** delete single row from the table: "contango_yield_beacon_upgraded_event" */
  delete_contango_yield_beacon_upgraded_event_by_pk?: Maybe<Contango_Yield_Beacon_Upgraded_Event>;
  /** delete data from the table: "contango_yield_upgraded_event" */
  delete_contango_yield_upgraded_event?: Maybe<Contango_Yield_Upgraded_Event_Mutation_Response>;
  /** delete single row from the table: "contango_yield_upgraded_event" */
  delete_contango_yield_upgraded_event_by_pk?: Maybe<Contango_Yield_Upgraded_Event>;
  /** delete data from the table: "contract_traded_event" */
  delete_contract_traded_event?: Maybe<Contract_Traded_Event_Mutation_Response>;
  /** delete single row from the table: "contract_traded_event" */
  delete_contract_traded_event_by_pk?: Maybe<Contract_Traded_Event>;
  /** delete data from the table: "initialized_event" */
  delete_initialized_event?: Maybe<Initialized_Event_Mutation_Response>;
  /** delete single row from the table: "initialized_event" */
  delete_initialized_event_by_pk?: Maybe<Initialized_Event>;
  /** delete data from the table: "paused_event" */
  delete_paused_event?: Maybe<Paused_Event_Mutation_Response>;
  /** delete single row from the table: "paused_event" */
  delete_paused_event_by_pk?: Maybe<Paused_Event>;
  /** delete data from the table: "position_closed_event" */
  delete_position_closed_event?: Maybe<Position_Closed_Event_Mutation_Response>;
  /** delete single row from the table: "position_closed_event" */
  delete_position_closed_event_by_pk?: Maybe<Position_Closed_Event>;
  /** delete data from the table: "position_delivered_event" */
  delete_position_delivered_event?: Maybe<Position_Delivered_Event_Mutation_Response>;
  /** delete single row from the table: "position_delivered_event" */
  delete_position_delivered_event_by_pk?: Maybe<Position_Delivered_Event>;
  /** delete data from the table: "position_liquidated_event" */
  delete_position_liquidated_event?: Maybe<Position_Liquidated_Event_Mutation_Response>;
  /** delete single row from the table: "position_liquidated_event" */
  delete_position_liquidated_event_by_pk?: Maybe<Position_Liquidated_Event>;
  /** delete data from the table: "position_upserted_event" */
  delete_position_upserted_event?: Maybe<Position_Upserted_Event_Mutation_Response>;
  /** delete single row from the table: "position_upserted_event" */
  delete_position_upserted_event_by_pk?: Maybe<Position_Upserted_Event>;
  /** delete data from the table: "role_admin_changed_event" */
  delete_role_admin_changed_event?: Maybe<Role_Admin_Changed_Event_Mutation_Response>;
  /** delete single row from the table: "role_admin_changed_event" */
  delete_role_admin_changed_event_by_pk?: Maybe<Role_Admin_Changed_Event>;
  /** delete data from the table: "role_granted_event" */
  delete_role_granted_event?: Maybe<Role_Granted_Event_Mutation_Response>;
  /** delete single row from the table: "role_granted_event" */
  delete_role_granted_event_by_pk?: Maybe<Role_Granted_Event>;
  /** delete data from the table: "role_revoked_event" */
  delete_role_revoked_event?: Maybe<Role_Revoked_Event_Mutation_Response>;
  /** delete single row from the table: "role_revoked_event" */
  delete_role_revoked_event_by_pk?: Maybe<Role_Revoked_Event>;
  /** delete data from the table: "unpaused_event" */
  delete_unpaused_event?: Maybe<Unpaused_Event_Mutation_Response>;
  /** delete single row from the table: "unpaused_event" */
  delete_unpaused_event_by_pk?: Maybe<Unpaused_Event>;
  /** insert data into the table: "balance_collected_event" */
  insert_balance_collected_event?: Maybe<Balance_Collected_Event_Mutation_Response>;
  /** insert a single row into the table: "balance_collected_event" */
  insert_balance_collected_event_one?: Maybe<Balance_Collected_Event>;
  /** insert data into the table: "collateral_added_event" */
  insert_collateral_added_event?: Maybe<Collateral_Added_Event_Mutation_Response>;
  /** insert a single row into the table: "collateral_added_event" */
  insert_collateral_added_event_one?: Maybe<Collateral_Added_Event>;
  /** insert data into the table: "collateral_removed_event" */
  insert_collateral_removed_event?: Maybe<Collateral_Removed_Event_Mutation_Response>;
  /** insert a single row into the table: "collateral_removed_event" */
  insert_collateral_removed_event_one?: Maybe<Collateral_Removed_Event>;
  /** insert data into the table: "contango_yield_admin_changed_event" */
  insert_contango_yield_admin_changed_event?: Maybe<Contango_Yield_Admin_Changed_Event_Mutation_Response>;
  /** insert a single row into the table: "contango_yield_admin_changed_event" */
  insert_contango_yield_admin_changed_event_one?: Maybe<Contango_Yield_Admin_Changed_Event>;
  /** insert data into the table: "contango_yield_beacon_upgraded_event" */
  insert_contango_yield_beacon_upgraded_event?: Maybe<Contango_Yield_Beacon_Upgraded_Event_Mutation_Response>;
  /** insert a single row into the table: "contango_yield_beacon_upgraded_event" */
  insert_contango_yield_beacon_upgraded_event_one?: Maybe<Contango_Yield_Beacon_Upgraded_Event>;
  /** insert data into the table: "contango_yield_upgraded_event" */
  insert_contango_yield_upgraded_event?: Maybe<Contango_Yield_Upgraded_Event_Mutation_Response>;
  /** insert a single row into the table: "contango_yield_upgraded_event" */
  insert_contango_yield_upgraded_event_one?: Maybe<Contango_Yield_Upgraded_Event>;
  /** insert data into the table: "contract_traded_event" */
  insert_contract_traded_event?: Maybe<Contract_Traded_Event_Mutation_Response>;
  /** insert a single row into the table: "contract_traded_event" */
  insert_contract_traded_event_one?: Maybe<Contract_Traded_Event>;
  /** insert data into the table: "initialized_event" */
  insert_initialized_event?: Maybe<Initialized_Event_Mutation_Response>;
  /** insert a single row into the table: "initialized_event" */
  insert_initialized_event_one?: Maybe<Initialized_Event>;
  /** insert data into the table: "paused_event" */
  insert_paused_event?: Maybe<Paused_Event_Mutation_Response>;
  /** insert a single row into the table: "paused_event" */
  insert_paused_event_one?: Maybe<Paused_Event>;
  /** insert data into the table: "position_closed_event" */
  insert_position_closed_event?: Maybe<Position_Closed_Event_Mutation_Response>;
  /** insert a single row into the table: "position_closed_event" */
  insert_position_closed_event_one?: Maybe<Position_Closed_Event>;
  /** insert data into the table: "position_delivered_event" */
  insert_position_delivered_event?: Maybe<Position_Delivered_Event_Mutation_Response>;
  /** insert a single row into the table: "position_delivered_event" */
  insert_position_delivered_event_one?: Maybe<Position_Delivered_Event>;
  /** insert data into the table: "position_liquidated_event" */
  insert_position_liquidated_event?: Maybe<Position_Liquidated_Event_Mutation_Response>;
  /** insert a single row into the table: "position_liquidated_event" */
  insert_position_liquidated_event_one?: Maybe<Position_Liquidated_Event>;
  /** insert data into the table: "position_upserted_event" */
  insert_position_upserted_event?: Maybe<Position_Upserted_Event_Mutation_Response>;
  /** insert a single row into the table: "position_upserted_event" */
  insert_position_upserted_event_one?: Maybe<Position_Upserted_Event>;
  /** insert data into the table: "role_admin_changed_event" */
  insert_role_admin_changed_event?: Maybe<Role_Admin_Changed_Event_Mutation_Response>;
  /** insert a single row into the table: "role_admin_changed_event" */
  insert_role_admin_changed_event_one?: Maybe<Role_Admin_Changed_Event>;
  /** insert data into the table: "role_granted_event" */
  insert_role_granted_event?: Maybe<Role_Granted_Event_Mutation_Response>;
  /** insert a single row into the table: "role_granted_event" */
  insert_role_granted_event_one?: Maybe<Role_Granted_Event>;
  /** insert data into the table: "role_revoked_event" */
  insert_role_revoked_event?: Maybe<Role_Revoked_Event_Mutation_Response>;
  /** insert a single row into the table: "role_revoked_event" */
  insert_role_revoked_event_one?: Maybe<Role_Revoked_Event>;
  /** insert data into the table: "unpaused_event" */
  insert_unpaused_event?: Maybe<Unpaused_Event_Mutation_Response>;
  /** insert a single row into the table: "unpaused_event" */
  insert_unpaused_event_one?: Maybe<Unpaused_Event>;
  /** update data of the table: "balance_collected_event" */
  update_balance_collected_event?: Maybe<Balance_Collected_Event_Mutation_Response>;
  /** update single row of the table: "balance_collected_event" */
  update_balance_collected_event_by_pk?: Maybe<Balance_Collected_Event>;
  /** update multiples rows of table: "balance_collected_event" */
  update_balance_collected_event_many?: Maybe<
    Array<Maybe<Balance_Collected_Event_Mutation_Response>>
  >;
  /** update data of the table: "collateral_added_event" */
  update_collateral_added_event?: Maybe<Collateral_Added_Event_Mutation_Response>;
  /** update single row of the table: "collateral_added_event" */
  update_collateral_added_event_by_pk?: Maybe<Collateral_Added_Event>;
  /** update multiples rows of table: "collateral_added_event" */
  update_collateral_added_event_many?: Maybe<
    Array<Maybe<Collateral_Added_Event_Mutation_Response>>
  >;
  /** update data of the table: "collateral_removed_event" */
  update_collateral_removed_event?: Maybe<Collateral_Removed_Event_Mutation_Response>;
  /** update single row of the table: "collateral_removed_event" */
  update_collateral_removed_event_by_pk?: Maybe<Collateral_Removed_Event>;
  /** update multiples rows of table: "collateral_removed_event" */
  update_collateral_removed_event_many?: Maybe<
    Array<Maybe<Collateral_Removed_Event_Mutation_Response>>
  >;
  /** update data of the table: "contango_yield_admin_changed_event" */
  update_contango_yield_admin_changed_event?: Maybe<Contango_Yield_Admin_Changed_Event_Mutation_Response>;
  /** update single row of the table: "contango_yield_admin_changed_event" */
  update_contango_yield_admin_changed_event_by_pk?: Maybe<Contango_Yield_Admin_Changed_Event>;
  /** update multiples rows of table: "contango_yield_admin_changed_event" */
  update_contango_yield_admin_changed_event_many?: Maybe<
    Array<Maybe<Contango_Yield_Admin_Changed_Event_Mutation_Response>>
  >;
  /** update data of the table: "contango_yield_beacon_upgraded_event" */
  update_contango_yield_beacon_upgraded_event?: Maybe<Contango_Yield_Beacon_Upgraded_Event_Mutation_Response>;
  /** update single row of the table: "contango_yield_beacon_upgraded_event" */
  update_contango_yield_beacon_upgraded_event_by_pk?: Maybe<Contango_Yield_Beacon_Upgraded_Event>;
  /** update multiples rows of table: "contango_yield_beacon_upgraded_event" */
  update_contango_yield_beacon_upgraded_event_many?: Maybe<
    Array<Maybe<Contango_Yield_Beacon_Upgraded_Event_Mutation_Response>>
  >;
  /** update data of the table: "contango_yield_upgraded_event" */
  update_contango_yield_upgraded_event?: Maybe<Contango_Yield_Upgraded_Event_Mutation_Response>;
  /** update single row of the table: "contango_yield_upgraded_event" */
  update_contango_yield_upgraded_event_by_pk?: Maybe<Contango_Yield_Upgraded_Event>;
  /** update multiples rows of table: "contango_yield_upgraded_event" */
  update_contango_yield_upgraded_event_many?: Maybe<
    Array<Maybe<Contango_Yield_Upgraded_Event_Mutation_Response>>
  >;
  /** update data of the table: "contract_traded_event" */
  update_contract_traded_event?: Maybe<Contract_Traded_Event_Mutation_Response>;
  /** update single row of the table: "contract_traded_event" */
  update_contract_traded_event_by_pk?: Maybe<Contract_Traded_Event>;
  /** update multiples rows of table: "contract_traded_event" */
  update_contract_traded_event_many?: Maybe<Array<Maybe<Contract_Traded_Event_Mutation_Response>>>;
  /** update data of the table: "initialized_event" */
  update_initialized_event?: Maybe<Initialized_Event_Mutation_Response>;
  /** update single row of the table: "initialized_event" */
  update_initialized_event_by_pk?: Maybe<Initialized_Event>;
  /** update multiples rows of table: "initialized_event" */
  update_initialized_event_many?: Maybe<Array<Maybe<Initialized_Event_Mutation_Response>>>;
  /** update data of the table: "paused_event" */
  update_paused_event?: Maybe<Paused_Event_Mutation_Response>;
  /** update single row of the table: "paused_event" */
  update_paused_event_by_pk?: Maybe<Paused_Event>;
  /** update multiples rows of table: "paused_event" */
  update_paused_event_many?: Maybe<Array<Maybe<Paused_Event_Mutation_Response>>>;
  /** update data of the table: "position_closed_event" */
  update_position_closed_event?: Maybe<Position_Closed_Event_Mutation_Response>;
  /** update single row of the table: "position_closed_event" */
  update_position_closed_event_by_pk?: Maybe<Position_Closed_Event>;
  /** update multiples rows of table: "position_closed_event" */
  update_position_closed_event_many?: Maybe<Array<Maybe<Position_Closed_Event_Mutation_Response>>>;
  /** update data of the table: "position_delivered_event" */
  update_position_delivered_event?: Maybe<Position_Delivered_Event_Mutation_Response>;
  /** update single row of the table: "position_delivered_event" */
  update_position_delivered_event_by_pk?: Maybe<Position_Delivered_Event>;
  /** update multiples rows of table: "position_delivered_event" */
  update_position_delivered_event_many?: Maybe<
    Array<Maybe<Position_Delivered_Event_Mutation_Response>>
  >;
  /** update data of the table: "position_liquidated_event" */
  update_position_liquidated_event?: Maybe<Position_Liquidated_Event_Mutation_Response>;
  /** update single row of the table: "position_liquidated_event" */
  update_position_liquidated_event_by_pk?: Maybe<Position_Liquidated_Event>;
  /** update multiples rows of table: "position_liquidated_event" */
  update_position_liquidated_event_many?: Maybe<
    Array<Maybe<Position_Liquidated_Event_Mutation_Response>>
  >;
  /** update data of the table: "position_upserted_event" */
  update_position_upserted_event?: Maybe<Position_Upserted_Event_Mutation_Response>;
  /** update single row of the table: "position_upserted_event" */
  update_position_upserted_event_by_pk?: Maybe<Position_Upserted_Event>;
  /** update multiples rows of table: "position_upserted_event" */
  update_position_upserted_event_many?: Maybe<
    Array<Maybe<Position_Upserted_Event_Mutation_Response>>
  >;
  /** update data of the table: "role_admin_changed_event" */
  update_role_admin_changed_event?: Maybe<Role_Admin_Changed_Event_Mutation_Response>;
  /** update single row of the table: "role_admin_changed_event" */
  update_role_admin_changed_event_by_pk?: Maybe<Role_Admin_Changed_Event>;
  /** update multiples rows of table: "role_admin_changed_event" */
  update_role_admin_changed_event_many?: Maybe<
    Array<Maybe<Role_Admin_Changed_Event_Mutation_Response>>
  >;
  /** update data of the table: "role_granted_event" */
  update_role_granted_event?: Maybe<Role_Granted_Event_Mutation_Response>;
  /** update single row of the table: "role_granted_event" */
  update_role_granted_event_by_pk?: Maybe<Role_Granted_Event>;
  /** update multiples rows of table: "role_granted_event" */
  update_role_granted_event_many?: Maybe<Array<Maybe<Role_Granted_Event_Mutation_Response>>>;
  /** update data of the table: "role_revoked_event" */
  update_role_revoked_event?: Maybe<Role_Revoked_Event_Mutation_Response>;
  /** update single row of the table: "role_revoked_event" */
  update_role_revoked_event_by_pk?: Maybe<Role_Revoked_Event>;
  /** update multiples rows of table: "role_revoked_event" */
  update_role_revoked_event_many?: Maybe<Array<Maybe<Role_Revoked_Event_Mutation_Response>>>;
  /** update data of the table: "unpaused_event" */
  update_unpaused_event?: Maybe<Unpaused_Event_Mutation_Response>;
  /** update single row of the table: "unpaused_event" */
  update_unpaused_event_by_pk?: Maybe<Unpaused_Event>;
  /** update multiples rows of table: "unpaused_event" */
  update_unpaused_event_many?: Maybe<Array<Maybe<Unpaused_Event_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_Balance_Collected_EventArgs = {
  where: Balance_Collected_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Balance_Collected_Event_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Collateral_Added_EventArgs = {
  where: Collateral_Added_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Collateral_Added_Event_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Collateral_Removed_EventArgs = {
  where: Collateral_Removed_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Collateral_Removed_Event_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Contango_Yield_Admin_Changed_EventArgs = {
  where: Contango_Yield_Admin_Changed_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Contango_Yield_Admin_Changed_Event_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Contango_Yield_Beacon_Upgraded_EventArgs = {
  where: Contango_Yield_Beacon_Upgraded_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Contango_Yield_Beacon_Upgraded_Event_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Contango_Yield_Upgraded_EventArgs = {
  where: Contango_Yield_Upgraded_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Contango_Yield_Upgraded_Event_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Contract_Traded_EventArgs = {
  where: Contract_Traded_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Contract_Traded_Event_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Initialized_EventArgs = {
  where: Initialized_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Initialized_Event_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Paused_EventArgs = {
  where: Paused_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Paused_Event_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Position_Closed_EventArgs = {
  where: Position_Closed_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Position_Closed_Event_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Position_Delivered_EventArgs = {
  where: Position_Delivered_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Position_Delivered_Event_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Position_Liquidated_EventArgs = {
  where: Position_Liquidated_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Position_Liquidated_Event_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Position_Upserted_EventArgs = {
  where: Position_Upserted_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Position_Upserted_Event_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Role_Admin_Changed_EventArgs = {
  where: Role_Admin_Changed_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Role_Admin_Changed_Event_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Role_Granted_EventArgs = {
  where: Role_Granted_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Role_Granted_Event_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Role_Revoked_EventArgs = {
  where: Role_Revoked_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Role_Revoked_Event_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Unpaused_EventArgs = {
  where: Unpaused_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Unpaused_Event_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootInsert_Balance_Collected_EventArgs = {
  objects: Array<Balance_Collected_Event_Insert_Input>;
  on_conflict?: InputMaybe<Balance_Collected_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Balance_Collected_Event_OneArgs = {
  object: Balance_Collected_Event_Insert_Input;
  on_conflict?: InputMaybe<Balance_Collected_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Collateral_Added_EventArgs = {
  objects: Array<Collateral_Added_Event_Insert_Input>;
  on_conflict?: InputMaybe<Collateral_Added_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Collateral_Added_Event_OneArgs = {
  object: Collateral_Added_Event_Insert_Input;
  on_conflict?: InputMaybe<Collateral_Added_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Collateral_Removed_EventArgs = {
  objects: Array<Collateral_Removed_Event_Insert_Input>;
  on_conflict?: InputMaybe<Collateral_Removed_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Collateral_Removed_Event_OneArgs = {
  object: Collateral_Removed_Event_Insert_Input;
  on_conflict?: InputMaybe<Collateral_Removed_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Contango_Yield_Admin_Changed_EventArgs = {
  objects: Array<Contango_Yield_Admin_Changed_Event_Insert_Input>;
  on_conflict?: InputMaybe<Contango_Yield_Admin_Changed_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Contango_Yield_Admin_Changed_Event_OneArgs = {
  object: Contango_Yield_Admin_Changed_Event_Insert_Input;
  on_conflict?: InputMaybe<Contango_Yield_Admin_Changed_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Contango_Yield_Beacon_Upgraded_EventArgs = {
  objects: Array<Contango_Yield_Beacon_Upgraded_Event_Insert_Input>;
  on_conflict?: InputMaybe<Contango_Yield_Beacon_Upgraded_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Contango_Yield_Beacon_Upgraded_Event_OneArgs = {
  object: Contango_Yield_Beacon_Upgraded_Event_Insert_Input;
  on_conflict?: InputMaybe<Contango_Yield_Beacon_Upgraded_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Contango_Yield_Upgraded_EventArgs = {
  objects: Array<Contango_Yield_Upgraded_Event_Insert_Input>;
  on_conflict?: InputMaybe<Contango_Yield_Upgraded_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Contango_Yield_Upgraded_Event_OneArgs = {
  object: Contango_Yield_Upgraded_Event_Insert_Input;
  on_conflict?: InputMaybe<Contango_Yield_Upgraded_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Contract_Traded_EventArgs = {
  objects: Array<Contract_Traded_Event_Insert_Input>;
  on_conflict?: InputMaybe<Contract_Traded_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Contract_Traded_Event_OneArgs = {
  object: Contract_Traded_Event_Insert_Input;
  on_conflict?: InputMaybe<Contract_Traded_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Initialized_EventArgs = {
  objects: Array<Initialized_Event_Insert_Input>;
  on_conflict?: InputMaybe<Initialized_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Initialized_Event_OneArgs = {
  object: Initialized_Event_Insert_Input;
  on_conflict?: InputMaybe<Initialized_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Paused_EventArgs = {
  objects: Array<Paused_Event_Insert_Input>;
  on_conflict?: InputMaybe<Paused_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Paused_Event_OneArgs = {
  object: Paused_Event_Insert_Input;
  on_conflict?: InputMaybe<Paused_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Position_Closed_EventArgs = {
  objects: Array<Position_Closed_Event_Insert_Input>;
  on_conflict?: InputMaybe<Position_Closed_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Position_Closed_Event_OneArgs = {
  object: Position_Closed_Event_Insert_Input;
  on_conflict?: InputMaybe<Position_Closed_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Position_Delivered_EventArgs = {
  objects: Array<Position_Delivered_Event_Insert_Input>;
  on_conflict?: InputMaybe<Position_Delivered_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Position_Delivered_Event_OneArgs = {
  object: Position_Delivered_Event_Insert_Input;
  on_conflict?: InputMaybe<Position_Delivered_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Position_Liquidated_EventArgs = {
  objects: Array<Position_Liquidated_Event_Insert_Input>;
  on_conflict?: InputMaybe<Position_Liquidated_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Position_Liquidated_Event_OneArgs = {
  object: Position_Liquidated_Event_Insert_Input;
  on_conflict?: InputMaybe<Position_Liquidated_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Position_Upserted_EventArgs = {
  objects: Array<Position_Upserted_Event_Insert_Input>;
  on_conflict?: InputMaybe<Position_Upserted_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Position_Upserted_Event_OneArgs = {
  object: Position_Upserted_Event_Insert_Input;
  on_conflict?: InputMaybe<Position_Upserted_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Role_Admin_Changed_EventArgs = {
  objects: Array<Role_Admin_Changed_Event_Insert_Input>;
  on_conflict?: InputMaybe<Role_Admin_Changed_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Role_Admin_Changed_Event_OneArgs = {
  object: Role_Admin_Changed_Event_Insert_Input;
  on_conflict?: InputMaybe<Role_Admin_Changed_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Role_Granted_EventArgs = {
  objects: Array<Role_Granted_Event_Insert_Input>;
  on_conflict?: InputMaybe<Role_Granted_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Role_Granted_Event_OneArgs = {
  object: Role_Granted_Event_Insert_Input;
  on_conflict?: InputMaybe<Role_Granted_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Role_Revoked_EventArgs = {
  objects: Array<Role_Revoked_Event_Insert_Input>;
  on_conflict?: InputMaybe<Role_Revoked_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Role_Revoked_Event_OneArgs = {
  object: Role_Revoked_Event_Insert_Input;
  on_conflict?: InputMaybe<Role_Revoked_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Unpaused_EventArgs = {
  objects: Array<Unpaused_Event_Insert_Input>;
  on_conflict?: InputMaybe<Unpaused_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Unpaused_Event_OneArgs = {
  object: Unpaused_Event_Insert_Input;
  on_conflict?: InputMaybe<Unpaused_Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_Balance_Collected_EventArgs = {
  _inc?: InputMaybe<Balance_Collected_Event_Inc_Input>;
  _set?: InputMaybe<Balance_Collected_Event_Set_Input>;
  where: Balance_Collected_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Balance_Collected_Event_By_PkArgs = {
  _inc?: InputMaybe<Balance_Collected_Event_Inc_Input>;
  _set?: InputMaybe<Balance_Collected_Event_Set_Input>;
  pk_columns: Balance_Collected_Event_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Balance_Collected_Event_ManyArgs = {
  updates: Array<Balance_Collected_Event_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Collateral_Added_EventArgs = {
  _inc?: InputMaybe<Collateral_Added_Event_Inc_Input>;
  _set?: InputMaybe<Collateral_Added_Event_Set_Input>;
  where: Collateral_Added_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Collateral_Added_Event_By_PkArgs = {
  _inc?: InputMaybe<Collateral_Added_Event_Inc_Input>;
  _set?: InputMaybe<Collateral_Added_Event_Set_Input>;
  pk_columns: Collateral_Added_Event_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Collateral_Added_Event_ManyArgs = {
  updates: Array<Collateral_Added_Event_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Collateral_Removed_EventArgs = {
  _inc?: InputMaybe<Collateral_Removed_Event_Inc_Input>;
  _set?: InputMaybe<Collateral_Removed_Event_Set_Input>;
  where: Collateral_Removed_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Collateral_Removed_Event_By_PkArgs = {
  _inc?: InputMaybe<Collateral_Removed_Event_Inc_Input>;
  _set?: InputMaybe<Collateral_Removed_Event_Set_Input>;
  pk_columns: Collateral_Removed_Event_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Collateral_Removed_Event_ManyArgs = {
  updates: Array<Collateral_Removed_Event_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Contango_Yield_Admin_Changed_EventArgs = {
  _inc?: InputMaybe<Contango_Yield_Admin_Changed_Event_Inc_Input>;
  _set?: InputMaybe<Contango_Yield_Admin_Changed_Event_Set_Input>;
  where: Contango_Yield_Admin_Changed_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Contango_Yield_Admin_Changed_Event_By_PkArgs = {
  _inc?: InputMaybe<Contango_Yield_Admin_Changed_Event_Inc_Input>;
  _set?: InputMaybe<Contango_Yield_Admin_Changed_Event_Set_Input>;
  pk_columns: Contango_Yield_Admin_Changed_Event_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Contango_Yield_Admin_Changed_Event_ManyArgs = {
  updates: Array<Contango_Yield_Admin_Changed_Event_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Contango_Yield_Beacon_Upgraded_EventArgs = {
  _inc?: InputMaybe<Contango_Yield_Beacon_Upgraded_Event_Inc_Input>;
  _set?: InputMaybe<Contango_Yield_Beacon_Upgraded_Event_Set_Input>;
  where: Contango_Yield_Beacon_Upgraded_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Contango_Yield_Beacon_Upgraded_Event_By_PkArgs = {
  _inc?: InputMaybe<Contango_Yield_Beacon_Upgraded_Event_Inc_Input>;
  _set?: InputMaybe<Contango_Yield_Beacon_Upgraded_Event_Set_Input>;
  pk_columns: Contango_Yield_Beacon_Upgraded_Event_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Contango_Yield_Beacon_Upgraded_Event_ManyArgs = {
  updates: Array<Contango_Yield_Beacon_Upgraded_Event_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Contango_Yield_Upgraded_EventArgs = {
  _inc?: InputMaybe<Contango_Yield_Upgraded_Event_Inc_Input>;
  _set?: InputMaybe<Contango_Yield_Upgraded_Event_Set_Input>;
  where: Contango_Yield_Upgraded_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Contango_Yield_Upgraded_Event_By_PkArgs = {
  _inc?: InputMaybe<Contango_Yield_Upgraded_Event_Inc_Input>;
  _set?: InputMaybe<Contango_Yield_Upgraded_Event_Set_Input>;
  pk_columns: Contango_Yield_Upgraded_Event_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Contango_Yield_Upgraded_Event_ManyArgs = {
  updates: Array<Contango_Yield_Upgraded_Event_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Contract_Traded_EventArgs = {
  _append?: InputMaybe<Contract_Traded_Event_Append_Input>;
  _delete_at_path?: InputMaybe<Contract_Traded_Event_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Contract_Traded_Event_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Contract_Traded_Event_Delete_Key_Input>;
  _inc?: InputMaybe<Contract_Traded_Event_Inc_Input>;
  _prepend?: InputMaybe<Contract_Traded_Event_Prepend_Input>;
  _set?: InputMaybe<Contract_Traded_Event_Set_Input>;
  where: Contract_Traded_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Contract_Traded_Event_By_PkArgs = {
  _append?: InputMaybe<Contract_Traded_Event_Append_Input>;
  _delete_at_path?: InputMaybe<Contract_Traded_Event_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Contract_Traded_Event_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Contract_Traded_Event_Delete_Key_Input>;
  _inc?: InputMaybe<Contract_Traded_Event_Inc_Input>;
  _prepend?: InputMaybe<Contract_Traded_Event_Prepend_Input>;
  _set?: InputMaybe<Contract_Traded_Event_Set_Input>;
  pk_columns: Contract_Traded_Event_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Contract_Traded_Event_ManyArgs = {
  updates: Array<Contract_Traded_Event_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Initialized_EventArgs = {
  _inc?: InputMaybe<Initialized_Event_Inc_Input>;
  _set?: InputMaybe<Initialized_Event_Set_Input>;
  where: Initialized_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Initialized_Event_By_PkArgs = {
  _inc?: InputMaybe<Initialized_Event_Inc_Input>;
  _set?: InputMaybe<Initialized_Event_Set_Input>;
  pk_columns: Initialized_Event_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Initialized_Event_ManyArgs = {
  updates: Array<Initialized_Event_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Paused_EventArgs = {
  _inc?: InputMaybe<Paused_Event_Inc_Input>;
  _set?: InputMaybe<Paused_Event_Set_Input>;
  where: Paused_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Paused_Event_By_PkArgs = {
  _inc?: InputMaybe<Paused_Event_Inc_Input>;
  _set?: InputMaybe<Paused_Event_Set_Input>;
  pk_columns: Paused_Event_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Paused_Event_ManyArgs = {
  updates: Array<Paused_Event_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Position_Closed_EventArgs = {
  _inc?: InputMaybe<Position_Closed_Event_Inc_Input>;
  _set?: InputMaybe<Position_Closed_Event_Set_Input>;
  where: Position_Closed_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Position_Closed_Event_By_PkArgs = {
  _inc?: InputMaybe<Position_Closed_Event_Inc_Input>;
  _set?: InputMaybe<Position_Closed_Event_Set_Input>;
  pk_columns: Position_Closed_Event_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Position_Closed_Event_ManyArgs = {
  updates: Array<Position_Closed_Event_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Position_Delivered_EventArgs = {
  _inc?: InputMaybe<Position_Delivered_Event_Inc_Input>;
  _set?: InputMaybe<Position_Delivered_Event_Set_Input>;
  where: Position_Delivered_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Position_Delivered_Event_By_PkArgs = {
  _inc?: InputMaybe<Position_Delivered_Event_Inc_Input>;
  _set?: InputMaybe<Position_Delivered_Event_Set_Input>;
  pk_columns: Position_Delivered_Event_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Position_Delivered_Event_ManyArgs = {
  updates: Array<Position_Delivered_Event_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Position_Liquidated_EventArgs = {
  _inc?: InputMaybe<Position_Liquidated_Event_Inc_Input>;
  _set?: InputMaybe<Position_Liquidated_Event_Set_Input>;
  where: Position_Liquidated_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Position_Liquidated_Event_By_PkArgs = {
  _inc?: InputMaybe<Position_Liquidated_Event_Inc_Input>;
  _set?: InputMaybe<Position_Liquidated_Event_Set_Input>;
  pk_columns: Position_Liquidated_Event_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Position_Liquidated_Event_ManyArgs = {
  updates: Array<Position_Liquidated_Event_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Position_Upserted_EventArgs = {
  _inc?: InputMaybe<Position_Upserted_Event_Inc_Input>;
  _set?: InputMaybe<Position_Upserted_Event_Set_Input>;
  where: Position_Upserted_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Position_Upserted_Event_By_PkArgs = {
  _inc?: InputMaybe<Position_Upserted_Event_Inc_Input>;
  _set?: InputMaybe<Position_Upserted_Event_Set_Input>;
  pk_columns: Position_Upserted_Event_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Position_Upserted_Event_ManyArgs = {
  updates: Array<Position_Upserted_Event_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Role_Admin_Changed_EventArgs = {
  _inc?: InputMaybe<Role_Admin_Changed_Event_Inc_Input>;
  _set?: InputMaybe<Role_Admin_Changed_Event_Set_Input>;
  where: Role_Admin_Changed_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Role_Admin_Changed_Event_By_PkArgs = {
  _inc?: InputMaybe<Role_Admin_Changed_Event_Inc_Input>;
  _set?: InputMaybe<Role_Admin_Changed_Event_Set_Input>;
  pk_columns: Role_Admin_Changed_Event_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Role_Admin_Changed_Event_ManyArgs = {
  updates: Array<Role_Admin_Changed_Event_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Role_Granted_EventArgs = {
  _inc?: InputMaybe<Role_Granted_Event_Inc_Input>;
  _set?: InputMaybe<Role_Granted_Event_Set_Input>;
  where: Role_Granted_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Role_Granted_Event_By_PkArgs = {
  _inc?: InputMaybe<Role_Granted_Event_Inc_Input>;
  _set?: InputMaybe<Role_Granted_Event_Set_Input>;
  pk_columns: Role_Granted_Event_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Role_Granted_Event_ManyArgs = {
  updates: Array<Role_Granted_Event_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Role_Revoked_EventArgs = {
  _inc?: InputMaybe<Role_Revoked_Event_Inc_Input>;
  _set?: InputMaybe<Role_Revoked_Event_Set_Input>;
  where: Role_Revoked_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Role_Revoked_Event_By_PkArgs = {
  _inc?: InputMaybe<Role_Revoked_Event_Inc_Input>;
  _set?: InputMaybe<Role_Revoked_Event_Set_Input>;
  pk_columns: Role_Revoked_Event_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Role_Revoked_Event_ManyArgs = {
  updates: Array<Role_Revoked_Event_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Unpaused_EventArgs = {
  _inc?: InputMaybe<Unpaused_Event_Inc_Input>;
  _set?: InputMaybe<Unpaused_Event_Set_Input>;
  where: Unpaused_Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Unpaused_Event_By_PkArgs = {
  _inc?: InputMaybe<Unpaused_Event_Inc_Input>;
  _set?: InputMaybe<Unpaused_Event_Set_Input>;
  pk_columns: Unpaused_Event_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Unpaused_Event_ManyArgs = {
  updates: Array<Unpaused_Event_Updates>;
};

/** response of any mutation on the table "balance_collected_event" */
export type Balance_Collected_Event_Mutation_Response = {
  __typename?: "balance_collected_event_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Balance_Collected_Event>;
};

/** response of any mutation on the table "collateral_added_event" */
export type Collateral_Added_Event_Mutation_Response = {
  __typename?: "collateral_added_event_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Collateral_Added_Event>;
};

/** response of any mutation on the table "collateral_removed_event" */
export type Collateral_Removed_Event_Mutation_Response = {
  __typename?: "collateral_removed_event_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Collateral_Removed_Event>;
};

/** response of any mutation on the table "contango_yield_admin_changed_event" */
export type Contango_Yield_Admin_Changed_Event_Mutation_Response = {
  __typename?: "contango_yield_admin_changed_event_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Contango_Yield_Admin_Changed_Event>;
};

/** response of any mutation on the table "contango_yield_beacon_upgraded_event" */
export type Contango_Yield_Beacon_Upgraded_Event_Mutation_Response = {
  __typename?: "contango_yield_beacon_upgraded_event_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Contango_Yield_Beacon_Upgraded_Event>;
};

/** response of any mutation on the table "contango_yield_upgraded_event" */
export type Contango_Yield_Upgraded_Event_Mutation_Response = {
  __typename?: "contango_yield_upgraded_event_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Contango_Yield_Upgraded_Event>;
};

/** response of any mutation on the table "contract_traded_event" */
export type Contract_Traded_Event_Mutation_Response = {
  __typename?: "contract_traded_event_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Contract_Traded_Event>;
};

/** response of any mutation on the table "initialized_event" */
export type Initialized_Event_Mutation_Response = {
  __typename?: "initialized_event_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Initialized_Event>;
};

/** response of any mutation on the table "paused_event" */
export type Paused_Event_Mutation_Response = {
  __typename?: "paused_event_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Paused_Event>;
};

/** response of any mutation on the table "position_closed_event" */
export type Position_Closed_Event_Mutation_Response = {
  __typename?: "position_closed_event_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Position_Closed_Event>;
};

/** response of any mutation on the table "position_delivered_event" */
export type Position_Delivered_Event_Mutation_Response = {
  __typename?: "position_delivered_event_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Position_Delivered_Event>;
};

/** response of any mutation on the table "position_liquidated_event" */
export type Position_Liquidated_Event_Mutation_Response = {
  __typename?: "position_liquidated_event_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Position_Liquidated_Event>;
};

/** response of any mutation on the table "position_upserted_event" */
export type Position_Upserted_Event_Mutation_Response = {
  __typename?: "position_upserted_event_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Position_Upserted_Event>;
};

/** response of any mutation on the table "role_admin_changed_event" */
export type Role_Admin_Changed_Event_Mutation_Response = {
  __typename?: "role_admin_changed_event_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Role_Admin_Changed_Event>;
};

/** response of any mutation on the table "role_granted_event" */
export type Role_Granted_Event_Mutation_Response = {
  __typename?: "role_granted_event_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Role_Granted_Event>;
};

/** response of any mutation on the table "role_revoked_event" */
export type Role_Revoked_Event_Mutation_Response = {
  __typename?: "role_revoked_event_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Role_Revoked_Event>;
};

/** response of any mutation on the table "unpaused_event" */
export type Unpaused_Event_Mutation_Response = {
  __typename?: "unpaused_event_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Unpaused_Event>;
};

/** input type for inserting data into table "balance_collected_event" */
export type Balance_Collected_Event_Insert_Input = {
  amount?: InputMaybe<Scalars["numeric"]>;
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  to?: InputMaybe<Scalars["String"]>;
  token?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** on_conflict condition type for table "balance_collected_event" */
export type Balance_Collected_Event_On_Conflict = {
  constraint: Balance_Collected_Event_Constraint;
  update_columns?: Array<Balance_Collected_Event_Update_Column>;
  where?: InputMaybe<Balance_Collected_Event_Bool_Exp>;
};

/** unique or primary key constraints on table "balance_collected_event" */
export enum Balance_Collected_Event_Constraint {
  /** unique or primary key constraint on columns "id" */
  BalanceCollectedEventPkey = "balance_collected_event_pkey",
}

/** update columns of table "balance_collected_event" */
export enum Balance_Collected_Event_Update_Column {
  /** column name */
  Amount = "amount",
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  To = "to",
  /** column name */
  Token = "token",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** input type for inserting data into table "collateral_added_event" */
export type Collateral_Added_Event_Insert_Input = {
  amount?: InputMaybe<Scalars["numeric"]>;
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  cost?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
  symbol?: InputMaybe<Scalars["String"]>;
  trader?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** on_conflict condition type for table "collateral_added_event" */
export type Collateral_Added_Event_On_Conflict = {
  constraint: Collateral_Added_Event_Constraint;
  update_columns?: Array<Collateral_Added_Event_Update_Column>;
  where?: InputMaybe<Collateral_Added_Event_Bool_Exp>;
};

/** unique or primary key constraints on table "collateral_added_event" */
export enum Collateral_Added_Event_Constraint {
  /** unique or primary key constraint on columns "id" */
  CollateralAddedEventPkey = "collateral_added_event_pkey",
}

/** update columns of table "collateral_added_event" */
export enum Collateral_Added_Event_Update_Column {
  /** column name */
  Amount = "amount",
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Cost = "cost",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  PositionId = "positionId",
  /** column name */
  Symbol = "symbol",
  /** column name */
  Trader = "trader",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** input type for inserting data into table "collateral_removed_event" */
export type Collateral_Removed_Event_Insert_Input = {
  amount?: InputMaybe<Scalars["numeric"]>;
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  cost?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
  symbol?: InputMaybe<Scalars["String"]>;
  trader?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** on_conflict condition type for table "collateral_removed_event" */
export type Collateral_Removed_Event_On_Conflict = {
  constraint: Collateral_Removed_Event_Constraint;
  update_columns?: Array<Collateral_Removed_Event_Update_Column>;
  where?: InputMaybe<Collateral_Removed_Event_Bool_Exp>;
};

/** unique or primary key constraints on table "collateral_removed_event" */
export enum Collateral_Removed_Event_Constraint {
  /** unique or primary key constraint on columns "id" */
  CollateralRemovedEventPkey = "collateral_removed_event_pkey",
}

/** update columns of table "collateral_removed_event" */
export enum Collateral_Removed_Event_Update_Column {
  /** column name */
  Amount = "amount",
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Cost = "cost",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  PositionId = "positionId",
  /** column name */
  Symbol = "symbol",
  /** column name */
  Trader = "trader",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** input type for inserting data into table "contango_yield_admin_changed_event" */
export type Contango_Yield_Admin_Changed_Event_Insert_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  newAdmin?: InputMaybe<Scalars["String"]>;
  previousAdmin?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** on_conflict condition type for table "contango_yield_admin_changed_event" */
export type Contango_Yield_Admin_Changed_Event_On_Conflict = {
  constraint: Contango_Yield_Admin_Changed_Event_Constraint;
  update_columns?: Array<Contango_Yield_Admin_Changed_Event_Update_Column>;
  where?: InputMaybe<Contango_Yield_Admin_Changed_Event_Bool_Exp>;
};

/** unique or primary key constraints on table "contango_yield_admin_changed_event" */
export enum Contango_Yield_Admin_Changed_Event_Constraint {
  /** unique or primary key constraint on columns "id" */
  ContangoYieldAdminChangedEventPkey = "contango_yield_admin_changed_event_pkey",
}

/** update columns of table "contango_yield_admin_changed_event" */
export enum Contango_Yield_Admin_Changed_Event_Update_Column {
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  NewAdmin = "newAdmin",
  /** column name */
  PreviousAdmin = "previousAdmin",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** input type for inserting data into table "contango_yield_beacon_upgraded_event" */
export type Contango_Yield_Beacon_Upgraded_Event_Insert_Input = {
  beacon?: InputMaybe<Scalars["String"]>;
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** on_conflict condition type for table "contango_yield_beacon_upgraded_event" */
export type Contango_Yield_Beacon_Upgraded_Event_On_Conflict = {
  constraint: Contango_Yield_Beacon_Upgraded_Event_Constraint;
  update_columns?: Array<Contango_Yield_Beacon_Upgraded_Event_Update_Column>;
  where?: InputMaybe<Contango_Yield_Beacon_Upgraded_Event_Bool_Exp>;
};

/** unique or primary key constraints on table "contango_yield_beacon_upgraded_event" */
export enum Contango_Yield_Beacon_Upgraded_Event_Constraint {
  /** unique or primary key constraint on columns "id" */
  ContangoYieldBeaconUpgradedEventPkey = "contango_yield_beacon_upgraded_event_pkey",
}

/** update columns of table "contango_yield_beacon_upgraded_event" */
export enum Contango_Yield_Beacon_Upgraded_Event_Update_Column {
  /** column name */
  Beacon = "beacon",
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** input type for inserting data into table "contango_yield_upgraded_event" */
export type Contango_Yield_Upgraded_Event_Insert_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  implementation?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** on_conflict condition type for table "contango_yield_upgraded_event" */
export type Contango_Yield_Upgraded_Event_On_Conflict = {
  constraint: Contango_Yield_Upgraded_Event_Constraint;
  update_columns?: Array<Contango_Yield_Upgraded_Event_Update_Column>;
  where?: InputMaybe<Contango_Yield_Upgraded_Event_Bool_Exp>;
};

/** unique or primary key constraints on table "contango_yield_upgraded_event" */
export enum Contango_Yield_Upgraded_Event_Constraint {
  /** unique or primary key constraint on columns "id" */
  ContangoYieldUpgradedEventPkey = "contango_yield_upgraded_event_pkey",
}

/** update columns of table "contango_yield_upgraded_event" */
export enum Contango_Yield_Upgraded_Event_Update_Column {
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Id = "id",
  /** column name */
  Implementation = "implementation",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** input type for inserting data into table "contract_traded_event" */
export type Contract_Traded_Event_Insert_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  fill?: InputMaybe<Scalars["jsonb"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
  symbol?: InputMaybe<Scalars["String"]>;
  trader?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** on_conflict condition type for table "contract_traded_event" */
export type Contract_Traded_Event_On_Conflict = {
  constraint: Contract_Traded_Event_Constraint;
  update_columns?: Array<Contract_Traded_Event_Update_Column>;
  where?: InputMaybe<Contract_Traded_Event_Bool_Exp>;
};

/** unique or primary key constraints on table "contract_traded_event" */
export enum Contract_Traded_Event_Constraint {
  /** unique or primary key constraint on columns "id" */
  ContractTradedEventPkey = "contract_traded_event_pkey",
}

/** update columns of table "contract_traded_event" */
export enum Contract_Traded_Event_Update_Column {
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Fill = "fill",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  PositionId = "positionId",
  /** column name */
  Symbol = "symbol",
  /** column name */
  Trader = "trader",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** input type for inserting data into table "initialized_event" */
export type Initialized_Event_Insert_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
  version?: InputMaybe<Scalars["numeric"]>;
};

/** on_conflict condition type for table "initialized_event" */
export type Initialized_Event_On_Conflict = {
  constraint: Initialized_Event_Constraint;
  update_columns?: Array<Initialized_Event_Update_Column>;
  where?: InputMaybe<Initialized_Event_Bool_Exp>;
};

/** unique or primary key constraints on table "initialized_event" */
export enum Initialized_Event_Constraint {
  /** unique or primary key constraint on columns "id" */
  InitializedEventPkey = "initialized_event_pkey",
}

/** update columns of table "initialized_event" */
export enum Initialized_Event_Update_Column {
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  TransactionHash = "transaction_hash",
  /** column name */
  Version = "version",
}

/** input type for inserting data into table "paused_event" */
export type Paused_Event_Insert_Input = {
  account?: InputMaybe<Scalars["String"]>;
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** on_conflict condition type for table "paused_event" */
export type Paused_Event_On_Conflict = {
  constraint: Paused_Event_Constraint;
  update_columns?: Array<Paused_Event_Update_Column>;
  where?: InputMaybe<Paused_Event_Bool_Exp>;
};

/** unique or primary key constraints on table "paused_event" */
export enum Paused_Event_Constraint {
  /** unique or primary key constraint on columns "id" */
  PausedEventPkey = "paused_event_pkey",
}

/** update columns of table "paused_event" */
export enum Paused_Event_Update_Column {
  /** column name */
  Account = "account",
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** input type for inserting data into table "position_closed_event" */
export type Position_Closed_Event_Insert_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  closedCost?: InputMaybe<Scalars["numeric"]>;
  closedQuantity?: InputMaybe<Scalars["numeric"]>;
  collateral?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
  realisedPnL?: InputMaybe<Scalars["numeric"]>;
  symbol?: InputMaybe<Scalars["String"]>;
  totalFees?: InputMaybe<Scalars["numeric"]>;
  trader?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
  txFees?: InputMaybe<Scalars["numeric"]>;
};

/** on_conflict condition type for table "position_closed_event" */
export type Position_Closed_Event_On_Conflict = {
  constraint: Position_Closed_Event_Constraint;
  update_columns?: Array<Position_Closed_Event_Update_Column>;
  where?: InputMaybe<Position_Closed_Event_Bool_Exp>;
};

/** unique or primary key constraints on table "position_closed_event" */
export enum Position_Closed_Event_Constraint {
  /** unique or primary key constraint on columns "id" */
  PositionClosedEventPkey = "position_closed_event_pkey",
}

/** update columns of table "position_closed_event" */
export enum Position_Closed_Event_Update_Column {
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  ClosedCost = "closedCost",
  /** column name */
  ClosedQuantity = "closedQuantity",
  /** column name */
  Collateral = "collateral",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  PositionId = "positionId",
  /** column name */
  RealisedPnL = "realisedPnL",
  /** column name */
  Symbol = "symbol",
  /** column name */
  TotalFees = "totalFees",
  /** column name */
  Trader = "trader",
  /** column name */
  TransactionHash = "transaction_hash",
  /** column name */
  TxFees = "txFees",
}

/** input type for inserting data into table "position_delivered_event" */
export type Position_Delivered_Event_Insert_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  deliveredQuantity?: InputMaybe<Scalars["numeric"]>;
  deliveryCost?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
  symbol?: InputMaybe<Scalars["String"]>;
  to?: InputMaybe<Scalars["String"]>;
  totalFees?: InputMaybe<Scalars["numeric"]>;
  trader?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** on_conflict condition type for table "position_delivered_event" */
export type Position_Delivered_Event_On_Conflict = {
  constraint: Position_Delivered_Event_Constraint;
  update_columns?: Array<Position_Delivered_Event_Update_Column>;
  where?: InputMaybe<Position_Delivered_Event_Bool_Exp>;
};

/** unique or primary key constraints on table "position_delivered_event" */
export enum Position_Delivered_Event_Constraint {
  /** unique or primary key constraint on columns "id" */
  PositionDeliveredEventPkey = "position_delivered_event_pkey",
}

/** update columns of table "position_delivered_event" */
export enum Position_Delivered_Event_Update_Column {
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  DeliveredQuantity = "deliveredQuantity",
  /** column name */
  DeliveryCost = "deliveryCost",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  PositionId = "positionId",
  /** column name */
  Symbol = "symbol",
  /** column name */
  To = "to",
  /** column name */
  TotalFees = "totalFees",
  /** column name */
  Trader = "trader",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** input type for inserting data into table "position_liquidated_event" */
export type Position_Liquidated_Event_Insert_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  collateral?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  openCost?: InputMaybe<Scalars["numeric"]>;
  openQuantity?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
  realisedPnL?: InputMaybe<Scalars["numeric"]>;
  symbol?: InputMaybe<Scalars["String"]>;
  trader?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** on_conflict condition type for table "position_liquidated_event" */
export type Position_Liquidated_Event_On_Conflict = {
  constraint: Position_Liquidated_Event_Constraint;
  update_columns?: Array<Position_Liquidated_Event_Update_Column>;
  where?: InputMaybe<Position_Liquidated_Event_Bool_Exp>;
};

/** unique or primary key constraints on table "position_liquidated_event" */
export enum Position_Liquidated_Event_Constraint {
  /** unique or primary key constraint on columns "id" */
  PositionLiquidatedEventPkey = "position_liquidated_event_pkey",
}

/** update columns of table "position_liquidated_event" */
export enum Position_Liquidated_Event_Update_Column {
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Collateral = "collateral",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  OpenCost = "openCost",
  /** column name */
  OpenQuantity = "openQuantity",
  /** column name */
  PositionId = "positionId",
  /** column name */
  RealisedPnL = "realisedPnL",
  /** column name */
  Symbol = "symbol",
  /** column name */
  Trader = "trader",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** input type for inserting data into table "position_upserted_event" */
export type Position_Upserted_Event_Insert_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  collateral?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  openCost?: InputMaybe<Scalars["numeric"]>;
  openQuantity?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
  realisedPnL?: InputMaybe<Scalars["numeric"]>;
  symbol?: InputMaybe<Scalars["String"]>;
  totalFees?: InputMaybe<Scalars["numeric"]>;
  trader?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
  txFees?: InputMaybe<Scalars["numeric"]>;
};

/** on_conflict condition type for table "position_upserted_event" */
export type Position_Upserted_Event_On_Conflict = {
  constraint: Position_Upserted_Event_Constraint;
  update_columns?: Array<Position_Upserted_Event_Update_Column>;
  where?: InputMaybe<Position_Upserted_Event_Bool_Exp>;
};

/** unique or primary key constraints on table "position_upserted_event" */
export enum Position_Upserted_Event_Constraint {
  /** unique or primary key constraint on columns "id" */
  PositionUpsertedEventPkey = "position_upserted_event_pkey",
}

/** update columns of table "position_upserted_event" */
export enum Position_Upserted_Event_Update_Column {
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Collateral = "collateral",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  OpenCost = "openCost",
  /** column name */
  OpenQuantity = "openQuantity",
  /** column name */
  PositionId = "positionId",
  /** column name */
  RealisedPnL = "realisedPnL",
  /** column name */
  Symbol = "symbol",
  /** column name */
  TotalFees = "totalFees",
  /** column name */
  Trader = "trader",
  /** column name */
  TransactionHash = "transaction_hash",
  /** column name */
  TxFees = "txFees",
}

/** input type for inserting data into table "role_admin_changed_event" */
export type Role_Admin_Changed_Event_Insert_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  newAdminRole?: InputMaybe<Scalars["String"]>;
  previousAdminRole?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** on_conflict condition type for table "role_admin_changed_event" */
export type Role_Admin_Changed_Event_On_Conflict = {
  constraint: Role_Admin_Changed_Event_Constraint;
  update_columns?: Array<Role_Admin_Changed_Event_Update_Column>;
  where?: InputMaybe<Role_Admin_Changed_Event_Bool_Exp>;
};

/** unique or primary key constraints on table "role_admin_changed_event" */
export enum Role_Admin_Changed_Event_Constraint {
  /** unique or primary key constraint on columns "id" */
  RoleAdminChangedEventPkey = "role_admin_changed_event_pkey",
}

/** update columns of table "role_admin_changed_event" */
export enum Role_Admin_Changed_Event_Update_Column {
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  NewAdminRole = "newAdminRole",
  /** column name */
  PreviousAdminRole = "previousAdminRole",
  /** column name */
  Role = "role",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** input type for inserting data into table "role_granted_event" */
export type Role_Granted_Event_Insert_Input = {
  account?: InputMaybe<Scalars["String"]>;
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  role?: InputMaybe<Scalars["String"]>;
  sender?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** on_conflict condition type for table "role_granted_event" */
export type Role_Granted_Event_On_Conflict = {
  constraint: Role_Granted_Event_Constraint;
  update_columns?: Array<Role_Granted_Event_Update_Column>;
  where?: InputMaybe<Role_Granted_Event_Bool_Exp>;
};

/** unique or primary key constraints on table "role_granted_event" */
export enum Role_Granted_Event_Constraint {
  /** unique or primary key constraint on columns "id" */
  RoleGrantedEventPkey = "role_granted_event_pkey",
}

/** update columns of table "role_granted_event" */
export enum Role_Granted_Event_Update_Column {
  /** column name */
  Account = "account",
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  Role = "role",
  /** column name */
  Sender = "sender",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** input type for inserting data into table "role_revoked_event" */
export type Role_Revoked_Event_Insert_Input = {
  account?: InputMaybe<Scalars["String"]>;
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  role?: InputMaybe<Scalars["String"]>;
  sender?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** on_conflict condition type for table "role_revoked_event" */
export type Role_Revoked_Event_On_Conflict = {
  constraint: Role_Revoked_Event_Constraint;
  update_columns?: Array<Role_Revoked_Event_Update_Column>;
  where?: InputMaybe<Role_Revoked_Event_Bool_Exp>;
};

/** unique or primary key constraints on table "role_revoked_event" */
export enum Role_Revoked_Event_Constraint {
  /** unique or primary key constraint on columns "id" */
  RoleRevokedEventPkey = "role_revoked_event_pkey",
}

/** update columns of table "role_revoked_event" */
export enum Role_Revoked_Event_Update_Column {
  /** column name */
  Account = "account",
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  Role = "role",
  /** column name */
  Sender = "sender",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** input type for inserting data into table "unpaused_event" */
export type Unpaused_Event_Insert_Input = {
  account?: InputMaybe<Scalars["String"]>;
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** on_conflict condition type for table "unpaused_event" */
export type Unpaused_Event_On_Conflict = {
  constraint: Unpaused_Event_Constraint;
  update_columns?: Array<Unpaused_Event_Update_Column>;
  where?: InputMaybe<Unpaused_Event_Bool_Exp>;
};

/** unique or primary key constraints on table "unpaused_event" */
export enum Unpaused_Event_Constraint {
  /** unique or primary key constraint on columns "id" */
  UnpausedEventPkey = "unpaused_event_pkey",
}

/** update columns of table "unpaused_event" */
export enum Unpaused_Event_Update_Column {
  /** column name */
  Account = "account",
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  Id = "id",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  TransactionHash = "transaction_hash",
}

/** input type for incrementing numeric columns in table "balance_collected_event" */
export type Balance_Collected_Event_Inc_Input = {
  amount?: InputMaybe<Scalars["numeric"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
};

/** input type for updating data in table "balance_collected_event" */
export type Balance_Collected_Event_Set_Input = {
  amount?: InputMaybe<Scalars["numeric"]>;
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  to?: InputMaybe<Scalars["String"]>;
  token?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** primary key columns input for table: balance_collected_event */
export type Balance_Collected_Event_Pk_Columns_Input = {
  id: Scalars["String"];
};

export type Balance_Collected_Event_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Balance_Collected_Event_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Balance_Collected_Event_Set_Input>;
  /** filter the rows which have to be updated */
  where: Balance_Collected_Event_Bool_Exp;
};

/** input type for incrementing numeric columns in table "collateral_added_event" */
export type Collateral_Added_Event_Inc_Input = {
  amount?: InputMaybe<Scalars["numeric"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  cost?: InputMaybe<Scalars["numeric"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
};

/** input type for updating data in table "collateral_added_event" */
export type Collateral_Added_Event_Set_Input = {
  amount?: InputMaybe<Scalars["numeric"]>;
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  cost?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
  symbol?: InputMaybe<Scalars["String"]>;
  trader?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** primary key columns input for table: collateral_added_event */
export type Collateral_Added_Event_Pk_Columns_Input = {
  id: Scalars["String"];
};

export type Collateral_Added_Event_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Collateral_Added_Event_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Collateral_Added_Event_Set_Input>;
  /** filter the rows which have to be updated */
  where: Collateral_Added_Event_Bool_Exp;
};

/** input type for incrementing numeric columns in table "collateral_removed_event" */
export type Collateral_Removed_Event_Inc_Input = {
  amount?: InputMaybe<Scalars["numeric"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  cost?: InputMaybe<Scalars["numeric"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
};

/** input type for updating data in table "collateral_removed_event" */
export type Collateral_Removed_Event_Set_Input = {
  amount?: InputMaybe<Scalars["numeric"]>;
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  cost?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
  symbol?: InputMaybe<Scalars["String"]>;
  trader?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** primary key columns input for table: collateral_removed_event */
export type Collateral_Removed_Event_Pk_Columns_Input = {
  id: Scalars["String"];
};

export type Collateral_Removed_Event_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Collateral_Removed_Event_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Collateral_Removed_Event_Set_Input>;
  /** filter the rows which have to be updated */
  where: Collateral_Removed_Event_Bool_Exp;
};

/** input type for incrementing numeric columns in table "contango_yield_admin_changed_event" */
export type Contango_Yield_Admin_Changed_Event_Inc_Input = {
  block_number?: InputMaybe<Scalars["numeric"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
};

/** input type for updating data in table "contango_yield_admin_changed_event" */
export type Contango_Yield_Admin_Changed_Event_Set_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  newAdmin?: InputMaybe<Scalars["String"]>;
  previousAdmin?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** primary key columns input for table: contango_yield_admin_changed_event */
export type Contango_Yield_Admin_Changed_Event_Pk_Columns_Input = {
  id: Scalars["String"];
};

export type Contango_Yield_Admin_Changed_Event_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Contango_Yield_Admin_Changed_Event_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Contango_Yield_Admin_Changed_Event_Set_Input>;
  /** filter the rows which have to be updated */
  where: Contango_Yield_Admin_Changed_Event_Bool_Exp;
};

/** input type for incrementing numeric columns in table "contango_yield_beacon_upgraded_event" */
export type Contango_Yield_Beacon_Upgraded_Event_Inc_Input = {
  block_number?: InputMaybe<Scalars["numeric"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
};

/** input type for updating data in table "contango_yield_beacon_upgraded_event" */
export type Contango_Yield_Beacon_Upgraded_Event_Set_Input = {
  beacon?: InputMaybe<Scalars["String"]>;
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** primary key columns input for table: contango_yield_beacon_upgraded_event */
export type Contango_Yield_Beacon_Upgraded_Event_Pk_Columns_Input = {
  id: Scalars["String"];
};

export type Contango_Yield_Beacon_Upgraded_Event_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Contango_Yield_Beacon_Upgraded_Event_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Contango_Yield_Beacon_Upgraded_Event_Set_Input>;
  /** filter the rows which have to be updated */
  where: Contango_Yield_Beacon_Upgraded_Event_Bool_Exp;
};

/** input type for incrementing numeric columns in table "contango_yield_upgraded_event" */
export type Contango_Yield_Upgraded_Event_Inc_Input = {
  block_number?: InputMaybe<Scalars["numeric"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
};

/** input type for updating data in table "contango_yield_upgraded_event" */
export type Contango_Yield_Upgraded_Event_Set_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  implementation?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** primary key columns input for table: contango_yield_upgraded_event */
export type Contango_Yield_Upgraded_Event_Pk_Columns_Input = {
  id: Scalars["String"];
};

export type Contango_Yield_Upgraded_Event_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Contango_Yield_Upgraded_Event_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Contango_Yield_Upgraded_Event_Set_Input>;
  /** filter the rows which have to be updated */
  where: Contango_Yield_Upgraded_Event_Bool_Exp;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Contract_Traded_Event_Append_Input = {
  fill?: InputMaybe<Scalars["jsonb"]>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Contract_Traded_Event_Delete_At_Path_Input = {
  fill?: InputMaybe<Array<Scalars["String"]>>;
};

/**
 * delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Contract_Traded_Event_Delete_Elem_Input = {
  fill?: InputMaybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Contract_Traded_Event_Delete_Key_Input = {
  fill?: InputMaybe<Scalars["String"]>;
};

/** input type for incrementing numeric columns in table "contract_traded_event" */
export type Contract_Traded_Event_Inc_Input = {
  block_number?: InputMaybe<Scalars["numeric"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Contract_Traded_Event_Prepend_Input = {
  fill?: InputMaybe<Scalars["jsonb"]>;
};

/** input type for updating data in table "contract_traded_event" */
export type Contract_Traded_Event_Set_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  fill?: InputMaybe<Scalars["jsonb"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
  symbol?: InputMaybe<Scalars["String"]>;
  trader?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** primary key columns input for table: contract_traded_event */
export type Contract_Traded_Event_Pk_Columns_Input = {
  id: Scalars["String"];
};

export type Contract_Traded_Event_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Contract_Traded_Event_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Contract_Traded_Event_Delete_At_Path_Input>;
  /**
   * delete the array element with specified index (negative integers count from
   * the end). throws an error if top level container is not an array
   */
  _delete_elem?: InputMaybe<Contract_Traded_Event_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Contract_Traded_Event_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Contract_Traded_Event_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Contract_Traded_Event_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Contract_Traded_Event_Set_Input>;
  /** filter the rows which have to be updated */
  where: Contract_Traded_Event_Bool_Exp;
};

/** input type for incrementing numeric columns in table "initialized_event" */
export type Initialized_Event_Inc_Input = {
  block_number?: InputMaybe<Scalars["numeric"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  version?: InputMaybe<Scalars["numeric"]>;
};

/** input type for updating data in table "initialized_event" */
export type Initialized_Event_Set_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
  version?: InputMaybe<Scalars["numeric"]>;
};

/** primary key columns input for table: initialized_event */
export type Initialized_Event_Pk_Columns_Input = {
  id: Scalars["String"];
};

export type Initialized_Event_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Initialized_Event_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Initialized_Event_Set_Input>;
  /** filter the rows which have to be updated */
  where: Initialized_Event_Bool_Exp;
};

/** input type for incrementing numeric columns in table "paused_event" */
export type Paused_Event_Inc_Input = {
  block_number?: InputMaybe<Scalars["numeric"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
};

/** input type for updating data in table "paused_event" */
export type Paused_Event_Set_Input = {
  account?: InputMaybe<Scalars["String"]>;
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** primary key columns input for table: paused_event */
export type Paused_Event_Pk_Columns_Input = {
  id: Scalars["String"];
};

export type Paused_Event_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Paused_Event_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Paused_Event_Set_Input>;
  /** filter the rows which have to be updated */
  where: Paused_Event_Bool_Exp;
};

/** input type for incrementing numeric columns in table "position_closed_event" */
export type Position_Closed_Event_Inc_Input = {
  block_number?: InputMaybe<Scalars["numeric"]>;
  closedCost?: InputMaybe<Scalars["numeric"]>;
  closedQuantity?: InputMaybe<Scalars["numeric"]>;
  collateral?: InputMaybe<Scalars["numeric"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
  realisedPnL?: InputMaybe<Scalars["numeric"]>;
  totalFees?: InputMaybe<Scalars["numeric"]>;
  txFees?: InputMaybe<Scalars["numeric"]>;
};

/** input type for updating data in table "position_closed_event" */
export type Position_Closed_Event_Set_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  closedCost?: InputMaybe<Scalars["numeric"]>;
  closedQuantity?: InputMaybe<Scalars["numeric"]>;
  collateral?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
  realisedPnL?: InputMaybe<Scalars["numeric"]>;
  symbol?: InputMaybe<Scalars["String"]>;
  totalFees?: InputMaybe<Scalars["numeric"]>;
  trader?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
  txFees?: InputMaybe<Scalars["numeric"]>;
};

/** primary key columns input for table: position_closed_event */
export type Position_Closed_Event_Pk_Columns_Input = {
  id: Scalars["String"];
};

export type Position_Closed_Event_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Position_Closed_Event_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Position_Closed_Event_Set_Input>;
  /** filter the rows which have to be updated */
  where: Position_Closed_Event_Bool_Exp;
};

/** input type for incrementing numeric columns in table "position_delivered_event" */
export type Position_Delivered_Event_Inc_Input = {
  block_number?: InputMaybe<Scalars["numeric"]>;
  deliveredQuantity?: InputMaybe<Scalars["numeric"]>;
  deliveryCost?: InputMaybe<Scalars["numeric"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
  totalFees?: InputMaybe<Scalars["numeric"]>;
};

/** input type for updating data in table "position_delivered_event" */
export type Position_Delivered_Event_Set_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  deliveredQuantity?: InputMaybe<Scalars["numeric"]>;
  deliveryCost?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
  symbol?: InputMaybe<Scalars["String"]>;
  to?: InputMaybe<Scalars["String"]>;
  totalFees?: InputMaybe<Scalars["numeric"]>;
  trader?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** primary key columns input for table: position_delivered_event */
export type Position_Delivered_Event_Pk_Columns_Input = {
  id: Scalars["String"];
};

export type Position_Delivered_Event_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Position_Delivered_Event_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Position_Delivered_Event_Set_Input>;
  /** filter the rows which have to be updated */
  where: Position_Delivered_Event_Bool_Exp;
};

/** input type for incrementing numeric columns in table "position_liquidated_event" */
export type Position_Liquidated_Event_Inc_Input = {
  block_number?: InputMaybe<Scalars["numeric"]>;
  collateral?: InputMaybe<Scalars["numeric"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  openCost?: InputMaybe<Scalars["numeric"]>;
  openQuantity?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
  realisedPnL?: InputMaybe<Scalars["numeric"]>;
};

/** input type for updating data in table "position_liquidated_event" */
export type Position_Liquidated_Event_Set_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  collateral?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  openCost?: InputMaybe<Scalars["numeric"]>;
  openQuantity?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
  realisedPnL?: InputMaybe<Scalars["numeric"]>;
  symbol?: InputMaybe<Scalars["String"]>;
  trader?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** primary key columns input for table: position_liquidated_event */
export type Position_Liquidated_Event_Pk_Columns_Input = {
  id: Scalars["String"];
};

export type Position_Liquidated_Event_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Position_Liquidated_Event_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Position_Liquidated_Event_Set_Input>;
  /** filter the rows which have to be updated */
  where: Position_Liquidated_Event_Bool_Exp;
};

/** input type for incrementing numeric columns in table "position_upserted_event" */
export type Position_Upserted_Event_Inc_Input = {
  block_number?: InputMaybe<Scalars["numeric"]>;
  collateral?: InputMaybe<Scalars["numeric"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  openCost?: InputMaybe<Scalars["numeric"]>;
  openQuantity?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
  realisedPnL?: InputMaybe<Scalars["numeric"]>;
  totalFees?: InputMaybe<Scalars["numeric"]>;
  txFees?: InputMaybe<Scalars["numeric"]>;
};

/** input type for updating data in table "position_upserted_event" */
export type Position_Upserted_Event_Set_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  collateral?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  openCost?: InputMaybe<Scalars["numeric"]>;
  openQuantity?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
  realisedPnL?: InputMaybe<Scalars["numeric"]>;
  symbol?: InputMaybe<Scalars["String"]>;
  totalFees?: InputMaybe<Scalars["numeric"]>;
  trader?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
  txFees?: InputMaybe<Scalars["numeric"]>;
};

/** primary key columns input for table: position_upserted_event */
export type Position_Upserted_Event_Pk_Columns_Input = {
  id: Scalars["String"];
};

export type Position_Upserted_Event_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Position_Upserted_Event_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Position_Upserted_Event_Set_Input>;
  /** filter the rows which have to be updated */
  where: Position_Upserted_Event_Bool_Exp;
};

/** input type for incrementing numeric columns in table "role_admin_changed_event" */
export type Role_Admin_Changed_Event_Inc_Input = {
  block_number?: InputMaybe<Scalars["numeric"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
};

/** input type for updating data in table "role_admin_changed_event" */
export type Role_Admin_Changed_Event_Set_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  newAdminRole?: InputMaybe<Scalars["String"]>;
  previousAdminRole?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** primary key columns input for table: role_admin_changed_event */
export type Role_Admin_Changed_Event_Pk_Columns_Input = {
  id: Scalars["String"];
};

export type Role_Admin_Changed_Event_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Role_Admin_Changed_Event_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Role_Admin_Changed_Event_Set_Input>;
  /** filter the rows which have to be updated */
  where: Role_Admin_Changed_Event_Bool_Exp;
};

/** input type for incrementing numeric columns in table "role_granted_event" */
export type Role_Granted_Event_Inc_Input = {
  block_number?: InputMaybe<Scalars["numeric"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
};

/** input type for updating data in table "role_granted_event" */
export type Role_Granted_Event_Set_Input = {
  account?: InputMaybe<Scalars["String"]>;
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  role?: InputMaybe<Scalars["String"]>;
  sender?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** primary key columns input for table: role_granted_event */
export type Role_Granted_Event_Pk_Columns_Input = {
  id: Scalars["String"];
};

export type Role_Granted_Event_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Role_Granted_Event_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Role_Granted_Event_Set_Input>;
  /** filter the rows which have to be updated */
  where: Role_Granted_Event_Bool_Exp;
};

/** input type for incrementing numeric columns in table "role_revoked_event" */
export type Role_Revoked_Event_Inc_Input = {
  block_number?: InputMaybe<Scalars["numeric"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
};

/** input type for updating data in table "role_revoked_event" */
export type Role_Revoked_Event_Set_Input = {
  account?: InputMaybe<Scalars["String"]>;
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  role?: InputMaybe<Scalars["String"]>;
  sender?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** primary key columns input for table: role_revoked_event */
export type Role_Revoked_Event_Pk_Columns_Input = {
  id: Scalars["String"];
};

export type Role_Revoked_Event_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Role_Revoked_Event_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Role_Revoked_Event_Set_Input>;
  /** filter the rows which have to be updated */
  where: Role_Revoked_Event_Bool_Exp;
};

/** input type for incrementing numeric columns in table "unpaused_event" */
export type Unpaused_Event_Inc_Input = {
  block_number?: InputMaybe<Scalars["numeric"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
};

/** input type for updating data in table "unpaused_event" */
export type Unpaused_Event_Set_Input = {
  account?: InputMaybe<Scalars["String"]>;
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** primary key columns input for table: unpaused_event */
export type Unpaused_Event_Pk_Columns_Input = {
  id: Scalars["String"];
};

export type Unpaused_Event_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Unpaused_Event_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Unpaused_Event_Set_Input>;
  /** filter the rows which have to be updated */
  where: Unpaused_Event_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "balance_collected_event" */
  balance_collected_event: Array<Balance_Collected_Event>;
  /** fetch aggregated fields from the table: "balance_collected_event" */
  balance_collected_event_aggregate: Balance_Collected_Event_Aggregate;
  /** fetch data from the table: "balance_collected_event" using primary key columns */
  balance_collected_event_by_pk?: Maybe<Balance_Collected_Event>;
  /** fetch data from the table in a streaming manner: "balance_collected_event" */
  balance_collected_event_stream: Array<Balance_Collected_Event>;
  /** fetch data from the table: "collateral_added_event" */
  collateral_added_event: Array<Collateral_Added_Event>;
  /** fetch aggregated fields from the table: "collateral_added_event" */
  collateral_added_event_aggregate: Collateral_Added_Event_Aggregate;
  /** fetch data from the table: "collateral_added_event" using primary key columns */
  collateral_added_event_by_pk?: Maybe<Collateral_Added_Event>;
  /** fetch data from the table in a streaming manner: "collateral_added_event" */
  collateral_added_event_stream: Array<Collateral_Added_Event>;
  /** fetch data from the table: "collateral_removed_event" */
  collateral_removed_event: Array<Collateral_Removed_Event>;
  /** fetch aggregated fields from the table: "collateral_removed_event" */
  collateral_removed_event_aggregate: Collateral_Removed_Event_Aggregate;
  /** fetch data from the table: "collateral_removed_event" using primary key columns */
  collateral_removed_event_by_pk?: Maybe<Collateral_Removed_Event>;
  /** fetch data from the table in a streaming manner: "collateral_removed_event" */
  collateral_removed_event_stream: Array<Collateral_Removed_Event>;
  /** fetch data from the table: "contango_yield_admin_changed_event" */
  contango_yield_admin_changed_event: Array<Contango_Yield_Admin_Changed_Event>;
  /** fetch aggregated fields from the table: "contango_yield_admin_changed_event" */
  contango_yield_admin_changed_event_aggregate: Contango_Yield_Admin_Changed_Event_Aggregate;
  /** fetch data from the table: "contango_yield_admin_changed_event" using primary key columns */
  contango_yield_admin_changed_event_by_pk?: Maybe<Contango_Yield_Admin_Changed_Event>;
  /** fetch data from the table in a streaming manner: "contango_yield_admin_changed_event" */
  contango_yield_admin_changed_event_stream: Array<Contango_Yield_Admin_Changed_Event>;
  /** fetch data from the table: "contango_yield_beacon_upgraded_event" */
  contango_yield_beacon_upgraded_event: Array<Contango_Yield_Beacon_Upgraded_Event>;
  /** fetch aggregated fields from the table: "contango_yield_beacon_upgraded_event" */
  contango_yield_beacon_upgraded_event_aggregate: Contango_Yield_Beacon_Upgraded_Event_Aggregate;
  /** fetch data from the table: "contango_yield_beacon_upgraded_event" using primary key columns */
  contango_yield_beacon_upgraded_event_by_pk?: Maybe<Contango_Yield_Beacon_Upgraded_Event>;
  /** fetch data from the table in a streaming manner: "contango_yield_beacon_upgraded_event" */
  contango_yield_beacon_upgraded_event_stream: Array<Contango_Yield_Beacon_Upgraded_Event>;
  /** fetch data from the table: "contango_yield_upgraded_event" */
  contango_yield_upgraded_event: Array<Contango_Yield_Upgraded_Event>;
  /** fetch aggregated fields from the table: "contango_yield_upgraded_event" */
  contango_yield_upgraded_event_aggregate: Contango_Yield_Upgraded_Event_Aggregate;
  /** fetch data from the table: "contango_yield_upgraded_event" using primary key columns */
  contango_yield_upgraded_event_by_pk?: Maybe<Contango_Yield_Upgraded_Event>;
  /** fetch data from the table in a streaming manner: "contango_yield_upgraded_event" */
  contango_yield_upgraded_event_stream: Array<Contango_Yield_Upgraded_Event>;
  /** fetch data from the table: "contract_traded_event" */
  contract_traded_event: Array<Contract_Traded_Event>;
  /** fetch aggregated fields from the table: "contract_traded_event" */
  contract_traded_event_aggregate: Contract_Traded_Event_Aggregate;
  /** fetch data from the table: "contract_traded_event" using primary key columns */
  contract_traded_event_by_pk?: Maybe<Contract_Traded_Event>;
  /** fetch data from the table in a streaming manner: "contract_traded_event" */
  contract_traded_event_stream: Array<Contract_Traded_Event>;
  /** fetch data from the table: "initialized_event" */
  initialized_event: Array<Initialized_Event>;
  /** fetch aggregated fields from the table: "initialized_event" */
  initialized_event_aggregate: Initialized_Event_Aggregate;
  /** fetch data from the table: "initialized_event" using primary key columns */
  initialized_event_by_pk?: Maybe<Initialized_Event>;
  /** fetch data from the table in a streaming manner: "initialized_event" */
  initialized_event_stream: Array<Initialized_Event>;
  /** fetch data from the table: "paused_event" */
  paused_event: Array<Paused_Event>;
  /** fetch aggregated fields from the table: "paused_event" */
  paused_event_aggregate: Paused_Event_Aggregate;
  /** fetch data from the table: "paused_event" using primary key columns */
  paused_event_by_pk?: Maybe<Paused_Event>;
  /** fetch data from the table in a streaming manner: "paused_event" */
  paused_event_stream: Array<Paused_Event>;
  /** fetch data from the table: "position_closed_event" */
  position_closed_event: Array<Position_Closed_Event>;
  /** fetch aggregated fields from the table: "position_closed_event" */
  position_closed_event_aggregate: Position_Closed_Event_Aggregate;
  /** fetch data from the table: "position_closed_event" using primary key columns */
  position_closed_event_by_pk?: Maybe<Position_Closed_Event>;
  /** fetch data from the table in a streaming manner: "position_closed_event" */
  position_closed_event_stream: Array<Position_Closed_Event>;
  /** fetch data from the table: "position_delivered_event" */
  position_delivered_event: Array<Position_Delivered_Event>;
  /** fetch aggregated fields from the table: "position_delivered_event" */
  position_delivered_event_aggregate: Position_Delivered_Event_Aggregate;
  /** fetch data from the table: "position_delivered_event" using primary key columns */
  position_delivered_event_by_pk?: Maybe<Position_Delivered_Event>;
  /** fetch data from the table in a streaming manner: "position_delivered_event" */
  position_delivered_event_stream: Array<Position_Delivered_Event>;
  /** fetch data from the table: "position_liquidated_event" */
  position_liquidated_event: Array<Position_Liquidated_Event>;
  /** fetch aggregated fields from the table: "position_liquidated_event" */
  position_liquidated_event_aggregate: Position_Liquidated_Event_Aggregate;
  /** fetch data from the table: "position_liquidated_event" using primary key columns */
  position_liquidated_event_by_pk?: Maybe<Position_Liquidated_Event>;
  /** fetch data from the table in a streaming manner: "position_liquidated_event" */
  position_liquidated_event_stream: Array<Position_Liquidated_Event>;
  /** fetch data from the table: "position_upserted_event" */
  position_upserted_event: Array<Position_Upserted_Event>;
  /** fetch aggregated fields from the table: "position_upserted_event" */
  position_upserted_event_aggregate: Position_Upserted_Event_Aggregate;
  /** fetch data from the table: "position_upserted_event" using primary key columns */
  position_upserted_event_by_pk?: Maybe<Position_Upserted_Event>;
  /** fetch data from the table in a streaming manner: "position_upserted_event" */
  position_upserted_event_stream: Array<Position_Upserted_Event>;
  /** fetch data from the table: "role_admin_changed_event" */
  role_admin_changed_event: Array<Role_Admin_Changed_Event>;
  /** fetch aggregated fields from the table: "role_admin_changed_event" */
  role_admin_changed_event_aggregate: Role_Admin_Changed_Event_Aggregate;
  /** fetch data from the table: "role_admin_changed_event" using primary key columns */
  role_admin_changed_event_by_pk?: Maybe<Role_Admin_Changed_Event>;
  /** fetch data from the table in a streaming manner: "role_admin_changed_event" */
  role_admin_changed_event_stream: Array<Role_Admin_Changed_Event>;
  /** fetch data from the table: "role_granted_event" */
  role_granted_event: Array<Role_Granted_Event>;
  /** fetch aggregated fields from the table: "role_granted_event" */
  role_granted_event_aggregate: Role_Granted_Event_Aggregate;
  /** fetch data from the table: "role_granted_event" using primary key columns */
  role_granted_event_by_pk?: Maybe<Role_Granted_Event>;
  /** fetch data from the table in a streaming manner: "role_granted_event" */
  role_granted_event_stream: Array<Role_Granted_Event>;
  /** fetch data from the table: "role_revoked_event" */
  role_revoked_event: Array<Role_Revoked_Event>;
  /** fetch aggregated fields from the table: "role_revoked_event" */
  role_revoked_event_aggregate: Role_Revoked_Event_Aggregate;
  /** fetch data from the table: "role_revoked_event" using primary key columns */
  role_revoked_event_by_pk?: Maybe<Role_Revoked_Event>;
  /** fetch data from the table in a streaming manner: "role_revoked_event" */
  role_revoked_event_stream: Array<Role_Revoked_Event>;
  /** fetch data from the table: "unpaused_event" */
  unpaused_event: Array<Unpaused_Event>;
  /** fetch aggregated fields from the table: "unpaused_event" */
  unpaused_event_aggregate: Unpaused_Event_Aggregate;
  /** fetch data from the table: "unpaused_event" using primary key columns */
  unpaused_event_by_pk?: Maybe<Unpaused_Event>;
  /** fetch data from the table in a streaming manner: "unpaused_event" */
  unpaused_event_stream: Array<Unpaused_Event>;
};

export type Subscription_RootBalance_Collected_EventArgs = {
  distinct_on?: InputMaybe<Array<Balance_Collected_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Balance_Collected_Event_Order_By>>;
  where?: InputMaybe<Balance_Collected_Event_Bool_Exp>;
};

export type Subscription_RootBalance_Collected_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Balance_Collected_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Balance_Collected_Event_Order_By>>;
  where?: InputMaybe<Balance_Collected_Event_Bool_Exp>;
};

export type Subscription_RootBalance_Collected_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootBalance_Collected_Event_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Balance_Collected_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Balance_Collected_Event_Bool_Exp>;
};

export type Subscription_RootCollateral_Added_EventArgs = {
  distinct_on?: InputMaybe<Array<Collateral_Added_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Collateral_Added_Event_Order_By>>;
  where?: InputMaybe<Collateral_Added_Event_Bool_Exp>;
};

export type Subscription_RootCollateral_Added_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collateral_Added_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Collateral_Added_Event_Order_By>>;
  where?: InputMaybe<Collateral_Added_Event_Bool_Exp>;
};

export type Subscription_RootCollateral_Added_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootCollateral_Added_Event_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Collateral_Added_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Collateral_Added_Event_Bool_Exp>;
};

export type Subscription_RootCollateral_Removed_EventArgs = {
  distinct_on?: InputMaybe<Array<Collateral_Removed_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Collateral_Removed_Event_Order_By>>;
  where?: InputMaybe<Collateral_Removed_Event_Bool_Exp>;
};

export type Subscription_RootCollateral_Removed_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collateral_Removed_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Collateral_Removed_Event_Order_By>>;
  where?: InputMaybe<Collateral_Removed_Event_Bool_Exp>;
};

export type Subscription_RootCollateral_Removed_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootCollateral_Removed_Event_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Collateral_Removed_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Collateral_Removed_Event_Bool_Exp>;
};

export type Subscription_RootContango_Yield_Admin_Changed_EventArgs = {
  distinct_on?: InputMaybe<Array<Contango_Yield_Admin_Changed_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contango_Yield_Admin_Changed_Event_Order_By>>;
  where?: InputMaybe<Contango_Yield_Admin_Changed_Event_Bool_Exp>;
};

export type Subscription_RootContango_Yield_Admin_Changed_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contango_Yield_Admin_Changed_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contango_Yield_Admin_Changed_Event_Order_By>>;
  where?: InputMaybe<Contango_Yield_Admin_Changed_Event_Bool_Exp>;
};

export type Subscription_RootContango_Yield_Admin_Changed_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootContango_Yield_Admin_Changed_Event_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Contango_Yield_Admin_Changed_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Contango_Yield_Admin_Changed_Event_Bool_Exp>;
};

export type Subscription_RootContango_Yield_Beacon_Upgraded_EventArgs = {
  distinct_on?: InputMaybe<Array<Contango_Yield_Beacon_Upgraded_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contango_Yield_Beacon_Upgraded_Event_Order_By>>;
  where?: InputMaybe<Contango_Yield_Beacon_Upgraded_Event_Bool_Exp>;
};

export type Subscription_RootContango_Yield_Beacon_Upgraded_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contango_Yield_Beacon_Upgraded_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contango_Yield_Beacon_Upgraded_Event_Order_By>>;
  where?: InputMaybe<Contango_Yield_Beacon_Upgraded_Event_Bool_Exp>;
};

export type Subscription_RootContango_Yield_Beacon_Upgraded_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootContango_Yield_Beacon_Upgraded_Event_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Contango_Yield_Beacon_Upgraded_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Contango_Yield_Beacon_Upgraded_Event_Bool_Exp>;
};

export type Subscription_RootContango_Yield_Upgraded_EventArgs = {
  distinct_on?: InputMaybe<Array<Contango_Yield_Upgraded_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contango_Yield_Upgraded_Event_Order_By>>;
  where?: InputMaybe<Contango_Yield_Upgraded_Event_Bool_Exp>;
};

export type Subscription_RootContango_Yield_Upgraded_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contango_Yield_Upgraded_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contango_Yield_Upgraded_Event_Order_By>>;
  where?: InputMaybe<Contango_Yield_Upgraded_Event_Bool_Exp>;
};

export type Subscription_RootContango_Yield_Upgraded_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootContango_Yield_Upgraded_Event_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Contango_Yield_Upgraded_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Contango_Yield_Upgraded_Event_Bool_Exp>;
};

export type Subscription_RootContract_Traded_EventArgs = {
  distinct_on?: InputMaybe<Array<Contract_Traded_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Traded_Event_Order_By>>;
  where?: InputMaybe<Contract_Traded_Event_Bool_Exp>;
};

export type Subscription_RootContract_Traded_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Traded_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contract_Traded_Event_Order_By>>;
  where?: InputMaybe<Contract_Traded_Event_Bool_Exp>;
};

export type Subscription_RootContract_Traded_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootContract_Traded_Event_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Contract_Traded_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Contract_Traded_Event_Bool_Exp>;
};

export type Subscription_RootInitialized_EventArgs = {
  distinct_on?: InputMaybe<Array<Initialized_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Initialized_Event_Order_By>>;
  where?: InputMaybe<Initialized_Event_Bool_Exp>;
};

export type Subscription_RootInitialized_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Initialized_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Initialized_Event_Order_By>>;
  where?: InputMaybe<Initialized_Event_Bool_Exp>;
};

export type Subscription_RootInitialized_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootInitialized_Event_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Initialized_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Initialized_Event_Bool_Exp>;
};

export type Subscription_RootPaused_EventArgs = {
  distinct_on?: InputMaybe<Array<Paused_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Paused_Event_Order_By>>;
  where?: InputMaybe<Paused_Event_Bool_Exp>;
};

export type Subscription_RootPaused_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Paused_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Paused_Event_Order_By>>;
  where?: InputMaybe<Paused_Event_Bool_Exp>;
};

export type Subscription_RootPaused_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootPaused_Event_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Paused_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Paused_Event_Bool_Exp>;
};

export type Subscription_RootPosition_Closed_EventArgs = {
  distinct_on?: InputMaybe<Array<Position_Closed_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Position_Closed_Event_Order_By>>;
  where?: InputMaybe<Position_Closed_Event_Bool_Exp>;
};

export type Subscription_RootPosition_Closed_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Position_Closed_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Position_Closed_Event_Order_By>>;
  where?: InputMaybe<Position_Closed_Event_Bool_Exp>;
};

export type Subscription_RootPosition_Closed_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootPosition_Closed_Event_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Position_Closed_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Position_Closed_Event_Bool_Exp>;
};

export type Subscription_RootPosition_Delivered_EventArgs = {
  distinct_on?: InputMaybe<Array<Position_Delivered_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Position_Delivered_Event_Order_By>>;
  where?: InputMaybe<Position_Delivered_Event_Bool_Exp>;
};

export type Subscription_RootPosition_Delivered_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Position_Delivered_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Position_Delivered_Event_Order_By>>;
  where?: InputMaybe<Position_Delivered_Event_Bool_Exp>;
};

export type Subscription_RootPosition_Delivered_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootPosition_Delivered_Event_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Position_Delivered_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Position_Delivered_Event_Bool_Exp>;
};

export type Subscription_RootPosition_Liquidated_EventArgs = {
  distinct_on?: InputMaybe<Array<Position_Liquidated_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Position_Liquidated_Event_Order_By>>;
  where?: InputMaybe<Position_Liquidated_Event_Bool_Exp>;
};

export type Subscription_RootPosition_Liquidated_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Position_Liquidated_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Position_Liquidated_Event_Order_By>>;
  where?: InputMaybe<Position_Liquidated_Event_Bool_Exp>;
};

export type Subscription_RootPosition_Liquidated_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootPosition_Liquidated_Event_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Position_Liquidated_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Position_Liquidated_Event_Bool_Exp>;
};

export type Subscription_RootPosition_Upserted_EventArgs = {
  distinct_on?: InputMaybe<Array<Position_Upserted_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Position_Upserted_Event_Order_By>>;
  where?: InputMaybe<Position_Upserted_Event_Bool_Exp>;
};

export type Subscription_RootPosition_Upserted_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Position_Upserted_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Position_Upserted_Event_Order_By>>;
  where?: InputMaybe<Position_Upserted_Event_Bool_Exp>;
};

export type Subscription_RootPosition_Upserted_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootPosition_Upserted_Event_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Position_Upserted_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Position_Upserted_Event_Bool_Exp>;
};

export type Subscription_RootRole_Admin_Changed_EventArgs = {
  distinct_on?: InputMaybe<Array<Role_Admin_Changed_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Role_Admin_Changed_Event_Order_By>>;
  where?: InputMaybe<Role_Admin_Changed_Event_Bool_Exp>;
};

export type Subscription_RootRole_Admin_Changed_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Admin_Changed_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Role_Admin_Changed_Event_Order_By>>;
  where?: InputMaybe<Role_Admin_Changed_Event_Bool_Exp>;
};

export type Subscription_RootRole_Admin_Changed_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootRole_Admin_Changed_Event_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Role_Admin_Changed_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Role_Admin_Changed_Event_Bool_Exp>;
};

export type Subscription_RootRole_Granted_EventArgs = {
  distinct_on?: InputMaybe<Array<Role_Granted_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Role_Granted_Event_Order_By>>;
  where?: InputMaybe<Role_Granted_Event_Bool_Exp>;
};

export type Subscription_RootRole_Granted_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Granted_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Role_Granted_Event_Order_By>>;
  where?: InputMaybe<Role_Granted_Event_Bool_Exp>;
};

export type Subscription_RootRole_Granted_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootRole_Granted_Event_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Role_Granted_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Role_Granted_Event_Bool_Exp>;
};

export type Subscription_RootRole_Revoked_EventArgs = {
  distinct_on?: InputMaybe<Array<Role_Revoked_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Role_Revoked_Event_Order_By>>;
  where?: InputMaybe<Role_Revoked_Event_Bool_Exp>;
};

export type Subscription_RootRole_Revoked_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Revoked_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Role_Revoked_Event_Order_By>>;
  where?: InputMaybe<Role_Revoked_Event_Bool_Exp>;
};

export type Subscription_RootRole_Revoked_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootRole_Revoked_Event_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Role_Revoked_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Role_Revoked_Event_Bool_Exp>;
};

export type Subscription_RootUnpaused_EventArgs = {
  distinct_on?: InputMaybe<Array<Unpaused_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Unpaused_Event_Order_By>>;
  where?: InputMaybe<Unpaused_Event_Bool_Exp>;
};

export type Subscription_RootUnpaused_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Unpaused_Event_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Unpaused_Event_Order_By>>;
  where?: InputMaybe<Unpaused_Event_Bool_Exp>;
};

export type Subscription_RootUnpaused_Event_By_PkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootUnpaused_Event_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Unpaused_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Unpaused_Event_Bool_Exp>;
};

/** Streaming cursor of the table "balance_collected_event" */
export type Balance_Collected_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Balance_Collected_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Balance_Collected_Event_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars["numeric"]>;
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  to?: InputMaybe<Scalars["String"]>;
  token?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** Streaming cursor of the table "collateral_added_event" */
export type Collateral_Added_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Collateral_Added_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Collateral_Added_Event_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars["numeric"]>;
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  cost?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
  symbol?: InputMaybe<Scalars["String"]>;
  trader?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "collateral_removed_event" */
export type Collateral_Removed_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Collateral_Removed_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Collateral_Removed_Event_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars["numeric"]>;
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  cost?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
  symbol?: InputMaybe<Scalars["String"]>;
  trader?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "contango_yield_admin_changed_event" */
export type Contango_Yield_Admin_Changed_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contango_Yield_Admin_Changed_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contango_Yield_Admin_Changed_Event_Stream_Cursor_Value_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  newAdmin?: InputMaybe<Scalars["String"]>;
  previousAdmin?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "contango_yield_beacon_upgraded_event" */
export type Contango_Yield_Beacon_Upgraded_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contango_Yield_Beacon_Upgraded_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contango_Yield_Beacon_Upgraded_Event_Stream_Cursor_Value_Input = {
  beacon?: InputMaybe<Scalars["String"]>;
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "contango_yield_upgraded_event" */
export type Contango_Yield_Upgraded_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contango_Yield_Upgraded_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contango_Yield_Upgraded_Event_Stream_Cursor_Value_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  implementation?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "contract_traded_event" */
export type Contract_Traded_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contract_Traded_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contract_Traded_Event_Stream_Cursor_Value_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  fill?: InputMaybe<Scalars["jsonb"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
  symbol?: InputMaybe<Scalars["String"]>;
  trader?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "initialized_event" */
export type Initialized_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Initialized_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Initialized_Event_Stream_Cursor_Value_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
  version?: InputMaybe<Scalars["numeric"]>;
};

/** Streaming cursor of the table "paused_event" */
export type Paused_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Paused_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Paused_Event_Stream_Cursor_Value_Input = {
  account?: InputMaybe<Scalars["String"]>;
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "position_closed_event" */
export type Position_Closed_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Position_Closed_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Position_Closed_Event_Stream_Cursor_Value_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  closedCost?: InputMaybe<Scalars["numeric"]>;
  closedQuantity?: InputMaybe<Scalars["numeric"]>;
  collateral?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
  realisedPnL?: InputMaybe<Scalars["numeric"]>;
  symbol?: InputMaybe<Scalars["String"]>;
  totalFees?: InputMaybe<Scalars["numeric"]>;
  trader?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
  txFees?: InputMaybe<Scalars["numeric"]>;
};

/** Streaming cursor of the table "position_delivered_event" */
export type Position_Delivered_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Position_Delivered_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Position_Delivered_Event_Stream_Cursor_Value_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  deliveredQuantity?: InputMaybe<Scalars["numeric"]>;
  deliveryCost?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
  symbol?: InputMaybe<Scalars["String"]>;
  to?: InputMaybe<Scalars["String"]>;
  totalFees?: InputMaybe<Scalars["numeric"]>;
  trader?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "position_liquidated_event" */
export type Position_Liquidated_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Position_Liquidated_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Position_Liquidated_Event_Stream_Cursor_Value_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  collateral?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  openCost?: InputMaybe<Scalars["numeric"]>;
  openQuantity?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
  realisedPnL?: InputMaybe<Scalars["numeric"]>;
  symbol?: InputMaybe<Scalars["String"]>;
  trader?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "position_upserted_event" */
export type Position_Upserted_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Position_Upserted_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Position_Upserted_Event_Stream_Cursor_Value_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  collateral?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  openCost?: InputMaybe<Scalars["numeric"]>;
  openQuantity?: InputMaybe<Scalars["numeric"]>;
  positionId?: InputMaybe<Scalars["numeric"]>;
  realisedPnL?: InputMaybe<Scalars["numeric"]>;
  symbol?: InputMaybe<Scalars["String"]>;
  totalFees?: InputMaybe<Scalars["numeric"]>;
  trader?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
  txFees?: InputMaybe<Scalars["numeric"]>;
};

/** Streaming cursor of the table "role_admin_changed_event" */
export type Role_Admin_Changed_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Role_Admin_Changed_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Role_Admin_Changed_Event_Stream_Cursor_Value_Input = {
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  newAdminRole?: InputMaybe<Scalars["String"]>;
  previousAdminRole?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "role_granted_event" */
export type Role_Granted_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Role_Granted_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Role_Granted_Event_Stream_Cursor_Value_Input = {
  account?: InputMaybe<Scalars["String"]>;
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  role?: InputMaybe<Scalars["String"]>;
  sender?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "role_revoked_event" */
export type Role_Revoked_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Role_Revoked_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Role_Revoked_Event_Stream_Cursor_Value_Input = {
  account?: InputMaybe<Scalars["String"]>;
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  role?: InputMaybe<Scalars["String"]>;
  sender?: InputMaybe<Scalars["String"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "unpaused_event" */
export type Unpaused_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Unpaused_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Unpaused_Event_Stream_Cursor_Value_Input = {
  account?: InputMaybe<Scalars["String"]>;
  block_hash?: InputMaybe<Scalars["String"]>;
  block_number?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  log_index?: InputMaybe<Scalars["numeric"]>;
  transaction_hash?: InputMaybe<Scalars["String"]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  query_root: ResolverTypeWrapper<{}>;
  balance_collected_event_select_column: Balance_Collected_Event_Select_Column;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  balance_collected_event_order_by: Balance_Collected_Event_Order_By;
  order_by: Order_By;
  balance_collected_event_bool_exp: Balance_Collected_Event_Bool_Exp;
  numeric_comparison_exp: Numeric_Comparison_Exp;
  numeric: ResolverTypeWrapper<Scalars["numeric"]>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  String_comparison_exp: String_Comparison_Exp;
  String: ResolverTypeWrapper<Scalars["String"]>;
  balance_collected_event: ResolverTypeWrapper<Balance_Collected_Event>;
  balance_collected_event_aggregate: ResolverTypeWrapper<Balance_Collected_Event_Aggregate>;
  balance_collected_event_aggregate_fields: ResolverTypeWrapper<Balance_Collected_Event_Aggregate_Fields>;
  balance_collected_event_avg_fields: ResolverTypeWrapper<Balance_Collected_Event_Avg_Fields>;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  balance_collected_event_max_fields: ResolverTypeWrapper<Balance_Collected_Event_Max_Fields>;
  balance_collected_event_min_fields: ResolverTypeWrapper<Balance_Collected_Event_Min_Fields>;
  balance_collected_event_stddev_fields: ResolverTypeWrapper<Balance_Collected_Event_Stddev_Fields>;
  balance_collected_event_stddev_pop_fields: ResolverTypeWrapper<Balance_Collected_Event_Stddev_Pop_Fields>;
  balance_collected_event_stddev_samp_fields: ResolverTypeWrapper<Balance_Collected_Event_Stddev_Samp_Fields>;
  balance_collected_event_sum_fields: ResolverTypeWrapper<Balance_Collected_Event_Sum_Fields>;
  balance_collected_event_var_pop_fields: ResolverTypeWrapper<Balance_Collected_Event_Var_Pop_Fields>;
  balance_collected_event_var_samp_fields: ResolverTypeWrapper<Balance_Collected_Event_Var_Samp_Fields>;
  balance_collected_event_variance_fields: ResolverTypeWrapper<Balance_Collected_Event_Variance_Fields>;
  collateral_added_event_select_column: Collateral_Added_Event_Select_Column;
  collateral_added_event_order_by: Collateral_Added_Event_Order_By;
  collateral_added_event_bool_exp: Collateral_Added_Event_Bool_Exp;
  collateral_added_event: ResolverTypeWrapper<Collateral_Added_Event>;
  collateral_added_event_aggregate: ResolverTypeWrapper<Collateral_Added_Event_Aggregate>;
  collateral_added_event_aggregate_fields: ResolverTypeWrapper<Collateral_Added_Event_Aggregate_Fields>;
  collateral_added_event_avg_fields: ResolverTypeWrapper<Collateral_Added_Event_Avg_Fields>;
  collateral_added_event_max_fields: ResolverTypeWrapper<Collateral_Added_Event_Max_Fields>;
  collateral_added_event_min_fields: ResolverTypeWrapper<Collateral_Added_Event_Min_Fields>;
  collateral_added_event_stddev_fields: ResolverTypeWrapper<Collateral_Added_Event_Stddev_Fields>;
  collateral_added_event_stddev_pop_fields: ResolverTypeWrapper<Collateral_Added_Event_Stddev_Pop_Fields>;
  collateral_added_event_stddev_samp_fields: ResolverTypeWrapper<Collateral_Added_Event_Stddev_Samp_Fields>;
  collateral_added_event_sum_fields: ResolverTypeWrapper<Collateral_Added_Event_Sum_Fields>;
  collateral_added_event_var_pop_fields: ResolverTypeWrapper<Collateral_Added_Event_Var_Pop_Fields>;
  collateral_added_event_var_samp_fields: ResolverTypeWrapper<Collateral_Added_Event_Var_Samp_Fields>;
  collateral_added_event_variance_fields: ResolverTypeWrapper<Collateral_Added_Event_Variance_Fields>;
  collateral_removed_event_select_column: Collateral_Removed_Event_Select_Column;
  collateral_removed_event_order_by: Collateral_Removed_Event_Order_By;
  collateral_removed_event_bool_exp: Collateral_Removed_Event_Bool_Exp;
  collateral_removed_event: ResolverTypeWrapper<Collateral_Removed_Event>;
  collateral_removed_event_aggregate: ResolverTypeWrapper<Collateral_Removed_Event_Aggregate>;
  collateral_removed_event_aggregate_fields: ResolverTypeWrapper<Collateral_Removed_Event_Aggregate_Fields>;
  collateral_removed_event_avg_fields: ResolverTypeWrapper<Collateral_Removed_Event_Avg_Fields>;
  collateral_removed_event_max_fields: ResolverTypeWrapper<Collateral_Removed_Event_Max_Fields>;
  collateral_removed_event_min_fields: ResolverTypeWrapper<Collateral_Removed_Event_Min_Fields>;
  collateral_removed_event_stddev_fields: ResolverTypeWrapper<Collateral_Removed_Event_Stddev_Fields>;
  collateral_removed_event_stddev_pop_fields: ResolverTypeWrapper<Collateral_Removed_Event_Stddev_Pop_Fields>;
  collateral_removed_event_stddev_samp_fields: ResolverTypeWrapper<Collateral_Removed_Event_Stddev_Samp_Fields>;
  collateral_removed_event_sum_fields: ResolverTypeWrapper<Collateral_Removed_Event_Sum_Fields>;
  collateral_removed_event_var_pop_fields: ResolverTypeWrapper<Collateral_Removed_Event_Var_Pop_Fields>;
  collateral_removed_event_var_samp_fields: ResolverTypeWrapper<Collateral_Removed_Event_Var_Samp_Fields>;
  collateral_removed_event_variance_fields: ResolverTypeWrapper<Collateral_Removed_Event_Variance_Fields>;
  contango_yield_admin_changed_event_select_column: Contango_Yield_Admin_Changed_Event_Select_Column;
  contango_yield_admin_changed_event_order_by: Contango_Yield_Admin_Changed_Event_Order_By;
  contango_yield_admin_changed_event_bool_exp: Contango_Yield_Admin_Changed_Event_Bool_Exp;
  contango_yield_admin_changed_event: ResolverTypeWrapper<Contango_Yield_Admin_Changed_Event>;
  contango_yield_admin_changed_event_aggregate: ResolverTypeWrapper<Contango_Yield_Admin_Changed_Event_Aggregate>;
  contango_yield_admin_changed_event_aggregate_fields: ResolverTypeWrapper<Contango_Yield_Admin_Changed_Event_Aggregate_Fields>;
  contango_yield_admin_changed_event_avg_fields: ResolverTypeWrapper<Contango_Yield_Admin_Changed_Event_Avg_Fields>;
  contango_yield_admin_changed_event_max_fields: ResolverTypeWrapper<Contango_Yield_Admin_Changed_Event_Max_Fields>;
  contango_yield_admin_changed_event_min_fields: ResolverTypeWrapper<Contango_Yield_Admin_Changed_Event_Min_Fields>;
  contango_yield_admin_changed_event_stddev_fields: ResolverTypeWrapper<Contango_Yield_Admin_Changed_Event_Stddev_Fields>;
  contango_yield_admin_changed_event_stddev_pop_fields: ResolverTypeWrapper<Contango_Yield_Admin_Changed_Event_Stddev_Pop_Fields>;
  contango_yield_admin_changed_event_stddev_samp_fields: ResolverTypeWrapper<Contango_Yield_Admin_Changed_Event_Stddev_Samp_Fields>;
  contango_yield_admin_changed_event_sum_fields: ResolverTypeWrapper<Contango_Yield_Admin_Changed_Event_Sum_Fields>;
  contango_yield_admin_changed_event_var_pop_fields: ResolverTypeWrapper<Contango_Yield_Admin_Changed_Event_Var_Pop_Fields>;
  contango_yield_admin_changed_event_var_samp_fields: ResolverTypeWrapper<Contango_Yield_Admin_Changed_Event_Var_Samp_Fields>;
  contango_yield_admin_changed_event_variance_fields: ResolverTypeWrapper<Contango_Yield_Admin_Changed_Event_Variance_Fields>;
  contango_yield_beacon_upgraded_event_select_column: Contango_Yield_Beacon_Upgraded_Event_Select_Column;
  contango_yield_beacon_upgraded_event_order_by: Contango_Yield_Beacon_Upgraded_Event_Order_By;
  contango_yield_beacon_upgraded_event_bool_exp: Contango_Yield_Beacon_Upgraded_Event_Bool_Exp;
  contango_yield_beacon_upgraded_event: ResolverTypeWrapper<Contango_Yield_Beacon_Upgraded_Event>;
  contango_yield_beacon_upgraded_event_aggregate: ResolverTypeWrapper<Contango_Yield_Beacon_Upgraded_Event_Aggregate>;
  contango_yield_beacon_upgraded_event_aggregate_fields: ResolverTypeWrapper<Contango_Yield_Beacon_Upgraded_Event_Aggregate_Fields>;
  contango_yield_beacon_upgraded_event_avg_fields: ResolverTypeWrapper<Contango_Yield_Beacon_Upgraded_Event_Avg_Fields>;
  contango_yield_beacon_upgraded_event_max_fields: ResolverTypeWrapper<Contango_Yield_Beacon_Upgraded_Event_Max_Fields>;
  contango_yield_beacon_upgraded_event_min_fields: ResolverTypeWrapper<Contango_Yield_Beacon_Upgraded_Event_Min_Fields>;
  contango_yield_beacon_upgraded_event_stddev_fields: ResolverTypeWrapper<Contango_Yield_Beacon_Upgraded_Event_Stddev_Fields>;
  contango_yield_beacon_upgraded_event_stddev_pop_fields: ResolverTypeWrapper<Contango_Yield_Beacon_Upgraded_Event_Stddev_Pop_Fields>;
  contango_yield_beacon_upgraded_event_stddev_samp_fields: ResolverTypeWrapper<Contango_Yield_Beacon_Upgraded_Event_Stddev_Samp_Fields>;
  contango_yield_beacon_upgraded_event_sum_fields: ResolverTypeWrapper<Contango_Yield_Beacon_Upgraded_Event_Sum_Fields>;
  contango_yield_beacon_upgraded_event_var_pop_fields: ResolverTypeWrapper<Contango_Yield_Beacon_Upgraded_Event_Var_Pop_Fields>;
  contango_yield_beacon_upgraded_event_var_samp_fields: ResolverTypeWrapper<Contango_Yield_Beacon_Upgraded_Event_Var_Samp_Fields>;
  contango_yield_beacon_upgraded_event_variance_fields: ResolverTypeWrapper<Contango_Yield_Beacon_Upgraded_Event_Variance_Fields>;
  contango_yield_upgraded_event_select_column: Contango_Yield_Upgraded_Event_Select_Column;
  contango_yield_upgraded_event_order_by: Contango_Yield_Upgraded_Event_Order_By;
  contango_yield_upgraded_event_bool_exp: Contango_Yield_Upgraded_Event_Bool_Exp;
  contango_yield_upgraded_event: ResolverTypeWrapper<Contango_Yield_Upgraded_Event>;
  contango_yield_upgraded_event_aggregate: ResolverTypeWrapper<Contango_Yield_Upgraded_Event_Aggregate>;
  contango_yield_upgraded_event_aggregate_fields: ResolverTypeWrapper<Contango_Yield_Upgraded_Event_Aggregate_Fields>;
  contango_yield_upgraded_event_avg_fields: ResolverTypeWrapper<Contango_Yield_Upgraded_Event_Avg_Fields>;
  contango_yield_upgraded_event_max_fields: ResolverTypeWrapper<Contango_Yield_Upgraded_Event_Max_Fields>;
  contango_yield_upgraded_event_min_fields: ResolverTypeWrapper<Contango_Yield_Upgraded_Event_Min_Fields>;
  contango_yield_upgraded_event_stddev_fields: ResolverTypeWrapper<Contango_Yield_Upgraded_Event_Stddev_Fields>;
  contango_yield_upgraded_event_stddev_pop_fields: ResolverTypeWrapper<Contango_Yield_Upgraded_Event_Stddev_Pop_Fields>;
  contango_yield_upgraded_event_stddev_samp_fields: ResolverTypeWrapper<Contango_Yield_Upgraded_Event_Stddev_Samp_Fields>;
  contango_yield_upgraded_event_sum_fields: ResolverTypeWrapper<Contango_Yield_Upgraded_Event_Sum_Fields>;
  contango_yield_upgraded_event_var_pop_fields: ResolverTypeWrapper<Contango_Yield_Upgraded_Event_Var_Pop_Fields>;
  contango_yield_upgraded_event_var_samp_fields: ResolverTypeWrapper<Contango_Yield_Upgraded_Event_Var_Samp_Fields>;
  contango_yield_upgraded_event_variance_fields: ResolverTypeWrapper<Contango_Yield_Upgraded_Event_Variance_Fields>;
  contract_traded_event_select_column: Contract_Traded_Event_Select_Column;
  contract_traded_event_order_by: Contract_Traded_Event_Order_By;
  contract_traded_event_bool_exp: Contract_Traded_Event_Bool_Exp;
  jsonb_comparison_exp: Jsonb_Comparison_Exp;
  jsonb_cast_exp: Jsonb_Cast_Exp;
  jsonb: ResolverTypeWrapper<Scalars["jsonb"]>;
  contract_traded_event: ResolverTypeWrapper<Contract_Traded_Event>;
  contract_traded_event_aggregate: ResolverTypeWrapper<Contract_Traded_Event_Aggregate>;
  contract_traded_event_aggregate_fields: ResolverTypeWrapper<Contract_Traded_Event_Aggregate_Fields>;
  contract_traded_event_avg_fields: ResolverTypeWrapper<Contract_Traded_Event_Avg_Fields>;
  contract_traded_event_max_fields: ResolverTypeWrapper<Contract_Traded_Event_Max_Fields>;
  contract_traded_event_min_fields: ResolverTypeWrapper<Contract_Traded_Event_Min_Fields>;
  contract_traded_event_stddev_fields: ResolverTypeWrapper<Contract_Traded_Event_Stddev_Fields>;
  contract_traded_event_stddev_pop_fields: ResolverTypeWrapper<Contract_Traded_Event_Stddev_Pop_Fields>;
  contract_traded_event_stddev_samp_fields: ResolverTypeWrapper<Contract_Traded_Event_Stddev_Samp_Fields>;
  contract_traded_event_sum_fields: ResolverTypeWrapper<Contract_Traded_Event_Sum_Fields>;
  contract_traded_event_var_pop_fields: ResolverTypeWrapper<Contract_Traded_Event_Var_Pop_Fields>;
  contract_traded_event_var_samp_fields: ResolverTypeWrapper<Contract_Traded_Event_Var_Samp_Fields>;
  contract_traded_event_variance_fields: ResolverTypeWrapper<Contract_Traded_Event_Variance_Fields>;
  initialized_event_select_column: Initialized_Event_Select_Column;
  initialized_event_order_by: Initialized_Event_Order_By;
  initialized_event_bool_exp: Initialized_Event_Bool_Exp;
  initialized_event: ResolverTypeWrapper<Initialized_Event>;
  initialized_event_aggregate: ResolverTypeWrapper<Initialized_Event_Aggregate>;
  initialized_event_aggregate_fields: ResolverTypeWrapper<Initialized_Event_Aggregate_Fields>;
  initialized_event_avg_fields: ResolverTypeWrapper<Initialized_Event_Avg_Fields>;
  initialized_event_max_fields: ResolverTypeWrapper<Initialized_Event_Max_Fields>;
  initialized_event_min_fields: ResolverTypeWrapper<Initialized_Event_Min_Fields>;
  initialized_event_stddev_fields: ResolverTypeWrapper<Initialized_Event_Stddev_Fields>;
  initialized_event_stddev_pop_fields: ResolverTypeWrapper<Initialized_Event_Stddev_Pop_Fields>;
  initialized_event_stddev_samp_fields: ResolverTypeWrapper<Initialized_Event_Stddev_Samp_Fields>;
  initialized_event_sum_fields: ResolverTypeWrapper<Initialized_Event_Sum_Fields>;
  initialized_event_var_pop_fields: ResolverTypeWrapper<Initialized_Event_Var_Pop_Fields>;
  initialized_event_var_samp_fields: ResolverTypeWrapper<Initialized_Event_Var_Samp_Fields>;
  initialized_event_variance_fields: ResolverTypeWrapper<Initialized_Event_Variance_Fields>;
  paused_event_select_column: Paused_Event_Select_Column;
  paused_event_order_by: Paused_Event_Order_By;
  paused_event_bool_exp: Paused_Event_Bool_Exp;
  paused_event: ResolverTypeWrapper<Paused_Event>;
  paused_event_aggregate: ResolverTypeWrapper<Paused_Event_Aggregate>;
  paused_event_aggregate_fields: ResolverTypeWrapper<Paused_Event_Aggregate_Fields>;
  paused_event_avg_fields: ResolverTypeWrapper<Paused_Event_Avg_Fields>;
  paused_event_max_fields: ResolverTypeWrapper<Paused_Event_Max_Fields>;
  paused_event_min_fields: ResolverTypeWrapper<Paused_Event_Min_Fields>;
  paused_event_stddev_fields: ResolverTypeWrapper<Paused_Event_Stddev_Fields>;
  paused_event_stddev_pop_fields: ResolverTypeWrapper<Paused_Event_Stddev_Pop_Fields>;
  paused_event_stddev_samp_fields: ResolverTypeWrapper<Paused_Event_Stddev_Samp_Fields>;
  paused_event_sum_fields: ResolverTypeWrapper<Paused_Event_Sum_Fields>;
  paused_event_var_pop_fields: ResolverTypeWrapper<Paused_Event_Var_Pop_Fields>;
  paused_event_var_samp_fields: ResolverTypeWrapper<Paused_Event_Var_Samp_Fields>;
  paused_event_variance_fields: ResolverTypeWrapper<Paused_Event_Variance_Fields>;
  position_closed_event_select_column: Position_Closed_Event_Select_Column;
  position_closed_event_order_by: Position_Closed_Event_Order_By;
  position_closed_event_bool_exp: Position_Closed_Event_Bool_Exp;
  position_closed_event: ResolverTypeWrapper<Position_Closed_Event>;
  position_closed_event_aggregate: ResolverTypeWrapper<Position_Closed_Event_Aggregate>;
  position_closed_event_aggregate_fields: ResolverTypeWrapper<Position_Closed_Event_Aggregate_Fields>;
  position_closed_event_avg_fields: ResolverTypeWrapper<Position_Closed_Event_Avg_Fields>;
  position_closed_event_max_fields: ResolverTypeWrapper<Position_Closed_Event_Max_Fields>;
  position_closed_event_min_fields: ResolverTypeWrapper<Position_Closed_Event_Min_Fields>;
  position_closed_event_stddev_fields: ResolverTypeWrapper<Position_Closed_Event_Stddev_Fields>;
  position_closed_event_stddev_pop_fields: ResolverTypeWrapper<Position_Closed_Event_Stddev_Pop_Fields>;
  position_closed_event_stddev_samp_fields: ResolverTypeWrapper<Position_Closed_Event_Stddev_Samp_Fields>;
  position_closed_event_sum_fields: ResolverTypeWrapper<Position_Closed_Event_Sum_Fields>;
  position_closed_event_var_pop_fields: ResolverTypeWrapper<Position_Closed_Event_Var_Pop_Fields>;
  position_closed_event_var_samp_fields: ResolverTypeWrapper<Position_Closed_Event_Var_Samp_Fields>;
  position_closed_event_variance_fields: ResolverTypeWrapper<Position_Closed_Event_Variance_Fields>;
  position_delivered_event_select_column: Position_Delivered_Event_Select_Column;
  position_delivered_event_order_by: Position_Delivered_Event_Order_By;
  position_delivered_event_bool_exp: Position_Delivered_Event_Bool_Exp;
  position_delivered_event: ResolverTypeWrapper<Position_Delivered_Event>;
  position_delivered_event_aggregate: ResolverTypeWrapper<Position_Delivered_Event_Aggregate>;
  position_delivered_event_aggregate_fields: ResolverTypeWrapper<Position_Delivered_Event_Aggregate_Fields>;
  position_delivered_event_avg_fields: ResolverTypeWrapper<Position_Delivered_Event_Avg_Fields>;
  position_delivered_event_max_fields: ResolverTypeWrapper<Position_Delivered_Event_Max_Fields>;
  position_delivered_event_min_fields: ResolverTypeWrapper<Position_Delivered_Event_Min_Fields>;
  position_delivered_event_stddev_fields: ResolverTypeWrapper<Position_Delivered_Event_Stddev_Fields>;
  position_delivered_event_stddev_pop_fields: ResolverTypeWrapper<Position_Delivered_Event_Stddev_Pop_Fields>;
  position_delivered_event_stddev_samp_fields: ResolverTypeWrapper<Position_Delivered_Event_Stddev_Samp_Fields>;
  position_delivered_event_sum_fields: ResolverTypeWrapper<Position_Delivered_Event_Sum_Fields>;
  position_delivered_event_var_pop_fields: ResolverTypeWrapper<Position_Delivered_Event_Var_Pop_Fields>;
  position_delivered_event_var_samp_fields: ResolverTypeWrapper<Position_Delivered_Event_Var_Samp_Fields>;
  position_delivered_event_variance_fields: ResolverTypeWrapper<Position_Delivered_Event_Variance_Fields>;
  position_liquidated_event_select_column: Position_Liquidated_Event_Select_Column;
  position_liquidated_event_order_by: Position_Liquidated_Event_Order_By;
  position_liquidated_event_bool_exp: Position_Liquidated_Event_Bool_Exp;
  position_liquidated_event: ResolverTypeWrapper<Position_Liquidated_Event>;
  position_liquidated_event_aggregate: ResolverTypeWrapper<Position_Liquidated_Event_Aggregate>;
  position_liquidated_event_aggregate_fields: ResolverTypeWrapper<Position_Liquidated_Event_Aggregate_Fields>;
  position_liquidated_event_avg_fields: ResolverTypeWrapper<Position_Liquidated_Event_Avg_Fields>;
  position_liquidated_event_max_fields: ResolverTypeWrapper<Position_Liquidated_Event_Max_Fields>;
  position_liquidated_event_min_fields: ResolverTypeWrapper<Position_Liquidated_Event_Min_Fields>;
  position_liquidated_event_stddev_fields: ResolverTypeWrapper<Position_Liquidated_Event_Stddev_Fields>;
  position_liquidated_event_stddev_pop_fields: ResolverTypeWrapper<Position_Liquidated_Event_Stddev_Pop_Fields>;
  position_liquidated_event_stddev_samp_fields: ResolverTypeWrapper<Position_Liquidated_Event_Stddev_Samp_Fields>;
  position_liquidated_event_sum_fields: ResolverTypeWrapper<Position_Liquidated_Event_Sum_Fields>;
  position_liquidated_event_var_pop_fields: ResolverTypeWrapper<Position_Liquidated_Event_Var_Pop_Fields>;
  position_liquidated_event_var_samp_fields: ResolverTypeWrapper<Position_Liquidated_Event_Var_Samp_Fields>;
  position_liquidated_event_variance_fields: ResolverTypeWrapper<Position_Liquidated_Event_Variance_Fields>;
  position_upserted_event_select_column: Position_Upserted_Event_Select_Column;
  position_upserted_event_order_by: Position_Upserted_Event_Order_By;
  position_upserted_event_bool_exp: Position_Upserted_Event_Bool_Exp;
  position_upserted_event: ResolverTypeWrapper<Position_Upserted_Event>;
  position_upserted_event_aggregate: ResolverTypeWrapper<Position_Upserted_Event_Aggregate>;
  position_upserted_event_aggregate_fields: ResolverTypeWrapper<Position_Upserted_Event_Aggregate_Fields>;
  position_upserted_event_avg_fields: ResolverTypeWrapper<Position_Upserted_Event_Avg_Fields>;
  position_upserted_event_max_fields: ResolverTypeWrapper<Position_Upserted_Event_Max_Fields>;
  position_upserted_event_min_fields: ResolverTypeWrapper<Position_Upserted_Event_Min_Fields>;
  position_upserted_event_stddev_fields: ResolverTypeWrapper<Position_Upserted_Event_Stddev_Fields>;
  position_upserted_event_stddev_pop_fields: ResolverTypeWrapper<Position_Upserted_Event_Stddev_Pop_Fields>;
  position_upserted_event_stddev_samp_fields: ResolverTypeWrapper<Position_Upserted_Event_Stddev_Samp_Fields>;
  position_upserted_event_sum_fields: ResolverTypeWrapper<Position_Upserted_Event_Sum_Fields>;
  position_upserted_event_var_pop_fields: ResolverTypeWrapper<Position_Upserted_Event_Var_Pop_Fields>;
  position_upserted_event_var_samp_fields: ResolverTypeWrapper<Position_Upserted_Event_Var_Samp_Fields>;
  position_upserted_event_variance_fields: ResolverTypeWrapper<Position_Upserted_Event_Variance_Fields>;
  role_admin_changed_event_select_column: Role_Admin_Changed_Event_Select_Column;
  role_admin_changed_event_order_by: Role_Admin_Changed_Event_Order_By;
  role_admin_changed_event_bool_exp: Role_Admin_Changed_Event_Bool_Exp;
  role_admin_changed_event: ResolverTypeWrapper<Role_Admin_Changed_Event>;
  role_admin_changed_event_aggregate: ResolverTypeWrapper<Role_Admin_Changed_Event_Aggregate>;
  role_admin_changed_event_aggregate_fields: ResolverTypeWrapper<Role_Admin_Changed_Event_Aggregate_Fields>;
  role_admin_changed_event_avg_fields: ResolverTypeWrapper<Role_Admin_Changed_Event_Avg_Fields>;
  role_admin_changed_event_max_fields: ResolverTypeWrapper<Role_Admin_Changed_Event_Max_Fields>;
  role_admin_changed_event_min_fields: ResolverTypeWrapper<Role_Admin_Changed_Event_Min_Fields>;
  role_admin_changed_event_stddev_fields: ResolverTypeWrapper<Role_Admin_Changed_Event_Stddev_Fields>;
  role_admin_changed_event_stddev_pop_fields: ResolverTypeWrapper<Role_Admin_Changed_Event_Stddev_Pop_Fields>;
  role_admin_changed_event_stddev_samp_fields: ResolverTypeWrapper<Role_Admin_Changed_Event_Stddev_Samp_Fields>;
  role_admin_changed_event_sum_fields: ResolverTypeWrapper<Role_Admin_Changed_Event_Sum_Fields>;
  role_admin_changed_event_var_pop_fields: ResolverTypeWrapper<Role_Admin_Changed_Event_Var_Pop_Fields>;
  role_admin_changed_event_var_samp_fields: ResolverTypeWrapper<Role_Admin_Changed_Event_Var_Samp_Fields>;
  role_admin_changed_event_variance_fields: ResolverTypeWrapper<Role_Admin_Changed_Event_Variance_Fields>;
  role_granted_event_select_column: Role_Granted_Event_Select_Column;
  role_granted_event_order_by: Role_Granted_Event_Order_By;
  role_granted_event_bool_exp: Role_Granted_Event_Bool_Exp;
  role_granted_event: ResolverTypeWrapper<Role_Granted_Event>;
  role_granted_event_aggregate: ResolverTypeWrapper<Role_Granted_Event_Aggregate>;
  role_granted_event_aggregate_fields: ResolverTypeWrapper<Role_Granted_Event_Aggregate_Fields>;
  role_granted_event_avg_fields: ResolverTypeWrapper<Role_Granted_Event_Avg_Fields>;
  role_granted_event_max_fields: ResolverTypeWrapper<Role_Granted_Event_Max_Fields>;
  role_granted_event_min_fields: ResolverTypeWrapper<Role_Granted_Event_Min_Fields>;
  role_granted_event_stddev_fields: ResolverTypeWrapper<Role_Granted_Event_Stddev_Fields>;
  role_granted_event_stddev_pop_fields: ResolverTypeWrapper<Role_Granted_Event_Stddev_Pop_Fields>;
  role_granted_event_stddev_samp_fields: ResolverTypeWrapper<Role_Granted_Event_Stddev_Samp_Fields>;
  role_granted_event_sum_fields: ResolverTypeWrapper<Role_Granted_Event_Sum_Fields>;
  role_granted_event_var_pop_fields: ResolverTypeWrapper<Role_Granted_Event_Var_Pop_Fields>;
  role_granted_event_var_samp_fields: ResolverTypeWrapper<Role_Granted_Event_Var_Samp_Fields>;
  role_granted_event_variance_fields: ResolverTypeWrapper<Role_Granted_Event_Variance_Fields>;
  role_revoked_event_select_column: Role_Revoked_Event_Select_Column;
  role_revoked_event_order_by: Role_Revoked_Event_Order_By;
  role_revoked_event_bool_exp: Role_Revoked_Event_Bool_Exp;
  role_revoked_event: ResolverTypeWrapper<Role_Revoked_Event>;
  role_revoked_event_aggregate: ResolverTypeWrapper<Role_Revoked_Event_Aggregate>;
  role_revoked_event_aggregate_fields: ResolverTypeWrapper<Role_Revoked_Event_Aggregate_Fields>;
  role_revoked_event_avg_fields: ResolverTypeWrapper<Role_Revoked_Event_Avg_Fields>;
  role_revoked_event_max_fields: ResolverTypeWrapper<Role_Revoked_Event_Max_Fields>;
  role_revoked_event_min_fields: ResolverTypeWrapper<Role_Revoked_Event_Min_Fields>;
  role_revoked_event_stddev_fields: ResolverTypeWrapper<Role_Revoked_Event_Stddev_Fields>;
  role_revoked_event_stddev_pop_fields: ResolverTypeWrapper<Role_Revoked_Event_Stddev_Pop_Fields>;
  role_revoked_event_stddev_samp_fields: ResolverTypeWrapper<Role_Revoked_Event_Stddev_Samp_Fields>;
  role_revoked_event_sum_fields: ResolverTypeWrapper<Role_Revoked_Event_Sum_Fields>;
  role_revoked_event_var_pop_fields: ResolverTypeWrapper<Role_Revoked_Event_Var_Pop_Fields>;
  role_revoked_event_var_samp_fields: ResolverTypeWrapper<Role_Revoked_Event_Var_Samp_Fields>;
  role_revoked_event_variance_fields: ResolverTypeWrapper<Role_Revoked_Event_Variance_Fields>;
  unpaused_event_select_column: Unpaused_Event_Select_Column;
  unpaused_event_order_by: Unpaused_Event_Order_By;
  unpaused_event_bool_exp: Unpaused_Event_Bool_Exp;
  unpaused_event: ResolverTypeWrapper<Unpaused_Event>;
  unpaused_event_aggregate: ResolverTypeWrapper<Unpaused_Event_Aggregate>;
  unpaused_event_aggregate_fields: ResolverTypeWrapper<Unpaused_Event_Aggregate_Fields>;
  unpaused_event_avg_fields: ResolverTypeWrapper<Unpaused_Event_Avg_Fields>;
  unpaused_event_max_fields: ResolverTypeWrapper<Unpaused_Event_Max_Fields>;
  unpaused_event_min_fields: ResolverTypeWrapper<Unpaused_Event_Min_Fields>;
  unpaused_event_stddev_fields: ResolverTypeWrapper<Unpaused_Event_Stddev_Fields>;
  unpaused_event_stddev_pop_fields: ResolverTypeWrapper<Unpaused_Event_Stddev_Pop_Fields>;
  unpaused_event_stddev_samp_fields: ResolverTypeWrapper<Unpaused_Event_Stddev_Samp_Fields>;
  unpaused_event_sum_fields: ResolverTypeWrapper<Unpaused_Event_Sum_Fields>;
  unpaused_event_var_pop_fields: ResolverTypeWrapper<Unpaused_Event_Var_Pop_Fields>;
  unpaused_event_var_samp_fields: ResolverTypeWrapper<Unpaused_Event_Var_Samp_Fields>;
  unpaused_event_variance_fields: ResolverTypeWrapper<Unpaused_Event_Variance_Fields>;
  mutation_root: ResolverTypeWrapper<{}>;
  balance_collected_event_mutation_response: ResolverTypeWrapper<Balance_Collected_Event_Mutation_Response>;
  collateral_added_event_mutation_response: ResolverTypeWrapper<Collateral_Added_Event_Mutation_Response>;
  collateral_removed_event_mutation_response: ResolverTypeWrapper<Collateral_Removed_Event_Mutation_Response>;
  contango_yield_admin_changed_event_mutation_response: ResolverTypeWrapper<Contango_Yield_Admin_Changed_Event_Mutation_Response>;
  contango_yield_beacon_upgraded_event_mutation_response: ResolverTypeWrapper<Contango_Yield_Beacon_Upgraded_Event_Mutation_Response>;
  contango_yield_upgraded_event_mutation_response: ResolverTypeWrapper<Contango_Yield_Upgraded_Event_Mutation_Response>;
  contract_traded_event_mutation_response: ResolverTypeWrapper<Contract_Traded_Event_Mutation_Response>;
  initialized_event_mutation_response: ResolverTypeWrapper<Initialized_Event_Mutation_Response>;
  paused_event_mutation_response: ResolverTypeWrapper<Paused_Event_Mutation_Response>;
  position_closed_event_mutation_response: ResolverTypeWrapper<Position_Closed_Event_Mutation_Response>;
  position_delivered_event_mutation_response: ResolverTypeWrapper<Position_Delivered_Event_Mutation_Response>;
  position_liquidated_event_mutation_response: ResolverTypeWrapper<Position_Liquidated_Event_Mutation_Response>;
  position_upserted_event_mutation_response: ResolverTypeWrapper<Position_Upserted_Event_Mutation_Response>;
  role_admin_changed_event_mutation_response: ResolverTypeWrapper<Role_Admin_Changed_Event_Mutation_Response>;
  role_granted_event_mutation_response: ResolverTypeWrapper<Role_Granted_Event_Mutation_Response>;
  role_revoked_event_mutation_response: ResolverTypeWrapper<Role_Revoked_Event_Mutation_Response>;
  unpaused_event_mutation_response: ResolverTypeWrapper<Unpaused_Event_Mutation_Response>;
  balance_collected_event_insert_input: Balance_Collected_Event_Insert_Input;
  balance_collected_event_on_conflict: Balance_Collected_Event_On_Conflict;
  balance_collected_event_constraint: Balance_Collected_Event_Constraint;
  balance_collected_event_update_column: Balance_Collected_Event_Update_Column;
  collateral_added_event_insert_input: Collateral_Added_Event_Insert_Input;
  collateral_added_event_on_conflict: Collateral_Added_Event_On_Conflict;
  collateral_added_event_constraint: Collateral_Added_Event_Constraint;
  collateral_added_event_update_column: Collateral_Added_Event_Update_Column;
  collateral_removed_event_insert_input: Collateral_Removed_Event_Insert_Input;
  collateral_removed_event_on_conflict: Collateral_Removed_Event_On_Conflict;
  collateral_removed_event_constraint: Collateral_Removed_Event_Constraint;
  collateral_removed_event_update_column: Collateral_Removed_Event_Update_Column;
  contango_yield_admin_changed_event_insert_input: Contango_Yield_Admin_Changed_Event_Insert_Input;
  contango_yield_admin_changed_event_on_conflict: Contango_Yield_Admin_Changed_Event_On_Conflict;
  contango_yield_admin_changed_event_constraint: Contango_Yield_Admin_Changed_Event_Constraint;
  contango_yield_admin_changed_event_update_column: Contango_Yield_Admin_Changed_Event_Update_Column;
  contango_yield_beacon_upgraded_event_insert_input: Contango_Yield_Beacon_Upgraded_Event_Insert_Input;
  contango_yield_beacon_upgraded_event_on_conflict: Contango_Yield_Beacon_Upgraded_Event_On_Conflict;
  contango_yield_beacon_upgraded_event_constraint: Contango_Yield_Beacon_Upgraded_Event_Constraint;
  contango_yield_beacon_upgraded_event_update_column: Contango_Yield_Beacon_Upgraded_Event_Update_Column;
  contango_yield_upgraded_event_insert_input: Contango_Yield_Upgraded_Event_Insert_Input;
  contango_yield_upgraded_event_on_conflict: Contango_Yield_Upgraded_Event_On_Conflict;
  contango_yield_upgraded_event_constraint: Contango_Yield_Upgraded_Event_Constraint;
  contango_yield_upgraded_event_update_column: Contango_Yield_Upgraded_Event_Update_Column;
  contract_traded_event_insert_input: Contract_Traded_Event_Insert_Input;
  contract_traded_event_on_conflict: Contract_Traded_Event_On_Conflict;
  contract_traded_event_constraint: Contract_Traded_Event_Constraint;
  contract_traded_event_update_column: Contract_Traded_Event_Update_Column;
  initialized_event_insert_input: Initialized_Event_Insert_Input;
  initialized_event_on_conflict: Initialized_Event_On_Conflict;
  initialized_event_constraint: Initialized_Event_Constraint;
  initialized_event_update_column: Initialized_Event_Update_Column;
  paused_event_insert_input: Paused_Event_Insert_Input;
  paused_event_on_conflict: Paused_Event_On_Conflict;
  paused_event_constraint: Paused_Event_Constraint;
  paused_event_update_column: Paused_Event_Update_Column;
  position_closed_event_insert_input: Position_Closed_Event_Insert_Input;
  position_closed_event_on_conflict: Position_Closed_Event_On_Conflict;
  position_closed_event_constraint: Position_Closed_Event_Constraint;
  position_closed_event_update_column: Position_Closed_Event_Update_Column;
  position_delivered_event_insert_input: Position_Delivered_Event_Insert_Input;
  position_delivered_event_on_conflict: Position_Delivered_Event_On_Conflict;
  position_delivered_event_constraint: Position_Delivered_Event_Constraint;
  position_delivered_event_update_column: Position_Delivered_Event_Update_Column;
  position_liquidated_event_insert_input: Position_Liquidated_Event_Insert_Input;
  position_liquidated_event_on_conflict: Position_Liquidated_Event_On_Conflict;
  position_liquidated_event_constraint: Position_Liquidated_Event_Constraint;
  position_liquidated_event_update_column: Position_Liquidated_Event_Update_Column;
  position_upserted_event_insert_input: Position_Upserted_Event_Insert_Input;
  position_upserted_event_on_conflict: Position_Upserted_Event_On_Conflict;
  position_upserted_event_constraint: Position_Upserted_Event_Constraint;
  position_upserted_event_update_column: Position_Upserted_Event_Update_Column;
  role_admin_changed_event_insert_input: Role_Admin_Changed_Event_Insert_Input;
  role_admin_changed_event_on_conflict: Role_Admin_Changed_Event_On_Conflict;
  role_admin_changed_event_constraint: Role_Admin_Changed_Event_Constraint;
  role_admin_changed_event_update_column: Role_Admin_Changed_Event_Update_Column;
  role_granted_event_insert_input: Role_Granted_Event_Insert_Input;
  role_granted_event_on_conflict: Role_Granted_Event_On_Conflict;
  role_granted_event_constraint: Role_Granted_Event_Constraint;
  role_granted_event_update_column: Role_Granted_Event_Update_Column;
  role_revoked_event_insert_input: Role_Revoked_Event_Insert_Input;
  role_revoked_event_on_conflict: Role_Revoked_Event_On_Conflict;
  role_revoked_event_constraint: Role_Revoked_Event_Constraint;
  role_revoked_event_update_column: Role_Revoked_Event_Update_Column;
  unpaused_event_insert_input: Unpaused_Event_Insert_Input;
  unpaused_event_on_conflict: Unpaused_Event_On_Conflict;
  unpaused_event_constraint: Unpaused_Event_Constraint;
  unpaused_event_update_column: Unpaused_Event_Update_Column;
  balance_collected_event_inc_input: Balance_Collected_Event_Inc_Input;
  balance_collected_event_set_input: Balance_Collected_Event_Set_Input;
  balance_collected_event_pk_columns_input: Balance_Collected_Event_Pk_Columns_Input;
  balance_collected_event_updates: Balance_Collected_Event_Updates;
  collateral_added_event_inc_input: Collateral_Added_Event_Inc_Input;
  collateral_added_event_set_input: Collateral_Added_Event_Set_Input;
  collateral_added_event_pk_columns_input: Collateral_Added_Event_Pk_Columns_Input;
  collateral_added_event_updates: Collateral_Added_Event_Updates;
  collateral_removed_event_inc_input: Collateral_Removed_Event_Inc_Input;
  collateral_removed_event_set_input: Collateral_Removed_Event_Set_Input;
  collateral_removed_event_pk_columns_input: Collateral_Removed_Event_Pk_Columns_Input;
  collateral_removed_event_updates: Collateral_Removed_Event_Updates;
  contango_yield_admin_changed_event_inc_input: Contango_Yield_Admin_Changed_Event_Inc_Input;
  contango_yield_admin_changed_event_set_input: Contango_Yield_Admin_Changed_Event_Set_Input;
  contango_yield_admin_changed_event_pk_columns_input: Contango_Yield_Admin_Changed_Event_Pk_Columns_Input;
  contango_yield_admin_changed_event_updates: Contango_Yield_Admin_Changed_Event_Updates;
  contango_yield_beacon_upgraded_event_inc_input: Contango_Yield_Beacon_Upgraded_Event_Inc_Input;
  contango_yield_beacon_upgraded_event_set_input: Contango_Yield_Beacon_Upgraded_Event_Set_Input;
  contango_yield_beacon_upgraded_event_pk_columns_input: Contango_Yield_Beacon_Upgraded_Event_Pk_Columns_Input;
  contango_yield_beacon_upgraded_event_updates: Contango_Yield_Beacon_Upgraded_Event_Updates;
  contango_yield_upgraded_event_inc_input: Contango_Yield_Upgraded_Event_Inc_Input;
  contango_yield_upgraded_event_set_input: Contango_Yield_Upgraded_Event_Set_Input;
  contango_yield_upgraded_event_pk_columns_input: Contango_Yield_Upgraded_Event_Pk_Columns_Input;
  contango_yield_upgraded_event_updates: Contango_Yield_Upgraded_Event_Updates;
  contract_traded_event_append_input: Contract_Traded_Event_Append_Input;
  contract_traded_event_delete_at_path_input: Contract_Traded_Event_Delete_At_Path_Input;
  contract_traded_event_delete_elem_input: Contract_Traded_Event_Delete_Elem_Input;
  contract_traded_event_delete_key_input: Contract_Traded_Event_Delete_Key_Input;
  contract_traded_event_inc_input: Contract_Traded_Event_Inc_Input;
  contract_traded_event_prepend_input: Contract_Traded_Event_Prepend_Input;
  contract_traded_event_set_input: Contract_Traded_Event_Set_Input;
  contract_traded_event_pk_columns_input: Contract_Traded_Event_Pk_Columns_Input;
  contract_traded_event_updates: Contract_Traded_Event_Updates;
  initialized_event_inc_input: Initialized_Event_Inc_Input;
  initialized_event_set_input: Initialized_Event_Set_Input;
  initialized_event_pk_columns_input: Initialized_Event_Pk_Columns_Input;
  initialized_event_updates: Initialized_Event_Updates;
  paused_event_inc_input: Paused_Event_Inc_Input;
  paused_event_set_input: Paused_Event_Set_Input;
  paused_event_pk_columns_input: Paused_Event_Pk_Columns_Input;
  paused_event_updates: Paused_Event_Updates;
  position_closed_event_inc_input: Position_Closed_Event_Inc_Input;
  position_closed_event_set_input: Position_Closed_Event_Set_Input;
  position_closed_event_pk_columns_input: Position_Closed_Event_Pk_Columns_Input;
  position_closed_event_updates: Position_Closed_Event_Updates;
  position_delivered_event_inc_input: Position_Delivered_Event_Inc_Input;
  position_delivered_event_set_input: Position_Delivered_Event_Set_Input;
  position_delivered_event_pk_columns_input: Position_Delivered_Event_Pk_Columns_Input;
  position_delivered_event_updates: Position_Delivered_Event_Updates;
  position_liquidated_event_inc_input: Position_Liquidated_Event_Inc_Input;
  position_liquidated_event_set_input: Position_Liquidated_Event_Set_Input;
  position_liquidated_event_pk_columns_input: Position_Liquidated_Event_Pk_Columns_Input;
  position_liquidated_event_updates: Position_Liquidated_Event_Updates;
  position_upserted_event_inc_input: Position_Upserted_Event_Inc_Input;
  position_upserted_event_set_input: Position_Upserted_Event_Set_Input;
  position_upserted_event_pk_columns_input: Position_Upserted_Event_Pk_Columns_Input;
  position_upserted_event_updates: Position_Upserted_Event_Updates;
  role_admin_changed_event_inc_input: Role_Admin_Changed_Event_Inc_Input;
  role_admin_changed_event_set_input: Role_Admin_Changed_Event_Set_Input;
  role_admin_changed_event_pk_columns_input: Role_Admin_Changed_Event_Pk_Columns_Input;
  role_admin_changed_event_updates: Role_Admin_Changed_Event_Updates;
  role_granted_event_inc_input: Role_Granted_Event_Inc_Input;
  role_granted_event_set_input: Role_Granted_Event_Set_Input;
  role_granted_event_pk_columns_input: Role_Granted_Event_Pk_Columns_Input;
  role_granted_event_updates: Role_Granted_Event_Updates;
  role_revoked_event_inc_input: Role_Revoked_Event_Inc_Input;
  role_revoked_event_set_input: Role_Revoked_Event_Set_Input;
  role_revoked_event_pk_columns_input: Role_Revoked_Event_Pk_Columns_Input;
  role_revoked_event_updates: Role_Revoked_Event_Updates;
  unpaused_event_inc_input: Unpaused_Event_Inc_Input;
  unpaused_event_set_input: Unpaused_Event_Set_Input;
  unpaused_event_pk_columns_input: Unpaused_Event_Pk_Columns_Input;
  unpaused_event_updates: Unpaused_Event_Updates;
  subscription_root: ResolverTypeWrapper<{}>;
  balance_collected_event_stream_cursor_input: Balance_Collected_Event_Stream_Cursor_Input;
  balance_collected_event_stream_cursor_value_input: Balance_Collected_Event_Stream_Cursor_Value_Input;
  cursor_ordering: Cursor_Ordering;
  collateral_added_event_stream_cursor_input: Collateral_Added_Event_Stream_Cursor_Input;
  collateral_added_event_stream_cursor_value_input: Collateral_Added_Event_Stream_Cursor_Value_Input;
  collateral_removed_event_stream_cursor_input: Collateral_Removed_Event_Stream_Cursor_Input;
  collateral_removed_event_stream_cursor_value_input: Collateral_Removed_Event_Stream_Cursor_Value_Input;
  contango_yield_admin_changed_event_stream_cursor_input: Contango_Yield_Admin_Changed_Event_Stream_Cursor_Input;
  contango_yield_admin_changed_event_stream_cursor_value_input: Contango_Yield_Admin_Changed_Event_Stream_Cursor_Value_Input;
  contango_yield_beacon_upgraded_event_stream_cursor_input: Contango_Yield_Beacon_Upgraded_Event_Stream_Cursor_Input;
  contango_yield_beacon_upgraded_event_stream_cursor_value_input: Contango_Yield_Beacon_Upgraded_Event_Stream_Cursor_Value_Input;
  contango_yield_upgraded_event_stream_cursor_input: Contango_Yield_Upgraded_Event_Stream_Cursor_Input;
  contango_yield_upgraded_event_stream_cursor_value_input: Contango_Yield_Upgraded_Event_Stream_Cursor_Value_Input;
  contract_traded_event_stream_cursor_input: Contract_Traded_Event_Stream_Cursor_Input;
  contract_traded_event_stream_cursor_value_input: Contract_Traded_Event_Stream_Cursor_Value_Input;
  initialized_event_stream_cursor_input: Initialized_Event_Stream_Cursor_Input;
  initialized_event_stream_cursor_value_input: Initialized_Event_Stream_Cursor_Value_Input;
  paused_event_stream_cursor_input: Paused_Event_Stream_Cursor_Input;
  paused_event_stream_cursor_value_input: Paused_Event_Stream_Cursor_Value_Input;
  position_closed_event_stream_cursor_input: Position_Closed_Event_Stream_Cursor_Input;
  position_closed_event_stream_cursor_value_input: Position_Closed_Event_Stream_Cursor_Value_Input;
  position_delivered_event_stream_cursor_input: Position_Delivered_Event_Stream_Cursor_Input;
  position_delivered_event_stream_cursor_value_input: Position_Delivered_Event_Stream_Cursor_Value_Input;
  position_liquidated_event_stream_cursor_input: Position_Liquidated_Event_Stream_Cursor_Input;
  position_liquidated_event_stream_cursor_value_input: Position_Liquidated_Event_Stream_Cursor_Value_Input;
  position_upserted_event_stream_cursor_input: Position_Upserted_Event_Stream_Cursor_Input;
  position_upserted_event_stream_cursor_value_input: Position_Upserted_Event_Stream_Cursor_Value_Input;
  role_admin_changed_event_stream_cursor_input: Role_Admin_Changed_Event_Stream_Cursor_Input;
  role_admin_changed_event_stream_cursor_value_input: Role_Admin_Changed_Event_Stream_Cursor_Value_Input;
  role_granted_event_stream_cursor_input: Role_Granted_Event_Stream_Cursor_Input;
  role_granted_event_stream_cursor_value_input: Role_Granted_Event_Stream_Cursor_Value_Input;
  role_revoked_event_stream_cursor_input: Role_Revoked_Event_Stream_Cursor_Input;
  role_revoked_event_stream_cursor_value_input: Role_Revoked_Event_Stream_Cursor_Value_Input;
  unpaused_event_stream_cursor_input: Unpaused_Event_Stream_Cursor_Input;
  unpaused_event_stream_cursor_value_input: Unpaused_Event_Stream_Cursor_Value_Input;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  query_root: {};
  Int: Scalars["Int"];
  balance_collected_event_order_by: Balance_Collected_Event_Order_By;
  balance_collected_event_bool_exp: Balance_Collected_Event_Bool_Exp;
  numeric_comparison_exp: Numeric_Comparison_Exp;
  numeric: Scalars["numeric"];
  Boolean: Scalars["Boolean"];
  String_comparison_exp: String_Comparison_Exp;
  String: Scalars["String"];
  balance_collected_event: Balance_Collected_Event;
  balance_collected_event_aggregate: Balance_Collected_Event_Aggregate;
  balance_collected_event_aggregate_fields: Balance_Collected_Event_Aggregate_Fields;
  balance_collected_event_avg_fields: Balance_Collected_Event_Avg_Fields;
  Float: Scalars["Float"];
  balance_collected_event_max_fields: Balance_Collected_Event_Max_Fields;
  balance_collected_event_min_fields: Balance_Collected_Event_Min_Fields;
  balance_collected_event_stddev_fields: Balance_Collected_Event_Stddev_Fields;
  balance_collected_event_stddev_pop_fields: Balance_Collected_Event_Stddev_Pop_Fields;
  balance_collected_event_stddev_samp_fields: Balance_Collected_Event_Stddev_Samp_Fields;
  balance_collected_event_sum_fields: Balance_Collected_Event_Sum_Fields;
  balance_collected_event_var_pop_fields: Balance_Collected_Event_Var_Pop_Fields;
  balance_collected_event_var_samp_fields: Balance_Collected_Event_Var_Samp_Fields;
  balance_collected_event_variance_fields: Balance_Collected_Event_Variance_Fields;
  collateral_added_event_order_by: Collateral_Added_Event_Order_By;
  collateral_added_event_bool_exp: Collateral_Added_Event_Bool_Exp;
  collateral_added_event: Collateral_Added_Event;
  collateral_added_event_aggregate: Collateral_Added_Event_Aggregate;
  collateral_added_event_aggregate_fields: Collateral_Added_Event_Aggregate_Fields;
  collateral_added_event_avg_fields: Collateral_Added_Event_Avg_Fields;
  collateral_added_event_max_fields: Collateral_Added_Event_Max_Fields;
  collateral_added_event_min_fields: Collateral_Added_Event_Min_Fields;
  collateral_added_event_stddev_fields: Collateral_Added_Event_Stddev_Fields;
  collateral_added_event_stddev_pop_fields: Collateral_Added_Event_Stddev_Pop_Fields;
  collateral_added_event_stddev_samp_fields: Collateral_Added_Event_Stddev_Samp_Fields;
  collateral_added_event_sum_fields: Collateral_Added_Event_Sum_Fields;
  collateral_added_event_var_pop_fields: Collateral_Added_Event_Var_Pop_Fields;
  collateral_added_event_var_samp_fields: Collateral_Added_Event_Var_Samp_Fields;
  collateral_added_event_variance_fields: Collateral_Added_Event_Variance_Fields;
  collateral_removed_event_order_by: Collateral_Removed_Event_Order_By;
  collateral_removed_event_bool_exp: Collateral_Removed_Event_Bool_Exp;
  collateral_removed_event: Collateral_Removed_Event;
  collateral_removed_event_aggregate: Collateral_Removed_Event_Aggregate;
  collateral_removed_event_aggregate_fields: Collateral_Removed_Event_Aggregate_Fields;
  collateral_removed_event_avg_fields: Collateral_Removed_Event_Avg_Fields;
  collateral_removed_event_max_fields: Collateral_Removed_Event_Max_Fields;
  collateral_removed_event_min_fields: Collateral_Removed_Event_Min_Fields;
  collateral_removed_event_stddev_fields: Collateral_Removed_Event_Stddev_Fields;
  collateral_removed_event_stddev_pop_fields: Collateral_Removed_Event_Stddev_Pop_Fields;
  collateral_removed_event_stddev_samp_fields: Collateral_Removed_Event_Stddev_Samp_Fields;
  collateral_removed_event_sum_fields: Collateral_Removed_Event_Sum_Fields;
  collateral_removed_event_var_pop_fields: Collateral_Removed_Event_Var_Pop_Fields;
  collateral_removed_event_var_samp_fields: Collateral_Removed_Event_Var_Samp_Fields;
  collateral_removed_event_variance_fields: Collateral_Removed_Event_Variance_Fields;
  contango_yield_admin_changed_event_order_by: Contango_Yield_Admin_Changed_Event_Order_By;
  contango_yield_admin_changed_event_bool_exp: Contango_Yield_Admin_Changed_Event_Bool_Exp;
  contango_yield_admin_changed_event: Contango_Yield_Admin_Changed_Event;
  contango_yield_admin_changed_event_aggregate: Contango_Yield_Admin_Changed_Event_Aggregate;
  contango_yield_admin_changed_event_aggregate_fields: Contango_Yield_Admin_Changed_Event_Aggregate_Fields;
  contango_yield_admin_changed_event_avg_fields: Contango_Yield_Admin_Changed_Event_Avg_Fields;
  contango_yield_admin_changed_event_max_fields: Contango_Yield_Admin_Changed_Event_Max_Fields;
  contango_yield_admin_changed_event_min_fields: Contango_Yield_Admin_Changed_Event_Min_Fields;
  contango_yield_admin_changed_event_stddev_fields: Contango_Yield_Admin_Changed_Event_Stddev_Fields;
  contango_yield_admin_changed_event_stddev_pop_fields: Contango_Yield_Admin_Changed_Event_Stddev_Pop_Fields;
  contango_yield_admin_changed_event_stddev_samp_fields: Contango_Yield_Admin_Changed_Event_Stddev_Samp_Fields;
  contango_yield_admin_changed_event_sum_fields: Contango_Yield_Admin_Changed_Event_Sum_Fields;
  contango_yield_admin_changed_event_var_pop_fields: Contango_Yield_Admin_Changed_Event_Var_Pop_Fields;
  contango_yield_admin_changed_event_var_samp_fields: Contango_Yield_Admin_Changed_Event_Var_Samp_Fields;
  contango_yield_admin_changed_event_variance_fields: Contango_Yield_Admin_Changed_Event_Variance_Fields;
  contango_yield_beacon_upgraded_event_order_by: Contango_Yield_Beacon_Upgraded_Event_Order_By;
  contango_yield_beacon_upgraded_event_bool_exp: Contango_Yield_Beacon_Upgraded_Event_Bool_Exp;
  contango_yield_beacon_upgraded_event: Contango_Yield_Beacon_Upgraded_Event;
  contango_yield_beacon_upgraded_event_aggregate: Contango_Yield_Beacon_Upgraded_Event_Aggregate;
  contango_yield_beacon_upgraded_event_aggregate_fields: Contango_Yield_Beacon_Upgraded_Event_Aggregate_Fields;
  contango_yield_beacon_upgraded_event_avg_fields: Contango_Yield_Beacon_Upgraded_Event_Avg_Fields;
  contango_yield_beacon_upgraded_event_max_fields: Contango_Yield_Beacon_Upgraded_Event_Max_Fields;
  contango_yield_beacon_upgraded_event_min_fields: Contango_Yield_Beacon_Upgraded_Event_Min_Fields;
  contango_yield_beacon_upgraded_event_stddev_fields: Contango_Yield_Beacon_Upgraded_Event_Stddev_Fields;
  contango_yield_beacon_upgraded_event_stddev_pop_fields: Contango_Yield_Beacon_Upgraded_Event_Stddev_Pop_Fields;
  contango_yield_beacon_upgraded_event_stddev_samp_fields: Contango_Yield_Beacon_Upgraded_Event_Stddev_Samp_Fields;
  contango_yield_beacon_upgraded_event_sum_fields: Contango_Yield_Beacon_Upgraded_Event_Sum_Fields;
  contango_yield_beacon_upgraded_event_var_pop_fields: Contango_Yield_Beacon_Upgraded_Event_Var_Pop_Fields;
  contango_yield_beacon_upgraded_event_var_samp_fields: Contango_Yield_Beacon_Upgraded_Event_Var_Samp_Fields;
  contango_yield_beacon_upgraded_event_variance_fields: Contango_Yield_Beacon_Upgraded_Event_Variance_Fields;
  contango_yield_upgraded_event_order_by: Contango_Yield_Upgraded_Event_Order_By;
  contango_yield_upgraded_event_bool_exp: Contango_Yield_Upgraded_Event_Bool_Exp;
  contango_yield_upgraded_event: Contango_Yield_Upgraded_Event;
  contango_yield_upgraded_event_aggregate: Contango_Yield_Upgraded_Event_Aggregate;
  contango_yield_upgraded_event_aggregate_fields: Contango_Yield_Upgraded_Event_Aggregate_Fields;
  contango_yield_upgraded_event_avg_fields: Contango_Yield_Upgraded_Event_Avg_Fields;
  contango_yield_upgraded_event_max_fields: Contango_Yield_Upgraded_Event_Max_Fields;
  contango_yield_upgraded_event_min_fields: Contango_Yield_Upgraded_Event_Min_Fields;
  contango_yield_upgraded_event_stddev_fields: Contango_Yield_Upgraded_Event_Stddev_Fields;
  contango_yield_upgraded_event_stddev_pop_fields: Contango_Yield_Upgraded_Event_Stddev_Pop_Fields;
  contango_yield_upgraded_event_stddev_samp_fields: Contango_Yield_Upgraded_Event_Stddev_Samp_Fields;
  contango_yield_upgraded_event_sum_fields: Contango_Yield_Upgraded_Event_Sum_Fields;
  contango_yield_upgraded_event_var_pop_fields: Contango_Yield_Upgraded_Event_Var_Pop_Fields;
  contango_yield_upgraded_event_var_samp_fields: Contango_Yield_Upgraded_Event_Var_Samp_Fields;
  contango_yield_upgraded_event_variance_fields: Contango_Yield_Upgraded_Event_Variance_Fields;
  contract_traded_event_order_by: Contract_Traded_Event_Order_By;
  contract_traded_event_bool_exp: Contract_Traded_Event_Bool_Exp;
  jsonb_comparison_exp: Jsonb_Comparison_Exp;
  jsonb_cast_exp: Jsonb_Cast_Exp;
  jsonb: Scalars["jsonb"];
  contract_traded_event: Contract_Traded_Event;
  contract_traded_event_aggregate: Contract_Traded_Event_Aggregate;
  contract_traded_event_aggregate_fields: Contract_Traded_Event_Aggregate_Fields;
  contract_traded_event_avg_fields: Contract_Traded_Event_Avg_Fields;
  contract_traded_event_max_fields: Contract_Traded_Event_Max_Fields;
  contract_traded_event_min_fields: Contract_Traded_Event_Min_Fields;
  contract_traded_event_stddev_fields: Contract_Traded_Event_Stddev_Fields;
  contract_traded_event_stddev_pop_fields: Contract_Traded_Event_Stddev_Pop_Fields;
  contract_traded_event_stddev_samp_fields: Contract_Traded_Event_Stddev_Samp_Fields;
  contract_traded_event_sum_fields: Contract_Traded_Event_Sum_Fields;
  contract_traded_event_var_pop_fields: Contract_Traded_Event_Var_Pop_Fields;
  contract_traded_event_var_samp_fields: Contract_Traded_Event_Var_Samp_Fields;
  contract_traded_event_variance_fields: Contract_Traded_Event_Variance_Fields;
  initialized_event_order_by: Initialized_Event_Order_By;
  initialized_event_bool_exp: Initialized_Event_Bool_Exp;
  initialized_event: Initialized_Event;
  initialized_event_aggregate: Initialized_Event_Aggregate;
  initialized_event_aggregate_fields: Initialized_Event_Aggregate_Fields;
  initialized_event_avg_fields: Initialized_Event_Avg_Fields;
  initialized_event_max_fields: Initialized_Event_Max_Fields;
  initialized_event_min_fields: Initialized_Event_Min_Fields;
  initialized_event_stddev_fields: Initialized_Event_Stddev_Fields;
  initialized_event_stddev_pop_fields: Initialized_Event_Stddev_Pop_Fields;
  initialized_event_stddev_samp_fields: Initialized_Event_Stddev_Samp_Fields;
  initialized_event_sum_fields: Initialized_Event_Sum_Fields;
  initialized_event_var_pop_fields: Initialized_Event_Var_Pop_Fields;
  initialized_event_var_samp_fields: Initialized_Event_Var_Samp_Fields;
  initialized_event_variance_fields: Initialized_Event_Variance_Fields;
  paused_event_order_by: Paused_Event_Order_By;
  paused_event_bool_exp: Paused_Event_Bool_Exp;
  paused_event: Paused_Event;
  paused_event_aggregate: Paused_Event_Aggregate;
  paused_event_aggregate_fields: Paused_Event_Aggregate_Fields;
  paused_event_avg_fields: Paused_Event_Avg_Fields;
  paused_event_max_fields: Paused_Event_Max_Fields;
  paused_event_min_fields: Paused_Event_Min_Fields;
  paused_event_stddev_fields: Paused_Event_Stddev_Fields;
  paused_event_stddev_pop_fields: Paused_Event_Stddev_Pop_Fields;
  paused_event_stddev_samp_fields: Paused_Event_Stddev_Samp_Fields;
  paused_event_sum_fields: Paused_Event_Sum_Fields;
  paused_event_var_pop_fields: Paused_Event_Var_Pop_Fields;
  paused_event_var_samp_fields: Paused_Event_Var_Samp_Fields;
  paused_event_variance_fields: Paused_Event_Variance_Fields;
  position_closed_event_order_by: Position_Closed_Event_Order_By;
  position_closed_event_bool_exp: Position_Closed_Event_Bool_Exp;
  position_closed_event: Position_Closed_Event;
  position_closed_event_aggregate: Position_Closed_Event_Aggregate;
  position_closed_event_aggregate_fields: Position_Closed_Event_Aggregate_Fields;
  position_closed_event_avg_fields: Position_Closed_Event_Avg_Fields;
  position_closed_event_max_fields: Position_Closed_Event_Max_Fields;
  position_closed_event_min_fields: Position_Closed_Event_Min_Fields;
  position_closed_event_stddev_fields: Position_Closed_Event_Stddev_Fields;
  position_closed_event_stddev_pop_fields: Position_Closed_Event_Stddev_Pop_Fields;
  position_closed_event_stddev_samp_fields: Position_Closed_Event_Stddev_Samp_Fields;
  position_closed_event_sum_fields: Position_Closed_Event_Sum_Fields;
  position_closed_event_var_pop_fields: Position_Closed_Event_Var_Pop_Fields;
  position_closed_event_var_samp_fields: Position_Closed_Event_Var_Samp_Fields;
  position_closed_event_variance_fields: Position_Closed_Event_Variance_Fields;
  position_delivered_event_order_by: Position_Delivered_Event_Order_By;
  position_delivered_event_bool_exp: Position_Delivered_Event_Bool_Exp;
  position_delivered_event: Position_Delivered_Event;
  position_delivered_event_aggregate: Position_Delivered_Event_Aggregate;
  position_delivered_event_aggregate_fields: Position_Delivered_Event_Aggregate_Fields;
  position_delivered_event_avg_fields: Position_Delivered_Event_Avg_Fields;
  position_delivered_event_max_fields: Position_Delivered_Event_Max_Fields;
  position_delivered_event_min_fields: Position_Delivered_Event_Min_Fields;
  position_delivered_event_stddev_fields: Position_Delivered_Event_Stddev_Fields;
  position_delivered_event_stddev_pop_fields: Position_Delivered_Event_Stddev_Pop_Fields;
  position_delivered_event_stddev_samp_fields: Position_Delivered_Event_Stddev_Samp_Fields;
  position_delivered_event_sum_fields: Position_Delivered_Event_Sum_Fields;
  position_delivered_event_var_pop_fields: Position_Delivered_Event_Var_Pop_Fields;
  position_delivered_event_var_samp_fields: Position_Delivered_Event_Var_Samp_Fields;
  position_delivered_event_variance_fields: Position_Delivered_Event_Variance_Fields;
  position_liquidated_event_order_by: Position_Liquidated_Event_Order_By;
  position_liquidated_event_bool_exp: Position_Liquidated_Event_Bool_Exp;
  position_liquidated_event: Position_Liquidated_Event;
  position_liquidated_event_aggregate: Position_Liquidated_Event_Aggregate;
  position_liquidated_event_aggregate_fields: Position_Liquidated_Event_Aggregate_Fields;
  position_liquidated_event_avg_fields: Position_Liquidated_Event_Avg_Fields;
  position_liquidated_event_max_fields: Position_Liquidated_Event_Max_Fields;
  position_liquidated_event_min_fields: Position_Liquidated_Event_Min_Fields;
  position_liquidated_event_stddev_fields: Position_Liquidated_Event_Stddev_Fields;
  position_liquidated_event_stddev_pop_fields: Position_Liquidated_Event_Stddev_Pop_Fields;
  position_liquidated_event_stddev_samp_fields: Position_Liquidated_Event_Stddev_Samp_Fields;
  position_liquidated_event_sum_fields: Position_Liquidated_Event_Sum_Fields;
  position_liquidated_event_var_pop_fields: Position_Liquidated_Event_Var_Pop_Fields;
  position_liquidated_event_var_samp_fields: Position_Liquidated_Event_Var_Samp_Fields;
  position_liquidated_event_variance_fields: Position_Liquidated_Event_Variance_Fields;
  position_upserted_event_order_by: Position_Upserted_Event_Order_By;
  position_upserted_event_bool_exp: Position_Upserted_Event_Bool_Exp;
  position_upserted_event: Position_Upserted_Event;
  position_upserted_event_aggregate: Position_Upserted_Event_Aggregate;
  position_upserted_event_aggregate_fields: Position_Upserted_Event_Aggregate_Fields;
  position_upserted_event_avg_fields: Position_Upserted_Event_Avg_Fields;
  position_upserted_event_max_fields: Position_Upserted_Event_Max_Fields;
  position_upserted_event_min_fields: Position_Upserted_Event_Min_Fields;
  position_upserted_event_stddev_fields: Position_Upserted_Event_Stddev_Fields;
  position_upserted_event_stddev_pop_fields: Position_Upserted_Event_Stddev_Pop_Fields;
  position_upserted_event_stddev_samp_fields: Position_Upserted_Event_Stddev_Samp_Fields;
  position_upserted_event_sum_fields: Position_Upserted_Event_Sum_Fields;
  position_upserted_event_var_pop_fields: Position_Upserted_Event_Var_Pop_Fields;
  position_upserted_event_var_samp_fields: Position_Upserted_Event_Var_Samp_Fields;
  position_upserted_event_variance_fields: Position_Upserted_Event_Variance_Fields;
  role_admin_changed_event_order_by: Role_Admin_Changed_Event_Order_By;
  role_admin_changed_event_bool_exp: Role_Admin_Changed_Event_Bool_Exp;
  role_admin_changed_event: Role_Admin_Changed_Event;
  role_admin_changed_event_aggregate: Role_Admin_Changed_Event_Aggregate;
  role_admin_changed_event_aggregate_fields: Role_Admin_Changed_Event_Aggregate_Fields;
  role_admin_changed_event_avg_fields: Role_Admin_Changed_Event_Avg_Fields;
  role_admin_changed_event_max_fields: Role_Admin_Changed_Event_Max_Fields;
  role_admin_changed_event_min_fields: Role_Admin_Changed_Event_Min_Fields;
  role_admin_changed_event_stddev_fields: Role_Admin_Changed_Event_Stddev_Fields;
  role_admin_changed_event_stddev_pop_fields: Role_Admin_Changed_Event_Stddev_Pop_Fields;
  role_admin_changed_event_stddev_samp_fields: Role_Admin_Changed_Event_Stddev_Samp_Fields;
  role_admin_changed_event_sum_fields: Role_Admin_Changed_Event_Sum_Fields;
  role_admin_changed_event_var_pop_fields: Role_Admin_Changed_Event_Var_Pop_Fields;
  role_admin_changed_event_var_samp_fields: Role_Admin_Changed_Event_Var_Samp_Fields;
  role_admin_changed_event_variance_fields: Role_Admin_Changed_Event_Variance_Fields;
  role_granted_event_order_by: Role_Granted_Event_Order_By;
  role_granted_event_bool_exp: Role_Granted_Event_Bool_Exp;
  role_granted_event: Role_Granted_Event;
  role_granted_event_aggregate: Role_Granted_Event_Aggregate;
  role_granted_event_aggregate_fields: Role_Granted_Event_Aggregate_Fields;
  role_granted_event_avg_fields: Role_Granted_Event_Avg_Fields;
  role_granted_event_max_fields: Role_Granted_Event_Max_Fields;
  role_granted_event_min_fields: Role_Granted_Event_Min_Fields;
  role_granted_event_stddev_fields: Role_Granted_Event_Stddev_Fields;
  role_granted_event_stddev_pop_fields: Role_Granted_Event_Stddev_Pop_Fields;
  role_granted_event_stddev_samp_fields: Role_Granted_Event_Stddev_Samp_Fields;
  role_granted_event_sum_fields: Role_Granted_Event_Sum_Fields;
  role_granted_event_var_pop_fields: Role_Granted_Event_Var_Pop_Fields;
  role_granted_event_var_samp_fields: Role_Granted_Event_Var_Samp_Fields;
  role_granted_event_variance_fields: Role_Granted_Event_Variance_Fields;
  role_revoked_event_order_by: Role_Revoked_Event_Order_By;
  role_revoked_event_bool_exp: Role_Revoked_Event_Bool_Exp;
  role_revoked_event: Role_Revoked_Event;
  role_revoked_event_aggregate: Role_Revoked_Event_Aggregate;
  role_revoked_event_aggregate_fields: Role_Revoked_Event_Aggregate_Fields;
  role_revoked_event_avg_fields: Role_Revoked_Event_Avg_Fields;
  role_revoked_event_max_fields: Role_Revoked_Event_Max_Fields;
  role_revoked_event_min_fields: Role_Revoked_Event_Min_Fields;
  role_revoked_event_stddev_fields: Role_Revoked_Event_Stddev_Fields;
  role_revoked_event_stddev_pop_fields: Role_Revoked_Event_Stddev_Pop_Fields;
  role_revoked_event_stddev_samp_fields: Role_Revoked_Event_Stddev_Samp_Fields;
  role_revoked_event_sum_fields: Role_Revoked_Event_Sum_Fields;
  role_revoked_event_var_pop_fields: Role_Revoked_Event_Var_Pop_Fields;
  role_revoked_event_var_samp_fields: Role_Revoked_Event_Var_Samp_Fields;
  role_revoked_event_variance_fields: Role_Revoked_Event_Variance_Fields;
  unpaused_event_order_by: Unpaused_Event_Order_By;
  unpaused_event_bool_exp: Unpaused_Event_Bool_Exp;
  unpaused_event: Unpaused_Event;
  unpaused_event_aggregate: Unpaused_Event_Aggregate;
  unpaused_event_aggregate_fields: Unpaused_Event_Aggregate_Fields;
  unpaused_event_avg_fields: Unpaused_Event_Avg_Fields;
  unpaused_event_max_fields: Unpaused_Event_Max_Fields;
  unpaused_event_min_fields: Unpaused_Event_Min_Fields;
  unpaused_event_stddev_fields: Unpaused_Event_Stddev_Fields;
  unpaused_event_stddev_pop_fields: Unpaused_Event_Stddev_Pop_Fields;
  unpaused_event_stddev_samp_fields: Unpaused_Event_Stddev_Samp_Fields;
  unpaused_event_sum_fields: Unpaused_Event_Sum_Fields;
  unpaused_event_var_pop_fields: Unpaused_Event_Var_Pop_Fields;
  unpaused_event_var_samp_fields: Unpaused_Event_Var_Samp_Fields;
  unpaused_event_variance_fields: Unpaused_Event_Variance_Fields;
  mutation_root: {};
  balance_collected_event_mutation_response: Balance_Collected_Event_Mutation_Response;
  collateral_added_event_mutation_response: Collateral_Added_Event_Mutation_Response;
  collateral_removed_event_mutation_response: Collateral_Removed_Event_Mutation_Response;
  contango_yield_admin_changed_event_mutation_response: Contango_Yield_Admin_Changed_Event_Mutation_Response;
  contango_yield_beacon_upgraded_event_mutation_response: Contango_Yield_Beacon_Upgraded_Event_Mutation_Response;
  contango_yield_upgraded_event_mutation_response: Contango_Yield_Upgraded_Event_Mutation_Response;
  contract_traded_event_mutation_response: Contract_Traded_Event_Mutation_Response;
  initialized_event_mutation_response: Initialized_Event_Mutation_Response;
  paused_event_mutation_response: Paused_Event_Mutation_Response;
  position_closed_event_mutation_response: Position_Closed_Event_Mutation_Response;
  position_delivered_event_mutation_response: Position_Delivered_Event_Mutation_Response;
  position_liquidated_event_mutation_response: Position_Liquidated_Event_Mutation_Response;
  position_upserted_event_mutation_response: Position_Upserted_Event_Mutation_Response;
  role_admin_changed_event_mutation_response: Role_Admin_Changed_Event_Mutation_Response;
  role_granted_event_mutation_response: Role_Granted_Event_Mutation_Response;
  role_revoked_event_mutation_response: Role_Revoked_Event_Mutation_Response;
  unpaused_event_mutation_response: Unpaused_Event_Mutation_Response;
  balance_collected_event_insert_input: Balance_Collected_Event_Insert_Input;
  balance_collected_event_on_conflict: Balance_Collected_Event_On_Conflict;
  collateral_added_event_insert_input: Collateral_Added_Event_Insert_Input;
  collateral_added_event_on_conflict: Collateral_Added_Event_On_Conflict;
  collateral_removed_event_insert_input: Collateral_Removed_Event_Insert_Input;
  collateral_removed_event_on_conflict: Collateral_Removed_Event_On_Conflict;
  contango_yield_admin_changed_event_insert_input: Contango_Yield_Admin_Changed_Event_Insert_Input;
  contango_yield_admin_changed_event_on_conflict: Contango_Yield_Admin_Changed_Event_On_Conflict;
  contango_yield_beacon_upgraded_event_insert_input: Contango_Yield_Beacon_Upgraded_Event_Insert_Input;
  contango_yield_beacon_upgraded_event_on_conflict: Contango_Yield_Beacon_Upgraded_Event_On_Conflict;
  contango_yield_upgraded_event_insert_input: Contango_Yield_Upgraded_Event_Insert_Input;
  contango_yield_upgraded_event_on_conflict: Contango_Yield_Upgraded_Event_On_Conflict;
  contract_traded_event_insert_input: Contract_Traded_Event_Insert_Input;
  contract_traded_event_on_conflict: Contract_Traded_Event_On_Conflict;
  initialized_event_insert_input: Initialized_Event_Insert_Input;
  initialized_event_on_conflict: Initialized_Event_On_Conflict;
  paused_event_insert_input: Paused_Event_Insert_Input;
  paused_event_on_conflict: Paused_Event_On_Conflict;
  position_closed_event_insert_input: Position_Closed_Event_Insert_Input;
  position_closed_event_on_conflict: Position_Closed_Event_On_Conflict;
  position_delivered_event_insert_input: Position_Delivered_Event_Insert_Input;
  position_delivered_event_on_conflict: Position_Delivered_Event_On_Conflict;
  position_liquidated_event_insert_input: Position_Liquidated_Event_Insert_Input;
  position_liquidated_event_on_conflict: Position_Liquidated_Event_On_Conflict;
  position_upserted_event_insert_input: Position_Upserted_Event_Insert_Input;
  position_upserted_event_on_conflict: Position_Upserted_Event_On_Conflict;
  role_admin_changed_event_insert_input: Role_Admin_Changed_Event_Insert_Input;
  role_admin_changed_event_on_conflict: Role_Admin_Changed_Event_On_Conflict;
  role_granted_event_insert_input: Role_Granted_Event_Insert_Input;
  role_granted_event_on_conflict: Role_Granted_Event_On_Conflict;
  role_revoked_event_insert_input: Role_Revoked_Event_Insert_Input;
  role_revoked_event_on_conflict: Role_Revoked_Event_On_Conflict;
  unpaused_event_insert_input: Unpaused_Event_Insert_Input;
  unpaused_event_on_conflict: Unpaused_Event_On_Conflict;
  balance_collected_event_inc_input: Balance_Collected_Event_Inc_Input;
  balance_collected_event_set_input: Balance_Collected_Event_Set_Input;
  balance_collected_event_pk_columns_input: Balance_Collected_Event_Pk_Columns_Input;
  balance_collected_event_updates: Balance_Collected_Event_Updates;
  collateral_added_event_inc_input: Collateral_Added_Event_Inc_Input;
  collateral_added_event_set_input: Collateral_Added_Event_Set_Input;
  collateral_added_event_pk_columns_input: Collateral_Added_Event_Pk_Columns_Input;
  collateral_added_event_updates: Collateral_Added_Event_Updates;
  collateral_removed_event_inc_input: Collateral_Removed_Event_Inc_Input;
  collateral_removed_event_set_input: Collateral_Removed_Event_Set_Input;
  collateral_removed_event_pk_columns_input: Collateral_Removed_Event_Pk_Columns_Input;
  collateral_removed_event_updates: Collateral_Removed_Event_Updates;
  contango_yield_admin_changed_event_inc_input: Contango_Yield_Admin_Changed_Event_Inc_Input;
  contango_yield_admin_changed_event_set_input: Contango_Yield_Admin_Changed_Event_Set_Input;
  contango_yield_admin_changed_event_pk_columns_input: Contango_Yield_Admin_Changed_Event_Pk_Columns_Input;
  contango_yield_admin_changed_event_updates: Contango_Yield_Admin_Changed_Event_Updates;
  contango_yield_beacon_upgraded_event_inc_input: Contango_Yield_Beacon_Upgraded_Event_Inc_Input;
  contango_yield_beacon_upgraded_event_set_input: Contango_Yield_Beacon_Upgraded_Event_Set_Input;
  contango_yield_beacon_upgraded_event_pk_columns_input: Contango_Yield_Beacon_Upgraded_Event_Pk_Columns_Input;
  contango_yield_beacon_upgraded_event_updates: Contango_Yield_Beacon_Upgraded_Event_Updates;
  contango_yield_upgraded_event_inc_input: Contango_Yield_Upgraded_Event_Inc_Input;
  contango_yield_upgraded_event_set_input: Contango_Yield_Upgraded_Event_Set_Input;
  contango_yield_upgraded_event_pk_columns_input: Contango_Yield_Upgraded_Event_Pk_Columns_Input;
  contango_yield_upgraded_event_updates: Contango_Yield_Upgraded_Event_Updates;
  contract_traded_event_append_input: Contract_Traded_Event_Append_Input;
  contract_traded_event_delete_at_path_input: Contract_Traded_Event_Delete_At_Path_Input;
  contract_traded_event_delete_elem_input: Contract_Traded_Event_Delete_Elem_Input;
  contract_traded_event_delete_key_input: Contract_Traded_Event_Delete_Key_Input;
  contract_traded_event_inc_input: Contract_Traded_Event_Inc_Input;
  contract_traded_event_prepend_input: Contract_Traded_Event_Prepend_Input;
  contract_traded_event_set_input: Contract_Traded_Event_Set_Input;
  contract_traded_event_pk_columns_input: Contract_Traded_Event_Pk_Columns_Input;
  contract_traded_event_updates: Contract_Traded_Event_Updates;
  initialized_event_inc_input: Initialized_Event_Inc_Input;
  initialized_event_set_input: Initialized_Event_Set_Input;
  initialized_event_pk_columns_input: Initialized_Event_Pk_Columns_Input;
  initialized_event_updates: Initialized_Event_Updates;
  paused_event_inc_input: Paused_Event_Inc_Input;
  paused_event_set_input: Paused_Event_Set_Input;
  paused_event_pk_columns_input: Paused_Event_Pk_Columns_Input;
  paused_event_updates: Paused_Event_Updates;
  position_closed_event_inc_input: Position_Closed_Event_Inc_Input;
  position_closed_event_set_input: Position_Closed_Event_Set_Input;
  position_closed_event_pk_columns_input: Position_Closed_Event_Pk_Columns_Input;
  position_closed_event_updates: Position_Closed_Event_Updates;
  position_delivered_event_inc_input: Position_Delivered_Event_Inc_Input;
  position_delivered_event_set_input: Position_Delivered_Event_Set_Input;
  position_delivered_event_pk_columns_input: Position_Delivered_Event_Pk_Columns_Input;
  position_delivered_event_updates: Position_Delivered_Event_Updates;
  position_liquidated_event_inc_input: Position_Liquidated_Event_Inc_Input;
  position_liquidated_event_set_input: Position_Liquidated_Event_Set_Input;
  position_liquidated_event_pk_columns_input: Position_Liquidated_Event_Pk_Columns_Input;
  position_liquidated_event_updates: Position_Liquidated_Event_Updates;
  position_upserted_event_inc_input: Position_Upserted_Event_Inc_Input;
  position_upserted_event_set_input: Position_Upserted_Event_Set_Input;
  position_upserted_event_pk_columns_input: Position_Upserted_Event_Pk_Columns_Input;
  position_upserted_event_updates: Position_Upserted_Event_Updates;
  role_admin_changed_event_inc_input: Role_Admin_Changed_Event_Inc_Input;
  role_admin_changed_event_set_input: Role_Admin_Changed_Event_Set_Input;
  role_admin_changed_event_pk_columns_input: Role_Admin_Changed_Event_Pk_Columns_Input;
  role_admin_changed_event_updates: Role_Admin_Changed_Event_Updates;
  role_granted_event_inc_input: Role_Granted_Event_Inc_Input;
  role_granted_event_set_input: Role_Granted_Event_Set_Input;
  role_granted_event_pk_columns_input: Role_Granted_Event_Pk_Columns_Input;
  role_granted_event_updates: Role_Granted_Event_Updates;
  role_revoked_event_inc_input: Role_Revoked_Event_Inc_Input;
  role_revoked_event_set_input: Role_Revoked_Event_Set_Input;
  role_revoked_event_pk_columns_input: Role_Revoked_Event_Pk_Columns_Input;
  role_revoked_event_updates: Role_Revoked_Event_Updates;
  unpaused_event_inc_input: Unpaused_Event_Inc_Input;
  unpaused_event_set_input: Unpaused_Event_Set_Input;
  unpaused_event_pk_columns_input: Unpaused_Event_Pk_Columns_Input;
  unpaused_event_updates: Unpaused_Event_Updates;
  subscription_root: {};
  balance_collected_event_stream_cursor_input: Balance_Collected_Event_Stream_Cursor_Input;
  balance_collected_event_stream_cursor_value_input: Balance_Collected_Event_Stream_Cursor_Value_Input;
  collateral_added_event_stream_cursor_input: Collateral_Added_Event_Stream_Cursor_Input;
  collateral_added_event_stream_cursor_value_input: Collateral_Added_Event_Stream_Cursor_Value_Input;
  collateral_removed_event_stream_cursor_input: Collateral_Removed_Event_Stream_Cursor_Input;
  collateral_removed_event_stream_cursor_value_input: Collateral_Removed_Event_Stream_Cursor_Value_Input;
  contango_yield_admin_changed_event_stream_cursor_input: Contango_Yield_Admin_Changed_Event_Stream_Cursor_Input;
  contango_yield_admin_changed_event_stream_cursor_value_input: Contango_Yield_Admin_Changed_Event_Stream_Cursor_Value_Input;
  contango_yield_beacon_upgraded_event_stream_cursor_input: Contango_Yield_Beacon_Upgraded_Event_Stream_Cursor_Input;
  contango_yield_beacon_upgraded_event_stream_cursor_value_input: Contango_Yield_Beacon_Upgraded_Event_Stream_Cursor_Value_Input;
  contango_yield_upgraded_event_stream_cursor_input: Contango_Yield_Upgraded_Event_Stream_Cursor_Input;
  contango_yield_upgraded_event_stream_cursor_value_input: Contango_Yield_Upgraded_Event_Stream_Cursor_Value_Input;
  contract_traded_event_stream_cursor_input: Contract_Traded_Event_Stream_Cursor_Input;
  contract_traded_event_stream_cursor_value_input: Contract_Traded_Event_Stream_Cursor_Value_Input;
  initialized_event_stream_cursor_input: Initialized_Event_Stream_Cursor_Input;
  initialized_event_stream_cursor_value_input: Initialized_Event_Stream_Cursor_Value_Input;
  paused_event_stream_cursor_input: Paused_Event_Stream_Cursor_Input;
  paused_event_stream_cursor_value_input: Paused_Event_Stream_Cursor_Value_Input;
  position_closed_event_stream_cursor_input: Position_Closed_Event_Stream_Cursor_Input;
  position_closed_event_stream_cursor_value_input: Position_Closed_Event_Stream_Cursor_Value_Input;
  position_delivered_event_stream_cursor_input: Position_Delivered_Event_Stream_Cursor_Input;
  position_delivered_event_stream_cursor_value_input: Position_Delivered_Event_Stream_Cursor_Value_Input;
  position_liquidated_event_stream_cursor_input: Position_Liquidated_Event_Stream_Cursor_Input;
  position_liquidated_event_stream_cursor_value_input: Position_Liquidated_Event_Stream_Cursor_Value_Input;
  position_upserted_event_stream_cursor_input: Position_Upserted_Event_Stream_Cursor_Input;
  position_upserted_event_stream_cursor_value_input: Position_Upserted_Event_Stream_Cursor_Value_Input;
  role_admin_changed_event_stream_cursor_input: Role_Admin_Changed_Event_Stream_Cursor_Input;
  role_admin_changed_event_stream_cursor_value_input: Role_Admin_Changed_Event_Stream_Cursor_Value_Input;
  role_granted_event_stream_cursor_input: Role_Granted_Event_Stream_Cursor_Input;
  role_granted_event_stream_cursor_value_input: Role_Granted_Event_Stream_Cursor_Value_Input;
  role_revoked_event_stream_cursor_input: Role_Revoked_Event_Stream_Cursor_Input;
  role_revoked_event_stream_cursor_value_input: Role_Revoked_Event_Stream_Cursor_Value_Input;
  unpaused_event_stream_cursor_input: Unpaused_Event_Stream_Cursor_Input;
  unpaused_event_stream_cursor_value_input: Unpaused_Event_Stream_Cursor_Value_Input;
};

export type CachedDirectiveArgs = {
  refresh?: Scalars["Boolean"];
  ttl?: Scalars["Int"];
};

export type CachedDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = CachedDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Query_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["query_root"] = ResolversParentTypes["query_root"]
> = {
  balance_collected_event?: Resolver<
    Array<ResolversTypes["balance_collected_event"]>,
    ParentType,
    ContextType,
    Partial<Query_RootBalance_Collected_EventArgs>
  >;
  balance_collected_event_aggregate?: Resolver<
    ResolversTypes["balance_collected_event_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootBalance_Collected_Event_AggregateArgs>
  >;
  balance_collected_event_by_pk?: Resolver<
    Maybe<ResolversTypes["balance_collected_event"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootBalance_Collected_Event_By_PkArgs, "id">
  >;
  collateral_added_event?: Resolver<
    Array<ResolversTypes["collateral_added_event"]>,
    ParentType,
    ContextType,
    Partial<Query_RootCollateral_Added_EventArgs>
  >;
  collateral_added_event_aggregate?: Resolver<
    ResolversTypes["collateral_added_event_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootCollateral_Added_Event_AggregateArgs>
  >;
  collateral_added_event_by_pk?: Resolver<
    Maybe<ResolversTypes["collateral_added_event"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootCollateral_Added_Event_By_PkArgs, "id">
  >;
  collateral_removed_event?: Resolver<
    Array<ResolversTypes["collateral_removed_event"]>,
    ParentType,
    ContextType,
    Partial<Query_RootCollateral_Removed_EventArgs>
  >;
  collateral_removed_event_aggregate?: Resolver<
    ResolversTypes["collateral_removed_event_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootCollateral_Removed_Event_AggregateArgs>
  >;
  collateral_removed_event_by_pk?: Resolver<
    Maybe<ResolversTypes["collateral_removed_event"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootCollateral_Removed_Event_By_PkArgs, "id">
  >;
  contango_yield_admin_changed_event?: Resolver<
    Array<ResolversTypes["contango_yield_admin_changed_event"]>,
    ParentType,
    ContextType,
    Partial<Query_RootContango_Yield_Admin_Changed_EventArgs>
  >;
  contango_yield_admin_changed_event_aggregate?: Resolver<
    ResolversTypes["contango_yield_admin_changed_event_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootContango_Yield_Admin_Changed_Event_AggregateArgs>
  >;
  contango_yield_admin_changed_event_by_pk?: Resolver<
    Maybe<ResolversTypes["contango_yield_admin_changed_event"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootContango_Yield_Admin_Changed_Event_By_PkArgs, "id">
  >;
  contango_yield_beacon_upgraded_event?: Resolver<
    Array<ResolversTypes["contango_yield_beacon_upgraded_event"]>,
    ParentType,
    ContextType,
    Partial<Query_RootContango_Yield_Beacon_Upgraded_EventArgs>
  >;
  contango_yield_beacon_upgraded_event_aggregate?: Resolver<
    ResolversTypes["contango_yield_beacon_upgraded_event_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootContango_Yield_Beacon_Upgraded_Event_AggregateArgs>
  >;
  contango_yield_beacon_upgraded_event_by_pk?: Resolver<
    Maybe<ResolversTypes["contango_yield_beacon_upgraded_event"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootContango_Yield_Beacon_Upgraded_Event_By_PkArgs, "id">
  >;
  contango_yield_upgraded_event?: Resolver<
    Array<ResolversTypes["contango_yield_upgraded_event"]>,
    ParentType,
    ContextType,
    Partial<Query_RootContango_Yield_Upgraded_EventArgs>
  >;
  contango_yield_upgraded_event_aggregate?: Resolver<
    ResolversTypes["contango_yield_upgraded_event_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootContango_Yield_Upgraded_Event_AggregateArgs>
  >;
  contango_yield_upgraded_event_by_pk?: Resolver<
    Maybe<ResolversTypes["contango_yield_upgraded_event"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootContango_Yield_Upgraded_Event_By_PkArgs, "id">
  >;
  contract_traded_event?: Resolver<
    Array<ResolversTypes["contract_traded_event"]>,
    ParentType,
    ContextType,
    Partial<Query_RootContract_Traded_EventArgs>
  >;
  contract_traded_event_aggregate?: Resolver<
    ResolversTypes["contract_traded_event_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootContract_Traded_Event_AggregateArgs>
  >;
  contract_traded_event_by_pk?: Resolver<
    Maybe<ResolversTypes["contract_traded_event"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootContract_Traded_Event_By_PkArgs, "id">
  >;
  initialized_event?: Resolver<
    Array<ResolversTypes["initialized_event"]>,
    ParentType,
    ContextType,
    Partial<Query_RootInitialized_EventArgs>
  >;
  initialized_event_aggregate?: Resolver<
    ResolversTypes["initialized_event_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootInitialized_Event_AggregateArgs>
  >;
  initialized_event_by_pk?: Resolver<
    Maybe<ResolversTypes["initialized_event"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootInitialized_Event_By_PkArgs, "id">
  >;
  paused_event?: Resolver<
    Array<ResolversTypes["paused_event"]>,
    ParentType,
    ContextType,
    Partial<Query_RootPaused_EventArgs>
  >;
  paused_event_aggregate?: Resolver<
    ResolversTypes["paused_event_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootPaused_Event_AggregateArgs>
  >;
  paused_event_by_pk?: Resolver<
    Maybe<ResolversTypes["paused_event"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootPaused_Event_By_PkArgs, "id">
  >;
  position_closed_event?: Resolver<
    Array<ResolversTypes["position_closed_event"]>,
    ParentType,
    ContextType,
    Partial<Query_RootPosition_Closed_EventArgs>
  >;
  position_closed_event_aggregate?: Resolver<
    ResolversTypes["position_closed_event_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootPosition_Closed_Event_AggregateArgs>
  >;
  position_closed_event_by_pk?: Resolver<
    Maybe<ResolversTypes["position_closed_event"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootPosition_Closed_Event_By_PkArgs, "id">
  >;
  position_delivered_event?: Resolver<
    Array<ResolversTypes["position_delivered_event"]>,
    ParentType,
    ContextType,
    Partial<Query_RootPosition_Delivered_EventArgs>
  >;
  position_delivered_event_aggregate?: Resolver<
    ResolversTypes["position_delivered_event_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootPosition_Delivered_Event_AggregateArgs>
  >;
  position_delivered_event_by_pk?: Resolver<
    Maybe<ResolversTypes["position_delivered_event"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootPosition_Delivered_Event_By_PkArgs, "id">
  >;
  position_liquidated_event?: Resolver<
    Array<ResolversTypes["position_liquidated_event"]>,
    ParentType,
    ContextType,
    Partial<Query_RootPosition_Liquidated_EventArgs>
  >;
  position_liquidated_event_aggregate?: Resolver<
    ResolversTypes["position_liquidated_event_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootPosition_Liquidated_Event_AggregateArgs>
  >;
  position_liquidated_event_by_pk?: Resolver<
    Maybe<ResolversTypes["position_liquidated_event"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootPosition_Liquidated_Event_By_PkArgs, "id">
  >;
  position_upserted_event?: Resolver<
    Array<ResolversTypes["position_upserted_event"]>,
    ParentType,
    ContextType,
    Partial<Query_RootPosition_Upserted_EventArgs>
  >;
  position_upserted_event_aggregate?: Resolver<
    ResolversTypes["position_upserted_event_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootPosition_Upserted_Event_AggregateArgs>
  >;
  position_upserted_event_by_pk?: Resolver<
    Maybe<ResolversTypes["position_upserted_event"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootPosition_Upserted_Event_By_PkArgs, "id">
  >;
  role_admin_changed_event?: Resolver<
    Array<ResolversTypes["role_admin_changed_event"]>,
    ParentType,
    ContextType,
    Partial<Query_RootRole_Admin_Changed_EventArgs>
  >;
  role_admin_changed_event_aggregate?: Resolver<
    ResolversTypes["role_admin_changed_event_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootRole_Admin_Changed_Event_AggregateArgs>
  >;
  role_admin_changed_event_by_pk?: Resolver<
    Maybe<ResolversTypes["role_admin_changed_event"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootRole_Admin_Changed_Event_By_PkArgs, "id">
  >;
  role_granted_event?: Resolver<
    Array<ResolversTypes["role_granted_event"]>,
    ParentType,
    ContextType,
    Partial<Query_RootRole_Granted_EventArgs>
  >;
  role_granted_event_aggregate?: Resolver<
    ResolversTypes["role_granted_event_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootRole_Granted_Event_AggregateArgs>
  >;
  role_granted_event_by_pk?: Resolver<
    Maybe<ResolversTypes["role_granted_event"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootRole_Granted_Event_By_PkArgs, "id">
  >;
  role_revoked_event?: Resolver<
    Array<ResolversTypes["role_revoked_event"]>,
    ParentType,
    ContextType,
    Partial<Query_RootRole_Revoked_EventArgs>
  >;
  role_revoked_event_aggregate?: Resolver<
    ResolversTypes["role_revoked_event_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootRole_Revoked_Event_AggregateArgs>
  >;
  role_revoked_event_by_pk?: Resolver<
    Maybe<ResolversTypes["role_revoked_event"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootRole_Revoked_Event_By_PkArgs, "id">
  >;
  unpaused_event?: Resolver<
    Array<ResolversTypes["unpaused_event"]>,
    ParentType,
    ContextType,
    Partial<Query_RootUnpaused_EventArgs>
  >;
  unpaused_event_aggregate?: Resolver<
    ResolversTypes["unpaused_event_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootUnpaused_Event_AggregateArgs>
  >;
  unpaused_event_by_pk?: Resolver<
    Maybe<ResolversTypes["unpaused_event"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootUnpaused_Event_By_PkArgs, "id">
  >;
};

export interface NumericScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["numeric"], any> {
  name: "numeric";
}

export type Balance_Collected_EventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["balance_collected_event"] = ResolversParentTypes["balance_collected_event"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Balance_Collected_Event_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["balance_collected_event_aggregate"] = ResolversParentTypes["balance_collected_event_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["balance_collected_event_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["balance_collected_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Balance_Collected_Event_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["balance_collected_event_aggregate_fields"] = ResolversParentTypes["balance_collected_event_aggregate_fields"]
> = {
  avg?: Resolver<
    Maybe<ResolversTypes["balance_collected_event_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Balance_Collected_Event_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["balance_collected_event_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["balance_collected_event_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes["balance_collected_event_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["balance_collected_event_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["balance_collected_event_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes["balance_collected_event_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes["balance_collected_event_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["balance_collected_event_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["balance_collected_event_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Balance_Collected_Event_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["balance_collected_event_avg_fields"] = ResolversParentTypes["balance_collected_event_avg_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Balance_Collected_Event_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["balance_collected_event_max_fields"] = ResolversParentTypes["balance_collected_event_max_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Balance_Collected_Event_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["balance_collected_event_min_fields"] = ResolversParentTypes["balance_collected_event_min_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Balance_Collected_Event_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["balance_collected_event_stddev_fields"] = ResolversParentTypes["balance_collected_event_stddev_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Balance_Collected_Event_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["balance_collected_event_stddev_pop_fields"] = ResolversParentTypes["balance_collected_event_stddev_pop_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Balance_Collected_Event_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["balance_collected_event_stddev_samp_fields"] = ResolversParentTypes["balance_collected_event_stddev_samp_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Balance_Collected_Event_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["balance_collected_event_sum_fields"] = ResolversParentTypes["balance_collected_event_sum_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Balance_Collected_Event_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["balance_collected_event_var_pop_fields"] = ResolversParentTypes["balance_collected_event_var_pop_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Balance_Collected_Event_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["balance_collected_event_var_samp_fields"] = ResolversParentTypes["balance_collected_event_var_samp_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Balance_Collected_Event_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["balance_collected_event_variance_fields"] = ResolversParentTypes["balance_collected_event_variance_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Added_EventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_added_event"] = ResolversParentTypes["collateral_added_event"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  trader?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Added_Event_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_added_event_aggregate"] = ResolversParentTypes["collateral_added_event_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["collateral_added_event_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["collateral_added_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Added_Event_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_added_event_aggregate_fields"] = ResolversParentTypes["collateral_added_event_aggregate_fields"]
> = {
  avg?: Resolver<
    Maybe<ResolversTypes["collateral_added_event_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Collateral_Added_Event_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["collateral_added_event_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["collateral_added_event_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes["collateral_added_event_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["collateral_added_event_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["collateral_added_event_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes["collateral_added_event_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes["collateral_added_event_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["collateral_added_event_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["collateral_added_event_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Added_Event_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_added_event_avg_fields"] = ResolversParentTypes["collateral_added_event_avg_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Added_Event_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_added_event_max_fields"] = ResolversParentTypes["collateral_added_event_max_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  trader?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Added_Event_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_added_event_min_fields"] = ResolversParentTypes["collateral_added_event_min_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  trader?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Added_Event_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_added_event_stddev_fields"] = ResolversParentTypes["collateral_added_event_stddev_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Added_Event_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_added_event_stddev_pop_fields"] = ResolversParentTypes["collateral_added_event_stddev_pop_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Added_Event_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_added_event_stddev_samp_fields"] = ResolversParentTypes["collateral_added_event_stddev_samp_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Added_Event_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_added_event_sum_fields"] = ResolversParentTypes["collateral_added_event_sum_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Added_Event_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_added_event_var_pop_fields"] = ResolversParentTypes["collateral_added_event_var_pop_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Added_Event_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_added_event_var_samp_fields"] = ResolversParentTypes["collateral_added_event_var_samp_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Added_Event_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_added_event_variance_fields"] = ResolversParentTypes["collateral_added_event_variance_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Removed_EventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_removed_event"] = ResolversParentTypes["collateral_removed_event"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  trader?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Removed_Event_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_removed_event_aggregate"] = ResolversParentTypes["collateral_removed_event_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["collateral_removed_event_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["collateral_removed_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Removed_Event_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_removed_event_aggregate_fields"] = ResolversParentTypes["collateral_removed_event_aggregate_fields"]
> = {
  avg?: Resolver<
    Maybe<ResolversTypes["collateral_removed_event_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Collateral_Removed_Event_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["collateral_removed_event_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["collateral_removed_event_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes["collateral_removed_event_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["collateral_removed_event_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["collateral_removed_event_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes["collateral_removed_event_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes["collateral_removed_event_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["collateral_removed_event_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["collateral_removed_event_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Removed_Event_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_removed_event_avg_fields"] = ResolversParentTypes["collateral_removed_event_avg_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Removed_Event_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_removed_event_max_fields"] = ResolversParentTypes["collateral_removed_event_max_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  trader?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Removed_Event_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_removed_event_min_fields"] = ResolversParentTypes["collateral_removed_event_min_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  trader?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Removed_Event_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_removed_event_stddev_fields"] = ResolversParentTypes["collateral_removed_event_stddev_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Removed_Event_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_removed_event_stddev_pop_fields"] = ResolversParentTypes["collateral_removed_event_stddev_pop_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Removed_Event_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_removed_event_stddev_samp_fields"] = ResolversParentTypes["collateral_removed_event_stddev_samp_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Removed_Event_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_removed_event_sum_fields"] = ResolversParentTypes["collateral_removed_event_sum_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Removed_Event_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_removed_event_var_pop_fields"] = ResolversParentTypes["collateral_removed_event_var_pop_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Removed_Event_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_removed_event_var_samp_fields"] = ResolversParentTypes["collateral_removed_event_var_samp_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Removed_Event_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_removed_event_variance_fields"] = ResolversParentTypes["collateral_removed_event_variance_fields"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Admin_Changed_EventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_admin_changed_event"] = ResolversParentTypes["contango_yield_admin_changed_event"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  newAdmin?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  previousAdmin?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Admin_Changed_Event_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_admin_changed_event_aggregate"] = ResolversParentTypes["contango_yield_admin_changed_event_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["contango_yield_admin_changed_event_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes["contango_yield_admin_changed_event"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Admin_Changed_Event_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_admin_changed_event_aggregate_fields"] = ResolversParentTypes["contango_yield_admin_changed_event_aggregate_fields"]
> = {
  avg?: Resolver<
    Maybe<ResolversTypes["contango_yield_admin_changed_event_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Contango_Yield_Admin_Changed_Event_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["contango_yield_admin_changed_event_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["contango_yield_admin_changed_event_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes["contango_yield_admin_changed_event_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["contango_yield_admin_changed_event_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["contango_yield_admin_changed_event_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes["contango_yield_admin_changed_event_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes["contango_yield_admin_changed_event_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["contango_yield_admin_changed_event_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["contango_yield_admin_changed_event_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Admin_Changed_Event_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_admin_changed_event_avg_fields"] = ResolversParentTypes["contango_yield_admin_changed_event_avg_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Admin_Changed_Event_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_admin_changed_event_max_fields"] = ResolversParentTypes["contango_yield_admin_changed_event_max_fields"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  newAdmin?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  previousAdmin?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Admin_Changed_Event_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_admin_changed_event_min_fields"] = ResolversParentTypes["contango_yield_admin_changed_event_min_fields"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  newAdmin?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  previousAdmin?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Admin_Changed_Event_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_admin_changed_event_stddev_fields"] = ResolversParentTypes["contango_yield_admin_changed_event_stddev_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Admin_Changed_Event_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_admin_changed_event_stddev_pop_fields"] = ResolversParentTypes["contango_yield_admin_changed_event_stddev_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Admin_Changed_Event_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_admin_changed_event_stddev_samp_fields"] = ResolversParentTypes["contango_yield_admin_changed_event_stddev_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Admin_Changed_Event_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_admin_changed_event_sum_fields"] = ResolversParentTypes["contango_yield_admin_changed_event_sum_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Admin_Changed_Event_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_admin_changed_event_var_pop_fields"] = ResolversParentTypes["contango_yield_admin_changed_event_var_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Admin_Changed_Event_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_admin_changed_event_var_samp_fields"] = ResolversParentTypes["contango_yield_admin_changed_event_var_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Admin_Changed_Event_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_admin_changed_event_variance_fields"] = ResolversParentTypes["contango_yield_admin_changed_event_variance_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Beacon_Upgraded_EventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_beacon_upgraded_event"] = ResolversParentTypes["contango_yield_beacon_upgraded_event"]
> = {
  beacon?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Beacon_Upgraded_Event_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_beacon_upgraded_event_aggregate"] = ResolversParentTypes["contango_yield_beacon_upgraded_event_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["contango_yield_beacon_upgraded_event_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes["contango_yield_beacon_upgraded_event"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Beacon_Upgraded_Event_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_beacon_upgraded_event_aggregate_fields"] = ResolversParentTypes["contango_yield_beacon_upgraded_event_aggregate_fields"]
> = {
  avg?: Resolver<
    Maybe<ResolversTypes["contango_yield_beacon_upgraded_event_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Contango_Yield_Beacon_Upgraded_Event_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["contango_yield_beacon_upgraded_event_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["contango_yield_beacon_upgraded_event_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes["contango_yield_beacon_upgraded_event_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["contango_yield_beacon_upgraded_event_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["contango_yield_beacon_upgraded_event_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes["contango_yield_beacon_upgraded_event_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes["contango_yield_beacon_upgraded_event_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["contango_yield_beacon_upgraded_event_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["contango_yield_beacon_upgraded_event_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Beacon_Upgraded_Event_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_beacon_upgraded_event_avg_fields"] = ResolversParentTypes["contango_yield_beacon_upgraded_event_avg_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Beacon_Upgraded_Event_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_beacon_upgraded_event_max_fields"] = ResolversParentTypes["contango_yield_beacon_upgraded_event_max_fields"]
> = {
  beacon?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Beacon_Upgraded_Event_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_beacon_upgraded_event_min_fields"] = ResolversParentTypes["contango_yield_beacon_upgraded_event_min_fields"]
> = {
  beacon?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Beacon_Upgraded_Event_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_beacon_upgraded_event_stddev_fields"] = ResolversParentTypes["contango_yield_beacon_upgraded_event_stddev_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Beacon_Upgraded_Event_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_beacon_upgraded_event_stddev_pop_fields"] = ResolversParentTypes["contango_yield_beacon_upgraded_event_stddev_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Beacon_Upgraded_Event_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_beacon_upgraded_event_stddev_samp_fields"] = ResolversParentTypes["contango_yield_beacon_upgraded_event_stddev_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Beacon_Upgraded_Event_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_beacon_upgraded_event_sum_fields"] = ResolversParentTypes["contango_yield_beacon_upgraded_event_sum_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Beacon_Upgraded_Event_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_beacon_upgraded_event_var_pop_fields"] = ResolversParentTypes["contango_yield_beacon_upgraded_event_var_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Beacon_Upgraded_Event_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_beacon_upgraded_event_var_samp_fields"] = ResolversParentTypes["contango_yield_beacon_upgraded_event_var_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Beacon_Upgraded_Event_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_beacon_upgraded_event_variance_fields"] = ResolversParentTypes["contango_yield_beacon_upgraded_event_variance_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Upgraded_EventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_upgraded_event"] = ResolversParentTypes["contango_yield_upgraded_event"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  implementation?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Upgraded_Event_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_upgraded_event_aggregate"] = ResolversParentTypes["contango_yield_upgraded_event_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["contango_yield_upgraded_event_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["contango_yield_upgraded_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Upgraded_Event_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_upgraded_event_aggregate_fields"] = ResolversParentTypes["contango_yield_upgraded_event_aggregate_fields"]
> = {
  avg?: Resolver<
    Maybe<ResolversTypes["contango_yield_upgraded_event_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Contango_Yield_Upgraded_Event_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["contango_yield_upgraded_event_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["contango_yield_upgraded_event_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes["contango_yield_upgraded_event_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["contango_yield_upgraded_event_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["contango_yield_upgraded_event_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes["contango_yield_upgraded_event_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes["contango_yield_upgraded_event_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["contango_yield_upgraded_event_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["contango_yield_upgraded_event_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Upgraded_Event_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_upgraded_event_avg_fields"] = ResolversParentTypes["contango_yield_upgraded_event_avg_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Upgraded_Event_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_upgraded_event_max_fields"] = ResolversParentTypes["contango_yield_upgraded_event_max_fields"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  implementation?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Upgraded_Event_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_upgraded_event_min_fields"] = ResolversParentTypes["contango_yield_upgraded_event_min_fields"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  implementation?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Upgraded_Event_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_upgraded_event_stddev_fields"] = ResolversParentTypes["contango_yield_upgraded_event_stddev_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Upgraded_Event_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_upgraded_event_stddev_pop_fields"] = ResolversParentTypes["contango_yield_upgraded_event_stddev_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Upgraded_Event_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_upgraded_event_stddev_samp_fields"] = ResolversParentTypes["contango_yield_upgraded_event_stddev_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Upgraded_Event_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_upgraded_event_sum_fields"] = ResolversParentTypes["contango_yield_upgraded_event_sum_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Upgraded_Event_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_upgraded_event_var_pop_fields"] = ResolversParentTypes["contango_yield_upgraded_event_var_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Upgraded_Event_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_upgraded_event_var_samp_fields"] = ResolversParentTypes["contango_yield_upgraded_event_var_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Upgraded_Event_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_upgraded_event_variance_fields"] = ResolversParentTypes["contango_yield_upgraded_event_variance_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonbScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["jsonb"], any> {
  name: "jsonb";
}

export type Contract_Traded_EventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contract_traded_event"] = ResolversParentTypes["contract_traded_event"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  fill?: Resolver<
    Maybe<ResolversTypes["jsonb"]>,
    ParentType,
    ContextType,
    Partial<Contract_Traded_EventFillArgs>
  >;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  trader?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contract_Traded_Event_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contract_traded_event_aggregate"] = ResolversParentTypes["contract_traded_event_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["contract_traded_event_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["contract_traded_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contract_Traded_Event_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contract_traded_event_aggregate_fields"] = ResolversParentTypes["contract_traded_event_aggregate_fields"]
> = {
  avg?: Resolver<
    Maybe<ResolversTypes["contract_traded_event_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Contract_Traded_Event_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["contract_traded_event_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["contract_traded_event_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes["contract_traded_event_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["contract_traded_event_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["contract_traded_event_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes["contract_traded_event_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes["contract_traded_event_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["contract_traded_event_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["contract_traded_event_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contract_Traded_Event_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contract_traded_event_avg_fields"] = ResolversParentTypes["contract_traded_event_avg_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contract_Traded_Event_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contract_traded_event_max_fields"] = ResolversParentTypes["contract_traded_event_max_fields"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  trader?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contract_Traded_Event_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contract_traded_event_min_fields"] = ResolversParentTypes["contract_traded_event_min_fields"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  trader?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contract_Traded_Event_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contract_traded_event_stddev_fields"] = ResolversParentTypes["contract_traded_event_stddev_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contract_Traded_Event_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contract_traded_event_stddev_pop_fields"] = ResolversParentTypes["contract_traded_event_stddev_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contract_Traded_Event_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contract_traded_event_stddev_samp_fields"] = ResolversParentTypes["contract_traded_event_stddev_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contract_Traded_Event_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contract_traded_event_sum_fields"] = ResolversParentTypes["contract_traded_event_sum_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contract_Traded_Event_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contract_traded_event_var_pop_fields"] = ResolversParentTypes["contract_traded_event_var_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contract_Traded_Event_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contract_traded_event_var_samp_fields"] = ResolversParentTypes["contract_traded_event_var_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contract_Traded_Event_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contract_traded_event_variance_fields"] = ResolversParentTypes["contract_traded_event_variance_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Initialized_EventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["initialized_event"] = ResolversParentTypes["initialized_event"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Initialized_Event_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["initialized_event_aggregate"] = ResolversParentTypes["initialized_event_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["initialized_event_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["initialized_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Initialized_Event_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["initialized_event_aggregate_fields"] = ResolversParentTypes["initialized_event_aggregate_fields"]
> = {
  avg?: Resolver<Maybe<ResolversTypes["initialized_event_avg_fields"]>, ParentType, ContextType>;
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Initialized_Event_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<Maybe<ResolversTypes["initialized_event_max_fields"]>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes["initialized_event_min_fields"]>, ParentType, ContextType>;
  stddev?: Resolver<
    Maybe<ResolversTypes["initialized_event_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["initialized_event_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["initialized_event_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<Maybe<ResolversTypes["initialized_event_sum_fields"]>, ParentType, ContextType>;
  var_pop?: Resolver<
    Maybe<ResolversTypes["initialized_event_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["initialized_event_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["initialized_event_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Initialized_Event_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["initialized_event_avg_fields"] = ResolversParentTypes["initialized_event_avg_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Initialized_Event_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["initialized_event_max_fields"] = ResolversParentTypes["initialized_event_max_fields"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Initialized_Event_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["initialized_event_min_fields"] = ResolversParentTypes["initialized_event_min_fields"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Initialized_Event_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["initialized_event_stddev_fields"] = ResolversParentTypes["initialized_event_stddev_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Initialized_Event_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["initialized_event_stddev_pop_fields"] = ResolversParentTypes["initialized_event_stddev_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Initialized_Event_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["initialized_event_stddev_samp_fields"] = ResolversParentTypes["initialized_event_stddev_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Initialized_Event_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["initialized_event_sum_fields"] = ResolversParentTypes["initialized_event_sum_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Initialized_Event_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["initialized_event_var_pop_fields"] = ResolversParentTypes["initialized_event_var_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Initialized_Event_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["initialized_event_var_samp_fields"] = ResolversParentTypes["initialized_event_var_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Initialized_Event_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["initialized_event_variance_fields"] = ResolversParentTypes["initialized_event_variance_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Paused_EventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["paused_event"] = ResolversParentTypes["paused_event"]
> = {
  account?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Paused_Event_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["paused_event_aggregate"] = ResolversParentTypes["paused_event_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["paused_event_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["paused_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Paused_Event_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["paused_event_aggregate_fields"] = ResolversParentTypes["paused_event_aggregate_fields"]
> = {
  avg?: Resolver<Maybe<ResolversTypes["paused_event_avg_fields"]>, ParentType, ContextType>;
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Paused_Event_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<Maybe<ResolversTypes["paused_event_max_fields"]>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes["paused_event_min_fields"]>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes["paused_event_stddev_fields"]>, ParentType, ContextType>;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["paused_event_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["paused_event_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<Maybe<ResolversTypes["paused_event_sum_fields"]>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes["paused_event_var_pop_fields"]>, ParentType, ContextType>;
  var_samp?: Resolver<
    Maybe<ResolversTypes["paused_event_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["paused_event_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Paused_Event_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["paused_event_avg_fields"] = ResolversParentTypes["paused_event_avg_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Paused_Event_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["paused_event_max_fields"] = ResolversParentTypes["paused_event_max_fields"]
> = {
  account?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Paused_Event_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["paused_event_min_fields"] = ResolversParentTypes["paused_event_min_fields"]
> = {
  account?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Paused_Event_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["paused_event_stddev_fields"] = ResolversParentTypes["paused_event_stddev_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Paused_Event_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["paused_event_stddev_pop_fields"] = ResolversParentTypes["paused_event_stddev_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Paused_Event_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["paused_event_stddev_samp_fields"] = ResolversParentTypes["paused_event_stddev_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Paused_Event_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["paused_event_sum_fields"] = ResolversParentTypes["paused_event_sum_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Paused_Event_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["paused_event_var_pop_fields"] = ResolversParentTypes["paused_event_var_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Paused_Event_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["paused_event_var_samp_fields"] = ResolversParentTypes["paused_event_var_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Paused_Event_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["paused_event_variance_fields"] = ResolversParentTypes["paused_event_variance_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Closed_EventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_closed_event"] = ResolversParentTypes["position_closed_event"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  closedCost?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  closedQuantity?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  trader?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  txFees?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Closed_Event_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_closed_event_aggregate"] = ResolversParentTypes["position_closed_event_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["position_closed_event_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["position_closed_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Closed_Event_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_closed_event_aggregate_fields"] = ResolversParentTypes["position_closed_event_aggregate_fields"]
> = {
  avg?: Resolver<
    Maybe<ResolversTypes["position_closed_event_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Position_Closed_Event_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["position_closed_event_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["position_closed_event_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes["position_closed_event_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["position_closed_event_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["position_closed_event_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes["position_closed_event_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes["position_closed_event_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["position_closed_event_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["position_closed_event_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Closed_Event_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_closed_event_avg_fields"] = ResolversParentTypes["position_closed_event_avg_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  closedCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  closedQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  txFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Closed_Event_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_closed_event_max_fields"] = ResolversParentTypes["position_closed_event_max_fields"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  closedCost?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  closedQuantity?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  trader?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  txFees?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Closed_Event_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_closed_event_min_fields"] = ResolversParentTypes["position_closed_event_min_fields"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  closedCost?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  closedQuantity?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  trader?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  txFees?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Closed_Event_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_closed_event_stddev_fields"] = ResolversParentTypes["position_closed_event_stddev_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  closedCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  closedQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  txFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Closed_Event_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_closed_event_stddev_pop_fields"] = ResolversParentTypes["position_closed_event_stddev_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  closedCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  closedQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  txFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Closed_Event_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_closed_event_stddev_samp_fields"] = ResolversParentTypes["position_closed_event_stddev_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  closedCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  closedQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  txFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Closed_Event_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_closed_event_sum_fields"] = ResolversParentTypes["position_closed_event_sum_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  closedCost?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  closedQuantity?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  txFees?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Closed_Event_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_closed_event_var_pop_fields"] = ResolversParentTypes["position_closed_event_var_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  closedCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  closedQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  txFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Closed_Event_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_closed_event_var_samp_fields"] = ResolversParentTypes["position_closed_event_var_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  closedCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  closedQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  txFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Closed_Event_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_closed_event_variance_fields"] = ResolversParentTypes["position_closed_event_variance_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  closedCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  closedQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  txFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Delivered_EventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_delivered_event"] = ResolversParentTypes["position_delivered_event"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  deliveredQuantity?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  deliveryCost?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  trader?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Delivered_Event_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_delivered_event_aggregate"] = ResolversParentTypes["position_delivered_event_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["position_delivered_event_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["position_delivered_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Delivered_Event_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_delivered_event_aggregate_fields"] = ResolversParentTypes["position_delivered_event_aggregate_fields"]
> = {
  avg?: Resolver<
    Maybe<ResolversTypes["position_delivered_event_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Position_Delivered_Event_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["position_delivered_event_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["position_delivered_event_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes["position_delivered_event_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["position_delivered_event_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["position_delivered_event_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes["position_delivered_event_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes["position_delivered_event_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["position_delivered_event_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["position_delivered_event_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Delivered_Event_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_delivered_event_avg_fields"] = ResolversParentTypes["position_delivered_event_avg_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  deliveredQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  deliveryCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Delivered_Event_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_delivered_event_max_fields"] = ResolversParentTypes["position_delivered_event_max_fields"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  deliveredQuantity?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  deliveryCost?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  trader?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Delivered_Event_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_delivered_event_min_fields"] = ResolversParentTypes["position_delivered_event_min_fields"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  deliveredQuantity?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  deliveryCost?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  trader?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Delivered_Event_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_delivered_event_stddev_fields"] = ResolversParentTypes["position_delivered_event_stddev_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  deliveredQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  deliveryCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Delivered_Event_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_delivered_event_stddev_pop_fields"] = ResolversParentTypes["position_delivered_event_stddev_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  deliveredQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  deliveryCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Delivered_Event_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_delivered_event_stddev_samp_fields"] = ResolversParentTypes["position_delivered_event_stddev_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  deliveredQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  deliveryCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Delivered_Event_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_delivered_event_sum_fields"] = ResolversParentTypes["position_delivered_event_sum_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  deliveredQuantity?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  deliveryCost?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Delivered_Event_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_delivered_event_var_pop_fields"] = ResolversParentTypes["position_delivered_event_var_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  deliveredQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  deliveryCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Delivered_Event_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_delivered_event_var_samp_fields"] = ResolversParentTypes["position_delivered_event_var_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  deliveredQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  deliveryCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Delivered_Event_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_delivered_event_variance_fields"] = ResolversParentTypes["position_delivered_event_variance_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  deliveredQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  deliveryCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Liquidated_EventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_liquidated_event"] = ResolversParentTypes["position_liquidated_event"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  openCost?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  openQuantity?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  trader?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Liquidated_Event_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_liquidated_event_aggregate"] = ResolversParentTypes["position_liquidated_event_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["position_liquidated_event_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["position_liquidated_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Liquidated_Event_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_liquidated_event_aggregate_fields"] = ResolversParentTypes["position_liquidated_event_aggregate_fields"]
> = {
  avg?: Resolver<
    Maybe<ResolversTypes["position_liquidated_event_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Position_Liquidated_Event_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["position_liquidated_event_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["position_liquidated_event_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes["position_liquidated_event_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["position_liquidated_event_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["position_liquidated_event_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes["position_liquidated_event_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes["position_liquidated_event_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["position_liquidated_event_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["position_liquidated_event_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Liquidated_Event_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_liquidated_event_avg_fields"] = ResolversParentTypes["position_liquidated_event_avg_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Liquidated_Event_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_liquidated_event_max_fields"] = ResolversParentTypes["position_liquidated_event_max_fields"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  openCost?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  openQuantity?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  trader?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Liquidated_Event_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_liquidated_event_min_fields"] = ResolversParentTypes["position_liquidated_event_min_fields"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  openCost?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  openQuantity?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  trader?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Liquidated_Event_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_liquidated_event_stddev_fields"] = ResolversParentTypes["position_liquidated_event_stddev_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Liquidated_Event_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_liquidated_event_stddev_pop_fields"] = ResolversParentTypes["position_liquidated_event_stddev_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Liquidated_Event_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_liquidated_event_stddev_samp_fields"] = ResolversParentTypes["position_liquidated_event_stddev_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Liquidated_Event_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_liquidated_event_sum_fields"] = ResolversParentTypes["position_liquidated_event_sum_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  openCost?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  openQuantity?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Liquidated_Event_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_liquidated_event_var_pop_fields"] = ResolversParentTypes["position_liquidated_event_var_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Liquidated_Event_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_liquidated_event_var_samp_fields"] = ResolversParentTypes["position_liquidated_event_var_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Liquidated_Event_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_liquidated_event_variance_fields"] = ResolversParentTypes["position_liquidated_event_variance_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Upserted_EventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_upserted_event"] = ResolversParentTypes["position_upserted_event"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  openCost?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  openQuantity?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  trader?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  txFees?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Upserted_Event_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_upserted_event_aggregate"] = ResolversParentTypes["position_upserted_event_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["position_upserted_event_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["position_upserted_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Upserted_Event_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_upserted_event_aggregate_fields"] = ResolversParentTypes["position_upserted_event_aggregate_fields"]
> = {
  avg?: Resolver<
    Maybe<ResolversTypes["position_upserted_event_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Position_Upserted_Event_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["position_upserted_event_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["position_upserted_event_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes["position_upserted_event_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["position_upserted_event_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["position_upserted_event_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes["position_upserted_event_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes["position_upserted_event_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["position_upserted_event_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["position_upserted_event_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Upserted_Event_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_upserted_event_avg_fields"] = ResolversParentTypes["position_upserted_event_avg_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  txFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Upserted_Event_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_upserted_event_max_fields"] = ResolversParentTypes["position_upserted_event_max_fields"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  openCost?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  openQuantity?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  trader?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  txFees?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Upserted_Event_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_upserted_event_min_fields"] = ResolversParentTypes["position_upserted_event_min_fields"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  openCost?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  openQuantity?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  trader?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  txFees?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Upserted_Event_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_upserted_event_stddev_fields"] = ResolversParentTypes["position_upserted_event_stddev_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  txFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Upserted_Event_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_upserted_event_stddev_pop_fields"] = ResolversParentTypes["position_upserted_event_stddev_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  txFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Upserted_Event_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_upserted_event_stddev_samp_fields"] = ResolversParentTypes["position_upserted_event_stddev_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  txFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Upserted_Event_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_upserted_event_sum_fields"] = ResolversParentTypes["position_upserted_event_sum_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  openCost?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  openQuantity?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  txFees?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Upserted_Event_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_upserted_event_var_pop_fields"] = ResolversParentTypes["position_upserted_event_var_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  txFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Upserted_Event_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_upserted_event_var_samp_fields"] = ResolversParentTypes["position_upserted_event_var_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  txFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Upserted_Event_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_upserted_event_variance_fields"] = ResolversParentTypes["position_upserted_event_variance_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  collateral?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openCost?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  openQuantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  realisedPnL?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  totalFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  txFees?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Admin_Changed_EventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_admin_changed_event"] = ResolversParentTypes["role_admin_changed_event"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  newAdminRole?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  previousAdminRole?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Admin_Changed_Event_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_admin_changed_event_aggregate"] = ResolversParentTypes["role_admin_changed_event_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["role_admin_changed_event_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["role_admin_changed_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Admin_Changed_Event_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_admin_changed_event_aggregate_fields"] = ResolversParentTypes["role_admin_changed_event_aggregate_fields"]
> = {
  avg?: Resolver<
    Maybe<ResolversTypes["role_admin_changed_event_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Role_Admin_Changed_Event_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["role_admin_changed_event_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["role_admin_changed_event_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes["role_admin_changed_event_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["role_admin_changed_event_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["role_admin_changed_event_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes["role_admin_changed_event_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes["role_admin_changed_event_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["role_admin_changed_event_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["role_admin_changed_event_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Admin_Changed_Event_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_admin_changed_event_avg_fields"] = ResolversParentTypes["role_admin_changed_event_avg_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Admin_Changed_Event_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_admin_changed_event_max_fields"] = ResolversParentTypes["role_admin_changed_event_max_fields"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  newAdminRole?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  previousAdminRole?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Admin_Changed_Event_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_admin_changed_event_min_fields"] = ResolversParentTypes["role_admin_changed_event_min_fields"]
> = {
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  newAdminRole?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  previousAdminRole?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Admin_Changed_Event_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_admin_changed_event_stddev_fields"] = ResolversParentTypes["role_admin_changed_event_stddev_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Admin_Changed_Event_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_admin_changed_event_stddev_pop_fields"] = ResolversParentTypes["role_admin_changed_event_stddev_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Admin_Changed_Event_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_admin_changed_event_stddev_samp_fields"] = ResolversParentTypes["role_admin_changed_event_stddev_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Admin_Changed_Event_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_admin_changed_event_sum_fields"] = ResolversParentTypes["role_admin_changed_event_sum_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Admin_Changed_Event_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_admin_changed_event_var_pop_fields"] = ResolversParentTypes["role_admin_changed_event_var_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Admin_Changed_Event_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_admin_changed_event_var_samp_fields"] = ResolversParentTypes["role_admin_changed_event_var_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Admin_Changed_Event_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_admin_changed_event_variance_fields"] = ResolversParentTypes["role_admin_changed_event_variance_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Granted_EventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_granted_event"] = ResolversParentTypes["role_granted_event"]
> = {
  account?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Granted_Event_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_granted_event_aggregate"] = ResolversParentTypes["role_granted_event_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["role_granted_event_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["role_granted_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Granted_Event_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_granted_event_aggregate_fields"] = ResolversParentTypes["role_granted_event_aggregate_fields"]
> = {
  avg?: Resolver<Maybe<ResolversTypes["role_granted_event_avg_fields"]>, ParentType, ContextType>;
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Role_Granted_Event_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<Maybe<ResolversTypes["role_granted_event_max_fields"]>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes["role_granted_event_min_fields"]>, ParentType, ContextType>;
  stddev?: Resolver<
    Maybe<ResolversTypes["role_granted_event_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["role_granted_event_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["role_granted_event_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<Maybe<ResolversTypes["role_granted_event_sum_fields"]>, ParentType, ContextType>;
  var_pop?: Resolver<
    Maybe<ResolversTypes["role_granted_event_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["role_granted_event_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["role_granted_event_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Granted_Event_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_granted_event_avg_fields"] = ResolversParentTypes["role_granted_event_avg_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Granted_Event_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_granted_event_max_fields"] = ResolversParentTypes["role_granted_event_max_fields"]
> = {
  account?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Granted_Event_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_granted_event_min_fields"] = ResolversParentTypes["role_granted_event_min_fields"]
> = {
  account?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Granted_Event_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_granted_event_stddev_fields"] = ResolversParentTypes["role_granted_event_stddev_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Granted_Event_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_granted_event_stddev_pop_fields"] = ResolversParentTypes["role_granted_event_stddev_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Granted_Event_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_granted_event_stddev_samp_fields"] = ResolversParentTypes["role_granted_event_stddev_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Granted_Event_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_granted_event_sum_fields"] = ResolversParentTypes["role_granted_event_sum_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Granted_Event_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_granted_event_var_pop_fields"] = ResolversParentTypes["role_granted_event_var_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Granted_Event_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_granted_event_var_samp_fields"] = ResolversParentTypes["role_granted_event_var_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Granted_Event_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_granted_event_variance_fields"] = ResolversParentTypes["role_granted_event_variance_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Revoked_EventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_revoked_event"] = ResolversParentTypes["role_revoked_event"]
> = {
  account?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Revoked_Event_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_revoked_event_aggregate"] = ResolversParentTypes["role_revoked_event_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["role_revoked_event_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["role_revoked_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Revoked_Event_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_revoked_event_aggregate_fields"] = ResolversParentTypes["role_revoked_event_aggregate_fields"]
> = {
  avg?: Resolver<Maybe<ResolversTypes["role_revoked_event_avg_fields"]>, ParentType, ContextType>;
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Role_Revoked_Event_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<Maybe<ResolversTypes["role_revoked_event_max_fields"]>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes["role_revoked_event_min_fields"]>, ParentType, ContextType>;
  stddev?: Resolver<
    Maybe<ResolversTypes["role_revoked_event_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["role_revoked_event_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["role_revoked_event_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<Maybe<ResolversTypes["role_revoked_event_sum_fields"]>, ParentType, ContextType>;
  var_pop?: Resolver<
    Maybe<ResolversTypes["role_revoked_event_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["role_revoked_event_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["role_revoked_event_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Revoked_Event_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_revoked_event_avg_fields"] = ResolversParentTypes["role_revoked_event_avg_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Revoked_Event_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_revoked_event_max_fields"] = ResolversParentTypes["role_revoked_event_max_fields"]
> = {
  account?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Revoked_Event_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_revoked_event_min_fields"] = ResolversParentTypes["role_revoked_event_min_fields"]
> = {
  account?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Revoked_Event_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_revoked_event_stddev_fields"] = ResolversParentTypes["role_revoked_event_stddev_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Revoked_Event_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_revoked_event_stddev_pop_fields"] = ResolversParentTypes["role_revoked_event_stddev_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Revoked_Event_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_revoked_event_stddev_samp_fields"] = ResolversParentTypes["role_revoked_event_stddev_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Revoked_Event_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_revoked_event_sum_fields"] = ResolversParentTypes["role_revoked_event_sum_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Revoked_Event_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_revoked_event_var_pop_fields"] = ResolversParentTypes["role_revoked_event_var_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Revoked_Event_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_revoked_event_var_samp_fields"] = ResolversParentTypes["role_revoked_event_var_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Revoked_Event_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_revoked_event_variance_fields"] = ResolversParentTypes["role_revoked_event_variance_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Unpaused_EventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["unpaused_event"] = ResolversParentTypes["unpaused_event"]
> = {
  account?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Unpaused_Event_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["unpaused_event_aggregate"] = ResolversParentTypes["unpaused_event_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["unpaused_event_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["unpaused_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Unpaused_Event_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["unpaused_event_aggregate_fields"] = ResolversParentTypes["unpaused_event_aggregate_fields"]
> = {
  avg?: Resolver<Maybe<ResolversTypes["unpaused_event_avg_fields"]>, ParentType, ContextType>;
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Unpaused_Event_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<Maybe<ResolversTypes["unpaused_event_max_fields"]>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes["unpaused_event_min_fields"]>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes["unpaused_event_stddev_fields"]>, ParentType, ContextType>;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["unpaused_event_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["unpaused_event_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<Maybe<ResolversTypes["unpaused_event_sum_fields"]>, ParentType, ContextType>;
  var_pop?: Resolver<
    Maybe<ResolversTypes["unpaused_event_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["unpaused_event_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["unpaused_event_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Unpaused_Event_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["unpaused_event_avg_fields"] = ResolversParentTypes["unpaused_event_avg_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Unpaused_Event_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["unpaused_event_max_fields"] = ResolversParentTypes["unpaused_event_max_fields"]
> = {
  account?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Unpaused_Event_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["unpaused_event_min_fields"] = ResolversParentTypes["unpaused_event_min_fields"]
> = {
  account?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  transaction_hash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Unpaused_Event_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["unpaused_event_stddev_fields"] = ResolversParentTypes["unpaused_event_stddev_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Unpaused_Event_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["unpaused_event_stddev_pop_fields"] = ResolversParentTypes["unpaused_event_stddev_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Unpaused_Event_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["unpaused_event_stddev_samp_fields"] = ResolversParentTypes["unpaused_event_stddev_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Unpaused_Event_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["unpaused_event_sum_fields"] = ResolversParentTypes["unpaused_event_sum_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["numeric"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Unpaused_Event_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["unpaused_event_var_pop_fields"] = ResolversParentTypes["unpaused_event_var_pop_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Unpaused_Event_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["unpaused_event_var_samp_fields"] = ResolversParentTypes["unpaused_event_var_samp_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Unpaused_Event_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["unpaused_event_variance_fields"] = ResolversParentTypes["unpaused_event_variance_fields"]
> = {
  block_number?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  log_index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mutation_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["mutation_root"] = ResolversParentTypes["mutation_root"]
> = {
  delete_balance_collected_event?: Resolver<
    Maybe<ResolversTypes["balance_collected_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Balance_Collected_EventArgs, "where">
  >;
  delete_balance_collected_event_by_pk?: Resolver<
    Maybe<ResolversTypes["balance_collected_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Balance_Collected_Event_By_PkArgs, "id">
  >;
  delete_collateral_added_event?: Resolver<
    Maybe<ResolversTypes["collateral_added_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Collateral_Added_EventArgs, "where">
  >;
  delete_collateral_added_event_by_pk?: Resolver<
    Maybe<ResolversTypes["collateral_added_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Collateral_Added_Event_By_PkArgs, "id">
  >;
  delete_collateral_removed_event?: Resolver<
    Maybe<ResolversTypes["collateral_removed_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Collateral_Removed_EventArgs, "where">
  >;
  delete_collateral_removed_event_by_pk?: Resolver<
    Maybe<ResolversTypes["collateral_removed_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Collateral_Removed_Event_By_PkArgs, "id">
  >;
  delete_contango_yield_admin_changed_event?: Resolver<
    Maybe<ResolversTypes["contango_yield_admin_changed_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Contango_Yield_Admin_Changed_EventArgs, "where">
  >;
  delete_contango_yield_admin_changed_event_by_pk?: Resolver<
    Maybe<ResolversTypes["contango_yield_admin_changed_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Contango_Yield_Admin_Changed_Event_By_PkArgs, "id">
  >;
  delete_contango_yield_beacon_upgraded_event?: Resolver<
    Maybe<ResolversTypes["contango_yield_beacon_upgraded_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Contango_Yield_Beacon_Upgraded_EventArgs, "where">
  >;
  delete_contango_yield_beacon_upgraded_event_by_pk?: Resolver<
    Maybe<ResolversTypes["contango_yield_beacon_upgraded_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Contango_Yield_Beacon_Upgraded_Event_By_PkArgs, "id">
  >;
  delete_contango_yield_upgraded_event?: Resolver<
    Maybe<ResolversTypes["contango_yield_upgraded_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Contango_Yield_Upgraded_EventArgs, "where">
  >;
  delete_contango_yield_upgraded_event_by_pk?: Resolver<
    Maybe<ResolversTypes["contango_yield_upgraded_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Contango_Yield_Upgraded_Event_By_PkArgs, "id">
  >;
  delete_contract_traded_event?: Resolver<
    Maybe<ResolversTypes["contract_traded_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Contract_Traded_EventArgs, "where">
  >;
  delete_contract_traded_event_by_pk?: Resolver<
    Maybe<ResolversTypes["contract_traded_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Contract_Traded_Event_By_PkArgs, "id">
  >;
  delete_initialized_event?: Resolver<
    Maybe<ResolversTypes["initialized_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Initialized_EventArgs, "where">
  >;
  delete_initialized_event_by_pk?: Resolver<
    Maybe<ResolversTypes["initialized_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Initialized_Event_By_PkArgs, "id">
  >;
  delete_paused_event?: Resolver<
    Maybe<ResolversTypes["paused_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Paused_EventArgs, "where">
  >;
  delete_paused_event_by_pk?: Resolver<
    Maybe<ResolversTypes["paused_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Paused_Event_By_PkArgs, "id">
  >;
  delete_position_closed_event?: Resolver<
    Maybe<ResolversTypes["position_closed_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Position_Closed_EventArgs, "where">
  >;
  delete_position_closed_event_by_pk?: Resolver<
    Maybe<ResolversTypes["position_closed_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Position_Closed_Event_By_PkArgs, "id">
  >;
  delete_position_delivered_event?: Resolver<
    Maybe<ResolversTypes["position_delivered_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Position_Delivered_EventArgs, "where">
  >;
  delete_position_delivered_event_by_pk?: Resolver<
    Maybe<ResolversTypes["position_delivered_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Position_Delivered_Event_By_PkArgs, "id">
  >;
  delete_position_liquidated_event?: Resolver<
    Maybe<ResolversTypes["position_liquidated_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Position_Liquidated_EventArgs, "where">
  >;
  delete_position_liquidated_event_by_pk?: Resolver<
    Maybe<ResolversTypes["position_liquidated_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Position_Liquidated_Event_By_PkArgs, "id">
  >;
  delete_position_upserted_event?: Resolver<
    Maybe<ResolversTypes["position_upserted_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Position_Upserted_EventArgs, "where">
  >;
  delete_position_upserted_event_by_pk?: Resolver<
    Maybe<ResolversTypes["position_upserted_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Position_Upserted_Event_By_PkArgs, "id">
  >;
  delete_role_admin_changed_event?: Resolver<
    Maybe<ResolversTypes["role_admin_changed_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Role_Admin_Changed_EventArgs, "where">
  >;
  delete_role_admin_changed_event_by_pk?: Resolver<
    Maybe<ResolversTypes["role_admin_changed_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Role_Admin_Changed_Event_By_PkArgs, "id">
  >;
  delete_role_granted_event?: Resolver<
    Maybe<ResolversTypes["role_granted_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Role_Granted_EventArgs, "where">
  >;
  delete_role_granted_event_by_pk?: Resolver<
    Maybe<ResolversTypes["role_granted_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Role_Granted_Event_By_PkArgs, "id">
  >;
  delete_role_revoked_event?: Resolver<
    Maybe<ResolversTypes["role_revoked_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Role_Revoked_EventArgs, "where">
  >;
  delete_role_revoked_event_by_pk?: Resolver<
    Maybe<ResolversTypes["role_revoked_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Role_Revoked_Event_By_PkArgs, "id">
  >;
  delete_unpaused_event?: Resolver<
    Maybe<ResolversTypes["unpaused_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Unpaused_EventArgs, "where">
  >;
  delete_unpaused_event_by_pk?: Resolver<
    Maybe<ResolversTypes["unpaused_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Unpaused_Event_By_PkArgs, "id">
  >;
  insert_balance_collected_event?: Resolver<
    Maybe<ResolversTypes["balance_collected_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Balance_Collected_EventArgs, "objects">
  >;
  insert_balance_collected_event_one?: Resolver<
    Maybe<ResolversTypes["balance_collected_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Balance_Collected_Event_OneArgs, "object">
  >;
  insert_collateral_added_event?: Resolver<
    Maybe<ResolversTypes["collateral_added_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Collateral_Added_EventArgs, "objects">
  >;
  insert_collateral_added_event_one?: Resolver<
    Maybe<ResolversTypes["collateral_added_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Collateral_Added_Event_OneArgs, "object">
  >;
  insert_collateral_removed_event?: Resolver<
    Maybe<ResolversTypes["collateral_removed_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Collateral_Removed_EventArgs, "objects">
  >;
  insert_collateral_removed_event_one?: Resolver<
    Maybe<ResolversTypes["collateral_removed_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Collateral_Removed_Event_OneArgs, "object">
  >;
  insert_contango_yield_admin_changed_event?: Resolver<
    Maybe<ResolversTypes["contango_yield_admin_changed_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Contango_Yield_Admin_Changed_EventArgs, "objects">
  >;
  insert_contango_yield_admin_changed_event_one?: Resolver<
    Maybe<ResolversTypes["contango_yield_admin_changed_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Contango_Yield_Admin_Changed_Event_OneArgs, "object">
  >;
  insert_contango_yield_beacon_upgraded_event?: Resolver<
    Maybe<ResolversTypes["contango_yield_beacon_upgraded_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Contango_Yield_Beacon_Upgraded_EventArgs, "objects">
  >;
  insert_contango_yield_beacon_upgraded_event_one?: Resolver<
    Maybe<ResolversTypes["contango_yield_beacon_upgraded_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Contango_Yield_Beacon_Upgraded_Event_OneArgs, "object">
  >;
  insert_contango_yield_upgraded_event?: Resolver<
    Maybe<ResolversTypes["contango_yield_upgraded_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Contango_Yield_Upgraded_EventArgs, "objects">
  >;
  insert_contango_yield_upgraded_event_one?: Resolver<
    Maybe<ResolversTypes["contango_yield_upgraded_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Contango_Yield_Upgraded_Event_OneArgs, "object">
  >;
  insert_contract_traded_event?: Resolver<
    Maybe<ResolversTypes["contract_traded_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Contract_Traded_EventArgs, "objects">
  >;
  insert_contract_traded_event_one?: Resolver<
    Maybe<ResolversTypes["contract_traded_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Contract_Traded_Event_OneArgs, "object">
  >;
  insert_initialized_event?: Resolver<
    Maybe<ResolversTypes["initialized_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Initialized_EventArgs, "objects">
  >;
  insert_initialized_event_one?: Resolver<
    Maybe<ResolversTypes["initialized_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Initialized_Event_OneArgs, "object">
  >;
  insert_paused_event?: Resolver<
    Maybe<ResolversTypes["paused_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Paused_EventArgs, "objects">
  >;
  insert_paused_event_one?: Resolver<
    Maybe<ResolversTypes["paused_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Paused_Event_OneArgs, "object">
  >;
  insert_position_closed_event?: Resolver<
    Maybe<ResolversTypes["position_closed_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Position_Closed_EventArgs, "objects">
  >;
  insert_position_closed_event_one?: Resolver<
    Maybe<ResolversTypes["position_closed_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Position_Closed_Event_OneArgs, "object">
  >;
  insert_position_delivered_event?: Resolver<
    Maybe<ResolversTypes["position_delivered_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Position_Delivered_EventArgs, "objects">
  >;
  insert_position_delivered_event_one?: Resolver<
    Maybe<ResolversTypes["position_delivered_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Position_Delivered_Event_OneArgs, "object">
  >;
  insert_position_liquidated_event?: Resolver<
    Maybe<ResolversTypes["position_liquidated_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Position_Liquidated_EventArgs, "objects">
  >;
  insert_position_liquidated_event_one?: Resolver<
    Maybe<ResolversTypes["position_liquidated_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Position_Liquidated_Event_OneArgs, "object">
  >;
  insert_position_upserted_event?: Resolver<
    Maybe<ResolversTypes["position_upserted_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Position_Upserted_EventArgs, "objects">
  >;
  insert_position_upserted_event_one?: Resolver<
    Maybe<ResolversTypes["position_upserted_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Position_Upserted_Event_OneArgs, "object">
  >;
  insert_role_admin_changed_event?: Resolver<
    Maybe<ResolversTypes["role_admin_changed_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Role_Admin_Changed_EventArgs, "objects">
  >;
  insert_role_admin_changed_event_one?: Resolver<
    Maybe<ResolversTypes["role_admin_changed_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Role_Admin_Changed_Event_OneArgs, "object">
  >;
  insert_role_granted_event?: Resolver<
    Maybe<ResolversTypes["role_granted_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Role_Granted_EventArgs, "objects">
  >;
  insert_role_granted_event_one?: Resolver<
    Maybe<ResolversTypes["role_granted_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Role_Granted_Event_OneArgs, "object">
  >;
  insert_role_revoked_event?: Resolver<
    Maybe<ResolversTypes["role_revoked_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Role_Revoked_EventArgs, "objects">
  >;
  insert_role_revoked_event_one?: Resolver<
    Maybe<ResolversTypes["role_revoked_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Role_Revoked_Event_OneArgs, "object">
  >;
  insert_unpaused_event?: Resolver<
    Maybe<ResolversTypes["unpaused_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Unpaused_EventArgs, "objects">
  >;
  insert_unpaused_event_one?: Resolver<
    Maybe<ResolversTypes["unpaused_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Unpaused_Event_OneArgs, "object">
  >;
  update_balance_collected_event?: Resolver<
    Maybe<ResolversTypes["balance_collected_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Balance_Collected_EventArgs, "where">
  >;
  update_balance_collected_event_by_pk?: Resolver<
    Maybe<ResolversTypes["balance_collected_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Balance_Collected_Event_By_PkArgs, "pk_columns">
  >;
  update_balance_collected_event_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["balance_collected_event_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Balance_Collected_Event_ManyArgs, "updates">
  >;
  update_collateral_added_event?: Resolver<
    Maybe<ResolversTypes["collateral_added_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Collateral_Added_EventArgs, "where">
  >;
  update_collateral_added_event_by_pk?: Resolver<
    Maybe<ResolversTypes["collateral_added_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Collateral_Added_Event_By_PkArgs, "pk_columns">
  >;
  update_collateral_added_event_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["collateral_added_event_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Collateral_Added_Event_ManyArgs, "updates">
  >;
  update_collateral_removed_event?: Resolver<
    Maybe<ResolversTypes["collateral_removed_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Collateral_Removed_EventArgs, "where">
  >;
  update_collateral_removed_event_by_pk?: Resolver<
    Maybe<ResolversTypes["collateral_removed_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Collateral_Removed_Event_By_PkArgs, "pk_columns">
  >;
  update_collateral_removed_event_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["collateral_removed_event_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Collateral_Removed_Event_ManyArgs, "updates">
  >;
  update_contango_yield_admin_changed_event?: Resolver<
    Maybe<ResolversTypes["contango_yield_admin_changed_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Contango_Yield_Admin_Changed_EventArgs, "where">
  >;
  update_contango_yield_admin_changed_event_by_pk?: Resolver<
    Maybe<ResolversTypes["contango_yield_admin_changed_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Contango_Yield_Admin_Changed_Event_By_PkArgs, "pk_columns">
  >;
  update_contango_yield_admin_changed_event_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["contango_yield_admin_changed_event_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Contango_Yield_Admin_Changed_Event_ManyArgs, "updates">
  >;
  update_contango_yield_beacon_upgraded_event?: Resolver<
    Maybe<ResolversTypes["contango_yield_beacon_upgraded_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Contango_Yield_Beacon_Upgraded_EventArgs, "where">
  >;
  update_contango_yield_beacon_upgraded_event_by_pk?: Resolver<
    Maybe<ResolversTypes["contango_yield_beacon_upgraded_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Contango_Yield_Beacon_Upgraded_Event_By_PkArgs, "pk_columns">
  >;
  update_contango_yield_beacon_upgraded_event_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["contango_yield_beacon_upgraded_event_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Contango_Yield_Beacon_Upgraded_Event_ManyArgs, "updates">
  >;
  update_contango_yield_upgraded_event?: Resolver<
    Maybe<ResolversTypes["contango_yield_upgraded_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Contango_Yield_Upgraded_EventArgs, "where">
  >;
  update_contango_yield_upgraded_event_by_pk?: Resolver<
    Maybe<ResolversTypes["contango_yield_upgraded_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Contango_Yield_Upgraded_Event_By_PkArgs, "pk_columns">
  >;
  update_contango_yield_upgraded_event_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["contango_yield_upgraded_event_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Contango_Yield_Upgraded_Event_ManyArgs, "updates">
  >;
  update_contract_traded_event?: Resolver<
    Maybe<ResolversTypes["contract_traded_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Contract_Traded_EventArgs, "where">
  >;
  update_contract_traded_event_by_pk?: Resolver<
    Maybe<ResolversTypes["contract_traded_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Contract_Traded_Event_By_PkArgs, "pk_columns">
  >;
  update_contract_traded_event_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["contract_traded_event_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Contract_Traded_Event_ManyArgs, "updates">
  >;
  update_initialized_event?: Resolver<
    Maybe<ResolversTypes["initialized_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Initialized_EventArgs, "where">
  >;
  update_initialized_event_by_pk?: Resolver<
    Maybe<ResolversTypes["initialized_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Initialized_Event_By_PkArgs, "pk_columns">
  >;
  update_initialized_event_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["initialized_event_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Initialized_Event_ManyArgs, "updates">
  >;
  update_paused_event?: Resolver<
    Maybe<ResolversTypes["paused_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Paused_EventArgs, "where">
  >;
  update_paused_event_by_pk?: Resolver<
    Maybe<ResolversTypes["paused_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Paused_Event_By_PkArgs, "pk_columns">
  >;
  update_paused_event_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["paused_event_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Paused_Event_ManyArgs, "updates">
  >;
  update_position_closed_event?: Resolver<
    Maybe<ResolversTypes["position_closed_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Position_Closed_EventArgs, "where">
  >;
  update_position_closed_event_by_pk?: Resolver<
    Maybe<ResolversTypes["position_closed_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Position_Closed_Event_By_PkArgs, "pk_columns">
  >;
  update_position_closed_event_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["position_closed_event_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Position_Closed_Event_ManyArgs, "updates">
  >;
  update_position_delivered_event?: Resolver<
    Maybe<ResolversTypes["position_delivered_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Position_Delivered_EventArgs, "where">
  >;
  update_position_delivered_event_by_pk?: Resolver<
    Maybe<ResolversTypes["position_delivered_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Position_Delivered_Event_By_PkArgs, "pk_columns">
  >;
  update_position_delivered_event_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["position_delivered_event_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Position_Delivered_Event_ManyArgs, "updates">
  >;
  update_position_liquidated_event?: Resolver<
    Maybe<ResolversTypes["position_liquidated_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Position_Liquidated_EventArgs, "where">
  >;
  update_position_liquidated_event_by_pk?: Resolver<
    Maybe<ResolversTypes["position_liquidated_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Position_Liquidated_Event_By_PkArgs, "pk_columns">
  >;
  update_position_liquidated_event_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["position_liquidated_event_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Position_Liquidated_Event_ManyArgs, "updates">
  >;
  update_position_upserted_event?: Resolver<
    Maybe<ResolversTypes["position_upserted_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Position_Upserted_EventArgs, "where">
  >;
  update_position_upserted_event_by_pk?: Resolver<
    Maybe<ResolversTypes["position_upserted_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Position_Upserted_Event_By_PkArgs, "pk_columns">
  >;
  update_position_upserted_event_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["position_upserted_event_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Position_Upserted_Event_ManyArgs, "updates">
  >;
  update_role_admin_changed_event?: Resolver<
    Maybe<ResolversTypes["role_admin_changed_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Role_Admin_Changed_EventArgs, "where">
  >;
  update_role_admin_changed_event_by_pk?: Resolver<
    Maybe<ResolversTypes["role_admin_changed_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Role_Admin_Changed_Event_By_PkArgs, "pk_columns">
  >;
  update_role_admin_changed_event_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["role_admin_changed_event_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Role_Admin_Changed_Event_ManyArgs, "updates">
  >;
  update_role_granted_event?: Resolver<
    Maybe<ResolversTypes["role_granted_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Role_Granted_EventArgs, "where">
  >;
  update_role_granted_event_by_pk?: Resolver<
    Maybe<ResolversTypes["role_granted_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Role_Granted_Event_By_PkArgs, "pk_columns">
  >;
  update_role_granted_event_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["role_granted_event_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Role_Granted_Event_ManyArgs, "updates">
  >;
  update_role_revoked_event?: Resolver<
    Maybe<ResolversTypes["role_revoked_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Role_Revoked_EventArgs, "where">
  >;
  update_role_revoked_event_by_pk?: Resolver<
    Maybe<ResolversTypes["role_revoked_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Role_Revoked_Event_By_PkArgs, "pk_columns">
  >;
  update_role_revoked_event_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["role_revoked_event_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Role_Revoked_Event_ManyArgs, "updates">
  >;
  update_unpaused_event?: Resolver<
    Maybe<ResolversTypes["unpaused_event_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Unpaused_EventArgs, "where">
  >;
  update_unpaused_event_by_pk?: Resolver<
    Maybe<ResolversTypes["unpaused_event"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Unpaused_Event_By_PkArgs, "pk_columns">
  >;
  update_unpaused_event_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["unpaused_event_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Unpaused_Event_ManyArgs, "updates">
  >;
};

export type Balance_Collected_Event_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["balance_collected_event_mutation_response"] = ResolversParentTypes["balance_collected_event_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes["balance_collected_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Added_Event_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_added_event_mutation_response"] = ResolversParentTypes["collateral_added_event_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes["collateral_added_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collateral_Removed_Event_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["collateral_removed_event_mutation_response"] = ResolversParentTypes["collateral_removed_event_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes["collateral_removed_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Admin_Changed_Event_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_admin_changed_event_mutation_response"] = ResolversParentTypes["contango_yield_admin_changed_event_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["contango_yield_admin_changed_event"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Beacon_Upgraded_Event_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_beacon_upgraded_event_mutation_response"] = ResolversParentTypes["contango_yield_beacon_upgraded_event_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["contango_yield_beacon_upgraded_event"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contango_Yield_Upgraded_Event_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contango_yield_upgraded_event_mutation_response"] = ResolversParentTypes["contango_yield_upgraded_event_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["contango_yield_upgraded_event"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contract_Traded_Event_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contract_traded_event_mutation_response"] = ResolversParentTypes["contract_traded_event_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes["contract_traded_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Initialized_Event_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["initialized_event_mutation_response"] = ResolversParentTypes["initialized_event_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes["initialized_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Paused_Event_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["paused_event_mutation_response"] = ResolversParentTypes["paused_event_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes["paused_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Closed_Event_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_closed_event_mutation_response"] = ResolversParentTypes["position_closed_event_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes["position_closed_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Delivered_Event_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_delivered_event_mutation_response"] = ResolversParentTypes["position_delivered_event_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes["position_delivered_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Liquidated_Event_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_liquidated_event_mutation_response"] = ResolversParentTypes["position_liquidated_event_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes["position_liquidated_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Position_Upserted_Event_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["position_upserted_event_mutation_response"] = ResolversParentTypes["position_upserted_event_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes["position_upserted_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Admin_Changed_Event_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_admin_changed_event_mutation_response"] = ResolversParentTypes["role_admin_changed_event_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes["role_admin_changed_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Granted_Event_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_granted_event_mutation_response"] = ResolversParentTypes["role_granted_event_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes["role_granted_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Revoked_Event_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["role_revoked_event_mutation_response"] = ResolversParentTypes["role_revoked_event_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes["role_revoked_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Unpaused_Event_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["unpaused_event_mutation_response"] = ResolversParentTypes["unpaused_event_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes["unpaused_event"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["subscription_root"] = ResolversParentTypes["subscription_root"]
> = {
  balance_collected_event?: SubscriptionResolver<
    Array<ResolversTypes["balance_collected_event"]>,
    "balance_collected_event",
    ParentType,
    ContextType,
    Partial<Subscription_RootBalance_Collected_EventArgs>
  >;
  balance_collected_event_aggregate?: SubscriptionResolver<
    ResolversTypes["balance_collected_event_aggregate"],
    "balance_collected_event_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootBalance_Collected_Event_AggregateArgs>
  >;
  balance_collected_event_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["balance_collected_event"]>,
    "balance_collected_event_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootBalance_Collected_Event_By_PkArgs, "id">
  >;
  balance_collected_event_stream?: SubscriptionResolver<
    Array<ResolversTypes["balance_collected_event"]>,
    "balance_collected_event_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootBalance_Collected_Event_StreamArgs, "batch_size" | "cursor">
  >;
  collateral_added_event?: SubscriptionResolver<
    Array<ResolversTypes["collateral_added_event"]>,
    "collateral_added_event",
    ParentType,
    ContextType,
    Partial<Subscription_RootCollateral_Added_EventArgs>
  >;
  collateral_added_event_aggregate?: SubscriptionResolver<
    ResolversTypes["collateral_added_event_aggregate"],
    "collateral_added_event_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootCollateral_Added_Event_AggregateArgs>
  >;
  collateral_added_event_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["collateral_added_event"]>,
    "collateral_added_event_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootCollateral_Added_Event_By_PkArgs, "id">
  >;
  collateral_added_event_stream?: SubscriptionResolver<
    Array<ResolversTypes["collateral_added_event"]>,
    "collateral_added_event_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootCollateral_Added_Event_StreamArgs, "batch_size" | "cursor">
  >;
  collateral_removed_event?: SubscriptionResolver<
    Array<ResolversTypes["collateral_removed_event"]>,
    "collateral_removed_event",
    ParentType,
    ContextType,
    Partial<Subscription_RootCollateral_Removed_EventArgs>
  >;
  collateral_removed_event_aggregate?: SubscriptionResolver<
    ResolversTypes["collateral_removed_event_aggregate"],
    "collateral_removed_event_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootCollateral_Removed_Event_AggregateArgs>
  >;
  collateral_removed_event_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["collateral_removed_event"]>,
    "collateral_removed_event_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootCollateral_Removed_Event_By_PkArgs, "id">
  >;
  collateral_removed_event_stream?: SubscriptionResolver<
    Array<ResolversTypes["collateral_removed_event"]>,
    "collateral_removed_event_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootCollateral_Removed_Event_StreamArgs, "batch_size" | "cursor">
  >;
  contango_yield_admin_changed_event?: SubscriptionResolver<
    Array<ResolversTypes["contango_yield_admin_changed_event"]>,
    "contango_yield_admin_changed_event",
    ParentType,
    ContextType,
    Partial<Subscription_RootContango_Yield_Admin_Changed_EventArgs>
  >;
  contango_yield_admin_changed_event_aggregate?: SubscriptionResolver<
    ResolversTypes["contango_yield_admin_changed_event_aggregate"],
    "contango_yield_admin_changed_event_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootContango_Yield_Admin_Changed_Event_AggregateArgs>
  >;
  contango_yield_admin_changed_event_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["contango_yield_admin_changed_event"]>,
    "contango_yield_admin_changed_event_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootContango_Yield_Admin_Changed_Event_By_PkArgs, "id">
  >;
  contango_yield_admin_changed_event_stream?: SubscriptionResolver<
    Array<ResolversTypes["contango_yield_admin_changed_event"]>,
    "contango_yield_admin_changed_event_stream",
    ParentType,
    ContextType,
    RequireFields<
      Subscription_RootContango_Yield_Admin_Changed_Event_StreamArgs,
      "batch_size" | "cursor"
    >
  >;
  contango_yield_beacon_upgraded_event?: SubscriptionResolver<
    Array<ResolversTypes["contango_yield_beacon_upgraded_event"]>,
    "contango_yield_beacon_upgraded_event",
    ParentType,
    ContextType,
    Partial<Subscription_RootContango_Yield_Beacon_Upgraded_EventArgs>
  >;
  contango_yield_beacon_upgraded_event_aggregate?: SubscriptionResolver<
    ResolversTypes["contango_yield_beacon_upgraded_event_aggregate"],
    "contango_yield_beacon_upgraded_event_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootContango_Yield_Beacon_Upgraded_Event_AggregateArgs>
  >;
  contango_yield_beacon_upgraded_event_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["contango_yield_beacon_upgraded_event"]>,
    "contango_yield_beacon_upgraded_event_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootContango_Yield_Beacon_Upgraded_Event_By_PkArgs, "id">
  >;
  contango_yield_beacon_upgraded_event_stream?: SubscriptionResolver<
    Array<ResolversTypes["contango_yield_beacon_upgraded_event"]>,
    "contango_yield_beacon_upgraded_event_stream",
    ParentType,
    ContextType,
    RequireFields<
      Subscription_RootContango_Yield_Beacon_Upgraded_Event_StreamArgs,
      "batch_size" | "cursor"
    >
  >;
  contango_yield_upgraded_event?: SubscriptionResolver<
    Array<ResolversTypes["contango_yield_upgraded_event"]>,
    "contango_yield_upgraded_event",
    ParentType,
    ContextType,
    Partial<Subscription_RootContango_Yield_Upgraded_EventArgs>
  >;
  contango_yield_upgraded_event_aggregate?: SubscriptionResolver<
    ResolversTypes["contango_yield_upgraded_event_aggregate"],
    "contango_yield_upgraded_event_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootContango_Yield_Upgraded_Event_AggregateArgs>
  >;
  contango_yield_upgraded_event_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["contango_yield_upgraded_event"]>,
    "contango_yield_upgraded_event_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootContango_Yield_Upgraded_Event_By_PkArgs, "id">
  >;
  contango_yield_upgraded_event_stream?: SubscriptionResolver<
    Array<ResolversTypes["contango_yield_upgraded_event"]>,
    "contango_yield_upgraded_event_stream",
    ParentType,
    ContextType,
    RequireFields<
      Subscription_RootContango_Yield_Upgraded_Event_StreamArgs,
      "batch_size" | "cursor"
    >
  >;
  contract_traded_event?: SubscriptionResolver<
    Array<ResolversTypes["contract_traded_event"]>,
    "contract_traded_event",
    ParentType,
    ContextType,
    Partial<Subscription_RootContract_Traded_EventArgs>
  >;
  contract_traded_event_aggregate?: SubscriptionResolver<
    ResolversTypes["contract_traded_event_aggregate"],
    "contract_traded_event_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootContract_Traded_Event_AggregateArgs>
  >;
  contract_traded_event_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["contract_traded_event"]>,
    "contract_traded_event_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootContract_Traded_Event_By_PkArgs, "id">
  >;
  contract_traded_event_stream?: SubscriptionResolver<
    Array<ResolversTypes["contract_traded_event"]>,
    "contract_traded_event_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootContract_Traded_Event_StreamArgs, "batch_size" | "cursor">
  >;
  initialized_event?: SubscriptionResolver<
    Array<ResolversTypes["initialized_event"]>,
    "initialized_event",
    ParentType,
    ContextType,
    Partial<Subscription_RootInitialized_EventArgs>
  >;
  initialized_event_aggregate?: SubscriptionResolver<
    ResolversTypes["initialized_event_aggregate"],
    "initialized_event_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootInitialized_Event_AggregateArgs>
  >;
  initialized_event_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["initialized_event"]>,
    "initialized_event_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootInitialized_Event_By_PkArgs, "id">
  >;
  initialized_event_stream?: SubscriptionResolver<
    Array<ResolversTypes["initialized_event"]>,
    "initialized_event_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootInitialized_Event_StreamArgs, "batch_size" | "cursor">
  >;
  paused_event?: SubscriptionResolver<
    Array<ResolversTypes["paused_event"]>,
    "paused_event",
    ParentType,
    ContextType,
    Partial<Subscription_RootPaused_EventArgs>
  >;
  paused_event_aggregate?: SubscriptionResolver<
    ResolversTypes["paused_event_aggregate"],
    "paused_event_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootPaused_Event_AggregateArgs>
  >;
  paused_event_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["paused_event"]>,
    "paused_event_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootPaused_Event_By_PkArgs, "id">
  >;
  paused_event_stream?: SubscriptionResolver<
    Array<ResolversTypes["paused_event"]>,
    "paused_event_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootPaused_Event_StreamArgs, "batch_size" | "cursor">
  >;
  position_closed_event?: SubscriptionResolver<
    Array<ResolversTypes["position_closed_event"]>,
    "position_closed_event",
    ParentType,
    ContextType,
    Partial<Subscription_RootPosition_Closed_EventArgs>
  >;
  position_closed_event_aggregate?: SubscriptionResolver<
    ResolversTypes["position_closed_event_aggregate"],
    "position_closed_event_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootPosition_Closed_Event_AggregateArgs>
  >;
  position_closed_event_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["position_closed_event"]>,
    "position_closed_event_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootPosition_Closed_Event_By_PkArgs, "id">
  >;
  position_closed_event_stream?: SubscriptionResolver<
    Array<ResolversTypes["position_closed_event"]>,
    "position_closed_event_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootPosition_Closed_Event_StreamArgs, "batch_size" | "cursor">
  >;
  position_delivered_event?: SubscriptionResolver<
    Array<ResolversTypes["position_delivered_event"]>,
    "position_delivered_event",
    ParentType,
    ContextType,
    Partial<Subscription_RootPosition_Delivered_EventArgs>
  >;
  position_delivered_event_aggregate?: SubscriptionResolver<
    ResolversTypes["position_delivered_event_aggregate"],
    "position_delivered_event_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootPosition_Delivered_Event_AggregateArgs>
  >;
  position_delivered_event_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["position_delivered_event"]>,
    "position_delivered_event_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootPosition_Delivered_Event_By_PkArgs, "id">
  >;
  position_delivered_event_stream?: SubscriptionResolver<
    Array<ResolversTypes["position_delivered_event"]>,
    "position_delivered_event_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootPosition_Delivered_Event_StreamArgs, "batch_size" | "cursor">
  >;
  position_liquidated_event?: SubscriptionResolver<
    Array<ResolversTypes["position_liquidated_event"]>,
    "position_liquidated_event",
    ParentType,
    ContextType,
    Partial<Subscription_RootPosition_Liquidated_EventArgs>
  >;
  position_liquidated_event_aggregate?: SubscriptionResolver<
    ResolversTypes["position_liquidated_event_aggregate"],
    "position_liquidated_event_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootPosition_Liquidated_Event_AggregateArgs>
  >;
  position_liquidated_event_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["position_liquidated_event"]>,
    "position_liquidated_event_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootPosition_Liquidated_Event_By_PkArgs, "id">
  >;
  position_liquidated_event_stream?: SubscriptionResolver<
    Array<ResolversTypes["position_liquidated_event"]>,
    "position_liquidated_event_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootPosition_Liquidated_Event_StreamArgs, "batch_size" | "cursor">
  >;
  position_upserted_event?: SubscriptionResolver<
    Array<ResolversTypes["position_upserted_event"]>,
    "position_upserted_event",
    ParentType,
    ContextType,
    Partial<Subscription_RootPosition_Upserted_EventArgs>
  >;
  position_upserted_event_aggregate?: SubscriptionResolver<
    ResolversTypes["position_upserted_event_aggregate"],
    "position_upserted_event_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootPosition_Upserted_Event_AggregateArgs>
  >;
  position_upserted_event_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["position_upserted_event"]>,
    "position_upserted_event_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootPosition_Upserted_Event_By_PkArgs, "id">
  >;
  position_upserted_event_stream?: SubscriptionResolver<
    Array<ResolversTypes["position_upserted_event"]>,
    "position_upserted_event_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootPosition_Upserted_Event_StreamArgs, "batch_size" | "cursor">
  >;
  role_admin_changed_event?: SubscriptionResolver<
    Array<ResolversTypes["role_admin_changed_event"]>,
    "role_admin_changed_event",
    ParentType,
    ContextType,
    Partial<Subscription_RootRole_Admin_Changed_EventArgs>
  >;
  role_admin_changed_event_aggregate?: SubscriptionResolver<
    ResolversTypes["role_admin_changed_event_aggregate"],
    "role_admin_changed_event_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootRole_Admin_Changed_Event_AggregateArgs>
  >;
  role_admin_changed_event_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["role_admin_changed_event"]>,
    "role_admin_changed_event_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootRole_Admin_Changed_Event_By_PkArgs, "id">
  >;
  role_admin_changed_event_stream?: SubscriptionResolver<
    Array<ResolversTypes["role_admin_changed_event"]>,
    "role_admin_changed_event_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootRole_Admin_Changed_Event_StreamArgs, "batch_size" | "cursor">
  >;
  role_granted_event?: SubscriptionResolver<
    Array<ResolversTypes["role_granted_event"]>,
    "role_granted_event",
    ParentType,
    ContextType,
    Partial<Subscription_RootRole_Granted_EventArgs>
  >;
  role_granted_event_aggregate?: SubscriptionResolver<
    ResolversTypes["role_granted_event_aggregate"],
    "role_granted_event_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootRole_Granted_Event_AggregateArgs>
  >;
  role_granted_event_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["role_granted_event"]>,
    "role_granted_event_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootRole_Granted_Event_By_PkArgs, "id">
  >;
  role_granted_event_stream?: SubscriptionResolver<
    Array<ResolversTypes["role_granted_event"]>,
    "role_granted_event_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootRole_Granted_Event_StreamArgs, "batch_size" | "cursor">
  >;
  role_revoked_event?: SubscriptionResolver<
    Array<ResolversTypes["role_revoked_event"]>,
    "role_revoked_event",
    ParentType,
    ContextType,
    Partial<Subscription_RootRole_Revoked_EventArgs>
  >;
  role_revoked_event_aggregate?: SubscriptionResolver<
    ResolversTypes["role_revoked_event_aggregate"],
    "role_revoked_event_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootRole_Revoked_Event_AggregateArgs>
  >;
  role_revoked_event_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["role_revoked_event"]>,
    "role_revoked_event_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootRole_Revoked_Event_By_PkArgs, "id">
  >;
  role_revoked_event_stream?: SubscriptionResolver<
    Array<ResolversTypes["role_revoked_event"]>,
    "role_revoked_event_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootRole_Revoked_Event_StreamArgs, "batch_size" | "cursor">
  >;
  unpaused_event?: SubscriptionResolver<
    Array<ResolversTypes["unpaused_event"]>,
    "unpaused_event",
    ParentType,
    ContextType,
    Partial<Subscription_RootUnpaused_EventArgs>
  >;
  unpaused_event_aggregate?: SubscriptionResolver<
    ResolversTypes["unpaused_event_aggregate"],
    "unpaused_event_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootUnpaused_Event_AggregateArgs>
  >;
  unpaused_event_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["unpaused_event"]>,
    "unpaused_event_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUnpaused_Event_By_PkArgs, "id">
  >;
  unpaused_event_stream?: SubscriptionResolver<
    Array<ResolversTypes["unpaused_event"]>,
    "unpaused_event_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUnpaused_Event_StreamArgs, "batch_size" | "cursor">
  >;
};

export type Resolvers<ContextType = any> = {
  query_root?: Query_RootResolvers<ContextType>;
  numeric?: GraphQLScalarType;
  balance_collected_event?: Balance_Collected_EventResolvers<ContextType>;
  balance_collected_event_aggregate?: Balance_Collected_Event_AggregateResolvers<ContextType>;
  balance_collected_event_aggregate_fields?: Balance_Collected_Event_Aggregate_FieldsResolvers<ContextType>;
  balance_collected_event_avg_fields?: Balance_Collected_Event_Avg_FieldsResolvers<ContextType>;
  balance_collected_event_max_fields?: Balance_Collected_Event_Max_FieldsResolvers<ContextType>;
  balance_collected_event_min_fields?: Balance_Collected_Event_Min_FieldsResolvers<ContextType>;
  balance_collected_event_stddev_fields?: Balance_Collected_Event_Stddev_FieldsResolvers<ContextType>;
  balance_collected_event_stddev_pop_fields?: Balance_Collected_Event_Stddev_Pop_FieldsResolvers<ContextType>;
  balance_collected_event_stddev_samp_fields?: Balance_Collected_Event_Stddev_Samp_FieldsResolvers<ContextType>;
  balance_collected_event_sum_fields?: Balance_Collected_Event_Sum_FieldsResolvers<ContextType>;
  balance_collected_event_var_pop_fields?: Balance_Collected_Event_Var_Pop_FieldsResolvers<ContextType>;
  balance_collected_event_var_samp_fields?: Balance_Collected_Event_Var_Samp_FieldsResolvers<ContextType>;
  balance_collected_event_variance_fields?: Balance_Collected_Event_Variance_FieldsResolvers<ContextType>;
  collateral_added_event?: Collateral_Added_EventResolvers<ContextType>;
  collateral_added_event_aggregate?: Collateral_Added_Event_AggregateResolvers<ContextType>;
  collateral_added_event_aggregate_fields?: Collateral_Added_Event_Aggregate_FieldsResolvers<ContextType>;
  collateral_added_event_avg_fields?: Collateral_Added_Event_Avg_FieldsResolvers<ContextType>;
  collateral_added_event_max_fields?: Collateral_Added_Event_Max_FieldsResolvers<ContextType>;
  collateral_added_event_min_fields?: Collateral_Added_Event_Min_FieldsResolvers<ContextType>;
  collateral_added_event_stddev_fields?: Collateral_Added_Event_Stddev_FieldsResolvers<ContextType>;
  collateral_added_event_stddev_pop_fields?: Collateral_Added_Event_Stddev_Pop_FieldsResolvers<ContextType>;
  collateral_added_event_stddev_samp_fields?: Collateral_Added_Event_Stddev_Samp_FieldsResolvers<ContextType>;
  collateral_added_event_sum_fields?: Collateral_Added_Event_Sum_FieldsResolvers<ContextType>;
  collateral_added_event_var_pop_fields?: Collateral_Added_Event_Var_Pop_FieldsResolvers<ContextType>;
  collateral_added_event_var_samp_fields?: Collateral_Added_Event_Var_Samp_FieldsResolvers<ContextType>;
  collateral_added_event_variance_fields?: Collateral_Added_Event_Variance_FieldsResolvers<ContextType>;
  collateral_removed_event?: Collateral_Removed_EventResolvers<ContextType>;
  collateral_removed_event_aggregate?: Collateral_Removed_Event_AggregateResolvers<ContextType>;
  collateral_removed_event_aggregate_fields?: Collateral_Removed_Event_Aggregate_FieldsResolvers<ContextType>;
  collateral_removed_event_avg_fields?: Collateral_Removed_Event_Avg_FieldsResolvers<ContextType>;
  collateral_removed_event_max_fields?: Collateral_Removed_Event_Max_FieldsResolvers<ContextType>;
  collateral_removed_event_min_fields?: Collateral_Removed_Event_Min_FieldsResolvers<ContextType>;
  collateral_removed_event_stddev_fields?: Collateral_Removed_Event_Stddev_FieldsResolvers<ContextType>;
  collateral_removed_event_stddev_pop_fields?: Collateral_Removed_Event_Stddev_Pop_FieldsResolvers<ContextType>;
  collateral_removed_event_stddev_samp_fields?: Collateral_Removed_Event_Stddev_Samp_FieldsResolvers<ContextType>;
  collateral_removed_event_sum_fields?: Collateral_Removed_Event_Sum_FieldsResolvers<ContextType>;
  collateral_removed_event_var_pop_fields?: Collateral_Removed_Event_Var_Pop_FieldsResolvers<ContextType>;
  collateral_removed_event_var_samp_fields?: Collateral_Removed_Event_Var_Samp_FieldsResolvers<ContextType>;
  collateral_removed_event_variance_fields?: Collateral_Removed_Event_Variance_FieldsResolvers<ContextType>;
  contango_yield_admin_changed_event?: Contango_Yield_Admin_Changed_EventResolvers<ContextType>;
  contango_yield_admin_changed_event_aggregate?: Contango_Yield_Admin_Changed_Event_AggregateResolvers<ContextType>;
  contango_yield_admin_changed_event_aggregate_fields?: Contango_Yield_Admin_Changed_Event_Aggregate_FieldsResolvers<ContextType>;
  contango_yield_admin_changed_event_avg_fields?: Contango_Yield_Admin_Changed_Event_Avg_FieldsResolvers<ContextType>;
  contango_yield_admin_changed_event_max_fields?: Contango_Yield_Admin_Changed_Event_Max_FieldsResolvers<ContextType>;
  contango_yield_admin_changed_event_min_fields?: Contango_Yield_Admin_Changed_Event_Min_FieldsResolvers<ContextType>;
  contango_yield_admin_changed_event_stddev_fields?: Contango_Yield_Admin_Changed_Event_Stddev_FieldsResolvers<ContextType>;
  contango_yield_admin_changed_event_stddev_pop_fields?: Contango_Yield_Admin_Changed_Event_Stddev_Pop_FieldsResolvers<ContextType>;
  contango_yield_admin_changed_event_stddev_samp_fields?: Contango_Yield_Admin_Changed_Event_Stddev_Samp_FieldsResolvers<ContextType>;
  contango_yield_admin_changed_event_sum_fields?: Contango_Yield_Admin_Changed_Event_Sum_FieldsResolvers<ContextType>;
  contango_yield_admin_changed_event_var_pop_fields?: Contango_Yield_Admin_Changed_Event_Var_Pop_FieldsResolvers<ContextType>;
  contango_yield_admin_changed_event_var_samp_fields?: Contango_Yield_Admin_Changed_Event_Var_Samp_FieldsResolvers<ContextType>;
  contango_yield_admin_changed_event_variance_fields?: Contango_Yield_Admin_Changed_Event_Variance_FieldsResolvers<ContextType>;
  contango_yield_beacon_upgraded_event?: Contango_Yield_Beacon_Upgraded_EventResolvers<ContextType>;
  contango_yield_beacon_upgraded_event_aggregate?: Contango_Yield_Beacon_Upgraded_Event_AggregateResolvers<ContextType>;
  contango_yield_beacon_upgraded_event_aggregate_fields?: Contango_Yield_Beacon_Upgraded_Event_Aggregate_FieldsResolvers<ContextType>;
  contango_yield_beacon_upgraded_event_avg_fields?: Contango_Yield_Beacon_Upgraded_Event_Avg_FieldsResolvers<ContextType>;
  contango_yield_beacon_upgraded_event_max_fields?: Contango_Yield_Beacon_Upgraded_Event_Max_FieldsResolvers<ContextType>;
  contango_yield_beacon_upgraded_event_min_fields?: Contango_Yield_Beacon_Upgraded_Event_Min_FieldsResolvers<ContextType>;
  contango_yield_beacon_upgraded_event_stddev_fields?: Contango_Yield_Beacon_Upgraded_Event_Stddev_FieldsResolvers<ContextType>;
  contango_yield_beacon_upgraded_event_stddev_pop_fields?: Contango_Yield_Beacon_Upgraded_Event_Stddev_Pop_FieldsResolvers<ContextType>;
  contango_yield_beacon_upgraded_event_stddev_samp_fields?: Contango_Yield_Beacon_Upgraded_Event_Stddev_Samp_FieldsResolvers<ContextType>;
  contango_yield_beacon_upgraded_event_sum_fields?: Contango_Yield_Beacon_Upgraded_Event_Sum_FieldsResolvers<ContextType>;
  contango_yield_beacon_upgraded_event_var_pop_fields?: Contango_Yield_Beacon_Upgraded_Event_Var_Pop_FieldsResolvers<ContextType>;
  contango_yield_beacon_upgraded_event_var_samp_fields?: Contango_Yield_Beacon_Upgraded_Event_Var_Samp_FieldsResolvers<ContextType>;
  contango_yield_beacon_upgraded_event_variance_fields?: Contango_Yield_Beacon_Upgraded_Event_Variance_FieldsResolvers<ContextType>;
  contango_yield_upgraded_event?: Contango_Yield_Upgraded_EventResolvers<ContextType>;
  contango_yield_upgraded_event_aggregate?: Contango_Yield_Upgraded_Event_AggregateResolvers<ContextType>;
  contango_yield_upgraded_event_aggregate_fields?: Contango_Yield_Upgraded_Event_Aggregate_FieldsResolvers<ContextType>;
  contango_yield_upgraded_event_avg_fields?: Contango_Yield_Upgraded_Event_Avg_FieldsResolvers<ContextType>;
  contango_yield_upgraded_event_max_fields?: Contango_Yield_Upgraded_Event_Max_FieldsResolvers<ContextType>;
  contango_yield_upgraded_event_min_fields?: Contango_Yield_Upgraded_Event_Min_FieldsResolvers<ContextType>;
  contango_yield_upgraded_event_stddev_fields?: Contango_Yield_Upgraded_Event_Stddev_FieldsResolvers<ContextType>;
  contango_yield_upgraded_event_stddev_pop_fields?: Contango_Yield_Upgraded_Event_Stddev_Pop_FieldsResolvers<ContextType>;
  contango_yield_upgraded_event_stddev_samp_fields?: Contango_Yield_Upgraded_Event_Stddev_Samp_FieldsResolvers<ContextType>;
  contango_yield_upgraded_event_sum_fields?: Contango_Yield_Upgraded_Event_Sum_FieldsResolvers<ContextType>;
  contango_yield_upgraded_event_var_pop_fields?: Contango_Yield_Upgraded_Event_Var_Pop_FieldsResolvers<ContextType>;
  contango_yield_upgraded_event_var_samp_fields?: Contango_Yield_Upgraded_Event_Var_Samp_FieldsResolvers<ContextType>;
  contango_yield_upgraded_event_variance_fields?: Contango_Yield_Upgraded_Event_Variance_FieldsResolvers<ContextType>;
  jsonb?: GraphQLScalarType;
  contract_traded_event?: Contract_Traded_EventResolvers<ContextType>;
  contract_traded_event_aggregate?: Contract_Traded_Event_AggregateResolvers<ContextType>;
  contract_traded_event_aggregate_fields?: Contract_Traded_Event_Aggregate_FieldsResolvers<ContextType>;
  contract_traded_event_avg_fields?: Contract_Traded_Event_Avg_FieldsResolvers<ContextType>;
  contract_traded_event_max_fields?: Contract_Traded_Event_Max_FieldsResolvers<ContextType>;
  contract_traded_event_min_fields?: Contract_Traded_Event_Min_FieldsResolvers<ContextType>;
  contract_traded_event_stddev_fields?: Contract_Traded_Event_Stddev_FieldsResolvers<ContextType>;
  contract_traded_event_stddev_pop_fields?: Contract_Traded_Event_Stddev_Pop_FieldsResolvers<ContextType>;
  contract_traded_event_stddev_samp_fields?: Contract_Traded_Event_Stddev_Samp_FieldsResolvers<ContextType>;
  contract_traded_event_sum_fields?: Contract_Traded_Event_Sum_FieldsResolvers<ContextType>;
  contract_traded_event_var_pop_fields?: Contract_Traded_Event_Var_Pop_FieldsResolvers<ContextType>;
  contract_traded_event_var_samp_fields?: Contract_Traded_Event_Var_Samp_FieldsResolvers<ContextType>;
  contract_traded_event_variance_fields?: Contract_Traded_Event_Variance_FieldsResolvers<ContextType>;
  initialized_event?: Initialized_EventResolvers<ContextType>;
  initialized_event_aggregate?: Initialized_Event_AggregateResolvers<ContextType>;
  initialized_event_aggregate_fields?: Initialized_Event_Aggregate_FieldsResolvers<ContextType>;
  initialized_event_avg_fields?: Initialized_Event_Avg_FieldsResolvers<ContextType>;
  initialized_event_max_fields?: Initialized_Event_Max_FieldsResolvers<ContextType>;
  initialized_event_min_fields?: Initialized_Event_Min_FieldsResolvers<ContextType>;
  initialized_event_stddev_fields?: Initialized_Event_Stddev_FieldsResolvers<ContextType>;
  initialized_event_stddev_pop_fields?: Initialized_Event_Stddev_Pop_FieldsResolvers<ContextType>;
  initialized_event_stddev_samp_fields?: Initialized_Event_Stddev_Samp_FieldsResolvers<ContextType>;
  initialized_event_sum_fields?: Initialized_Event_Sum_FieldsResolvers<ContextType>;
  initialized_event_var_pop_fields?: Initialized_Event_Var_Pop_FieldsResolvers<ContextType>;
  initialized_event_var_samp_fields?: Initialized_Event_Var_Samp_FieldsResolvers<ContextType>;
  initialized_event_variance_fields?: Initialized_Event_Variance_FieldsResolvers<ContextType>;
  paused_event?: Paused_EventResolvers<ContextType>;
  paused_event_aggregate?: Paused_Event_AggregateResolvers<ContextType>;
  paused_event_aggregate_fields?: Paused_Event_Aggregate_FieldsResolvers<ContextType>;
  paused_event_avg_fields?: Paused_Event_Avg_FieldsResolvers<ContextType>;
  paused_event_max_fields?: Paused_Event_Max_FieldsResolvers<ContextType>;
  paused_event_min_fields?: Paused_Event_Min_FieldsResolvers<ContextType>;
  paused_event_stddev_fields?: Paused_Event_Stddev_FieldsResolvers<ContextType>;
  paused_event_stddev_pop_fields?: Paused_Event_Stddev_Pop_FieldsResolvers<ContextType>;
  paused_event_stddev_samp_fields?: Paused_Event_Stddev_Samp_FieldsResolvers<ContextType>;
  paused_event_sum_fields?: Paused_Event_Sum_FieldsResolvers<ContextType>;
  paused_event_var_pop_fields?: Paused_Event_Var_Pop_FieldsResolvers<ContextType>;
  paused_event_var_samp_fields?: Paused_Event_Var_Samp_FieldsResolvers<ContextType>;
  paused_event_variance_fields?: Paused_Event_Variance_FieldsResolvers<ContextType>;
  position_closed_event?: Position_Closed_EventResolvers<ContextType>;
  position_closed_event_aggregate?: Position_Closed_Event_AggregateResolvers<ContextType>;
  position_closed_event_aggregate_fields?: Position_Closed_Event_Aggregate_FieldsResolvers<ContextType>;
  position_closed_event_avg_fields?: Position_Closed_Event_Avg_FieldsResolvers<ContextType>;
  position_closed_event_max_fields?: Position_Closed_Event_Max_FieldsResolvers<ContextType>;
  position_closed_event_min_fields?: Position_Closed_Event_Min_FieldsResolvers<ContextType>;
  position_closed_event_stddev_fields?: Position_Closed_Event_Stddev_FieldsResolvers<ContextType>;
  position_closed_event_stddev_pop_fields?: Position_Closed_Event_Stddev_Pop_FieldsResolvers<ContextType>;
  position_closed_event_stddev_samp_fields?: Position_Closed_Event_Stddev_Samp_FieldsResolvers<ContextType>;
  position_closed_event_sum_fields?: Position_Closed_Event_Sum_FieldsResolvers<ContextType>;
  position_closed_event_var_pop_fields?: Position_Closed_Event_Var_Pop_FieldsResolvers<ContextType>;
  position_closed_event_var_samp_fields?: Position_Closed_Event_Var_Samp_FieldsResolvers<ContextType>;
  position_closed_event_variance_fields?: Position_Closed_Event_Variance_FieldsResolvers<ContextType>;
  position_delivered_event?: Position_Delivered_EventResolvers<ContextType>;
  position_delivered_event_aggregate?: Position_Delivered_Event_AggregateResolvers<ContextType>;
  position_delivered_event_aggregate_fields?: Position_Delivered_Event_Aggregate_FieldsResolvers<ContextType>;
  position_delivered_event_avg_fields?: Position_Delivered_Event_Avg_FieldsResolvers<ContextType>;
  position_delivered_event_max_fields?: Position_Delivered_Event_Max_FieldsResolvers<ContextType>;
  position_delivered_event_min_fields?: Position_Delivered_Event_Min_FieldsResolvers<ContextType>;
  position_delivered_event_stddev_fields?: Position_Delivered_Event_Stddev_FieldsResolvers<ContextType>;
  position_delivered_event_stddev_pop_fields?: Position_Delivered_Event_Stddev_Pop_FieldsResolvers<ContextType>;
  position_delivered_event_stddev_samp_fields?: Position_Delivered_Event_Stddev_Samp_FieldsResolvers<ContextType>;
  position_delivered_event_sum_fields?: Position_Delivered_Event_Sum_FieldsResolvers<ContextType>;
  position_delivered_event_var_pop_fields?: Position_Delivered_Event_Var_Pop_FieldsResolvers<ContextType>;
  position_delivered_event_var_samp_fields?: Position_Delivered_Event_Var_Samp_FieldsResolvers<ContextType>;
  position_delivered_event_variance_fields?: Position_Delivered_Event_Variance_FieldsResolvers<ContextType>;
  position_liquidated_event?: Position_Liquidated_EventResolvers<ContextType>;
  position_liquidated_event_aggregate?: Position_Liquidated_Event_AggregateResolvers<ContextType>;
  position_liquidated_event_aggregate_fields?: Position_Liquidated_Event_Aggregate_FieldsResolvers<ContextType>;
  position_liquidated_event_avg_fields?: Position_Liquidated_Event_Avg_FieldsResolvers<ContextType>;
  position_liquidated_event_max_fields?: Position_Liquidated_Event_Max_FieldsResolvers<ContextType>;
  position_liquidated_event_min_fields?: Position_Liquidated_Event_Min_FieldsResolvers<ContextType>;
  position_liquidated_event_stddev_fields?: Position_Liquidated_Event_Stddev_FieldsResolvers<ContextType>;
  position_liquidated_event_stddev_pop_fields?: Position_Liquidated_Event_Stddev_Pop_FieldsResolvers<ContextType>;
  position_liquidated_event_stddev_samp_fields?: Position_Liquidated_Event_Stddev_Samp_FieldsResolvers<ContextType>;
  position_liquidated_event_sum_fields?: Position_Liquidated_Event_Sum_FieldsResolvers<ContextType>;
  position_liquidated_event_var_pop_fields?: Position_Liquidated_Event_Var_Pop_FieldsResolvers<ContextType>;
  position_liquidated_event_var_samp_fields?: Position_Liquidated_Event_Var_Samp_FieldsResolvers<ContextType>;
  position_liquidated_event_variance_fields?: Position_Liquidated_Event_Variance_FieldsResolvers<ContextType>;
  position_upserted_event?: Position_Upserted_EventResolvers<ContextType>;
  position_upserted_event_aggregate?: Position_Upserted_Event_AggregateResolvers<ContextType>;
  position_upserted_event_aggregate_fields?: Position_Upserted_Event_Aggregate_FieldsResolvers<ContextType>;
  position_upserted_event_avg_fields?: Position_Upserted_Event_Avg_FieldsResolvers<ContextType>;
  position_upserted_event_max_fields?: Position_Upserted_Event_Max_FieldsResolvers<ContextType>;
  position_upserted_event_min_fields?: Position_Upserted_Event_Min_FieldsResolvers<ContextType>;
  position_upserted_event_stddev_fields?: Position_Upserted_Event_Stddev_FieldsResolvers<ContextType>;
  position_upserted_event_stddev_pop_fields?: Position_Upserted_Event_Stddev_Pop_FieldsResolvers<ContextType>;
  position_upserted_event_stddev_samp_fields?: Position_Upserted_Event_Stddev_Samp_FieldsResolvers<ContextType>;
  position_upserted_event_sum_fields?: Position_Upserted_Event_Sum_FieldsResolvers<ContextType>;
  position_upserted_event_var_pop_fields?: Position_Upserted_Event_Var_Pop_FieldsResolvers<ContextType>;
  position_upserted_event_var_samp_fields?: Position_Upserted_Event_Var_Samp_FieldsResolvers<ContextType>;
  position_upserted_event_variance_fields?: Position_Upserted_Event_Variance_FieldsResolvers<ContextType>;
  role_admin_changed_event?: Role_Admin_Changed_EventResolvers<ContextType>;
  role_admin_changed_event_aggregate?: Role_Admin_Changed_Event_AggregateResolvers<ContextType>;
  role_admin_changed_event_aggregate_fields?: Role_Admin_Changed_Event_Aggregate_FieldsResolvers<ContextType>;
  role_admin_changed_event_avg_fields?: Role_Admin_Changed_Event_Avg_FieldsResolvers<ContextType>;
  role_admin_changed_event_max_fields?: Role_Admin_Changed_Event_Max_FieldsResolvers<ContextType>;
  role_admin_changed_event_min_fields?: Role_Admin_Changed_Event_Min_FieldsResolvers<ContextType>;
  role_admin_changed_event_stddev_fields?: Role_Admin_Changed_Event_Stddev_FieldsResolvers<ContextType>;
  role_admin_changed_event_stddev_pop_fields?: Role_Admin_Changed_Event_Stddev_Pop_FieldsResolvers<ContextType>;
  role_admin_changed_event_stddev_samp_fields?: Role_Admin_Changed_Event_Stddev_Samp_FieldsResolvers<ContextType>;
  role_admin_changed_event_sum_fields?: Role_Admin_Changed_Event_Sum_FieldsResolvers<ContextType>;
  role_admin_changed_event_var_pop_fields?: Role_Admin_Changed_Event_Var_Pop_FieldsResolvers<ContextType>;
  role_admin_changed_event_var_samp_fields?: Role_Admin_Changed_Event_Var_Samp_FieldsResolvers<ContextType>;
  role_admin_changed_event_variance_fields?: Role_Admin_Changed_Event_Variance_FieldsResolvers<ContextType>;
  role_granted_event?: Role_Granted_EventResolvers<ContextType>;
  role_granted_event_aggregate?: Role_Granted_Event_AggregateResolvers<ContextType>;
  role_granted_event_aggregate_fields?: Role_Granted_Event_Aggregate_FieldsResolvers<ContextType>;
  role_granted_event_avg_fields?: Role_Granted_Event_Avg_FieldsResolvers<ContextType>;
  role_granted_event_max_fields?: Role_Granted_Event_Max_FieldsResolvers<ContextType>;
  role_granted_event_min_fields?: Role_Granted_Event_Min_FieldsResolvers<ContextType>;
  role_granted_event_stddev_fields?: Role_Granted_Event_Stddev_FieldsResolvers<ContextType>;
  role_granted_event_stddev_pop_fields?: Role_Granted_Event_Stddev_Pop_FieldsResolvers<ContextType>;
  role_granted_event_stddev_samp_fields?: Role_Granted_Event_Stddev_Samp_FieldsResolvers<ContextType>;
  role_granted_event_sum_fields?: Role_Granted_Event_Sum_FieldsResolvers<ContextType>;
  role_granted_event_var_pop_fields?: Role_Granted_Event_Var_Pop_FieldsResolvers<ContextType>;
  role_granted_event_var_samp_fields?: Role_Granted_Event_Var_Samp_FieldsResolvers<ContextType>;
  role_granted_event_variance_fields?: Role_Granted_Event_Variance_FieldsResolvers<ContextType>;
  role_revoked_event?: Role_Revoked_EventResolvers<ContextType>;
  role_revoked_event_aggregate?: Role_Revoked_Event_AggregateResolvers<ContextType>;
  role_revoked_event_aggregate_fields?: Role_Revoked_Event_Aggregate_FieldsResolvers<ContextType>;
  role_revoked_event_avg_fields?: Role_Revoked_Event_Avg_FieldsResolvers<ContextType>;
  role_revoked_event_max_fields?: Role_Revoked_Event_Max_FieldsResolvers<ContextType>;
  role_revoked_event_min_fields?: Role_Revoked_Event_Min_FieldsResolvers<ContextType>;
  role_revoked_event_stddev_fields?: Role_Revoked_Event_Stddev_FieldsResolvers<ContextType>;
  role_revoked_event_stddev_pop_fields?: Role_Revoked_Event_Stddev_Pop_FieldsResolvers<ContextType>;
  role_revoked_event_stddev_samp_fields?: Role_Revoked_Event_Stddev_Samp_FieldsResolvers<ContextType>;
  role_revoked_event_sum_fields?: Role_Revoked_Event_Sum_FieldsResolvers<ContextType>;
  role_revoked_event_var_pop_fields?: Role_Revoked_Event_Var_Pop_FieldsResolvers<ContextType>;
  role_revoked_event_var_samp_fields?: Role_Revoked_Event_Var_Samp_FieldsResolvers<ContextType>;
  role_revoked_event_variance_fields?: Role_Revoked_Event_Variance_FieldsResolvers<ContextType>;
  unpaused_event?: Unpaused_EventResolvers<ContextType>;
  unpaused_event_aggregate?: Unpaused_Event_AggregateResolvers<ContextType>;
  unpaused_event_aggregate_fields?: Unpaused_Event_Aggregate_FieldsResolvers<ContextType>;
  unpaused_event_avg_fields?: Unpaused_Event_Avg_FieldsResolvers<ContextType>;
  unpaused_event_max_fields?: Unpaused_Event_Max_FieldsResolvers<ContextType>;
  unpaused_event_min_fields?: Unpaused_Event_Min_FieldsResolvers<ContextType>;
  unpaused_event_stddev_fields?: Unpaused_Event_Stddev_FieldsResolvers<ContextType>;
  unpaused_event_stddev_pop_fields?: Unpaused_Event_Stddev_Pop_FieldsResolvers<ContextType>;
  unpaused_event_stddev_samp_fields?: Unpaused_Event_Stddev_Samp_FieldsResolvers<ContextType>;
  unpaused_event_sum_fields?: Unpaused_Event_Sum_FieldsResolvers<ContextType>;
  unpaused_event_var_pop_fields?: Unpaused_Event_Var_Pop_FieldsResolvers<ContextType>;
  unpaused_event_var_samp_fields?: Unpaused_Event_Var_Samp_FieldsResolvers<ContextType>;
  unpaused_event_variance_fields?: Unpaused_Event_Variance_FieldsResolvers<ContextType>;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  balance_collected_event_mutation_response?: Balance_Collected_Event_Mutation_ResponseResolvers<ContextType>;
  collateral_added_event_mutation_response?: Collateral_Added_Event_Mutation_ResponseResolvers<ContextType>;
  collateral_removed_event_mutation_response?: Collateral_Removed_Event_Mutation_ResponseResolvers<ContextType>;
  contango_yield_admin_changed_event_mutation_response?: Contango_Yield_Admin_Changed_Event_Mutation_ResponseResolvers<ContextType>;
  contango_yield_beacon_upgraded_event_mutation_response?: Contango_Yield_Beacon_Upgraded_Event_Mutation_ResponseResolvers<ContextType>;
  contango_yield_upgraded_event_mutation_response?: Contango_Yield_Upgraded_Event_Mutation_ResponseResolvers<ContextType>;
  contract_traded_event_mutation_response?: Contract_Traded_Event_Mutation_ResponseResolvers<ContextType>;
  initialized_event_mutation_response?: Initialized_Event_Mutation_ResponseResolvers<ContextType>;
  paused_event_mutation_response?: Paused_Event_Mutation_ResponseResolvers<ContextType>;
  position_closed_event_mutation_response?: Position_Closed_Event_Mutation_ResponseResolvers<ContextType>;
  position_delivered_event_mutation_response?: Position_Delivered_Event_Mutation_ResponseResolvers<ContextType>;
  position_liquidated_event_mutation_response?: Position_Liquidated_Event_Mutation_ResponseResolvers<ContextType>;
  position_upserted_event_mutation_response?: Position_Upserted_Event_Mutation_ResponseResolvers<ContextType>;
  role_admin_changed_event_mutation_response?: Role_Admin_Changed_Event_Mutation_ResponseResolvers<ContextType>;
  role_granted_event_mutation_response?: Role_Granted_Event_Mutation_ResponseResolvers<ContextType>;
  role_revoked_event_mutation_response?: Role_Revoked_Event_Mutation_ResponseResolvers<ContextType>;
  unpaused_event_mutation_response?: Unpaused_Event_Mutation_ResponseResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  cached?: CachedDirectiveResolver<any, any, ContextType>;
};
