import React, { useEffect, useState } from 'react';
import { highlightTerraCode } from '../utils/terraHighlighter';

interface TerraCodeBlockProps {
  code: string;
  isInline?: boolean; // New prop to indicate inline vs block
}

const TerraCodeBlock: React.FC<TerraCodeBlockProps> = ({ code, isInline = false }) => {
  const [highlighted, setHighlighted] = useState<string>(isInline ? '' : '<pre><code>Loading...</code></pre>');

  useEffect(() => {
    console.log('TerraCodeBlock rendering with code:', code, 'isInline:', isInline);
    async function highlight() {
      try {
        const result = await highlightTerraCode(code, isInline);
        console.log('Highlighting successful, result:', result);
        setHighlighted(result);
      } catch (error) {
        console.error('Highlighting error:', error);
        setHighlighted(isInline ? 'Error' : '<pre><code>Error highlighting code</code></pre>');
      }
    }
    highlight();
  }, [code, isInline]);

  return <div dangerouslySetInnerHTML={{ __html: highlighted }} />;
};

export default TerraCodeBlock;