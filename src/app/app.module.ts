import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DxHttpModule } from 'devextreme-angular/http';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { DxButtonModule, DxDataGridModule, DxDropDownButtonModule, DxFormModule, DxLoadIndicatorModule, DxPopupModule, DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { LayoutsModule } from './layouts/layouts.module';
import { AuthLayoutComponent } from './authLayout/authLayout.component';
import { ProvincesComponent } from './pages/provinces/provinces.component';
import { MunicipalitiesComponent } from './pages/municipalities/municipalities.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    ProvincesComponent,
    MunicipalitiesComponent
  ],
  imports: [
    BrowserModule,
    DxHttpModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    LayoutsModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    DxFormModule,
    DxLoadIndicatorModule,
    DxButtonModule,
    DxDataGridModule,
    DxDropDownButtonModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxPopupModule,
    UnauthenticatedContentModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
