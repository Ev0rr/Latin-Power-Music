import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  slides = [
    { img: "../../assets/images/elbebeto.png", alt: "Image 1" },
    { img: "../../assets/images/los-primos.png", alt: "Image 2" },
    { img: "../../assets/images/autentico-paraiso-de-durango.png", alt: "Image 3" },
    { img: "../../assets/images/disponible-en-youtube.png", alt: "Image 4" },
    { img: "../../assets/images/disponible-en-youtube-2.png", alt: "Image 5" },
    { img: "../../assets/images/3ballmty.png", alt: "Image 6" },
    { img: "../../assets/images/huichol-musical.png", alt: "Image 7" },
    { img: "../../assets/images/unete-a-whatsapp.png", alt: "Image 8" },
  ];

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

  // Arreglo de álbumes con la URL de Spotify de cada artista
  albums = [
    { artist: "Artista 1", img: "../../assets/images/el-mil-amores.png", alt: "Image 1", spotifyUrl: "https://open.spotify.com/intl-es/track/3d8GyDteAdYKO6IwuxCiOs?si=ceb5092aa1c94f34" },
    { artist: "Artista 2", img: "../../assets/images/linda-guerita.png", alt: "Image 2", spotifyUrl: "https://open.spotify.com/intl-es/track/1NWvKwYuWuRrPUG9sEyoG5?si=9404022162124d12" },
    { artist: "Artista 3", img: "../../assets/images/amantes-prohibidos.png", alt: "Image 3", spotifyUrl: "https://open.spotify.com/intl-es/track/21WYyyjovbDtf8Sa2DSdfZ?si=18fc284dc4fc409c" },
    { artist: "Artista 4", img: "../../assets/images/el-poder-de-la-musica.png", alt: "Image 4", spotifyUrl: "https://open.spotify.com/intl-es/track/3ZyYM09zTUoUHeUqpqE2u9?si=44819c5a4fee4cfa" },
    { artist: "Artista 5", img: "../../assets/images/una-voz-que-hara-historia.png", alt: "Image 5", spotifyUrl: "https://open.spotify.com/intl-es/track/3TVFdlCJzHc8rZrmpBEtdv?si=2df4b5fe9ab345bb" },
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

  releases = [
    { img: "../../assets/images/romeo-beltran.png", alt: "Image 1" },
    { img: "../../assets/images/los-primos-mx.png", alt: "Image 2" },
    { img: "../../assets/images/los-sembradores.png", alt: "Image 3" },
    { img: "../../assets/images/maldito-corazon.png", alt: "Image 4" },
  ];
  releaseConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>'
  };

  // Función para redirigir a la canción en Spotify
  redirectToSpotify(url: string) {
    window.location.href = url;
  }
}
