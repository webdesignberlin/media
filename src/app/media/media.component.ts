import { Component, OnInit } from '@angular/core';
import {MediaService} from "./media.service";

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
  providers: [MediaService]
})
export class MediaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
