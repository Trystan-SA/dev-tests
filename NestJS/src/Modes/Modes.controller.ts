import { Controller, Get } from "@nestjs/common";
import { ModesService } from "./Modes.service";

@Controller('modes')
export class ModesController {
    constructor( 
        private readonly modesService: ModesService 
    ){}

    // api/modes/stats
    @Get('stats')
    async ModesStats(): Promise<any> {
        return await this.modesService.ModesStats();
    }
}