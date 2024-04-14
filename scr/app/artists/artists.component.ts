import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.css'
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
    { img: "../../assets/images/de-cantina-en-cantina.png", alt: "Image 1" },
    { img: "../../assets/images/la-voz-del-rancho.png", alt: "Image 2" },
    { img: "../../assets/images/una-voz-que-hara-historia-cano-aguilar.png", alt: "Image 3" },
    { img: "../../assets/images/fantasia.png", alt: "Image 4" },
    { img: "../../assets/images/caritas-felices.png", alt: "Image 5" },
    { img: "../../assets/images/soy-duranguense.png", alt: "Image 6" },
    { img: "../../assets/images/te-quiero.png", alt: "Image 7" },
    { img: "../../assets/images/amigo-mesero.png", alt: "Image 8" },
    { img: "../../assets/images/la-hielera.png", alt: "Image 9" },
    { img: "../../assets/images/que-lloro.png", alt: "Image 10" },
    { img: "../../assets/images/el-mil-amores-cano-aguilar.png", alt: "Image 11" },
    { img: "../../assets/images/mi-maldito-corazon.png", alt: "Image 12" },
    { img: "../../assets/images/borracho-y-tomador.png", alt: "Image 13" },
    { img: "../../assets/images/el-tao-tao.png", alt: "Image 14" },
    { img: "../../assets/images/la-enorme-distancia.png", alt: "Image 15" },
    { img: "../../assets/images/mis-tres-animales.png", alt: "Image 16" },
    { img: "../../assets/images/total-ya-se-fue.png", alt: "Image 17" },
    { img: "../../assets/images/las-nieves-de-enero.png", alt: "Image 18" },
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
