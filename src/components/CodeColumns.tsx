import React from 'react';

interface CodeColumnsProps {
  children: React.ReactNode;
}

interface CodeColumnProps extends CodeColumnsProps {
  title?: string;
}

export const CodeColumns: React.FC<CodeColumnsProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {children}
    </div>
  );
};

export const CodeColumn: React.FC<CodeColumnProps> = ({ children, title }) => {
  return (
    <div style={{ flex: 1, minWidth: '300px' }}>
      {title && (
        <div
          style={{
            color: 'var(--ifm-font-color-base)', // Black in light, white in dark
            padding: '0.5rem 1rem',
            borderRadius: 'var(--ifm-pre-border-radius, 4px) var(--ifm-pre-border-radius, 4px) 0 0',
            borderBottom: 'none',
            fontSize: '0.9rem',
            fontWeight: 'bold',
          }}
        >
          {title}
        </div>
      )}
      <div
        style={{
          marginTop: title ? '0' : 'inherit',
          borderRadius: title ? '0 0 var(--ifm-pre-border-radius, 4px) var(--ifm-pre-border-radius, 4px)' : 'var(--ifm-pre-border-radius, 4px)',
          overflow: 'hidden',
        }}
      >
        {children}
      </div>
    </div>
  );
};