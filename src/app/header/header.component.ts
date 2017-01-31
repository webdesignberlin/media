import { Component, OnInit } from '@angular/core';
import {MediaService} from "../media/media.service";
import {AuthService} from "../login/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;

  constructor(
      private mediaService: MediaService,
      private authService: AuthService
  ) {
    this.authService.isAuthenticated().subscribe(
        authStatus => this.isAuthenticated = authStatus
    );
  }

  onStore(){
    this.mediaService.storeData()
      .subscribe(
          data => console.log(data),
          error => console.error(error)
      );
  }

  onFetech(){
    this.mediaService.fetchData();
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnInit() {
  }

}
