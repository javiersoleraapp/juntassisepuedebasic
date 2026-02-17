import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
  ],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-gallery></app-gallery>
    <app-contact></app-contact>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2024 Juntas Sí Se Puede. Todas las derechos reservados.</p>
        <p>Construido con ❤️ y Angular | Rock Español Eterno</p>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer {
        background-color: rgba(13, 13, 13, 0.98);
        border-top: 2px solid var(--primary-red);
        padding: 2rem;
        text-align: center;
      }

      .footer-content {
        max-width: 1200px;
        margin: 0 auto;
      }

      .footer-content p {
        margin: 0.5rem 0;
        color: var(--text-gray);
        font-size: 0.95rem;
      }

      .footer-content p:first-child {
        color: var(--primary-red);
        font-weight: 700;
        text-shadow: 0 0 10px rgba(255, 23, 68, 0.3);
      }
    `,
  ],
})
export class HomeComponent {}
