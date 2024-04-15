// // SpotifyService.ts

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class SpotifyService {

//   private apiUrl = 'https://api.spotify.com/v1';

//   constructor(private http: HttpClient) { }

//   getTrack(id: string): Observable<any> {
//     const url = `${this.apiUrl}/tracks/${id}`;
//     return this.http.get<any>(url, {
//       headers: new HttpHeaders({
//         'Authorization': 'Bearer TU_TOKEN_DE_ACCESO'
//       })
//     });
//   }
// }
