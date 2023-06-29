import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiServiceService } from '../api/api-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.page.html',
  styleUrls: ['./register-page.page.scss'],
})
export class RegisterPagePage implements OnInit {
  form = {
    name: '',
    email: '',
    password: '',
    confirmation_password: '',
  };

  constructor(
    // private router: Router
    private api : ApiServiceService,
    private alert : AlertController,
    private router : Router) {}

// for alert
    private async presentAlert(title : any, message : any) {
      const alert = await this.alert.create({
        header: 'Register',
        subHeader: title,
        message: message,
        buttons: ['OK']
      });
  
      await alert.present();
    }

    
    // for register
    doPostRegisterUser(){
      this.api.RegisterUser(this.form)    
              .subscribe( data => {
                const jsonResponse = JSON.parse(JSON.stringify(data));
                console.log(jsonResponse.msg);
                console.log("Success ==> "+ JSON.stringify(data)); 
                this.presentAlert('Berhasil' , ' Berhasil registrasi Dengan Benar'); 
                this.router.navigate(['tabs/home']); // Pengalihan halaman ke '/welcome'
              },
              err => {
                console.log(err)
                console.error('Gagal register ===> ', err.status);
                this.presentAlert('Gagal register', 'Register gagal. Silahkan cek kembali jaringan internet anda.');
              });
    }

      // function for button submit
  doSubmitWithValidateFormInput(){

    var doSubmitForm = true;

    if(this.form.name == null || this.form.name == ''){
      this.presentAlert('Peringatan' , 'Anda Belum Input Data Nama Lengkap');
      doSubmitForm = false;
    }

    if(this.form.email == null || this.form.email == ''){
      this.presentAlert('Peringatan' , 'Anda Belum Input Data email');
      doSubmitForm = false;
    }
    if(this.form.password == null || this.form.password == ''){
      this.presentAlert('Peringatan' , 'Anda Belum Input pw');
      doSubmitForm = false;
    }
    if(this.form.confirmation_password == null || this.form.confirmation_password == ''){
      this.presentAlert('Peringatan' , 'Anda Belum Input konfirmasi pw');
      doSubmitForm = false;
    }

    if(doSubmitForm){
      this.doPostRegisterUser();
    }

  }

    

  ngOnInit() {}
}
