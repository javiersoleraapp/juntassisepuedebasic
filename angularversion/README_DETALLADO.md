# 🎸 JUNTAS SÍ SE PUEDE - Versión Angular Moderna

Una versión completamente renovada y moderna del portal "Juntas Sí Se Puede" desarrollada con **Angular 17**. Mantiene la esencia del rock español de los 80 y 90, pero con una arquitectura contemporánea y un diseño ultramoderno.

## ✨ Características Destacadas

### 🚀 Tecnología Moderna
- **Angular 17+** con arquitectura standalone
- **TypeScript Strict** para máxima seguridad de tipos
- **Signals** para reactividad simplificada
- **Lazy Loading** de componentes
- **SCSS** con nesting y variables avanzadas

### 🎨 Diseño Contemporáneo
- Colores neón vibrantes (Rojo, Dorado, Cian) sobre fondo oscuro
- Animaciones fluidas y modernas
- Componentes con glasmorphism y efectos modernos
- Totalmente responsive en móviles, tablets y escritorio
- Scrollbar personalizado con tema rock

### 📱 Responsive First
- Mobile-first approach
- Menú hamburguesa adaptativo
- Imágenes SVG escalables
- Grid layouts flexibles

### 🎯 Componentes Modulares
- **Navbar**: Navegación sticky con responsive menu
- **Hero**: Sección de bienvenida con animaciones
- **About**: Información sobre la banda con SVG interactivo
- **Gallery**: Galería de contenido con hover effects
- **Contact**: Formulario integrado con Formspree
- **Footer**: Pie de página temático

### 🔧 Servicios y Funcionalidad
- Servicio de formulario integrado
- Validación en tiempo real
- Manejo de errores elegante
- Smooth scrolling entre secciones

## 📋 Requisitos

- Node.js v18+
- npm o yarn
- Editor de código (VS Code recomendado)

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start

# Abrir en http://localhost:4200
```

## 📦 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          # Navegación principal
│   │   ├── hero/            # Sección hero
│   │   ├── about/           # Quiénes somos
│   │   ├── gallery/         # Galería
│   │   ├── contact/         # Formulario de contacto
│   │   └── home/            # Página principal
│   ├── services/
│   │   └── form.service.ts  # Servicio de contacto
│   ├── app.routing.ts       # Rutas
│   └── app.component.ts     # Componente raíz
├── styles.scss              # Estilos globales
├── index.html               # HTML principal
└── main.ts                  # Entry point
```

## 🎨 Paleta de Colores

| Color | Código | Uso |
|-------|--------|-----|
| Rojo Principal | #FF1744 | Títulos, bordes, elementos principales |
| Dorado | #FFD700 | Acentos, enlaces, textos secundarios |
| Cian | #00BCD4 | Acentos secundarios, efectos |
| Fondo Oscuro | #0d0d0d | Fondo principal |
| Card Oscura | #1a1a1a | Cards y componentes |

## 🔧 Configuración de Formspree

Para que el formulario de contacto funcione:

1. Accede a [formspree.io](https://formspree.io)
2. Crea una cuenta
3. Obtén tu Form ID
4. Actualiza `src/app/services/form.service.ts`:

```typescript
private readonly FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';
```

## 📱 Breakpoints Responsive

- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: > 769px
- Large Desktop: > 968px

## 🎬 Efecto y Animaciones

- **fadeInUp**: Aparición suave desde abajo
- **swing**: Movimiento de guitarra
- **pulse**: Pulsación del micrófono
- **bounce**: Rebote en scroll indicator
- **shimmer**: Efecto brillo
- **glow**: Efecto de resplandor en texto

## 🔊 Características del Navbar

- Sticky navigation
- Smooth scrolling
- Hamburger menu responsivo
- Efectos hover con glow
- Links animados con underline gradiente

## 📧 Formulario de Contacto

- Validación en tiempo real
- Campos requeridos
- Validación de email
- Contador de caracteres
- Mensajes de éxito/error
- Loading state

## 🎯 Secciones

### Hero
- Título principal
- Subtitle con acento
- SVG animado (guitarra, micrófono, notas)
- CTA button
- Scroll indicator

### About
- Descripción de la banda
- Tarjetas de highlights
- SVG del escenario con animaciones
- Responsive layout

### Gallery
- Grid de 3-4 columnas
- Cards interactivas
- Hover effects con transiciones
- Placeholder para contenido futuro

### Contact
- Formulario completo
- Métodos de contacto
- Integración con Formspree
- Mensajes de confirmación

## 🚂 Build y Deploy

```bash
# Build de producción
npm run build:prod

# Los archivos estarán en dist/juntas-app/

# Servir localmente
npx http-server dist/juntas-app/
```

## 🌐 Deploy en la nube

Puedes desplegar en:
- **Vercel**: `vercel`
- **Netlify**: `netlify deploy`
- **Firebase**: `firebase deploy`
- **GitHub Pages**: `ng build --base-href=/repo-name/`

## 📚 Recursos

- [Angular Documentation](https://angular.io)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [SCSS Documentation](https://sass-lang.com)
- [MDN Web Docs](https://developer.mozilla.org/)

## 🎸 Créditos

Desarrollado como versión moderna del portal "Juntas Sí Se Puede" dedicado al rock español.

Tecnologías utilizadas:
- Angular 17
- TypeScript 5.2
- SCSS
- RxJS 7.8

## 📄 Licencia

Este proyecto está disponible como referencia educativa.

---

**¡Que viva el Rock Español! 🎸🔥**

Para más información, visita el archivo [INSTALACION.md](INSTALACION.md)
