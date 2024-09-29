import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { routes } from './router';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/store.module';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { externalModules } from './build-specific';
import { declarations } from './core';

@NgModule({ declarations: [AppComponent, AboutComponent, declarations],
    bootstrap: [AppComponent], imports: [BrowserModule,
        RouterModule.forRoot(routes, {}),
        AppStoreModule,
        externalModules], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
