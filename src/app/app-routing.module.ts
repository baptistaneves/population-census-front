import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { LayoutComponent } from './layouts/layout.component';
import { AuthLayoutComponent } from './authLayout/authLayout.component';
import { ProvincesComponent } from './pages/provinces/provinces.component';
import { MunicipalitiesComponent } from './pages/municipalities/municipalities.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent, canActivate: [ AuthGuardService ] },
      { path: 'provincias', component: ProvincesComponent, canActivate: [ AuthGuardService ] },
      { path: 'municipios', component: MunicipalitiesComponent, canActivate: [ AuthGuardService ] },
      { path: 'tasks', component: TasksComponent, canActivate: [ AuthGuardService ] },
      { path: 'profile', component: ProfileComponent, canActivate: [ AuthGuardService ] }
    ],
  },

  { path: 'autenticar', component: AuthLayoutComponent, loadChildren: () => import('./shared/components/login-form/login.module').then(m => m.LoginModule) },

  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent
  ]
})
export class AppRoutingModule { }
