import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { AuthGuardService } from '../../services';
import { LoginFormComponent } from './login-form.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), DxDataGridModule, DxFormModule],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
