# 🎸 JUNTAS SÍ SE PUEDE - Versión Angular Moderna

Versión contemporánea en Angular del portal dedicado al rock español de los 80 y 90.

## 📋 Características

✅ **Angular 17+**: Última versión de Angular con arquitectura moderna  
✅ **Componentes Reutilizables**: Estructura modular y escalable  
✅ **Routing**: Navegación fluida entre secciones  
✅ **Lazy Loading**: Carga eficiente de componentes  
✅ **Diseño Moderno**: Estética actualizada manteniendo la esencia  
✅ **TypeScript Strict**: Type safety completo  
✅ **Aplicación SPA**: Single Page Application óptima  

## 🚀 Instalación y Setup

### Requisitos Previos
- Node.js (v18 o superior)
- npm o yarn

### Instalación

```bash
cd angularversion
npm install
```

### Desarrollo

```bash
npm start
# Accede a http://localhost:4200
```

### Build para Producción

```bash
npm run build:prod
# Los archivos compilados estarán en dist/juntas-app
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── gallery/
│   │   └── contact/
│   ├── services/
│   │   └── form.service.ts
│   ├── app.component.*
│   ├── app.routing.ts
│   └── app.config.ts
├── assets/
├── styles.scss
├── index.html
└── main.ts
```

## 🎨 Estilos y Colores

Se mantienen los colores de la versión original pero con un diseño más moderno:
- **Rojo Principal**: #FF1744
- **Dorado**: #FFD700
- **Cian**: #00BCD4
- **Fondo Oscuro**: #0d0d0d

## 🔧 Configuración de Formspree

Para el formulario de contacto:

1. Accede a https://formspree.io
2. Crea una cuenta
3. Obtén tu Form ID
4. Actualiza `src/app/services/form.service.ts` con tu ID

## 📦 Dependencias Principales

- @angular/core
- @angular/forms
- @angular/router
- @angular/animations
- rxjs

## 💡 Notas de Desarrollo

- Los componentes usan OnPush change detection para mejor rendimiento
- Se aprovechan los Signals de Angular 17+ donde es posible
- El routing está configurado para lazy loading
- Se implementan mejores prácticas de AccessibilidadA11y
