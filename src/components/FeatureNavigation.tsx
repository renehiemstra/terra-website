import React from 'react';
import Link from '@docusaurus/Link';
import styles from './FeatureNavigation.module.css';

interface FeatureNavigationProps {
  currentId: string;
}

const featureOrder: string[] = [
  'script-with-c-performance',
  'multistage-programming',
  'backwards-compatible-with-c',
  'scope-based-resource-management',
  'exascale-computing',
  'powerful-standard-library'
];

const FeatureNavigation: React.FC<FeatureNavigationProps> = ({ currentId }) => {
  const currentIndex = featureOrder.indexOf(currentId);
  const prevFeature = currentIndex > 0 ? featureOrder[currentIndex - 1] : null;
  const nextFeature = currentIndex < featureOrder.length - 1 ? featureOrder[currentIndex + 1] : null;

  return (
    <div className={styles.navigationContainer}>
      <div className={styles.navArrows}>
        {prevFeature && (
          <Link to={`/docs/features/${prevFeature}`} className={styles.navLink}>
            ← Previous
          </Link>
        )}
        <span className={styles.spacer} />
        {nextFeature && (
          <Link to={`/docs/features/${nextFeature}`} className={styles.navLink}>
            Next →
          </Link>
        )}
      </div>
      <Link to="/" className={styles.homeLink}>
        Back to Home
      </Link>
    </div>
  );
};

export default FeatureNavigation;