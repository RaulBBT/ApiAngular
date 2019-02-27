import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CuerpoComponent} from './cuerpo/cuerpo.component';
import {StarwarsComponent} from './starwars/starwars.component';
import {BatmanComponent} from './batman/batman.component';
import {SupermanComponent} from './superman/superman.component';
import {ParametroComponent} from './parametro/parametro.component';

const routes: Routes = [ {path: 'cuerpo', component: CuerpoComponent}, {path: 'starwars', component: StarwarsComponent}, {path: 'batman', component: BatmanComponent},
 {path: 'superman', component: SupermanComponent}, { path: 'cuerpo/:parametro', component: ParametroComponent }, { path: 'cuerpo/ ', redirectTo: '/cuerpo', pathMatch: 'full' } , { path: '', redirectTo: '/cuerpo', pathMatch: 'full' },
 { path: '**', redirectTo: '/cuerpo', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
