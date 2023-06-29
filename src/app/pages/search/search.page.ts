import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api/api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  keyword: string = '';
  searchResults: any[] = [];
  album: any; // Properti untuk menyimpan data album
  songs: any[] = []; // Properti untuk menyimpan data lagu
  // songs: any;
  audio: HTMLAudioElement;
  isPlaying: boolean = false; 
  currentIndex: number = -1; // Indeks lagu saat ini

  constructor(
    private api: ApiServiceService
  ) {  this.audio = new Audio()}

  search() {
    this.api.search(this.keyword).subscribe((response: any) => {
      this.searchResults = response.songs;
      console.log('Data Result ====>',this.searchResults);
    });
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


  ngOnInit() {
  }

}
