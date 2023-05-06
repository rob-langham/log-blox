export default {
  // graphql endpoint
  endpoint: "http://localhost:8080",
  rpcs: {
    arbitrum: "ws://192.168.0.124:8548",
    // mainnet: "ws://192.168.0.124:8546",
    // arbitrum: "https://arb1.arbitrum.io/rpc",
    // arbitrum: "wss://arb-mainnet.g.alchemy.com/v2/K1q6tDqmPOmJ350UevXDBlG2u7Xi7MSN",
    // mainnet: "https://endpoints.omniatech.io/v1/arbitrum/one/public",
  },
  abis: "./abis",
  addresses: {
    //todo move to contracts
    //schema
    contango: {
      //contract
      ContangoYield: {
        //network
        arbitrum: "0x30E7348163016B3b6E1621A3Cb40e8CF33CE97db",
        // mainnet: "0x6008DbC83cd0A752b44a7E1b1A1E8b7355a90e17",
      },
      YieldCauldron: {
        arbitrum: "0x44386ddB4C44E7CB8981f97AF89E928Ddd4258DD",
        // mainnet: "0xf2F7c33234160387e5Dc82B1412b522AB44876C7",
      },
    },
    yield: {
      YieldCauldron: {
        arbitrum: "0x23cc87FBEBDD67ccE167Fa9Ec6Ad3b7fE3892E30",
        // mainnet: "0xc88191F8cb8e6D4a668B047c1C8503432c3Ca867",
      },
      YieldWitch: {
        arbitrum: "0x07c2c74811cb14a5003c3ccff7ec436d504fffb6",
        // mainnet: "0x08d2F5c96bB1F6BE04B49bcD869d5Af01db4c400",
      },
    },
    aave: {
      AavePool: {
        arbitrum: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
      },
    },
  },
  contracts: {
    contango: {
      ContangoYield: {
        abis: ["ContangoYield", "YieldStorageLib"],
        excludeEvents: [],
      },
      YieldCauldron: {
        abis: ["YieldCauldron"],
        excludeEvents: [],
      },
      // YieldPools: {
      //   addressSource: {
      //     type: "event",
      //     contract: "YieldCauldron",
      //     signaute: "PoolAdded(address,address,uint256)",
      //     paramWithAddress: "1",
      //   },
      // },
    },
    yield: {
      YieldCauldron: {
        abis: ["YieldCauldron"],
        excludeEvents: [],
      },
    },
    // aave: {
    //   AavePool: {
    //     abis: ["AavePool"],
    //     excludeEvents: [],
    //   },
    // },
  },
  customHandlers: [
    {
      sources: [
        // A handler instance is created for each schema where the sources are available
        //  if the same contract names are available in multiple schemas
        //  the handler will be run for each schema
        ["ContangoYield", "PositionUpserted"],
        ["ContangoYield", "PositionLiquidated"],
        ["ContangoYield", "PositionClosed"],
      ],
      // This should take the event and return the data to be upserted
      // undefined fields will be ignored

      //create the file if it doesn't exist
      handler: "./src/custom/handlers/position.ts",
      entity: {
        name: "Position",
        columns: [
          ["positionId", "uint256", { indexed: true }],
          ["trader", "address", { indexed: true }],
          ["symbol", "bytes32"],
          ["openQuantity", "uint256"],
          ["openCost", "uint256"],
          ["collateral", "int256"],
          ["protocolFees", "uint256"],
          ["maturity", "uint32"],
          ["feeModel", "address"],
        ],
      },
      immutable: false,

      //will only run on a network if all the sources are available for that network

      //we need to validate that the event is valid for the abi

      //here we have defined an entity type, the source events for this entity and the handler function
      //the entity will be created/updated to match the given signature
      //an implicit id field and blockHash will be added to the entity using the trigger event

      //non immutable entities will also have an archive table with entries from unconfirmed blocks
      //when a reorg is detected, the archive table will be used to restore the entity to the state before the reorg

      //immutable entities will simply be removed if there is a reorg and will not be upserted
    },
  ],
};
