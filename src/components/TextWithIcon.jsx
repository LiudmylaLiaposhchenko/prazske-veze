import React from 'react';

const TextWithIcon = ({ src, alt, children }) => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'start', textAlign: 'left' }}
    >
      <img className="icon" src={src} alt={alt} />
      <p>{children}</p>
    </div>
  );
};

export default TextWithIcon;
