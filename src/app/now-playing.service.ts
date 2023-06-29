import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NowPlayingService {
  private currentSong: string = '';

  constructor() { }

  setCurrentSong(songUrl: string) {
    this.currentSong = songUrl;
  }

  getCurrentSong(): string {
    return this.currentSong;
  }
}
