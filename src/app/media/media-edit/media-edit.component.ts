import {Component, OnInit, OnDestroy} from '@angular/core';
import {MediaService} from "../media.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {Media} from "../media.model";

@Component({
  selector: 'app-media-edit',
  templateUrl: './media-edit.component.html',
  styleUrls: ['./media-edit.component.css']
})
export class MediaEditComponent implements OnInit, OnDestroy {

  mediaForm: FormGroup;
  private mediaIndex: number;
  private subscription: Subscription;
  private isNew = true;
  private media: Media;

  constructor(
      private mediaService: MediaService,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  onSubmit(){
    const newMedia = this.mediaForm.value;

    if(this.isNew){
      this.mediaService.addMedia(newMedia)
    } {
      this.mediaService.editMedia(this.media, newMedia);
    }

    this.onNavigateBack();
  }

  onCancel(){
    this.onNavigateBack();
  }

  onNavigateBack(){
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
        params => {
          if (params.hasOwnProperty('id')){
            this.isNew = false;
            this.mediaIndex = +params['id'];
            //this.media = this.mediaService.getMedia(this.mediaIndex);
            this.media = this.mediaService.getMediaDetail(this.mediaIndex);
          } else {
            this.isNew = true;
            this.media = null;
          }
        }
    );

    let mediaName = null;
    let mediaDescription = null;
    let mediaImagePath = null;

    if(!this.isNew) {
      mediaName = this.media.name;
      mediaDescription = this.media.description;
      mediaImagePath = this.media.imagePath;
    }

    this.mediaForm = new FormGroup({
      'name': new FormControl(mediaName, Validators.required),
      'description': new FormControl(mediaDescription, Validators.required),
      'imagePath': new FormControl(mediaImagePath)
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
