import React, { useEffect, useState } from 'react';
import OriginalCodeBlock from '@theme-original/CodeBlock';
import { highlightTerraCode } from '../../utils/terraHighlighter';

interface CodeBlockProps {
  children: string;
  language?: string;
  className?: string;
  metastring?: string;
  [key: string]: any;
}

const CustomCodeBlock: React.FC<CodeBlockProps> = (props) => {
  const { children, ...rest } = props;
  const language =
    props.language ||
    (props.className?.includes('language-') ? props.className.replace('language-', '') : undefined) ||
    (props.metastring?.match(/{([^}]+)}/)?.[1]);

  const isInline = !props.className && !props.metastring;
  const code = String(children).replace(/\n$/, '');

  if (language === 'terra') {
    const [highlighted, setHighlighted] = useState('');

    useEffect(() => {
      console.log('Highlighting Terra code:', code, 'isInline:', isInline);
      highlightTerraCode(code, isInline)
        .then((result) => {
          console.log('Highlighting successful, result:', result);
          setHighlighted(result);
        })
        .catch((error) => {
          console.error('Highlighting error:', error);
          setHighlighted(isInline ? 'Error' : 'Error highlighting code');
        });
    }, [code, isInline]);

    if (isInline) {
      return <code dangerouslySetInnerHTML={{ __html: highlighted }} />;
    }

    return (
      <div className="terra-code-container" style={{ position: 'relative' }}>
        <pre className="language-terra">
          <code dangerouslySetInnerHTML={{ __html: highlighted }} />
        </pre>
        <button
          className="terra-copy-btn"
          aria-label="Copy code to clipboard"
          onClick={() => {
            navigator.clipboard.writeText(code);
            const btn = document.activeElement as HTMLButtonElement;
            btn.classList.add('copied');
            setTimeout(() => btn.classList.remove('copied'), 2000);
          }}
        >
          <svg viewBox="0 0 24 24" className="copy-icon">
            <path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />
          </svg>
          <svg viewBox="0 0 24 24" className="copied-icon">
            <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
          </svg>
        </button>
      </div>
    );
  }

  return <OriginalCodeBlock {...props} />;
};

export default CustomCodeBlock;