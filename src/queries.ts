import { GraphQLClient, gql } from "graphql-request";
type KeyOrNever<T, K> = K extends keyof T ? T[K] : never;

export class HasuraClient<RT> {
  private client: GraphQLClient;

  constructor(url: string) {
    this.client = new GraphQLClient(url);
    this.client.setHeader("x-hasura-admin-secret", "myadminsecretkey");
  }

  private insertBalanceCollectedEventQuery = gql`
    mutation insert_balance_collected_event($inputs: [balance_collected_event_insert_input!]!) {
      insert_balance_collected_event(objects: $inputs) {
        affected_rows
      }
    }
  `;

  private insertCollateralAddedEventQuery = gql`
    mutation insert_collateral_added_event($inputs: [collateral_added_event_insert_input!]!) {
      insert_collateral_added_event(objects: $inputs) {
        affected_rows
      }
    }
  `;

  private insertCollateralRemovedEventQuery = gql`
    mutation insert_collateral_removed_event($inputs: [collateral_removed_event_insert_input!]!) {
      insert_collateral_removed_event(objects: $inputs) {
        affected_rows
      }
    }
  `;

  private insertContangoYieldAdminChangedEventQuery = gql`
    mutation insert_contango_yield_admin_changed_event(
      $inputs: [contango_yield_admin_changed_event_insert_input!]!
    ) {
      insert_contango_yield_admin_changed_event(objects: $inputs) {
        affected_rows
      }
    }
  `;

  private insertContangoYieldBeaconUpgradedEventQuery = gql`
    mutation insert_contango_yield_beacon_upgraded_event(
      $inputs: [contango_yield_beacon_upgraded_event_insert_input!]!
    ) {
      insert_contango_yield_beacon_upgraded_event(objects: $inputs) {
        affected_rows
      }
    }
  `;

  private insertContangoYieldUpgradedEventQuery = gql`
    mutation insert_contango_yield_upgraded_event(
      $inputs: [contango_yield_upgraded_event_insert_input!]!
    ) {
      insert_contango_yield_upgraded_event(objects: $inputs) {
        affected_rows
      }
    }
  `;

  private insertContractTradedEventQuery = gql`
    mutation insert_contract_traded_event($inputs: [contract_traded_event_insert_input!]!) {
      insert_contract_traded_event(objects: $inputs) {
        affected_rows
      }
    }
  `;

  private insertInitializedEventQuery = gql`
    mutation insert_initialized_event($inputs: [initialized_event_insert_input!]!) {
      insert_initialized_event(objects: $inputs) {
        affected_rows
      }
    }
  `;

  private insertPausedEventQuery = gql`
    mutation insert_paused_event($inputs: [paused_event_insert_input!]!) {
      insert_paused_event(objects: $inputs) {
        affected_rows
      }
    }
  `;

  private insertPositionClosedEventQuery = gql`
    mutation insert_position_closed_event($inputs: [position_closed_event_insert_input!]!) {
      insert_position_closed_event(objects: $inputs) {
        affected_rows
      }
    }
  `;

  private insertPositionDeliveredEventQuery = gql`
    mutation insert_position_delivered_event($inputs: [position_delivered_event_insert_input!]!) {
      insert_position_delivered_event(objects: $inputs) {
        affected_rows
      }
    }
  `;

  private insertPositionLiquidatedEventQuery = gql`
    mutation insert_position_liquidated_event($inputs: [position_liquidated_event_insert_input!]!) {
      insert_position_liquidated_event(objects: $inputs) {
        affected_rows
      }
    }
  `;

  private insertPositionUpsertedEventQuery = gql`
    mutation insert_position_upserted_event($inputs: [position_upserted_event_insert_input!]!) {
      insert_position_upserted_event(objects: $inputs) {
        affected_rows
      }
    }
  `;

  private insertRoleAdminChangedEventQuery = gql`
    mutation insert_role_admin_changed_event($inputs: [role_admin_changed_event_insert_input!]!) {
      insert_role_admin_changed_event(objects: $inputs) {
        affected_rows
      }
    }
  `;

