export default {
  // graphql endpoint
  endpoint: "http://localhost:8080",
  rpcs: {
    arbitrum: "ws://192.168.0.124:8547",
  },
  abis: "./abis",
  addresses: {
    //schema
    contango: {
      //contract
      ContangoYield: {
        //network
        arbitrum: "0x30E7348163016B3b6E1621A3Cb40e8CF33CE97db",
        // mainnet: "0x30E7348163016B3b6E1621A3Cb40e8CF33CE97db",
      },
      YieldCauldron: {
        arbitrum: "0x44386ddB4C44E7CB8981f97AF89E928Ddd4258DD",
        // mainnet: "0x44386ddB4C44E7CB8981f97AF89E928Ddd4258DD",
      },
    },
    yield: {
      YieldCauldron: {
        arbitrum: "0x23cc87FBEBDD67ccE167Fa9Ec6Ad3b7fE3892E30",
        // mainnet: "0x44386ddB4C44E7CB8981f97AF89E928Ddd4258DD",
      },
      YieldWitch: {
        arbitrum: "0x23cc87FBEBDD67ccE167Fa9Ec6Ad3b7fE3892E30",
        // mainnet: "0x44386ddB4C44E7CB8981f97AF89E928Ddd4258DD",
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
        customHandlers: [],
      },
    },
    yield: {
      YieldCauldron: {
        abis: ["YieldCauldron"],
        excludeEvents: [],
      },
    },
  },
  customHandlers: [
    {
      triggers: [
        "ContangoYield:PositionUpserted",
        "ContangoYield:PositionLiquidated",
        "ContangoYield:PositionClosed",
      ],
      // This should take the event and return the data to be upserted
      // undefined fields will be ignored
      handler: "./src/custom/handlers/position.ts",
      entity: `Position(
        positionId indexed uint256,
        trader indexed address,
        symbol bytes32,
        openQuantity uint256,
        openCost uint256,
        collateral int256,
        protocolFees uint256,
        maturity uint32,
        feeModel address
      )`,
      immutable: false,

      //will only run on a network if all the sources available for that network

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
