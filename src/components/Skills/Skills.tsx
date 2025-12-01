import styles from './Skills.module.css';
import { SkillIcons } from '../../assets/skills-icons';

interface Skill {
  name: string;
  iconKey: keyof typeof SkillIcons;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: 'React', iconKey: 'React' },
    { name: 'JavaScript', iconKey: 'JavaScript' },
    { name: 'CSS', iconKey: 'CSS' },
    { name: 'HTML', iconKey: 'HTML' },
    { name: 'Git', iconKey: 'Git' },
    { name: 'SQL', iconKey: 'SQL' },
    { name: 'Java', iconKey: 'Java' },
    { name: 'PHP', iconKey: 'PHP' },
    { name: 'Figma', iconKey: 'Figma' },
    { name: 'Python', iconKey: 'Python' },
    
  ];

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Habilidades</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <div className={styles.skillIcon}>
                {SkillIcons[skill.iconKey]()}
              </div>
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
