import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DxFormModule, DxLoadIndicatorModule } from "devextreme-angular";
import { LoginFormComponent } from "./login-form.component";
import { LoginRoutingModule } from "./login.routing.module";
import { AuthGuardService } from "../../services/auth.service";

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    DxFormModule,
    DxLoadIndicatorModule
  ],
  declarations: [ LoginFormComponent ],
  exports: [ LoginFormComponent ],
  providers: [],

})
export class LoginModule { }
