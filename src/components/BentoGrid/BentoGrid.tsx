import styles from './BentoGrid.module.css';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'wide' | 'tall';
}

export const BentoCard = ({ children, className = '', size = 'medium' }: BentoCardProps) => {
  return (
    <div className={`${styles.bentoCard} ${styles[size]} ${className}`}>
      {children}
    </div>
  );
};

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoGrid = ({ children, className = '' }: BentoGridProps) => {
  return (
    <div className={`${styles.bentoGrid} ${className}`}>
      {children}
    </div>
  );
};
