# 🎨 Guía Rápida - Nuevo Diseño Bento + Modo Oscuro

## 🚀 Ver Tu Portafolio

El servidor está corriendo en:
**http://localhost:5175/**

¡Abre este enlace en tu navegador para ver los cambios!

## 🌓 Probar el Modo Claro/Oscuro

1. Busca el botón en la esquina superior derecha del header
2. Verás un icono 🌙 (modo oscuro) o ☀️ (modo claro)
3. Haz click para cambiar entre temas
4. El tema se guarda automáticamente

## 🎴 Nuevo Estilo Bento

### ¿Qué es el estilo Bento?

Es un diseño moderno tipo "dashboard" con:
- **Cards redondeadas** con bordes grandes (24px)
- **Sombras en capas** que dan profundidad
- **Espaciado generoso** entre elementos
- **Hover effects** con elevación 3D
- **Bordes de color** que aparecen al hover

### Características Visuales

✅ **Gradientes suaves** en textos y botones
✅ **Animaciones fluidas** (0.3s cubic-bezier)
✅ **Sombras adaptativas** según el tema
✅ **Bordes sutiles** que destacan al hover
✅ **Efectos shimmer** en barras de progreso

## 🎨 Personalizar Colores

### Opción 1: Cambiar Variables CSS

Edita `src/index.css`:

```css
[data-theme='light'] {
  --primary-color: #tu-color;
  --secondary-color: #tu-color;
  --accent-color: #tu-color;
}
```

### Opción 2: Colores Predefinidos

El portafolio usa una paleta profesional:
- **Primario**: Índigo (#6366f1)
- **Secundario**: Púrpura (#8b5cf6)  
- **Acento**: Rosa (#ec4899)

## 📐 Usar BentoGrid en Nuevas Secciones

```tsx
import { BentoGrid, BentoCard } from './components';

function MiSeccion() {
  return (
    <BentoGrid>
      {/* Card pequeña */}
      <BentoCard size="small">
        <h3>Título</h3>
        <p>Contenido...</p>
      </BentoCard>

      {/* Card mediana */}
      <BentoCard size="medium">
        <h3>Título</h3>
        <p>Contenido...</p>
      </BentoCard>

      {/* Card grande */}
      <BentoCard size="large">
        <h3>Título</h3>
        <p>Contenido...</p>
      </BentoCard>

      {/* Card ancho completo */}
      <BentoCard size="wide">
        <h3>Título</h3>
        <p>Contenido...</p>
      </BentoCard>
    </BentoGrid>
  );
}
```

## 🎯 Tamaños de Cards

| Tamaño | Columnas | Mejor para |
|--------|----------|------------|
| `small` | 3 | Stats, iconos, números |
| `medium` | 4 | Cards estándar |
| `large` | 6 | Contenido destacado |
| `wide` | 12 | Headers, banners |
| `tall` | 4 | Contenido vertical |

## 🌈 Sistema de Temas

### Acceder al Tema Actual

```tsx
import { useTheme } from './context/ThemeContext';

function MiComponente() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div>
      <p>Tema actual: {theme}</p>
      <button onClick={toggleTheme}>Cambiar</button>
    </div>
  );
}
```

### Variables Disponibles

En cualquier CSS Module:

```css
.miElemento {
  /* Colores principales */
  color: var(--primary-color);
  background: var(--secondary-color);
  border-color: var(--accent-color);
  
  /* Backgrounds */
  background: var(--bg-primary);
  background: var(--bg-secondary);
  background: var(--bg-tertiary);
  background: var(--bg-card);
  
  /* Textos */
  color: var(--text-primary);
  color: var(--text-secondary);
  color: var(--text-tertiary);
  
  /* Sombras */
  box-shadow: var(--shadow-sm);
  box-shadow: var(--shadow-md);
  box-shadow: var(--shadow-lg);
  box-shadow: var(--shadow-xl);
  
  /* Bordes */
  border-color: var(--border-color);
}
```

## 🎨 Efectos Visuales Implementados

### 1. Borde Superior Animado
Al pasar el mouse sobre cards, aparece un borde superior con gradiente.

### 2. Elevación 3D
Cards se elevan 4-8px con sombras más profundas.

### 3. Shimmer en Progress Bars
Las barras de Skills tienen un efecto de brillo que se mueve.

### 4. Gradientes en Textos
Títulos importantes usan gradientes de color.

### 5. Blur Background
El header tiene efecto de blur en el fondo.

## 📱 Responsive

El diseño se adapta automáticamente:

- **Desktop**: Grid de 12 columnas
- **Tablet**: Grid de 8 columnas  
- **Mobile**: Todo a ancho completo (4 columnas)

## 🎭 Animaciones

Todas las animaciones usan:
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

Para una sensación suave y profesional.

## 🔧 Personalización Rápida

### Cambiar Radio de Bordes

En `BentoGrid.module.css`:
```css
.bentoCard {
  border-radius: 16px; /* Cambia este valor */
}
```

### Cambiar Sombras

En `index.css`:
```css
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
/* Ajusta los valores */
```

### Cambiar Gradientes

```css
background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
/* Cambia el ángulo (135deg) o los colores */
```

## 🐛 Notas Importantes

⚠️ **Node.js Version**: El proyecto recomienda Node.js 20.19+ o 22.12+, pero funciona con 20.17.0

✅ **Puerto**: Si el 5173 está ocupado, Vite usa automáticamente otro (5174, 5175, etc.)

✅ **Hot Reload**: Los cambios en el código se reflejan automáticamente sin recargar

## 🎉 Características Destacadas

✨ **Modo oscuro profesional** - Paleta de colores optimizada
✨ **Diseño Bento moderno** - Cards con profundidad y estilo
✨ **Animaciones fluidas** - Transiciones suaves en todo
✨ **Responsive perfecto** - Se adapta a cualquier pantalla
✨ **TypeScript completo** - Code completion y type safety
✨ **CSS Modules** - Estilos encapsulados sin conflictos

## 📚 Documentación

- `CAMBIOS_BENTO_TEMA.md` - Detalles técnicos de los cambios
- `DOCUMENTACION.md` - Guía técnica completa
- `BUENAS_PRACTICAS.md` - Patrones de código
- `PERSONALIZACION.md` - Cómo personalizar contenido

## 🚀 Siguiente Paso

**¡Personaliza tu contenido!**

1. Edita `Hero.tsx` con tu nombre
2. Actualiza `About.tsx` con tu biografía
3. Agrega tus proyectos reales en `Projects.tsx`
4. Actualiza tus habilidades en `Skills.tsx`
5. Cambia los datos de contacto en `Contact.tsx`

---

**¡Disfruta tu nuevo portafolio con estilo Bento y modo oscuro! 🎨✨**

Para detener el servidor: `Ctrl + C` en la terminal
