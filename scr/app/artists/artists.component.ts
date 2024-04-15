import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent {
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };
  trackByFn(index: number, item: any) {
    return item.img;
  }

  albums = [
    { img: "../../assets/images/de-cantina-en-cantina.png", alt: "Image 1", spotifyUrl: "https://open.spotify.com/intl-es/track/1hxxwHtWJeWoJeihhyinFn?si=2401c910085b46d5" },
    { img: "../../assets/images/la-voz-del-rancho.png", alt: "Image 2", spotifyUrl: "https://open.spotify.com/intl-es/track/3oVkZ4ViVw1D3Eled28kfj?si=a45c25276ab84f31" },
    { img: "../../assets/images/una-voz-que-hara-historia-cano-aguilar.png", alt: "Image 3", spotifyUrl: "https://open.spotify.com/intl-es/album/0wbd3PxL9cDDCkKLQIdLHG?si=4R8lDqbxSUKtK59v3dufBQ" },
    { img: "../../assets/images/fantasia.png", alt: "Image 4", spotifyUrl: "https://open.spotify.com/intl-es/track/2TG7HS0nFhrxcnnT0FbOlf?si=45a8f1040a404bd4" },
    { img: "../../assets/images/caritas-felices.png", alt: "Image 5", spotifyUrl: "https://open.spotify.com/intl-es/track/0iEMMkEQd7ZtBAGwekwIX7?si=6a37e69528c845a2" },
    { img: "../../assets/images/soy-duranguense.png", alt: "Image 6", spotifyUrl: "https://open.spotify.com/intl-es/track/7tZFjxwJNQikFkzvBC4pj3?si=8cd0f0cdc7934731" },
    { img: "../../assets/images/te-quiero.png", alt: "Image 7", spotifyUrl: "https://open.spotify.com/intl-es/track/3RegObIqstFHoUCQOZ0VS4?si=1bedf0f043984bc1" },
    { img: "../../assets/images/amigo-mesero.png", alt: "Image 8", spotifyUrl: "https://open.spotify.com/intl-es/track/65Z4jPVZ7UplPW55mRDE8s?si=3fa56679c3364aa6" },
    { img: "../../assets/images/la-hielera.png", alt: "Image 9", spotifyUrl: "https://open.spotify.com/intl-es/track/1ANwvwEFtC4MOUwVPDU2U0?si=da846fd6d0444cf9" },
    { img: "../../assets/images/que-lloro.png", alt: "Image 10", spotifyUrl: "https://open.spotify.com/intl-es/track/1hxxwHtWJeWoJeihhyinFn?si=d2d616a820184000" },
    { img: "../../assets/images/el-mil-amores-cano-aguilar.png", alt: "Image 11", spotifyUrl: "https://open.spotify.com/intl-es/track/1x3d3NvS5KJ1nriVyOR7Yy?si=8c45c0c56b194277" },
    { img: "../../assets/images/mi-maldito-corazon.png", alt: "Image 12", spotifyUrl: "https://open.spotify.com/intl-es/track/43tg34u50FkA9d2erhCASt?si=4d10dd3b62a84600" },
    { img: "../../assets/images/borracho-y-tomador.png", alt: "Image 13", spotifyUrl: "https://open.spotify.com/intl-es/track/6eZntBvqRgpsyz3vIiTCpF?si=6d058e767b704aaf" },
    { img: "../../assets/images/el-tao-tao.png", alt: "Image 14", spotifyUrl: "https://open.spotify.com/intl-es/track/6WyrAxUhxmbz4UuT8Dm9mz?si=9583d22ed2de49e8" },
    { img: "../../assets/images/la-enorme-distancia.png", alt: "Image 15", spotifyUrl: "https://open.spotify.com/intl-es/track/3RHbzRE1919GDWBXiikhk1?si=d019bcfe3beb49e3" },
    { img: "../../assets/images/mis-tres-animales.png", alt: "Image 16", spotifyUrl: "https://open.spotify.com/intl-es/track/1oyAMMfKK019dUvZhtgrMJ?si=069f487b21ec4c9f" },
    { img: "../../assets/images/total-ya-se-fue.png", alt: "Image 17", spotifyUrl: "https://open.spotify.com/intl-es/track/2acJxjaCYh6cQ5gGiLJjyf?si=b3e483a6023a4f2c" },
    { img: "../../assets/images/las-nieves-de-enero.png", alt: "Image 18", spotifyUrl: "https://open.spotify.com/intl-es/track/4ya5poaESfRERBLpysARzY?si=848ac3a2ecdb4a45" },
  ];
  albumConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>'
  };
}
