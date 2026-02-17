# 🎸 Guía de Instalación - Juntas Sí Se Puede Angular

## Requisitos Previos

Asegúrate de tener instalado en tu sistema:

- **Node.js** v18+ ([Descargar aquí](https://nodejs.org/))
- **npm** (incluido con Node.js) o **yarn**

Verificar instalación:

```bash
node --version   # v18.x.x o superior
npm --version    # 8.x.x o superior
```

## 🚀 Pasos de Instalación

### 1. Instalar Dependencias

```bash
cd angularversion
npm install
```

Esto instalará todas las dependencias necesarias de Angular y librerías relacionadas.

### 2. Configurar Formspree (Opcional - Para Formulario de Contacto)

Si quieres que el formulario de contacto funcione completamente:

1. Ve a [https://formspree.io](https://formspree.io)
2. Crea una cuenta o inicia sesión
3. Crea un nuevo formulario y obtén tu **Form ID**
4. Abre el archivo `src/app/services/form.service.ts`
5. Reemplaza `YOUR_FORM_ID` en la URL con tu ID real:

```typescript
private readonly FORMSPREE_URL = 'https://formspree.io/f/tu_form_id';
```

### 3. Ejecutar en Desarrollo

```bash
npm start
```

El servidor de desarrollo se iniciará en `http://localhost:4200`

El navegador se abrirá automáticamente. Si no lo hace, abre manualmente la URL en tu navegador.

### 4. Build para Producción

```bash
npm run build:prod
```

Los archivos compilados estarán en la carpeta `dist/juntas-app/`

Para servir los archivos de producción localmente:

```bash
npx http-server dist/juntas-app/
```

## 📂 Estructura de Carpetas

```
angularversion/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   ├── hero/
│   │   │   ├── about/
│   │   │   ├── gallery/
│   │   │   ├── contact/
│   │   │   └── home/
│   │   ├── services/
│   │   │   └── form.service.ts
│   │   ├── app.component.ts
│   │   ├── app.routing.ts
│   │   └── app.config.ts
│   ├── styles.scss
│   ├── index.html
│   └── main.ts
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Comandos Útiles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia servidor de desarrollo |
| `npm run build` | Compila para producción |
| `npm run build:prod` | Compila con optimizaciones |
| `npm run lint` | Verifica linting (si está configurado) |

## ⚡ Características Modernas

- **Standalone Components**: Componentes independientes de módulos
- **Signals**: Reactivity mejorada en Angular 17+
- **Lazy Loading**: Carga de componentes bajo demanda
- **TypeScript Strict**: Type safety completo
- **SCSS Nesting**: Estilos avanzados con nesting
- **Mobile First**: Diseño responsive en todos los dispositivos

## 🐛 Solución de Problemas

### Puerto 4200 ya está en uso

```bash
ng serve --port 4300
```

### Limpiar caché de Angular

```bash
rm -rf .angular/
npm install
npm start
```

### Problemas con dependencias

```bash
rm -rf node_modules package-lock.json
npm install
```

## 📞 Soporte

Para preguntas o problemas con Angular:
- [Documentación Oficial de Angular](https://angular.io)
- [Stack Overflow tag: angular](https://stackoverflow.com/questions/tagged/angular)

---

¡Que disfrutes desarrollando con Angular y Rock Español! 🎸🔥
