# 🎸 JUNTAS SÍ SE PUEDE - Rock Español 80/90

Una web épica dedicada al rock español de los 80 y 90 con temática retro oscura, imágenes SVG e integración de formulario de contacto.

## 📋 Características

✅ **Responsive y Moderno**: Adaptado a todos los dispositivos  
✅ **Diseño Retro**: Colores neón (rojo, dorado, cian) sobre fondo oscuro  
✅ **Imágenes SVG**: Gráficos generados sin necesidad de cargar archivos  
✅ **Formulario Seguro**: Integración con Formspree para evitar spam  
✅ **Animaciones**: Efectos de paralax y glow en elementos  
✅ **Sin Dependencias**: Solo HTML, CSS y JavaScript vanilla  

## 🚀 Pasos Iniciales

### 1. Configurar Formspree para Formulario de Contacto

El formulario de contacto está configurado para usar **Formspree** (servicio gratuito que protege contra spam).

**Pasos:**

1. Accede a [https://formspree.io](https://formspree.io)
2. Regístrate con tu email (javiersoleraapp@gmail.com)
3. Crea un nuevo formulario
4. Copia el **Form ID** que recibirás (algo como: `xyzaabcd0123`)
5. Abre el archivo `index.html`
6. Busca esta línea en el formulario:
   ```html
   <form class="contact-form" action="https://formspree.io/f/xyzaabcd" method="POST" id="contactForm">
   ```
7. Reemplaza `xyzaabcd` por tu **Form ID** real de Formspree
8. ¡Listo! Los mensajes llegarán a tu email

### 2. Probar Localmente

Para probar la web en tu ordenador:

```bash
# Opción 1: Usar Python
python -m http.server 8000

# Opción 2: Usar Node.js (si tienes http-server instalado)
npx http-server

# Opción 3: Abrir directamente index.html en el navegador
# (Algunos navegadores modernos pueden requerir un servidor local)
```

Accede a `http://localhost:8000` en tu navegador.

---

## 📚 Pasos para Subir a GitHub

### Paso 1: Crear un Repositorio en GitHub

1. Accede a [https://github.com/new](https://github.com/new)
2. **Repository name**: `juntas-si-se-puede` (o el nombre que prefieras)
3. **Description**: "Web rock español 80/90 - Juntas Sí Se Puede"
4. Selecciona: **Public** (para poder usar Cloudflare Pages gratis)
5. Click en **Create repository**

### Paso 2: Preparar tu Repositorio Local

Abre PowerShell en la carpeta `d:\dev\juntassisepuedebasic`:

```powershell
# Inicializar git
git init

# Agregar todos los archivos
git add .

# Crear el primer commit
git commit -m "Initial commit: Web rock español Juntas Sí Se Puede"

# El repositorio ya tiene la rama master por defecto
# (Si quieres cambiarla a main: git branch -M main)

# Agregar el repositorio remoto (reemplaza TU_USUARIO con tu username de GitHub)
git remote add origin https://github.com/TU_USUARIO/juntas-si-se-puede.git

# Subir el código a GitHub
git push -u origin master
```

### Paso 3: Verificar en GitHub

- Accede a `https://github.com/TU_USUARIO/juntas-si-se-puede`
- Verifica que ves tus archivos (index.html, styles.css, script.js)

---

## 🚀 Publicar en Cloudflare Pages (Gratis)

### Paso 1: Crear Cuenta en Cloudflare

1. Accede a [https://pages.cloudflare.com](https://pages.cloudflare.com)
2. Click en **Sign up**
3. Usa tu email personal o Gmail
4. Completa la verificación

### Paso 2: Conectar GitHub a Cloudflare

1. En Cloudflare Pages, click en **Create a project**
2. Selecciona **Connect to Git**
3. Autoriza a Cloudflare a acceder a tu GitHub
4. Selecciona el repositorio `juntas-si-se-puede`
5. Click en **Begin setup**

### Paso 3: Configurar Construcción

En la pantalla de configuración:

- **Project name**: `juntas-si-se-puede` (o el nombre que prefieras)
- **Framework preset**: Selecciona **None** (porque es contenido estático)
- **Build command**: Déja **vacío** (no necesita compilación - es HTML puro)
- **Deploy command**: Pon `echo "Ready to deploy"` o simplemente `true` (Cloudflare lo requiere pero no hace nada especial)
- **Build output directory**: Deja **vacío** (o escribe `.`)

**Explicación del Deploy command:**
Como tu proyecto es solo archivos estáticos, el deploy command puede ser algo simple que simplemente confirme que todo está listo. Usa cualquiera de estas opciones:

```
echo "Ready to deploy"
```
o
```
true
```

Cloudflare ejecutará este comando antes del deploy, pero no hará nada especial porque tu sitio no necesita compilación ni procesos previos.

Click en **Save and Deploy**

### Paso 4: Esperar a que se Despliegue

Cloudflare construirá y desplegará tu web automáticamente. Verás una URL como:
```
https://juntas-si-se-puede.pages.dev
```

### Paso 5: Configurar Dominio Personalizado (Opcional)

Si tienes un dominio propio:

1. En Cloudflare Pages, va a **Custom domain**
2. Sigue los pasos para añadir tu dominio
3. Configura los DNS según las instrucciones

---

## 🔄 Actualizar la Web

Cada vez que hagas cambios:

```powershell
# En la carpeta del proyecto
git add .
git commit -m "Descripción del cambio"
git push origin master
```

Cloudflare Pages **automáticamente** construirá y desplegará los cambios. En 1-2 minutos tu web estará actualizada.

---

## 📧 Seguridad del Formulario

**¿Por qué Formspree?**

- ✅ Evita spam automático
- ✅ Valida emails
- ✅ No expone tu email en el código
- ✅ Gratis hasta 50 formularios/mes
- ✅ Sin necesidad de backend propio

---

## 🎨 Personalización

### Cambiar Colores

Edita `styles.css` y modifica las variables en `:root`:

```css
:root {
    --primary-red: #FF1744;      /* Rojo neon */
    --primary-gold: #FFD700;     /* Dorado */
    --primary-cyan: #00BCD4;     /* Cyan */
    --dark-bg: #0d0d0d;          /* Fondo oscuro */
}
```

### Cambiar Contenido

Edita `index.html` directamente. Todo está comentado y bien estructurado.

---

## 📱 Navegadores Compatibles

- Chrome/Edge: ✅ 100%
- Firefox: ✅ 100%
- Safari: ✅ 95%
- Opera: ✅ 100%

---

## 📄 Estructura del Proyecto

```
juntas-si-se-puede/
├── index.html          # Archivo principal HTML
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
└── README.md           # Este archivo
```

---

## 🎵 Créditos

Hecho con ❤️ y distorsión para el rock español.

**Influencias musicales:**
- Alaska y Dinarama
- Leño
- Barón Rojo
- Burning
- Los Secretos
- Cómplices

---

## 📝 Licencia

Este proyecto es de código abierto. Úsalo, modifícalo y comparte. 🎸

---

¿Preguntas? ¡Contacta a través del formulario en la web!

**`¡Que la música te acompañe siempre! 🎸🎤`**
