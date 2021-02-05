// Angular actually has support for running on multiple platforms.
// The browser is considered a platform.
// The server and web worker are examples of other platforms.
// Other third-party bootstraps could also be used to provide support on other platforms.
// Angular exports a function named platform browser dynamic that can be used for targeting the browser.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
