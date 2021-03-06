/*import { Injectable } from '@angular/core';

@Injectable()
export class MediaService {

  constructor() { }

}
*/

import {Media} from "./media.model";
import {Headers, Http, Response} from "@angular/http";
import {Injectable, EventEmitter} from "@angular/core";
import 'rxjs/Rx';

declare var firebase: any;

@Injectable()
export class MediaService {
  mediaChanged = new EventEmitter<Media[]>();

  constructor(
      private http: Http
  ){}

  private mediaList: Media[] = [
    new Media('Platte 1', 'Tolle Beschreibung', 'https://placehold.it/350x150'),
    new Media('Platte 2', 'Zweite Beschreibung', 'https://placehold.it/350x150')
  ];

  //private apiToken: any = firebase.auth().currentUser.Dd;

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

  storeData(){
    const body = JSON.stringify(this.mediaList);
    const apiToken = firebase.auth().currentUser.Dd;
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.put('https://media-615d8.firebaseio.com/medialist.json?auth='+apiToken, body, {headers: headers});

  }

  fetchData(){
    const apiToken = firebase.auth().currentUser.Dd;
    //const apiToken = firebase.auth().currentUser.getToken();

    this.http.get('https://media-615d8.firebaseio.com/medialist.json?auth='+apiToken)
        .map((response: Response) => response.json())
        .subscribe(
            (mediaList: Media[]) => {
              this.mediaList = mediaList;
              this.mediaChanged.emit(this.mediaList)
            }
        );

  }

}