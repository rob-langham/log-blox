node schema-generator.js >migrations/database/1677148388055_contango-yield/up.sql
hasura migrate apply --admin-secret myadminsecretkey --all-databases
