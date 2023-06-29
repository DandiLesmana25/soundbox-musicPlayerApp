import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api/api-service.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-show-playlist',
  templateUrl: './show-playlist.page.html',
  styleUrls: ['./show-playlist.page.scss'],
})
export class ShowPlaylistPage implements OnInit {

  album: any; // Properti untuk menyimpan data album
  songs: any[] = []; // Properti untuk menyimpan data lagu
  // songs: any;
  audio: HTMLAudioElement;
  isPlaying: boolean = false;
  currentIndex: number = -1; // Indeks lagu saat ini



  constructor(private route: ActivatedRoute, private api: ApiServiceService) {
    this.audio = new Audio();
  }






  loadDataInAlbum() {
    this.route.queryParams.subscribe(params => {
      const albumId = params['albumId'];

      // Pastikan albumId memiliki nilai sebelum memuat data album
      if (albumId) {
        this.api.GetDataAlbum(albumId).subscribe((response: any) => {
          const dataAlbum = response.data;
          const dataSongs = response.songs;

          this.album = dataAlbum;
          this.songs = dataSongs;

          console.log('Data Album:', this.album);
          console.log('Data Songs:', this.songs);
        });
      }
    });
  }





  // function for button play
  playAudio(audioUrl: string) {
    if (!this.isPlaying) {
      //if playingsong == false
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

  playIndexAudio(song: string, index: number) {
    if (!this.isPlaying) {
      // Kode untuk memutar lagu
      console.log('Memutar lagu:', song);
      this.currentIndex = index; // Simpan indeks lagu saat ini
      this.audio.src = song;
      this.audio.play();
      this.isPlaying = true;
    } else {
      // Kode untuk menghentikan lagu
      this.audio.pause();
      this.currentIndex = -1; // Set indeks lagu saat ini kembali ke -1
      this.isPlaying = false;
    }
  }





  ngOnInit() {
    this.loadDataInAlbum()
  }

}
