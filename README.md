# 🚀 Portafolio Personal

Portafolio web personal desarrollado con React, TypeScript y Vite. Un sitio moderno y responsivo para mostrar proyectos, habilidades y experiencia profesional.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![Vite](https://img.shields.io/badge/Vite-7.2.4-purple)

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Scripts Disponibles](#scripts-disponibles)
- [Personalización](#personalización)
- [Despliegue](#despliegue)
- [Contribución](#contribución)
- [Licencia](#licencia)

## ✨ Características

- ⚡ **Rápido y Moderno**: Construido con Vite para un desarrollo ultrarrápido
- 📱 **Responsive Design**: Adaptado a todos los dispositivos
- 🎨 **Diseño Limpio**: Interfaz profesional y minimalista
- 🔧 **TypeScript**: Código tipado para mayor seguridad
- 🎯 **SEO Optimizado**: Preparado para motores de búsqueda
- 🧩 **CSS Modules**: Estilos encapsulados sin conflictos
- 🎪 **Smooth Animations**: Animaciones fluidas con Intersection Observer
- ♿ **Accesibilidad**: Código semántico y accesible

## 🛠️ Tecnologías

- **React 19.2.0**: Librería para construir interfaces de usuario
- **TypeScript 5.9.3**: Superset de JavaScript con tipado estático
- **Vite 7.2.4**: Build tool y dev server de última generación
- **CSS Modules**: Estilos modulares y con scope local
- **ESLint**: Linter para mantener código limpio y consistente
- **ECMAScript Moderno**: Arrow functions, destructuring, optional chaining, etc.

## 📦 Instalación

### Prerrequisitos

- Node.js (v18 o superior)
- npm o yarn

### Pasos

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/portafolio.git
cd portafolio
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 🚀 Uso

### Modo Desarrollo

```bash
npm run dev
```

El servidor se iniciará en `http://localhost:5173` con hot module replacement (HMR).

### Compilar para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

### Vista Previa de Producción

```bash
npm run preview
```

## 📂 Estructura del Proyecto

```
portafolio/
├── public/              # Archivos estáticos
├── src/
│   ├── assets/         # Imágenes, iconos, etc.
│   ├── components/     # Componentes reutilizables
│   │   ├── Header/
│   │   ├── About/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── styles/         # Estilos globales
│   ├── types/          # Tipos de TypeScript
│   ├── utils/          # Funciones utilitarias
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Punto de entrada
│   └── index.css       # Estilos globales
├── index.html          # HTML principal
├── package.json
├── tsconfig.json       # Configuración de TypeScript
├── vite.config.ts      # Configuración de Vite
└── README.md
```

## 📜 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Compila la aplicación para producción |
| `npm run preview` | Vista previa del build de producción |
| `npm run lint` | Ejecuta ESLint para revisar el código |

## 🎨 Personalización

### Información Personal

Edita los componentes en `src/components/` para personalizar:

- **About**: Tu biografía y presentación
- **Projects**: Tus proyectos destacados
- **Skills**: Tus habilidades técnicas
- **Contact**: Tus datos de contacto

### Estilos

Los estilos están organizados por componente. Puedes modificar:

- `src/index.css`: Estilos globales y variables CSS
- `src/App.css`: Estilos del componente principal
- Cada componente tiene su propio archivo CSS

### Colores y Temas

Modifica las variables CSS en `src/index.css`:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  /* ... más variables */
}
```

## 🌐 Despliegue

### Netlify

```bash
npm run build
# Sube la carpeta dist/ a Netlify
```

### Vercel

```bash
npm run build
# Sube la carpeta dist/ a Vercel
```

### GitHub Pages

Usa el paquete `gh-pages`:

```bash
npm install --save-dev gh-pages
```

Agrega al `package.json`:

```json
"homepage": "https://tu-usuario.github.io/portafolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

Hecho con ❤️ por [Tu Nombre]
