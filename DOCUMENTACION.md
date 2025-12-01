# 📚 Documentación del Proyecto - Portafolio Web

## Descripción General

Este proyecto es un portafolio web profesional construido con las mejores prácticas de desarrollo moderno, utilizando **React 19**, **TypeScript 5.9**, **CSS Modules** y **ECMAScript moderno**.

## 🏗️ Arquitectura del Proyecto

### Estructura de Carpetas

```
src/
├── components/              # Componentes de React
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.module.css
│   ├── Hero/
│   ├── About/
│   ├── Skills/
│   ├── Projects/
│   ├── Contact/
│   ├── Footer/
│   └── index.ts            # Exportaciones centralizadas
├── hooks/                   # Custom React Hooks
│   └── index.ts
├── utils/                   # Funciones utilitarias
│   └── helpers.ts
├── constants/               # Constantes y configuración
│   └── index.ts
├── assets/                  # Imágenes y recursos
├── App.tsx                  # Componente raíz
├── App.module.css           # Estilos del App
├── main.tsx                 # Punto de entrada
└── index.css                # Estilos globales
```

## 🎨 CSS Modules

### ¿Por qué CSS Modules?

- **Scope Local**: Los estilos están limitados al componente
- **Sin Conflictos**: No hay colisión de nombres de clase
- **Type Safety**: TypeScript puede inferir los nombres de clase
- **Optimización**: Vite optimiza los estilos automáticamente

### Convenciones

```typescript
// Importar
import styles from './Component.module.css';

// Usar
<div className={styles.container}>
  <h1 className={styles.title}>Título</h1>
</div>
```

### Naming Convention

- **camelCase** para nombres de clase en CSS
- Descriptivo y específico
- Prefijos para variantes: `btn`, `btnPrimary`, `btnSecondary`

```css
/* ✅ Correcto */
.heroTitle { }
.navList { }
.btnPrimary { }

/* ❌ Evitar */
.hero-title { }
.nav_list { }
```

## 🚀 ECMAScript Moderno

### Características Utilizadas

1. **Arrow Functions**
   ```typescript
   const Component = () => { ... }
   ```

2. **Destructuring**
   ```typescript
   const { name, email } = formData;
   const [state, setState] = useState();
   ```

3. **Template Literals**
   ```typescript
   const greeting = `Hola ${name}`;
   ```

4. **Optional Chaining**
   ```typescript
   element?.scrollIntoView({ behavior: 'smooth' });
   ```

5. **Nullish Coalescing**
   ```typescript
   const value = inputValue ?? 'default';
   ```

6. **Spread Operator**
   ```typescript
   setData(prev => ({ ...prev, newValue }));
   ```

7. **Array Methods**
   ```typescript
   items.map()
   items.filter()
   items.find()
   ```

## 🔧 Componentes

### Header
- Navegación fija con smooth scroll
- Responsive con hamburger menu (ready para implementar)
- Backdrop blur effect

### Hero
- Hero section con gradiente
- Botones con animaciones
- Call to actions

### About
- Sección informativa
- Grid layout responsive
- Placeholder para foto personal

### Skills
- Barras de progreso animadas
- Intersection Observer para animaciones
- Grid adaptativo

### Projects
- Cards de proyectos
- Hover effects
- Links a GitHub y demos

### Contact
- Formulario funcional
- Validación de campos
- Links a redes sociales

### Footer
- Copyright dinámico
- Links adicionales

## 🎣 Custom Hooks

### `useIntersectionObserver`
Detecta cuando un elemento es visible en el viewport

```typescript
const isVisible = useIntersectionObserver(ref);
```

### `useLocalStorage`
Persistencia en localStorage con TypeScript

```typescript
const [value, setValue] = useLocalStorage('key', defaultValue);
```

### `useWindowSize`
Obtiene el tamaño actual de la ventana

```typescript
const { width, height } = useWindowSize();
```

### `useMediaQuery`
Maneja media queries

```typescript
const isMobile = useMediaQuery('(max-width: 768px)');
```

### `useDebounce`
Debounce de valores

```typescript
const debouncedSearch = useDebounce(searchTerm, 500);
```

## 🛠️ Utilidades

### `helpers.ts`

- `scrollToElement()`: Scroll suave a elemento
- `isValidEmail()`: Validación de email
- `formatDate()`: Formateo de fechas
- `truncateText()`: Truncar texto
- `copyToClipboard()`: Copiar al portapapeles
- `debounce()`: Debounce de funciones
- `throttle()`: Throttle de funciones
- Y más...

## 🎯 Constantes

### `COLORS`
Paleta de colores del proyecto

### `BREAKPOINTS`
Puntos de quiebre para responsive design

### `ANIMATION_DURATION`
Duraciones estándar de animaciones

### `SOCIAL_LINKS`
Links a redes sociales

## 📱 Responsive Design

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Estrategia

- Mobile First
- Grid y Flexbox para layouts
- Media queries en CSS Modules

## ⚡ Performance

### Optimizaciones Implementadas

1. **CSS Modules**: Estilos optimizados y scope local
2. **Intersection Observer**: Animaciones solo cuando es visible
3. **Event Listeners Optimizados**: `{ passive: true }`
4. **Imágenes Optimizadas**: placeholder hasta cargar real
5. **Code Splitting**: Listo para lazy loading

### Próximas Optimizaciones

- Lazy loading de componentes
- Image optimization con next/image o similar
- Service Worker para PWA
- Bundle analysis

## 🧪 Testing (Por Implementar)

### Herramientas Recomendadas

- **Vitest**: Testing unitario
- **React Testing Library**: Testing de componentes
- **Playwright**: E2E testing

## 🚀 Despliegue

### Opciones

1. **Netlify**
   - Drag & drop de carpeta `dist/`
   - GitHub integration

2. **Vercel**
   - Conectar repositorio
   - Auto-deploy en push

3. **GitHub Pages**
   ```bash
   npm install --save-dev gh-pages
   npm run deploy
   ```

### Build

```bash
npm run build
```

Genera carpeta `dist/` lista para producción.

## 📝 Personalización

### Paso a Paso

1. **Información Personal**
   - Editar `Hero.tsx`: nombre y título
   - Editar `About.tsx`: biografía
   - Editar `Contact.tsx`: datos de contacto

2. **Proyectos**
   - Editar array `projects` en `Projects.tsx`
   - Añadir links reales de GitHub y demos

3. **Habilidades**
   - Editar array `skills` en `Skills.tsx`
   - Ajustar niveles

4. **Estilos**
   - Variables CSS en `index.css`
   - Colores en `constants/index.ts`

5. **Imágenes**
   - Agregar fotos en `assets/`
   - Importar en componentes

## 🔐 Variables de Entorno (Futuro)

```env
VITE_EMAIL_SERVICE_ID=
VITE_EMAIL_TEMPLATE_ID=
VITE_EMAIL_PUBLIC_KEY=
```

## 📚 Recursos

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [CSS Modules](https://github.com/css-modules/css-modules)

## 🤝 Contribuciones

Este es un proyecto personal, pero siéntete libre de:

1. Fork el proyecto
2. Crear feature branch
3. Hacer commit de cambios
4. Push a la branch
5. Abrir Pull Request

## 📄 Licencia

MIT License - Ver LICENSE file para detalles

---

**¿Dudas o sugerencias?**

Consulta:
- `BUENAS_PRACTICAS.md` - Guía de estilo y patrones
- `PERSONALIZACION.md` - Cómo personalizar el portafolio
- `README.md` - Información general y setup
