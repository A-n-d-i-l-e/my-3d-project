import React, { CSSProperties } from 'react';

interface SectionProps {
  title: string;
  content: string;
  id: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, content, id, children }) => {
  const sectionStyle: CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  };

  return (
    <section id={id} style={sectionStyle}>
      <h2>{title}</h2>
      <p>{content}</p>
      {children}
    </section>
  );
};

export default Section;
