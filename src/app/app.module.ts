import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TercerCompComponent } from './tercer-comp/tercer-comp.component';
import { FooterComponent } from './footer/footer.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { StarwarsComponent } from './starwars/starwars.component';
import { BatmanComponent } from './batman/batman.component';
import { SupermanComponent } from './superman/superman.component';
import { ParametroComponent } from './parametro/parametro.component';

@NgModule({
  declarations: [
    AppComponent,
    TercerCompComponent,
    FooterComponent,
    CabeceraComponent,
    CuerpoComponent,
    StarwarsComponent,
    BatmanComponent,
    SupermanComponent,
    ParametroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
