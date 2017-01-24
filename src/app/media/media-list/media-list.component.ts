import { Component, OnInit } from '@angular/core';
import { Media } from '../media.model';
import {MediaService} from "../media.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent implements OnInit {

  mediaList: Media[];

  constructor(
      private mediaService: MediaService,
      private router: Router
  ) { }

  onNewMedia(){
    this.router.navigate(['/media', 'new'])
  }

  ngOnInit() {
    this.mediaList = this.mediaService.getMedia();
    this.mediaService.mediaChanged.subscribe(
        (mediaList: Media[]) => this.mediaList = mediaList
    );
  }

}
