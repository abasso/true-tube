import { platformBrowser }    from '@angular/platform-browser'
import { AppModuleNgFactory } from '../src/aot/app/app.module.ngfactory'
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
