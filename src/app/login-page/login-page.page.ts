import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiServiceService } from '../api/api-service.service';
import { AlertController } from '@ionic/angular';

// import { Router } from '@angular/router';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  formLogin = {
    email: '',
    password: '',
  };
  constructor(
    // private router: Router
    private api : ApiServiceService,
    private alert : AlertController,
    private router : Router) {}

    // for alert sukses/fail
    private async presentAlert(title : any, message : any) {
      const alert = await this.alert.create({
        header: 'Login',
        subHeader: title,
        message: message,
        buttons: ['OK']
      });
  
      await alert.present();
    }

    
  doPostLoginUser(){
    this.api.LoginUser(this.formLogin)    
            .subscribe( data => {
              const jsonResponse = JSON.parse(JSON.stringify(data));
              console.log('==================>'+jsonResponse.data.email);
              localStorage.setItem('token',jsonResponse.token);
              localStorage.setItem('name',jsonResponse.data.name);
              localStorage.setItem('email',jsonResponse.data.email);
              console.log("Success ==> "+ JSON.stringify(data)); 
              this.presentAlert('Berhasil' , ' Berhasil Login Dengan Benar'); 
              this.router.navigate(['tabs/home']); // Pengalihan halaman ke '/tab1'
            },
            err => {
              console.log(err)
              console.error('Gagal Login ===> ', err.status);
              this.presentAlert('Gagal Login', 'Login gagal. Silahkan cek kembali jaringan internet anda.');
            });
  }

    // function for login button
    doSubmitWiFormInputLogin(){

      var doSubmitForm = true;
  
      if(this.formLogin.email == null || this.formLogin.email == ''){
        this.presentAlert('Peringatan' , 'Anda Belum Input Data email');
        doSubmitForm = false;
      }
      if(this.formLogin.password == null || this.formLogin.password == ''){
        this.presentAlert('Peringatan' , 'Anda Belum Input pw');
        doSubmitForm = false;
      }
   
  
      if(doSubmitForm){
        this.doPostLoginUser();
      }
  
    }
  

  ngOnInit() {}
}
