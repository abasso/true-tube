import './polyfills.ts';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/';
// if (environment.production) {
enableProdMode();
//}
platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map