import { useState } from 'react';
import styles from './Education.module.css';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  icon: string;
}

const Education = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [expandedSkills, setExpandedSkills] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleSkill = (index: number) => {
    console.log('toggleSkill called with index:', index);
    setExpandedSkills(prev => {
      const newState = prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index];
      console.log('New expandedSkills:', newState);
      return newState;
    });
  };

  const education: EducationItem[] = [
    {
      degree: 'Grado Superior: Desarrollo de Aplicaciones Multiplataforma',
      institution: 'Prometeo by thePower',
      location: 'Madrid, España',
      period: '2024 - Actualidad',
      icon: '🎓'
    },
    {
      degree: 'Ingeniería Empresarial',
      institution: 'UPN',
      location: 'Cajamarca, Perú',
      period: '2017 - 2022',
      icon: '🏛️'
    }
  ];

  const technicalSkills = [
    {
      category: 'Lenguajes de Programación',
      skills: ['Java', 'Python', 'HTML', 'CSS', 'MySQL', 'PHP'],
      icon: '💻'
    },
    {
      category: 'Control de Versiones',
      skills: ['GitHub', 'Scrum'],
      icon: '🔄'
    },
    {
      category: 'Sistemas Operativos',
      skills: ['Linux', 'Windows', 'VirtualBox'],
      icon: '🖥️'
    }
  ];

  return (
    <section className={styles.education} id="education">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Formación</h2>
        
        <div className={styles.educationGrid}>
          {education.map((item, index) => (
            <article key={index} className={styles.educationCard}>
              <div className={styles.cardHeader} onClick={() => toggleItem(index)}>
                <div className={styles.headerLeft}>
                  <div className={styles.iconWrapper}>
                    <span className={styles.icon}>{item.icon}</span>
                  </div>
                  <h3 className={styles.degree}>{item.degree}</h3>
                </div>
                <div 
                  className={`${styles.chevron} ${expandedItems.includes(index) ? styles.chevronExpanded : ''}`}
                  role="button"
                  aria-label={expandedItems.includes(index) ? 'Colapsar' : 'Expandir'}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </div>
              </div>
              
              {expandedItems.includes(index) && (
                <div className={styles.content}>
                  <div className={styles.institution}>
                    <span className={styles.institutionName}>{item.institution}</span>
                    <span className={styles.location}>📍 {item.location}</span>
                  </div>
                  <div className={styles.period}>
                    <span className={styles.calendar}>📅</span>
                    {item.period}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className={styles.technicalSection}>
          <h3 className={styles.technicalTitle}>Conocimientos Técnicos</h3>
          <div className={styles.skillsGrid}>
            {technicalSkills.map((category, index) => (
              <div key={index} className={styles.skillCategory}>
                <div className={styles.categoryHeader} onClick={() => toggleSkill(index)}>
                  <div className={styles.categoryLeft}>
                    <span className={styles.categoryIcon}>{category.icon}</span>
                    <h4 className={styles.categoryName}>{category.category}</h4>
                  </div>
                  <div 
                    className={`${styles.chevron} ${expandedSkills.includes(index) ? styles.chevronExpanded : ''}`}
                    role="button"
                    aria-label={expandedSkills.includes(index) ? 'Colapsar' : 'Expandir'}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </div>
                </div>
                {expandedSkills.includes(index) && (
                  <div className={styles.skillTags}>
                    {category.skills.map((skill, i) => (
                      <span key={i} className={styles.skillTag}>{skill}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
