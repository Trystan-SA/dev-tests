run: 
	docker compose -f docker-compose.dev.yml build
	docker compose -f docker-compose.dev.yml up


# Use mikro-orm to generate entities from database Schema
generate-entities-from-db:
	cd NestJS && npx mikro-orm generate-entities --save --path=./src/entities/



# Deprecated typeorm migration generator
typeorm-generate-migration:
	cd NestJS && npm run build && typeorm migration:generate -d ormconfig.js src/migrations/


# Deprecated typeorm migration apply
typeorm-apply-migration:
	cd NestJS && npm run build && typeorm migration:run -d ormconfig.js