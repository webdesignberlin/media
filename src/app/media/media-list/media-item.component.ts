import {Component, OnInit, Input} from '@angular/core';
import { Media } from '../media.model';
import {MediaService} from "../media.service";

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {
  @Input() media: Media;
  @Input() mediaId: number;

  constructor(private mediaService: MediaService ) { }

  ngOnInit() {
  }
}
