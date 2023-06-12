import React, { useState } from 'react';
import './ToolTip.css'; // Import CSS file for styling

const Tooltip = ({ target, position, style, text, image }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const getPositionStyles = () => {
    switch (position) {
      case 'top':
        return {
          top: target.offsetTop - 10,
          left: target.offsetLeft + target.offsetWidth / 2,
        };
      case 'right':
        return {
          top: target.offsetTop + target.offsetHeight / 2,
          left: target.offsetLeft + target.offsetWidth + 10,
        };
      case 'bottom':
        return {
          top: target.offsetTop + target.offsetHeight + 10,
          left: target.offsetLeft + target.offsetWidth / 2,
        };
      case 'left':
        return {
          top: target.offsetTop + target.offsetHeight / 2,
          left: target.offsetLeft - 10,
          transform: 'translateX(-100%)'
        };
      default:
        return {};
    }
  };

  const tooltipStyle = {
    fontSize: style.textSize,
    padding: style.padding,
    color: 'white', 
    backgroundColor: 'black', 
    borderRadius: style.cornerRadius,
    width: style.tooltipWidth,
  };

  const arrowStyle = {
    width: style.arrowWidth,
    height: style.arrowHeight,
    backgroundColor: style.backgroundColor,
  };

  return (
    <div className="tooltip-container">
      <div
        className="tooltip-target"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={(node) => (target = node)}
      >
        {target}
      </div>
      {showTooltip && (
        <div
          className={`tooltip tooltip-${position}`}
          style={{ ...getPositionStyles(), ...tooltipStyle }}
        >
          <div className={`tooltip-arrow tooltip-arrow-${position}`} style={arrowStyle} />
          {text}
          {image && <img src={image} alt="Tooltip" />}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
