/*import { Injectable } from '@angular/core';

@Injectable()
export class MediaService {

  constructor() { }

}
*/

import {Media} from "./media.model";

export class MediaService {
  private mediaList: Media[] = [
    new Media('Platte 1', 'Tolle Beschreibung', 'https://placehold.it/350x150'),
    new Media('Platte 2', 'Zweite Beschreibung', 'https://placehold.it/350x150')
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

  editMedia(oldMedia: Media, newMedia: Media){
    this.mediaList[this.mediaList.indexOf(oldMedia)] = newMedia;
  }

}