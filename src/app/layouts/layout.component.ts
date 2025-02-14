import { Component, HostBinding } from '@angular/core';
import { AuthService, ScreenService, AppInfoService } from '../shared/services';

@Component({
  selector: 'layout-root',
  templateUrl: './layout.component.html',
  standalone: false
})
export class LayoutComponent  {
  @HostBinding('class') get getClass() {
    const sizeClassName = Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
    return `${sizeClassName} app` ;
  }

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService) { }

  isAuthenticated() {
    return this.authService.loggedIn;
  }
}
