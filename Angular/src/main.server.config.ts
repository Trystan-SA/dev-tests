import { provideServerRendering } from '@angular/platform-server';
import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { MainConfig } from './main.config';

const serverConfig: ApplicationConfig = {
    providers: [
        provideServerRendering()
    ]
};

export const config = mergeApplicationConfig(MainConfig, serverConfig);

