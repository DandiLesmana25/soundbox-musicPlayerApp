import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/api/api-service.service';
import { NowPlayingPage } from 'src/app/now-playing/now-playing.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  audio: HTMLAudioElement;
  isPlaying: boolean = false; //inidisialisasi isplaying value == false
  songs: any[] = [];
  currentSongIndex: number = 0;

  

  constructor(
    public modalCtrl: ModalController,
    private api: ApiServiceService
  ) {
    this.audio = new Audio();
  }

  ngOnInit() {
    this.loadSongs();
  }

  async openNowPlaying() {
    const modal = await this.modalCtrl.create({
      component: NowPlayingPage,
    });
    return await modal.present();
  }

  loadSongs() {
    this.api.GetSong().subscribe((Response: any) => {
      // const dataAlbum = Response.data;
      const dataSong = Response.songs;



      // this.album = dataAlbum;
      this.songs = dataSong;

      // console.log('Data Album:', this.album);
      console.log('Data Songs:', this.songs);

    })
  }
  playAudio(audioUrl: string) {
    if (!this.isPlaying) {
      //if playingsong == false
      this.audio.src = audioUrl;
      this.audio.play(); //then play
      this.isPlaying = true;
    } else {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  nextPlaySong(){
    // +1 ke currentSongIndex 
    this.currentSongIndex++;

    if (this.currentSongIndex >= this.songs.length) {
      this.currentSongIndex = 0;
    }

    const  nextSong = this.songs[this.currentSongIndex];
    const audioUrl = nextSong.songs_song;
    this.playAudio(audioUrl);

  }

  playPreviousSong(){
    //  -1 dari currentSongIndex
    this.currentSongIndex--;

    if (this.currentSongIndex < 0) {
      this.currentSongIndex = this.songs.length - 1;
    }
    const previousSong = this.songs[this.currentSongIndex];
    const audioUrl = previousSong.songs_song;
    this.playAudio(audioUrl);
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}
