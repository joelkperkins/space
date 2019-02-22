import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// check if we are in production mode or not
if (environment.production) {
  enableProdMode();
}

// bootstrap starts our angular application
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
