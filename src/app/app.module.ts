import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './components/app.component';
import { CounterComponent } from './components/counter/counter.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { angular16EntityConfig } from './model/entity';
import { EntityStoreModule } from './model/entities-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, PostListComponent, CounterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 30 }),
    EntityDataModule.forRoot(angular16EntityConfig),
    EntityStoreModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
