# 🚀 QUICKSTART - Comienza en 3 minutos

## Paso 1️⃣: Instalar Dependencias (60 segundos)

```bash
cd angularversion
npm install
```

## Paso 2️⃣: Iniciar Servidor de Desarrollo (10 segundos)

```bash
npm start
```

El navegador se abrirá automáticamente en:
```
http://localhost:4200
```

## Paso 3️⃣: ¡Listo! 🎉

Visualiza la aplicación en tu navegador. Los cambios se reflejan automáticamente (Hot Reload).

---

## ⚡ Comandos Esenciales

```bash
# Iniciar desarrollo
npm start

# Build de producción
npm run build:prod

# Ver archivos compilados
dist/juntas-app/
```

---

## 🔧 Configuración de Formspree (Opcional)

Para que el formulario de contacto envíe emails reales:

1. Ve a https://formspree.io
2. Crea tu formulario y copia el **Form ID**
3. Abre `src/app/services/form.service.ts`
4. Reemplaza `YOUR_FORM_ID` con tu ID real

```typescript
private readonly FORMSPREE_URL = 'https://formspree.io/f/TU_ID_AQUI';
```

---

## 📁 Estructuras Principales

### Componentes
- **navbar**: Barra de navegación sticky
- **hero**: Sección principal con SVG animado
- **about**: Información sobre la banda
- **gallery**: Galería de contenido
- **contact**: Formulario de contacto
- **home**: Página principal que agrupa todo

### Servicios
- **form.service.ts**: Maneja envío de emails

### Estilos
- **styles.scss**: Estilos globales (variables, colores, utilidades)

---

## 🎨 Colores Principales

```
Rojo:   #FF1744
Dorado: #FFD700
Cian:   #00BCD4
Fondo:  #0d0d0d
```

---

## 📱 Responsivo Automático

El proyecto es 100% responsive:
- ✅ Mobile (<480px)
- ✅ Tablet (480-768px)
- ✅ Desktop (>768px)

---

## 🐛 Solución Rápida de Problemas

### Puerto 4200 ocupado?
```bash
ng serve --port 4300
```

### Cambios no se reflejan?
```bash
rm -rf .angular/
npm start
```

### Error de dependencias?
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Documentación Completa

- 📖 [README.md](README.md) - Visión general
- 📘 [INSTALACION.md](INSTALACION.md) - Guía detallada
- 📙 [DEVELOPER_GUIDE.md](DEVELOPER_GUIDE.md) - Para developers
- 📕 [NOTAS_DESARROLLO.md](NOTAS_DESARROLLO.md) - Notas técnicas
- 📓 [RESUMEN_PROYECTO.md](RESUMEN_PROYECTO.md) - Resumen completo

---

## 🎯 Próximos Pasos

Una vez que todo esté corriendo:

1. ✅ Personaliza tu información en los componentes
2. ✅ Configura Formspree para el formulario
3. ✅ Agrega tu image/logo/favicon
4. ✅ Cambia los colores si lo deseas (variables en styles.scss)
5. ✅ Deploy en Vercel, Netlify o tu servidor

---

## 💡 Tips

- **Editar contenido**: Abre `/src/app/components/*/` componentes `.html`
- **Cambiar estilos**: Edita `*.scss` de cada componente o `styles.scss`
- **Agregar secciones**: Crea nuevo componente en `/components/`
- **Debug**: Abre DevTools (F12) en el navegador

---

## 🚀 Deploy Rápido

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build:prod
# Arrastra la carpeta dist/juntas-app a https://netlify.app
```

### Firebase
```bash
firebase deploy
```

---

**¡Disfruta desarrollando con Angular y Rock Español! 🎸🔥**

```
          ♪♫
    🎸 JunTAS ♫♪
  Sí SE PUEDE 🎤
```
