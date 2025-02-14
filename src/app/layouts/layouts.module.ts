import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { DxFormModule, DxLoadIndicatorModule } from "devextreme-angular";
import { DxHttpModule } from "devextreme-angular/http";
import { UnauthenticatedContentModule } from "../unauthenticated-content";
import { SideNavInnerToolbarModule } from "./side-nav-inner-toolbar/side-nav-inner-toolbar.component";
import { SideNavOuterToolbarModule } from "./side-nav-outer-toolbar/side-nav-outer-toolbar.component";
import { SingleCardModule } from "./single-card/single-card.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FooterModule } from "../shared/components";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    DxHttpModule,
    SideNavOuterToolbarModule,
    FooterModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    DxFormModule,
    DxLoadIndicatorModule,
    UnauthenticatedContentModule,
  ],
  declarations: [
    LayoutComponent
  ]

})
export class LayoutsModule { }
