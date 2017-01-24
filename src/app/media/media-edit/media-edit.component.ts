import { Component, OnInit } from '@angular/core';
import {MediaService} from "../media.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-media-edit',
  templateUrl: './media-edit.component.html',
  styleUrls: ['./media-edit.component.css']
})
export class MediaEditComponent implements OnInit {

  mediaForm: FormGroup;

  constructor(
      private mediaService: MediaService
  ) { }

  onSubmit(){
    const newMedia = this.mediaForm.value;
    this.mediaService.addMedia(newMedia);
  }

  ngOnInit() {
    this.mediaForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'imagePath': new FormControl(null)
    })
  }

}
