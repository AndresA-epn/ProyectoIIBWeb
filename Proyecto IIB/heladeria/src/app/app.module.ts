import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeladosComponent } from './components/helados/helados.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CreateheladoComponent } from './components/createhelado/createhelado.component';
import { DetalleheladoComponent } from './components/detallehelado/detallehelado.component';
import { EditarheladoComponent } from './components/editarhelado/editarhelado.component';
import { PieComponent } from './components/pie/pie.component';
import { HomeComponent } from './components/home/home.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeladosComponent,
    ContactoComponent,
    CreateheladoComponent,
    DetalleheladoComponent,
    EditarheladoComponent,
    PieComponent,
    HomeComponent,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
