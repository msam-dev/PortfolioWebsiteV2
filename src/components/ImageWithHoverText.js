import React, { useState } from 'react';

const ImageWithHoverText = ({ src, alt, text, style }) => {
  const [showHoverText, setShowHoverText] = useState(false);

  const handleMouseEnter = () => {
    setShowHoverText(true);
  };

  const handleMouseLeave = () => {
    setShowHoverText(false);
  };

  const textStyle = {
    fontSize: '12px ',
    position: 'absolute',
    bottom: '7%',
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    padding: '8px',
  };

  return (
    <div style={{ position: 'relative' }}>
      <img
        style={style}
        src={src}
        alt={alt}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {showHoverText && (<div style={textStyle}>{text}</div>)}
    </div>
  );
};

export default ImageWithHoverText;