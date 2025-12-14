import styles from './About.module.css';
import perfil from '../../assets/perfil.webp';

const About = () => {
  const stats = [
    { number: '2+', label: 'Años de Formación' },
    { number: '15+', label: 'Proyectos Académicos' },
    { number: '8+', label: 'Tecnologías' },
  ];

  const highlights = [
    {
      icon: '📱',
      title: 'Desarrollo Multiplataforma',
      description: 'Aplicaciones para móviles y ordenadores con Java'
    },
    {
      icon: '👥',
      title: 'Trabajo en Equipo',
      description: 'Herramientas colaborativas y comunicación efectiva'
    },
    {
      icon: '💡',
      title: 'Resolución de Problemas',
      description: 'Enfoque analítico y soluciones innovadoras'
    },
    {
      icon: '📚',
      title: 'Formación Continua',
      description: 'Constante aprendizaje de nuevas tecnologías'
    },
  ];

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Sobre Mí</h2>
        
        <div className={styles.aboutGrid}>
          <div className={styles.mainCard}>
            <div className={styles.imageSection}>
              <div className={styles.imagePlaceholder}>
                <img src={perfil} alt="Perfil" className={styles.profileImage} />
              </div>
              <div className={styles.statsGrid}>
                {stats.map((stat, index) => (
                  <div key={index} className={styles.statCard}>
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.textSection}>
              <h3 className={styles.subtitle}>¡Hola! 👋</h3>
              <p className={styles.description}>
                Estudiante de <span className={styles.highlight}>Desarrollo de Aplicaciones Multiplataforma</span> para 
                móviles y ordenadores con dominio en Java. Manejo de 
                herramientas colaborativas orientadas al buen trabajo en 
                equipo y a la mejora del clima laboral.
              </p>
              <p className={styles.description}>
                En búsqueda de una <span className={styles.highlight}>oportunidad profesional</span> que permita aplicar 
                los conocimientos adquiridos hasta el momento.
              </p>
              
              <div className={styles.experienceBox}>
                <div className={styles.experienceHeader}>
                  <span className={styles.experienceIcon}>💼</span>
                  <h4 className={styles.experienceTitle}>Experiencia Laboral</h4>
                </div>
                <div className={styles.experienceItem}>
                  <h5 className={styles.experienceRole}>Desarrollador en proyecto de IA con Python</h5>
                  <div className={styles.experienceDetails}>
                    <span className={styles.experienceCompany}>ThePower (Madrid)</span>
                    <span className={styles.experiencePeriod}>2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
                <h2>Habilidades Blandas</h2>
          <div className={styles.highlightsGrid}>
            {highlights.map((item, index) => (
              <div key={index} className={styles.highlightCard}>
                <div className={styles.highlightIcon}>{item.icon}</div>
                <h4 className={styles.highlightTitle}>{item.title}</h4>
                <p className={styles.highlightDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
