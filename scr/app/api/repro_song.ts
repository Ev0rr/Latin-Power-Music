// // app.component.ts

// import { Component, OnInit } from '@angular/core';
// import { SpotifyService } from './spotify.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   trackUrl: string;

//   constructor(private spotifyService: SpotifyService) {}

//   ngOnInit() {
//     // Obtener información sobre la canción desde la API de Spotify
//     this.spotifyService.getTrack('ID_DE_LA_CANCION').subscribe(track => {
//       // Obtener el recurso de reproducción de la canción
//       this.trackUrl = track.preview_url;
//     });
//   }
// }
