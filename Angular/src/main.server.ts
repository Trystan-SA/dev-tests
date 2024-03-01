import { bootstrapApplication } from '@angular/platform-browser';
import { MainComponent } from './main.component';
import {config} from './main.server.config'

const bootstrap = () => bootstrapApplication(MainComponent, config);

export default bootstrap;
