import React from 'react';
import DocItem from '@theme-original/DocItem';
import type { Props } from '@theme/DocItem';
import FeatureNavigation from '../../components/FeatureNavigation';
import type { PropDocContent } from '@docusaurus/plugin-content-docs';

// Use PropDocContent directly, no need to redefine
type ExtendedDocItemProps = Props; // No need to extend further since Props already has content: PropDocContent

const featureOrder: string[] = [
  'script-with-c-performance',
  'multistage-programming',
  'backwards-compatible-with-c',
  'scope-based-resource-management',
  'exascale-computing',
  'powerful-standard-library', // Fixed typo from 'powerful-standard-standard'
];

const CustomDocItem: React.FC<ExtendedDocItemProps> = (props) => {
  console.log('CustomDocItem full props:', props);

  const { content } = props;

  // content.metadata should be available directly
  const { metadata } = content;

  if (!metadata) {
    console.error('CustomDocItem: No metadata available', props);
    return <DocItem {...props} />;
  }

  console.log('CustomDocItem metadata:', metadata);

  const isFeaturePage = metadata.id.startsWith('features/');
  const featureId = isFeaturePage ? metadata.id.replace('features/', '') : null;

  console.log('Is feature page?', isFeaturePage);
  console.log('Feature ID:', featureId);

  return (
    <>
      <DocItem {...props} />
      {isFeaturePage && featureId && (
        <FeatureNavigation currentId={featureId} />
      )}
    </>
  );
};

export default CustomDocItem;