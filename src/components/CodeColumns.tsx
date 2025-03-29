import React from 'react';

interface CodeColumnsProps {
  children: React.ReactNode;
}

export const CodeColumns: React.FC<CodeColumnsProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {children}
    </div>
  );
};

export const CodeColumn: React.FC<CodeColumnsProps> = ({ children }) => {
  return (
    <div style={{ flex: 1, minWidth: '300px' }}>
      {children}
    </div>
  );
};