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

  albums = [
    { img: "../../assets/images/el-mil-amores.png", alt: "Image 1" },
    { img: "../../assets/images/linda-guerita.png", alt: "Image 2" },
    { img: "../../assets/images/amantes-prohibidos.png", alt: "Image 3" },
    { img: "../../assets/images/el-poder-de-la-musica.png", alt: "Image 4" },
    { img: "../../assets/images/una-voz-que-hara-historia.png", alt: "Image 5" },
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
}
