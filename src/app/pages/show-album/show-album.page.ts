import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiServiceService } from 'src/app/api/api-service.service';
import { ActivatedRoute } from '@angular/router';
import { NowPlayingService } from 'src/app/now-playing.service';

@Component({
  selector: 'app-show-album',
  templateUrl: './show-album.page.html',
  styleUrls: ['./show-album.page.scss'],
})
export class ShowAlbumPage implements OnInit, OnDestroy {
  album: any;
  songs: any[] = [];
  author: any;
  audio: HTMLAudioElement;
  isPlaying: boolean = false;
  currentIndex: number = -1;

  constructor(
    private route: ActivatedRoute,
    private api: ApiServiceService,
    private nowPlayingService: NowPlayingService
  ) {
    this.audio = new Audio();
  }

  loadDataInAlbum() {
    this.route.queryParams.subscribe((params) => {
      const id = params['id'];

      if (id) {
        this.api.GetDataAlbum(id).subscribe(
          (response: any) => {
            this.album = response.data;
            this.songs = response.songs;
            this.author = response.author;

            console.log('Data Album:', this.album);
            console.log('Data Songs:', this.songs);
            console.log('Data Author:', this.author);
          },
          (error: any) => {
            console.error('Error:', error);
            // Ketika Error
          }
        );
      }
    });
  }

  playIndexAudio(song: string, index: number) {
    if (!this.isPlaying || this.currentIndex !== index) {
      console.log('Memutar lagu:', song);
      this.currentIndex = index;
      this.audio.src = song;
      this.audio.play();
      this.isPlaying = true;
      this.nowPlayingService.setCurrentSong(song);
    } else {
      this.audio.pause();
      this.isPlaying = false;
      this.nowPlayingService.setCurrentSong('');
    }
  }

  ngOnInit() {
    this.loadDataInAlbum();
    this.isPlaying = this.nowPlayingService.getCurrentSong() === '';
  }

  ngOnDestroy() {
    // this.audio.pause();
  }
}
