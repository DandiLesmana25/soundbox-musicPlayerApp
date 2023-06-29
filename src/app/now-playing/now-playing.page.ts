import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiServiceService } from '../api/api-service.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.page.html',
  styleUrls: ['./now-playing.page.scss'],
})
export class NowPlayingPage implements OnInit {
  // Songs: any;
  audio: HTMLAudioElement;
  isPlaying: boolean = false; //inidisialisasi isplaying value == false
  songs: any[] = [];
  currentSongIndex: number = 0;

  constructor(
    public modalCtrl: ModalController,
    private api: ApiServiceService
  ) {
    // inisialisasi objek Audio(objek bawaan js)
    this.audio = new Audio();
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

  // function for button play
  playAudio(audioUrl: string) {
    if (!this.isPlaying) {     //if playingsong == false
      this.audio.src = audioUrl;
      // this.audio.currentTime = this.duration; // Mengatur durasi audio sebelum pemutaran
      this.audio.play(); //then play
      this.isPlaying = true;
    } else {
      this.audio.pause();
      // this.audio.currentTime = this.duration;
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


  ngOnInit() {
    this.loadSongs(); // digunakan untuk memuat lagu-lagu saat komponen diinisialisasi.
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
