run: 
	docker compose -f docker-compose.dev.yml build
	docker compose -f docker-compose.dev.yml up


generate-migration:
	cd NestJS && npm run build && typeorm migration:generate -d ormconfig.js src/migrations/

apply-migration:
	cd NestJS && npm run build && typeorm migration:run -d ormconfig.js