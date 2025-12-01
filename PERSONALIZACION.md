# 📝 Guía de Personalización

## Pasos para personalizar tu portafolio

### 1. Información Personal

#### Hero Section (`src/components/Hero/Hero.tsx`)
- Cambia "Tu Nombre" por tu nombre real
- Actualiza tu título profesional
- Modifica la descripción según tu experiencia

#### About Section (`src/components/About/About.tsx`)
- Escribe tu biografía personal
- Agrega tu foto en lugar del placeholder
- Cuenta tu historia profesional

#### Contact Section (`src/components/Contact/Contact.tsx`)
- Actualiza tu email, teléfono y ubicación
- Añade tus enlaces de redes sociales (GitHub, LinkedIn, Twitter)
- Configura un servicio de envío de formularios (EmailJS, Formspree, etc.)

### 2. Proyectos

Edita `src/components/Projects/Projects.tsx`:

```typescript
const projects = [
  {
    title: 'Nombre de tu proyecto',
    description: 'Descripción detallada',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '🚀', // Puedes usar emojis o rutas de imágenes
    github: 'https://github.com/tu-usuario/proyecto',
    demo: 'https://tu-proyecto-demo.com'
  },
  // Agrega más proyectos...
];
```

### 3. Habilidades

Edita `src/components/Skills/Skills.tsx`:

```typescript
const skills = [
  { name: 'React', level: 90 },
  { name: 'Python', level: 85 },
  // Agrega tus habilidades...
];
```

### 4. Colores y Tema

Edita las variables en `src/index.css`:

```css
:root {
  --primary-color: #tu-color;
  --secondary-color: #tu-color;
}
```

O cambia los gradientes en los archivos CSS de cada componente.

### 5. Agregar Foto Personal

1. Coloca tu foto en `src/assets/`
2. Importa en `About.tsx`:
```typescript
import tuFoto from '../assets/tu-foto.jpg';
```
3. Reemplaza el placeholder:
```typescript
<img src={tuFoto} alt="Tu Nombre" />
```

### 6. Configurar Formulario de Contacto

#### Opción 1: EmailJS
```bash
npm install @emailjs/browser
```

#### Opción 2: Formspree
Añade el action a tu formulario:
```html
<form action="https://formspree.io/f/tu-id">
```

### 7. SEO y Meta Tags

Edita `index.html`:

```html
<title>Tu Nombre - Portafolio</title>
<meta name="description" content="Tu descripción">
<meta name="keywords" content="tus, palabras, clave">
```

### 8. Despliegue

#### GitHub Pages
```bash
npm install --save-dev gh-pages
```

Añade a `package.json`:
```json
"homepage": "https://tu-usuario.github.io/portafolio"
```

#### Netlify o Vercel
- Conecta tu repositorio
- El build command es: `npm run build`
- El publish directory es: `dist`

## 📚 Recursos Adicionales

- [React Icons](https://react-icons.github.io/react-icons/)
- [Google Fonts](https://fonts.google.com/)
- [Color Hunt](https://colorhunt.co/)
- [Unsplash](https://unsplash.com/) - Imágenes gratis

## 🎨 Sugerencias de Diseño

1. Mantén un esquema de colores consistente
2. Usa espaciado generoso
3. Asegúrate de que sea responsive
4. Optimiza las imágenes
5. Prueba en diferentes navegadores
