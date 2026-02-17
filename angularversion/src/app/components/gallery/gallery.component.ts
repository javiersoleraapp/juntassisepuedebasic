import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  title: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  galleryItems: GalleryItem[] = [
    {
      title: 'En Vivo',
      icon: '🎤',
      description: 'Conciertos y presentaciones en vivo cargados de energía',
    },
    {
      title: 'Estudio',
      icon: '🎙️',
      description: 'Grabaciones en estudio con sonido profesional',
    },
    {
      title: 'Backstage',
      icon: '🎸',
      description: 'Momentos tras bastidores de la banda',
    },
    {
      title: 'Eventos',
      icon: '🎊',
      description: 'Apariciones en festivales y eventos especiales',
    },
    {
      title: 'Sessions',
      icon: '🎵',
      description: 'Sesiones acústicas y colaboraciones',
    },
    {
      title: 'Comunidad',
      icon: '🤘',
      description: 'Nuestros fans en acción',
    },
  ];
}
