import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {currentYear} Tu Nombre. Todos los derechos reservados.</p>
        <p className={styles.footerSubtitle}>
          Hecho con ❤️ usando React + TypeScript + Vite
        </p>
      </div>
    </footer>
  );
};

export default Footer;
