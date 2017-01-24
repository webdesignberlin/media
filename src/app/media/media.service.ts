/*import { Injectable } from '@angular/core';

@Injectable()
export class MediaService {

  constructor() { }

}
*/

import {Media} from "./media.model";

export class MediaService {
  private mediaList: Media[] = [
    new Media('Platte 1', 'Tolle Beschreibung'),
    new Media('Platte 2', 'Zweite Beschreibung')
  ];

  getMedia() {
    return this.mediaList;
  }

  getMediaDetail(id: number){
    return this.mediaList[id];
  }

  deleteMedia(id: number){
    this.mediaList.splice(id, 1)
  }

  addMedia(media: Media){
    this.mediaList.push(media);
  }

}