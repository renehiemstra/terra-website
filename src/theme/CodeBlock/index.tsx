import React from 'react';
import OriginalCodeBlock from '@theme-original/CodeBlock';
import TerraCodeBlock from '../../components/TerraCodeBlock';

interface CodeBlockProps {
  children: string;
  language?: string;
  className?: string;
  metastring?: string;
  [key: string]: any;
}

const CustomCodeBlock: React.FC<CodeBlockProps> = (props) => {
  console.log('CustomCodeBlock called with props:', props);
  const language =
    props.language ||
    (props.className?.includes('language-') ? props.className.replace('language-', '') : undefined) ||
    (props.metastring?.match(/{([^}]+)}/)?.[1]);

  const isInline = !props.className && !props.metastring;
  if (language === 'terra' || isInline) {
    // Check if it's inline (no className or metastring indicates single backticks)
    return <TerraCodeBlock code={props.children} isInline={isInline} />;
  }
  return <OriginalCodeBlock {...props} />;
};

export default CustomCodeBlock;