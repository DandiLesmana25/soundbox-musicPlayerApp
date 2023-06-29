import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/api/api-service.service';
import { ModalController } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
AlertController;

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  @ViewChild('updateModal', { static: false }) updateModal!: IonModal;

  constructor(
    private api: ApiServiceService,
    private alert: AlertController,
    private modalCtrl: ModalController
  ) {}

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

  // Notifikasi end

  // get playlist start
  DataPlaylist: any;
  GetUserPlaylist() {
    this.api.GetUserPlaylist().subscribe((res: any) => {
      this.DataPlaylist = res['data'];
      console.log('DataPlaylist ===> ' + JSON.stringify(res['data']));
    });
  }

  form = {
    name: '',
    status: '',
  };

  // get playlist end

  // create playlist start

  doCreatePlaylist() {
    this.api.CreatePlaylist(this.form).subscribe(
      (data) => {
        const jsonResponse = JSON.parse(JSON.stringify(data));
        console.log(jsonResponse.id);
        console.log('Success ==> ' + JSON.stringify(data));
        this.presentAlert('Berhasil', 'Playlist berhasil di buat');
      },
      (err) => {
        console.error('Gagal Create user ===> ', err.status);
        this.presentAlert(
          'Gagal Create playlist',
          'Create playlist gagal. Nama Playlist sudah ada.'
        );
      }
    );
  }

  submitWithValidateFormInput() {
    var doSubmitForm = true;

    if (this.form.name == null || this.form.name == '') {
      this.presentAlert(
        'Peringatan',
        'Jangan lupa kasih nama Playlist-mu ya. '
      );
      doSubmitForm = false;
    }
    if (this.form.status == null || this.form.status == '') {
      this.presentAlert('Peringatan', 'Pilih status untuk Playlist-mu.');
      doSubmitForm = false;
    }

    if (doSubmitForm) {
      this.doCreatePlaylist();
    }
  }

  // create playlist end

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
    this.GetUserPlaylist();
  }
}
