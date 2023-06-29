import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: any;
  lastPlayedSongs: any;
  weeklyTopSong: any;
  moodBooster: any;
  listAlbums: any;


  constructor(private api: ApiServiceService) { }

  ngOnInit() {
    this.user = {
      name: localStorage.getItem('name')
    };

    this.recentPlaySongs();
    this.topSong();
    this.allAlbums();

  }

  recentPlaySongs() {
    this.api.GetRecentPlay().subscribe(
      (res: any) => {
        if (res && res.data && res.data.length > 0) {
          this.lastPlayedSongs = res.data;
          console.log('lastPlayedSongs ===> ' + JSON.stringify(res.data));
        } else {
          // Ketika tidak ada data
          console.log('No recent play songs found.');
        }
      },
      (error) => {
        console.error('Error fetching recent play songs:', error);
        // Ketika error
      }
    );
  }




  topSong() {
    this.api.WeeklyTopSong().subscribe(
      (res: any) => {
        this.weeklyTopSong = res['data'];
        console.log('weeklyTopSong ===> ' + JSON.stringify(res['data']));
      },
      (err: any) => {
        console.error('Gagal mengambil lagu teratas:', err);
      },
      () => {
        if (!this.weeklyTopSong) {
        }
      }
    );
  }


  allAlbums() {
    this.api.GetAlbum().subscribe(
      (res: any) => {
        this.listAlbums = res['data'];
        console.log('listAlbums ===> ' + JSON.stringify(res['data']));
      },
      (err: any) => {
        console.error('Gagal mengambil data album:', err);
      },
      () => {
        if (!this.listAlbums || this.listAlbums.length === 0) {
          console.log('Data album kosong');
        }
      }
    );
  }








}