  private insertRoleGrantedEventQuery = gql`
    mutation insert_role_granted_event($inputs: [role_granted_event_insert_input!]!) {
      insert_role_granted_event(objects: $inputs) {
        affected_rows
      }
    }
  `;

  private insertRoleRevokedEventQuery = gql`
    mutation insert_role_revoked_event($inputs: [role_revoked_event_insert_input!]!) {
      insert_role_revoked_event(objects: $inputs) {
        affected_rows
      }
    }
  `;

  private insertUnpausedEventQuery = gql`
    mutation insert_unpaused_event($inputs: [unpaused_event_insert_input!]!) {
      insert_unpaused_event(objects: $inputs) {
        affected_rows
      }
    }
  `;

  insertBalanceCollectedEvent = (
    inputs: KeyOrNever<RT, "balance_collected_event_insert_input">[]
  ) => this.client.request(this.insertBalanceCollectedEventQuery, { inputs });
  insertCollateralAddedEvent = (inputs: KeyOrNever<RT, "collateral_added_event_insert_input">[]) =>
    this.client.request(this.insertCollateralAddedEventQuery, { inputs });
  insertCollateralRemovedEvent = (
    inputs: KeyOrNever<RT, "collateral_removed_event_insert_input">[]
  ) => this.client.request(this.insertCollateralRemovedEventQuery, { inputs });
  insertContangoYieldAdminChangedEvent = (
    inputs: KeyOrNever<RT, "contango_yield_admin_changed_event_insert_input">[]
  ) => this.client.request(this.insertContangoYieldAdminChangedEventQuery, { inputs });
  insertContangoYieldBeaconUpgradedEvent = (
    inputs: KeyOrNever<RT, "contango_yield_beacon_upgraded_event_insert_input">[]
  ) => this.client.request(this.insertContangoYieldBeaconUpgradedEventQuery, { inputs });
  insertContangoYieldUpgradedEvent = (
    inputs: KeyOrNever<RT, "contango_yield_upgraded_event_insert_input">[]
  ) => this.client.request(this.insertContangoYieldUpgradedEventQuery, { inputs });
  insertContractTradedEvent = (inputs: KeyOrNever<RT, "contract_traded_event_insert_input">[]) =>
    this.client.request(this.insertContractTradedEventQuery, { inputs });
  insertInitializedEvent = (inputs: KeyOrNever<RT, "initialized_event_insert_input">[]) =>
    this.client.request(this.insertInitializedEventQuery, { inputs });
  insertPausedEvent = (inputs: KeyOrNever<RT, "paused_event_insert_input">[]) =>
    this.client.request(this.insertPausedEventQuery, { inputs });
  insertPositionClosedEvent = (inputs: KeyOrNever<RT, "position_closed_event_insert_input">[]) =>
    this.client.request(this.insertPositionClosedEventQuery, { inputs });
  insertPositionDeliveredEvent = (
    inputs: KeyOrNever<RT, "position_delivered_event_insert_input">[]
  ) => this.client.request(this.insertPositionDeliveredEventQuery, { inputs });
  insertPositionLiquidatedEvent = (
    inputs: KeyOrNever<RT, "position_liquidated_event_insert_input">[]
  ) => this.client.request(this.insertPositionLiquidatedEventQuery, { inputs });
  insertPositionUpsertedEvent = (
    inputs: KeyOrNever<RT, "position_upserted_event_insert_input">[]
  ) => this.client.request(this.insertPositionUpsertedEventQuery, { inputs });
  insertRoleAdminChangedEvent = (
    inputs: KeyOrNever<RT, "role_admin_changed_event_insert_input">[]
  ) => this.client.request(this.insertRoleAdminChangedEventQuery, { inputs });
  insertRoleGrantedEvent = (inputs: KeyOrNever<RT, "role_granted_event_insert_input">[]) =>
    this.client.request(this.insertRoleGrantedEventQuery, { inputs });
  insertRoleRevokedEvent = (inputs: KeyOrNever<RT, "role_revoked_event_insert_input">[]) =>
    this.client.request(this.insertRoleRevokedEventQuery, { inputs });
  insertUnpausedEvent = (inputs: KeyOrNever<RT, "unpaused_event_insert_input">[]) =>
    this.client.request(this.insertUnpausedEventQuery, { inputs });
}
