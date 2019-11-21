import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { IndexComponent } from './index/index.component';

import { StoreModule } from '@ngrx/store';

import { Reducer } from './store/index';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
    StoreModule.forRoot(Reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
