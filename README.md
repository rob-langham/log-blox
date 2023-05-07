# Log Blox

An ethereum event indexer that manages a postgres schema

# Dev startup

Startup the database:

```shell
$ docker-compose up
```

Note: This also starts up a hasura instance pointing to the database which can be used to create a crud interface with the indexer.

Start the indexer:

```shell
yarn
yarn dev
```

# Features 🚧

[x] Index all events in an abi
[x] Manage schema for abi
[x] Partition tabels by network
[x] Detect reorgs and delete all unconfirmed data
[x] Subscribe to contracts from events
[ ] Manually delete blocks for testing against a fork
[ ] Support events with multiple signatures
[ ] Background reindexing on abi or custom handler update
[ ] Hasura plugin to update metadata automatically
[ ] Lock down write access to the database
[ ] Dynamic block range queries (expand on success, constrict on failure)
[ ] Optionally store block timestamps when persisting blocks
[ ] Optionally store tx gas usage when persisting events
[ ] Simple Custom handlers
[ ] Persist raw logs for fast reindexing
[ ] Reset materialised views after a block is deleted
