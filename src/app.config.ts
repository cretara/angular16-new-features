import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from "@angular/router";
import {appRoutes} from "./app/app.routes";
import {provideHttpClient} from "@angular/common/http";
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {EntityStoreModule} from "./app/model/entities-store.module";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    provideStore(),
    provideEffects(),
    importProvidersFrom(EntityStoreModule)
  ]
};
