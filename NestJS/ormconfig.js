const { DataSource } = require("typeorm");

module.exports = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "pass",
    database: "devtest",
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: false,
    migrations: ["dist/migrations/*.js"],
    cli: {
        "migrationsDir": "src/migrations/"
    }
})