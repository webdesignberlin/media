import { Component, OnInit } from '@angular/core';
import {MediaService} from "../media/media.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private mediaService: MediaService) { }

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

  ngOnInit() {
  }

}
