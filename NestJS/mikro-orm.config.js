const {defineConfig} = require('@mikro-orm/postgresql');
const {EntityGenerator} = require('@mikro-orm/entity-generator');
const {Migrator} = require('@mikro-orm/migrations')

module.exports = defineConfig({
    dbName: 'devtest',
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'pass',
    extensions: [EntityGenerator, Migrator],
    entities: ['./dist/entities/**/*.js'],
});