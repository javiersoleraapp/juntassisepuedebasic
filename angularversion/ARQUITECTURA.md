# 🏗️ Arquitectura del Proyecto Angular

## Diagrama de Componentes

```
┌─────────────────────────────────────────────────────────────┐
│                        APP COMPONENT                         │
│                   (app.component.ts)                         │
└─────────────────────────────────────────────────────────────┘
                               │
                ┌──────────────┼──────────────┐
                │              │              │
                ▼              ▼              ▼
           NAVBAR         ROUTER-OUTLET      (Bootstrap)
        component         (Navegación)
                               │
                               ▼
                    ┌──────────────────────┐
                    │  HOME COMPONENT      │
                    │ (Orquesta todo)      │
                    └──────────────────────┘
                               │
            ┌──────────────────┼────────────────────┐
            │                  │                    │
            ▼                  ▼                    ▼
        ┌────────┐        ┌────────┐         ┌────────────┐
        │ HERO   │        │ ABOUT  │         │ GALLERY    │
        │Component│        │Component         │ Component  │
        └────────┘        └────────┘         └────────────┘
            │                  │                    │
            └──────────────────┼────────────────────┘
                               │
                               ▼
                        ┌──────────────┐
                        │ CONTACT      │
                        │ Component    │
                        └──────────────┘
                               │
                               ▼
                        ┌──────────────┐
                        │ FOOTER       │
                        └──────────────┘
```

---

## Flujo de Datos

```
USER INTERACTION
       │
       ▼
   COMPONENT
    (Template)
       │
       ├─────► Event Binding (click, input, submit)
       │
       ▼
COMPONENT CLASS
  (TypeScript)
       │
       ├─────► Signal / Signal.set()
       ├─────► Method Call
       ├─────► Service Call
       │
       ▼
    SERVICE
  (form.service.ts)
       │
       ├─────► HttpClient
       │
       ▼
   FORMSPREE API
       │
       ▼
    EMAIL
```

---

## Estructura de Directorios Detallada

```
angularversion/
│
├── 📋 CONFIGURACIÓN
│   ├── package.json              # Dependencias npm
│   ├── angular.json              # Configuración CLI
│   ├── tsconfig.json             # TypeScript global
│   ├── tsconfig.app.json         # TypeScript app
│   ├── tsconfig.spec.json        # TypeScript tests
│   └── .gitignore                # Git ignore rules
│
├── 📚 DOCUMENTACIÓN
│   ├── README.md                 # Overview
│   ├── README_DETALLADO.md       # Docs completas
│   ├── QUICKSTART.md             # Inicio rápido
│   ├── INSTALACION.md            # Installation guide
│   ├── DEVELOPER_GUIDE.md        # Dev guide
│   ├── NOTAS_DESARROLLO.md       # Tech notes
│   └── RESUMEN_PROYECTO.md       # Project summary
│
└── src/
    │
    ├── main.ts                   # Entry point (bootstrap)
    ├── index.html                # HTML raíz
    ├── styles.scss               # Global styles
    │
    └── app/
        │
        ├── app.component.ts      # Root component
        ├── app.routing.ts        # Routes configuration
        │
        ├── components/
        │   │
        │   ├── navbar/
        │   │   ├── navbar.component.ts
        │   │   ├── navbar.component.html
        │   │   └── navbar.component.scss
        │   │
        │   ├── hero/
        │   │   ├── hero.component.ts
        │   │   ├── hero.component.html
        │   │   └── hero.component.scss
        │   │
        │   ├── about/
        │   │   ├── about.component.ts
        │   │   ├── about.component.html
        │   │   └── about.component.scss
        │   │
        │   ├── gallery/
        │   │   ├── gallery.component.ts
        │   │   ├── gallery.component.html
        │   │   └── gallery.component.scss
        │   │
        │   ├── contact/
        │   │   ├── contact.component.ts
        │   │   ├── contact.component.html
        │   │   └── contact.component.scss
        │   │
        │   └── home/
        │       └── home.component.ts
        │
        ├── services/
        │   └── form.service.ts
        │
        └── environments/
            ├── environment.ts
            └── environment.prod.ts
```

---

## Ciclo de Vida de Componentes

```
┌─────────────────────────────────────────────────────────┐
│         COMPONENTE STANDALONE (Angular 17)              │
└─────────────────────────────────────────────────────────┘

                    CREACIÓN
                       ▼
        ┌──────────────────────────────┐
        │ 1. CONSTRUCTOR               │
        │    (Inyección de servicios)  │
        └──────────────────────────────┘
                       │
                       ▼
        ┌──────────────────────────────┐
        │ 2. TEMPLATE RENDERING        │
        │    (HTML + Directives)       │
        └──────────────────────────────┘
                       │
                       ▼
        ┌──────────────────────────────┐
        │ 3. DATA BINDING              │
        │    ({{ }}, [property], etc)  │
        └──────────────────────────────┘
                       │
                       ▼
        ┌──────────────────────────────┐
        │ 4. EVENT LISTENERS           │
        │    (click, input, change)    │
        └──────────────────────────────┘
                       │
                       ▼
        ┌──────────────────────────────┐
        │ 5. SIGNAL UPDATES            │
        │    (.set() / ())(             │
        └──────────────────────────────┘
                       │
                       ▼
        ┌──────────────────────────────┐
        │ 6. CHANGE DETECTION          │
        │    (Re-render si aplica)     │
        └──────────────────────────────┘
                       │
                       ▼
        ┌──────────────────────────────┐
        │ 7. DESTUCCIÓN                │
        │    (Cleanup / Memory)        │
        └──────────────────────────────┘
```

