import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DxHttpModule } from 'devextreme-angular/http';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { DxButtonModule, DxCheckBoxModule, DxDataGridModule, DxDropDownButtonModule, DxFormModule, DxLoadIndicatorModule, DxPopupModule, DxSelectBoxModule, DxTabsModule, DxTextBoxModule, DxValidationSummaryModule, DxValidatorModule } from 'devextreme-angular';
import { LayoutsModule } from './layouts/layouts.module';
import { AuthLayoutComponent } from './authLayout/authLayout.component';
import { ProvincesComponent } from './pages/provinces/provinces.component';
import { MunicipalitiesComponent } from './pages/municipalities/municipalities.component';
import { FamiliesComponent } from './pages/families/families.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './guards/auth.guard';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { ProvinceService } from './services/province.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    ProvincesComponent,
    MunicipalitiesComponent,
    FamiliesComponent
  ],
  imports: [
    BrowserModule,
    DxHttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
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
    DxValidatorModule,
    DxValidationSummaryModule,
    DxPopupModule,
    DxCheckBoxModule,
    DxTabsModule,
    UnauthenticatedContentModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    AuthGuard,
    AuthService,
    ScreenService,
    AppInfoService,

    ProvinceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
