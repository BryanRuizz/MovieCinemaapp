import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateTvShowComponent } from './features/update-tv-show/update-tv-show.component';
import { CreateTvShowComponent } from './features/create-tv-show/create-tv-show.component';


@NgModule({
  declarations: [
    AppComponent,
    UpdateTvShowComponent,
    CreateTvShowComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
