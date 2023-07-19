import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { NewheroComponent } from './components/newhero/newhero.component';


import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';

const routes: Routes = [
{path: 'home', component: HomeComponent}, {path: 'about', component: AboutComponent}, {path: 'newhero', component: NewheroComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
{path: 'heroes', component: HeroesComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))}, { path: 'register', component: RegisterComponent },
{ path: 'login', component: LoginComponent }, {path: 'heroe/:id', component: HeroeComponent}, 
{path: '**', pathMatch:'full', redirectTo: 'home'},  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
