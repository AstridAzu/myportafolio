import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Header.module.css';
import logo from '../../assets/logo.png';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Detectar sección activa
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'hero', label: 'Inicio', icon: '🏠' },
    { id: 'about', label: 'Sobre Mí', icon: '👤' },
    { id: 'skills', label: 'Habilidades', icon: '⚡' },
    { id: 'projects', label: 'Proyectos', icon: '💼' },
    { id: 'contact', label: 'Contacto', icon: '📧' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" className={styles.logoImage} />
        </div>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map(item => (
              <li key={item.id}>
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className={activeSection === item.id ? styles.active : ''}
                >
                  <span className={styles.navIcon}>{item.icon}</span>
                  <span className={styles.navLabel}>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <button 
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <span className={styles.themeIcon}>
            {theme === 'light' ? '🌙' : '☀️'}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
