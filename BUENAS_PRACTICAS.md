# 🚀 Guía de Buenas Prácticas

## ECMAScript Moderno

### 1. Arrow Functions
```typescript
// ✅ Buena práctica
const handleClick = () => {
  console.log('Clicked!');
};

// ❌ Evitar
function handleClick() {
  console.log('Clicked!');
}
```

### 2. Destructuring
```typescript
// ✅ Props destructuring
const Component = ({ title, description }: Props) => {
  return <div>{title}</div>;
};

// ✅ Object destructuring
const { name, email } = formData;

// ✅ Array destructuring
const [state, setState] = useState(false);
```

### 3. Template Literals
```typescript
// ✅ Buena práctica
const message = `Hola ${name}, bienvenido!`;

// ❌ Evitar
const message = 'Hola ' + name + ', bienvenido!';
```

### 4. Optional Chaining
```typescript
// ✅ Buena práctica
const userName = user?.profile?.name;
element?.scrollIntoView({ behavior: 'smooth' });

// ❌ Evitar
const userName = user && user.profile && user.profile.name;
```

### 5. Nullish Coalescing
```typescript
// ✅ Buena práctica
const value = inputValue ?? 'default';

// ❌ Evitar
const value = inputValue !== null && inputValue !== undefined ? inputValue : 'default';
```

### 6. Spread Operator
```typescript
// ✅ Para objetos
setFormData(prev => ({
  ...prev,
  [name]: value
}));

// ✅ Para arrays
const newArray = [...oldArray, newItem];
```

### 7. Array Methods
```typescript
// ✅ map para transformar
const names = users.map(user => user.name);

// ✅ filter para filtrar
const activeUsers = users.filter(user => user.active);

// ✅ find para buscar
const user = users.find(user => user.id === id);

// ✅ some/every para verificar
const hasAdmin = users.some(user => user.role === 'admin');
```

## CSS Modules

### 1. Nomenclatura
```css
/* ✅ camelCase para nombres de clase */
.heroTitle { }
.navList { }
.contactForm { }

/* ❌ Evitar kebab-case en CSS Modules */
.hero-title { }
```

### 2. Importación
```typescript
// ✅ Buena práctica
import styles from './Component.module.css';

// Uso
<div className={styles.container}>
```

### 3. Múltiples Clases
```typescript
// ✅ Template literals
<div className={`${styles.btn} ${styles.btnPrimary}`}>

// ✅ Con condicionales
<div className={`${styles.card} ${isActive ? styles.active : ''}`}>

// ✅ Array join
<div className={[styles.item, styles.featured].join(' ')}>
```

### 4. Variables CSS
```css
/* ✅ Usar variables CSS para valores reutilizables */
:root {
  --primary-color: #646cff;
  --spacing-md: 1rem;
}

.button {
  color: var(--primary-color);
  padding: var(--spacing-md);
}
```

### 5. Composición
```css
/* ✅ Extender estilos */
.baseButton {
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.primaryButton {
  composes: baseButton;
  background: blue;
}
```

## TypeScript

### 1. Tipos de Props
```typescript
// ✅ Definir interfaces para props
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button = ({ label, onClick, disabled = false }: ButtonProps) => {
  // ...
};
```

### 2. Tipos de Estado
```typescript
// ✅ Tipar estado
interface User {
  name: string;
  email: string;
}

const [user, setUser] = useState<User | null>(null);
```

### 3. Event Handlers
```typescript
// ✅ Tipos específicos para eventos
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  // ...
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // ...
};
```

### 4. Type vs Interface
```typescript
// ✅ Interface para objetos y componentes
interface Props {
  title: string;
}

// ✅ Type para unions y primitivos
type Status = 'loading' | 'success' | 'error';
type ID = string | number;
```

## React Hooks

### 1. useState
```typescript
// ✅ Naming convention: [value, setValue]
const [isOpen, setIsOpen] = useState(false);
const [count, setCount] = useState(0);

// ✅ Functional updates para estado basado en valor anterior
setCount(prev => prev + 1);
```

### 2. useEffect
```typescript
// ✅ Limpieza de efectos
useEffect(() => {
  const observer = new IntersectionObserver(callback);
  
  return () => observer.disconnect(); // Cleanup
}, []);
```

### 3. Custom Hooks
```typescript
// ✅ Crear hooks reutilizables
const useLocalStorage = (key: string, initialValue: string) => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) ?? initialValue;
  });
  
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);
  
  return [value, setValue] as const;
};
```

## Estructura de Archivos

```
src/
├── components/
│   ├── Header/
│   │   ├── Header.tsx          # Componente
│   │   └── Header.module.css   # Estilos
│   └── Button/
│       ├── Button.tsx
│       ├── Button.module.css
│       └── index.ts            # Export
├── hooks/                      # Custom hooks
├── types/                      # Tipos TypeScript
├── utils/                      # Funciones utilitarias
└── constants/                  # Constantes
```

### ❌ NO Usar Barrel Files

**IMPORTANTE:** Evitar el uso de archivos `index.ts` para re-exportar componentes (barrel files).

```typescript
// ❌ EVITAR - Barrel file (index.ts)
export { default as Header } from './Header/Header';
export { default as Hero } from './Hero/Hero';
export { default as Footer } from './Footer/Footer';

// ❌ EVITAR - Importar desde barrel
import { Header, Hero, Footer } from './components';

// ✅ CORRECTO - Importar directamente
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
```

**Razones para evitar barrel files:**
1. **Tree-shaking mejorado** - Reduce el tamaño del bundle final
2. **Evita dependencias circulares** - Previene errores difíciles de depurar
3. **Desarrollo más rápido** - Vite analiza menos módulos
4. **Dependencias explícitas** - Queda claro qué se importa de dónde
5. **Hot Module Replacement más eficiente** - Actualizaciones más rápidas en desarrollo

## Performance

### 1. Lazy Loading
```typescript
// ✅ Para componentes grandes
const Projects = lazy(() => import('./components/Projects'));

<Suspense fallback={<Loading />}>
  <Projects />
</Suspense>
```

### 2. Memoization
```typescript
// ✅ useMemo para cálculos costosos
const sortedItems = useMemo(() => {
  return items.sort((a, b) => a.value - b.value);
}, [items]);

// ✅ useCallback para funciones
const handleClick = useCallback(() => {
  console.log('Clicked');
}, []);
```

## Accesibilidad

```typescript
// ✅ Semántica HTML
<button onClick={handleClick}>Click</button>

// ❌ Evitar
<div onClick={handleClick}>Click</div>

// ✅ ARIA labels
<button aria-label="Cerrar modal">×</button>

// ✅ Alt text en imágenes
<img src={photo} alt="Descripción de la imagen" />
```

## Consejos Generales

1. **Mantén componentes pequeños y enfocados**
2. **Un componente = Una responsabilidad**
3. **Extrae lógica compleja a custom hooks**
4. **Usa constantes para valores mágicos**
5. **Comenta código complejo, no obvio**
6. **Escribe tests para lógica crítica**
7. **Usa TypeScript estricto**
8. **Mantén estilos modulares y reutilizables**
