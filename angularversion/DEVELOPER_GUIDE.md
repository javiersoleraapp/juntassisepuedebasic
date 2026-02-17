# 🎓 Guía para Developers

## ¿Cómo Extender la Aplicación?

### 1. Crear un Nuevo Componente

```bash
ng generate component components/mi-componente
# o manualmente en src/app/components/mi-componente/

# Contenido básico del componente:
```

```typescript
// mi-componente.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mi-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.scss'],
})
export class MiComponenteComponent {}
```

### 2. Agregar una Nueva Ruta

```typescript
// app.routing.ts
export const routes: Routes = [
  // ... rutas existentes
  {
    path: 'mi-seccion',
    loadComponent: () =>
      import('./components/mi-componente/mi-componente.component')
        .then(m => m.MiComponenteComponent),
  },
];
```

### 3. Crear un Nuevo Servicio

```bash
# Crear archivo: src/app/services/mi-servicio.ts
```

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MiServicio {
  constructor(private http: HttpClient) {}

  obtenerDatos() {
    return this.http.get('/api/datos');
  }
}
```

### 4. Usar Signals (Reactivity Moderna)

```typescript
import { signal, computed } from '@angular/core';

export class MiComponente {
  contador = signal(0);
  
  // Computed es una propiedad derivada que se actualiza automáticamente
  contador_duplicado = computed(() => this.contador() * 2);

  incrementar() {
    this.contador.set(this.contador() + 1);
  }
}
```

### 5. Usar Pipes en Templates

```html
<!-- Transformar datos -->
{{ fecha | date:'dd/MM/yyyy' }}
{{ cantidad | currency:'EUR' }}
{{ texto | uppercase }}
```

### 6. Directivas Comunes

```html
<!-- Condicionales -->
<div *ngIf="mostrar">Contenido visible</div>

<!-- Loops -->
<div *ngFor="let item of items">{{ item.nombre }}</div>

<!-- Clases dinámicas -->
<div [ngClass]="{ 'clase-activa': isActive }">Contenido</div>

<!-- Estilos dinámicos -->
<div [ngStyle]="{ 'color': miColor, 'font-size.px': miTamaño }">Texto</div>
```

### 7. Event Binding

```html
<button (click)="miMetodo()">Click</button>
<input (change)="onInputChange($event)">
<form (ngSubmit)="enviar()">...</form>
```

### 8. Two-Way Data Binding

```html
<!-- [(ngModel)] requiere FormsModule -->
<input [(ngModel)]="nombreUsuario" />
```

```typescript
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
})
export class MiComponente {
  nombreUsuario = '';
}
```

### 9. Agregar Nuevos Elementos al Navbar

```typescript
// navbar.component.ts
// Agrega a la lista de nav items

// navbar.component.html
<li><a (click)="scrollToSection('mi-seccion')" class="nav-link">MI SECCIÓN</a></li>
```

### 10. Agregar Animaciones

```typescript
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
```

```html
<div [@fadeIn]>Contenido que aparece con animación</div>
```

## Tips de Rendimiento

### 1. OnPush Change Detection
```typescript
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
})
```

### 2. Lazy Loading
```typescript
// Componentes cargados solo cuando se necesitan
{
  path: 'lazy',
  loadComponent: () => import('./lazy.component').then(m => m.LazyComponent),
}
```

### 3. TrackBy en ngFor
```html
<div *ngFor="let item of items; trackBy: trackByFn">{{ item.id }}</div>
```

```typescript
trackByFn(index: number, item: any): any {
  return item.id;
}
```

## Debugging

### 1. Logs en Consola
```typescript
console.log('Valor:', this.miVariable);
console.error('Error:', error);
console.warn('Advertencia:', warning);
```

### 2. Angular DevTools
Instala la extensión de Chrome "Angular DevTools"

### 3. Break Points
Abre DevTools (F12) y establece breakpoints en el código fuente

## Comandos Útiles

```bash
# Generar componente
ng generate component components/nuevo

# Generar servicio
ng generate service services/nuevo

# Generar interface
ng generate interface models/nuevo

# Generar pipe
ng generate pipe pipes/nuevo

# Linting
ng lint

# Formatear código
npx prettier --write src/

# Analizar bundle size
ng build --stats-json
```

## Recursos de Aprendizaje

- 📚 [Angular Official Docs](https://angular.io/docs)
- 🎥 [Angular YouTube Channel](https://www.youtube.com/@Angular)
- 💬 [Stack Overflow - Angular Tag](https://stackoverflow.com/questions/tagged/angular)
- 🌐 [Angular Community](https://angular.io/community)

## Próximas Características Sugeridas

- [ ] Sistema de comentarios dinámico
- [ ] Dark mode toggle
- [ ] Share en redes sociales
- [ ] Notificaciones push
- [ ] Búsqueda en la galería
- [ ] Filtros interactivos
- [ ] Sistema de rating/likes
- [ ] Newsletter signup

---

¡Feliz codificación! 🚀
