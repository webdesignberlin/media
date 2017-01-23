import {Component, OnInit, OnDestroy} from '@angular/core';
import { Media } from '../media.model';
import {MediaService} from "../media.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-media-detail',
  templateUrl: './media-detail.component.html',
  styleUrls: ['./media-detail.component.css']
})
export class MediaDetailComponent implements OnInit, OnDestroy {
  selectedMedia: Media;
  mediaId: number;

  private subscription: Subscription;

  constructor(
      private mediaService: MediaService,
      private activatedRoute: ActivatedRoute,
      private router: Router
  ) { }

  onEditMedia(){
    this.router.navigate(['/media', this.mediaId, 'edit']);
  }

  onDeleteMedia(){
    this.mediaService.deleteMedia(this.mediaId);
    this.router.navigate(['/media']);
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
        params => {
          this.mediaId = +params['id'];
          this.selectedMedia = this.mediaService.getMediaDetail(this.mediaId)
        }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
