import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api/api-service.service';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})




export class ProfilePage implements OnInit {
  user: any;
  DataPlaylist: any;

  @ViewChild('updateModal', { static: false }) updateModal!: IonModal;

  constructor(
    private router: Router,
    private api: ApiServiceService,
    private alert: AlertController,
    private modalCtrl: ModalController
  ) { }
  // Notifikasi Start
  private async presentAlert(title: any, message: any) {
    const alert = await this.alert.create({
      header: '',
      subHeader: title,
      message: message,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // Refresh or update the page here
            window.location.reload(); // Metode ini akan merefresh halaman
          },
        },
      ],
    });
    await alert.present();
  }

  async Dologout() {
    const alert = await this.alert.create({
      header: 'Konfirmasi Logout',
      message: 'Apakah Anda yakin ingin logout?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Logout',
          handler: () => {
            this.router.navigateByUrl('login-page');
          },
        },
      ],
    });

    await alert.present();
  }

  logout() {
    this.router.navigateByUrl('login-page');
  }

  GetUserPlaylist() {
    this.api.GetUserPlaylist().subscribe((res: any) => {
      this.DataPlaylist = res['data'];
      console.log('DataPlaylist ===> ' + JSON.stringify(res['data']));
    });
  }

  // delete playlist start

  id: any;
  DeletePlaylist(id: any) {
    this.api.DeletePlaylist(id).subscribe(
      (data) => {
        this.presentAlert('Berhasil', 'Playlist Berhasil di Hapus');
      },
      (err) => {
        console.error('Gagal Delete user ===> ', err.status);
        this.presentAlert(
          'Gagal Delete user',
          'Delete user gagal. Silahkan cek kembali jaringan internet anda.'
        );
      }
    );
  }

  async DoDeletePlaylist(id: any) {
    const alert = await this.alert.create({
      header: 'Konfirmasi Hapus',
      message: 'Hapus Playlist?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Hapus',
          handler: () => {
            this.DeletePlaylist(id);
          },
        },
      ],
    });

    await alert.present();
  }

  // delete playlist end

  // edit playlist start
  DataPlaylisByID: any;
  openModalUpdate(id: any) {
    this.api.GetPlaylistById(id).subscribe((res: any) => {
      this.DataPlaylisByID = res['data'];
      console.log('DataPlaylist ===> ' + JSON.stringify(res['data']));
      this.updateModal.present();
    });
  }

  updatePlaylist() {
    const updatedData = {
      name: this.DataPlaylisByID.playlists_name,
      status: this.DataPlaylisByID.playlists_status,
    };

    this.api.UpdatePlaylist(this.DataPlaylisByID.id, updatedData).subscribe(
      (res: any) => {
        console.log('Playlist updated successfully');
        this.presentAlert('Berhasil', 'Playlist Berhasil di Edit');
      },
      (error: any) => {
        console.error('Failed to update playlist', error);
        this.presentAlert(
          'Gagal Update playlist',
          'Update playlist gagal. Cek kembali jaringan anda.'
        );
      }
    );
  }

  // edit playlist end

  ngOnInit() {
    this.user = {
      name: localStorage.getItem('name'),
      email: localStorage.getItem('email'),
    };
    // menjalankan useer playlist
    this.GetUserPlaylist();
  }
}
