import styles from './Projects.module.css';
import homeapp from '../../assets/homeapp.png';
import inicio from '../../assets/Inicio.png';
import ratitagymblog from '../../assets/ratitagymbloginicio.png';
import cineStream from '../../assets/cineStream.png';
import cineStreamEstrenos from '../../assets/cineStreamEstrenos.png';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  github?: string;
  demo?: string;
  figma?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'RatitaGym App',
      description: 'Aplicación móvil diseñada en Figma para llevar un seguimiento completo del proceso físico y entrenamiento en el gimnasio. Incluye registro de ejercicios, progreso y estadísticas detalladas.',
      technologies: ['Figma', 'UI/UX Design', 'Mobile Design', 'Prototyping'],
      images: [homeapp, inicio],
      figma: 'https://www.figma.com/design/uXWgr53Q9jLobBDzptlnVx/Ratita-Gym?node-id=0-1&t=ACf24enZUZkZQXRl-1'
    },
    {
      title: 'RatitaGym Blog',
      description: 'Blog personal dedicado al fitness y entrenamiento en el gimnasio. Comparte rutinas, consejos de nutrición, experiencias personales y motivación para la comunidad fitness.',
      technologies: ['PHP', 'JavaScript', 'MySQL', 'CSS3'],
      images: [ratitagymblog],
      github: 'https://github.com/AstridAzu/MYBLOGGYM'
    },
    {
      title: 'CineStream',
      description: 'Plataforma web para explorar películas, ver detalles completos, calificaciones, reparto y descubrir próximos estrenos y películas populares. Integración con APIs de cine.',
      technologies: ['PHP', 'JavaScript', 'TMDB API', 'MySQL'],
      images: [cineStream, cineStreamEstrenos],
      github: 'https://github.com/AstridAzu/peliculas'
    },
  ];

  const handleLinkClick = (url: string) => {
    if (url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Proyectos</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <article key={index} className={styles.projectCard}>
              <div className={styles.projectImages}>
                {project.images.map((img, i) => (
                  <div key={i} className={styles.imagePlaceholder}>
                    {img ? (
                      <img src={img} alt={`${project.title} ${i + 1}`} className={styles.projectImage} />
                    ) : (
                      <div className={styles.emptyImage}>
                        <span>📷</span>
                        <p>Imagen {i + 1}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectTechnologies}>
                {project.technologies.map((tech, i) => (
                  <span key={i} className={styles.techTag}>{tech}</span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                {project.github && (
                  <button 
                    onClick={() => handleLinkClick(project.github!)} 
                    className={styles.projectLink}
                    aria-label={`Ver código de ${project.title} en GitHub`}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </button>
                )}
                {project.demo && (
                  <button 
                    onClick={() => handleLinkClick(project.demo!)} 
                    className={styles.projectLink}
                    aria-label={`Ver demo de ${project.title}`}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                    </svg>
                    Demo
                  </button>
                )}
                {project.figma && (
                  <button 
                    onClick={() => handleLinkClick(project.figma!)} 
                    className={styles.projectLink}
                    aria-label={`Ver diseño de ${project.title} en Figma`}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 2C6.343 2 5 3.343 5 5s1.343 3 3 3h3V2H8zm0 6c-1.657 0-3 1.343-3 3s1.343 3 3 3h3V8H8zm8-6c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 12c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"/>
                    </svg>
                    Figma
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