---

## State Management con Signals

```
┌──────────────────────────────────────┐
│        SIGNAL (Reactive Variable)    │
└──────────────────────────────────────┘

    mySignal = signal('initial value')

            │
    ┌───────┼───────┐
    │       │       │
    ▼       ▼       ▼
  Read   Write   Watch
    │       │       │
    │       │       └─► watch(mySignal, ...)
    │       │
    │       └─► mySignal.set('new value')
    │
    └─► mySignal()  (obtener valor)

        ┌────────────────────────┐
        │ COMPUTED Signals       │
        │ (Valores derivados)    │
        └────────────────────────┘

        doubleValue = computed(() => mySignal() * 2)
```

---

## Routing Flow

```
URL CHANGE
    │
    ▼
┌─────────────────────┐
│ Router matches path │
└─────────────────────┘
    │
    ▼
┌─────────────────────────────────────┐
│ Check if lazy loading required      │
└─────────────────────────────────────┘
    │              │
    NO             YES
    │              │
    ▼              ▼
Load component   Import module
immediately       dynamically
    │              │
    └──────┬───────┘
           │
           ▼
    ┌──────────────────┐
    │ Instanciate      │
    │ component        │
    └──────────────────┘
           │
           ▼
    ┌──────────────────┐
    │ Render on        │
    │ <router-outlet>  │
    └──────────────────┘
```

---

## Form Flow

```
USER SUBMITS FORM
        │
        ▼
FORM VALIDATION
 (check required
  email format
  etc)
        ├─ ❌ INVALID
        │    └─► Show error message
        │
        └─ ✅ VALID
           │
           ▼
     LOADING STATE
    (disabled button,
     show spinner)
           │
           ▼
  CALL form.service.ts
           │
           ▼
  HttpClient.post()
  (Formspree endpoint)
           │
    ┌──────┴──────┐
    │             │
    ▼             ▼
SUCCESS        ERROR
  │              │
  ▼              ▼
✅ Message   ❌ Message
Reset form
Clear inputs
```

---

## Service Architecture

```
┌────────────────────────────────────┐
│      FORM SERVICE                  │
│  (providedIn: 'root')              │
└────────────────────────────────────┘
           │
           ├─► Constructor(HttpClient)
           │   (Inyección de HttpClient)
           │
           ├─► submitContact()
           │   ├─► Validar entrada
           │   ├─► Crear payload
           │   ├─► POST a Formspree
           │   └─► Return Observable
           │
           └─► Usado por: ContactComponent
```

---

## HTTP Request Flow

```
ContactComponent
        │
        ├─► Call service.submitContact(data)
        │
        ├─► Service:
        │   ├─ Build request
        │   ├─ Add headers
        │   ├─ POST to endpoint
        │   └─ Return Observable
        │
        ├─► Component:
        │   ├─ Subscribe to Observable
        │   ├─ Handle success
        │   │  └─► Show success message
        │   │
        │   └─► Handle error
        │       └─► Show error message
```

---

## Responsive Breakpoints

```
┌────────────────────────────────────┐
│      TAILWIND-LIKE BREAKPOINTS     │
└────────────────────────────────────┘

Mobile
───────────────────► 480px
│
└─ Mobile First
  └─ Hide elements with hide-mobile
  └─ Stack vertically
  └─ Hamburger menu

Tablet
───────────────────► 480px - 768px
│
└─ 1-2 column layouts
└─ Medium font sizes
└─ Medium padding

Desktop
───────────────────► 769px - 968px
│
└─ 2-3 column layouts
└─ Full features
└─ Normal menu

Large Desktop
───────────────────► 968px+
│
└─ 3-4 column layouts
└─ Maximum width container
└─ Full effects
```

---

## Build Process

```
npm run build:prod
       │
       ▼
┌─────────────────────────┐
│ 1. COMPILATION          │
│ - TypeScript → JavaScript
└─────────────────────────┘
       │
       ▼
┌─────────────────────────┐
│ 2. BUNDLING             │
│ - Tree shaking
│ - Code splitting
└─────────────────────────┘
       │
       ▼
┌─────────────────────────┐
│ 3. MINIFICATION         │
│ - Remove comments
│ - Compress code
└─────────────────────────┘
       │
       ▼
┌─────────────────────────┐
│ 4. OPTIMIZATION         │
│ - Fix module ids
│ - Hash filenames
└─────────────────────────┘
       │
       ▼
    dist/juntas-app/
 (Production ready)
```

---

## Performance Optimizations

```
✅ Lazy Loading
   └─► Components load only when needed

✅ Code Splitting
   └─► Separate bundles for routes

✅ Tree Shaking
   └─► Remove unused code

✅ Minification
   └─► Reduce file size

✅ OnPush Change Detection
   └─► Reduce change detection runs

✅ TrackBy in ngFor
   └─► Efficient list rendering

✅ SCSS Variables
   └─► Single source of truth

✅ Signals
   └─► Fine-grained reactivity
```

---

**Esta arquitectura es moderna, escalable y sigue las mejores prácticas de Angular 17.** 🚀
