import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'; //call environtment file
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})


export class ApiServiceService {
  constructor(private http: HttpClient) { }



  // Register function
  RegisterUser(form: any) {
    return this.http.post(
      environment.ApiURL + '/api/register',
      {
        name: form.name,
        email: form.email,
        password: form.password,
        confirmation_password: form.confirmation_password,
      },
      { responseType: 'json' }
    );
  }




  // Login function
  LoginUser(formLogin: any) {
    return this.http.post(
      environment.ApiURL + '/api/login',
      {
        email: formLogin.email,
        password: formLogin.password,
      },
      { responseType: 'json' }
    );
  }



  GetSong() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get(environment.ApiURL + '/api/user/album/1', { headers });
  }



  GetRecentPlay() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get(environment.ApiURL + '/api/user/lastplay', {
      headers,
    });
  }



  WeeklyTopSong() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    return this.http.get(environment.ApiURL + '/api/user/trending', {
      headers,
    });
  }




  MoodBooster() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    return this.http.get(environment.ApiURL + '/api/user/trending', {
      headers,
    });
  }




  GetAlbum() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get(environment.ApiURL + '/api/user/albums', {
      headers,
    });
  }



  GetDataAlbum(id: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    return this.http.get(environment.ApiURL + '/api/user/album/' + id, {
      headers,
      responseType: 'json',
    });
  }





  GetUserPlaylist() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    return this.http.get(environment.ApiURL + '/api/user/playlists', {
      headers
    });
  }



  CreatePlaylist(form: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    return this.http.post(
      environment.ApiURL + '/api/user/playlists',
      {
        name: form.name,
        status: form.status,
      },
      { headers, responseType: 'json' }
    );
  }



  DeletePlaylist(id: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    return this.http.delete(environment.ApiURL + '/api/user/playlist/' + id, {
      headers,
      responseType: 'json',
    });
  }



  GetPlaylistById(id: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    return this.http.get(environment.ApiURL + '/api/user/playlist/' + id, {
      headers,
    });
  }

  search(keyword: string) : Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get(environment.ApiURL + '/api/user/search?keyword=' + keyword, { headers });
  }


  UpdatePlaylist(id: any, updatedData: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    return this.http.put(
      environment.ApiURL + '/api/user/playlist/' + id,
      updatedData,
      {
        headers,
        responseType: 'json',
      }
    );

  }
    
}
