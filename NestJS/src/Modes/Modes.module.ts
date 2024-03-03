import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { Modes } from "src/entities/Modes";
import { ModesService } from "./Modes.service";
import { ModesController } from "./Modes.controller";

@Module({
    imports: [MikroOrmModule.forFeature([Modes])],
    providers: [ModesService],
    controllers: [ModesController]
})
export class ModesModule {}