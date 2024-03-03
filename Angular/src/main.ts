import { bootstrapApplication } from '@angular/platform-browser';
import { MainComponent } from './main.component';
import { MainConfig } from './main.config';

bootstrapApplication(MainComponent, MainConfig)
  .catch((err) => console.error(err));
