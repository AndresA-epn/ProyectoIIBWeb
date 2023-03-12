import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeladosComponent } from './components/helados/helados.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CreateheladoComponent } from './components/createhelado/createhelado.component';
import { DetalleheladoComponent } from './components/detallehelado/detallehelado.component';
import { EditarheladoComponent } from './components/editarhelado/editarhelado.component';

const routes: Routes = [
  {path:'inicio',component:HomeComponent},
  {path:'helados',component:HeladosComponent},
  {path:'guardar-helado',component:CreateheladoComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'helado/:id',component:DetalleheladoComponent},
  {path:'editar-helado/:id',component:EditarheladoComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
