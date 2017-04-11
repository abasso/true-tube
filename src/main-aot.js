import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../src/aot/app/app.module.ngfactory';
console.log('Running AOT compiled');
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
//# sourceMappingURL=main.js.map