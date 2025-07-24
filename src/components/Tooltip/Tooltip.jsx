import React, { useState, useEffect, useRef } from 'react';
import './ToolTip.css';

const Tooltip = ({ 
  target, 
  position = 'top', 
  style = {}, 
  text = '', 
  image = null,
  isVisible = false,
  onClose = null 
}) => {
  const [showTooltip, setShowTooltip] = useState(isVisible);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const targetRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    setShowTooltip(isVisible);
  }, [isVisible]);

  useEffect(() => {
    if (showTooltip && targetRef.current) {
      calculatePosition();
    }
  }, [showTooltip, position, targetRef.current]);

  const calculatePosition = () => {
    if (!targetRef.current || !tooltipRef.current) return;

    const targetRect = targetRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const containerRect = targetRef.current.closest('.mobile-preview')?.getBoundingClientRect() || { left: 0, top: 0 };

    let top = 0;
    let left = 0;

    switch (position) {
      case 'top':
        top = targetRect.top - containerRect.top - tooltipRect.height - 10;
        left = targetRect.left - containerRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
        break;
      case 'bottom':
        top = targetRect.bottom - containerRect.top + 10;
        left = targetRect.left - containerRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
        break;
      case 'left':
        top = targetRect.top - containerRect.top + (targetRect.height / 2) - (tooltipRect.height / 2);
        left = targetRect.left - containerRect.left - tooltipRect.width - 10;
        break;
      case 'right':
        top = targetRect.top - containerRect.top + (targetRect.height / 2) - (tooltipRect.height / 2);
        left = targetRect.right - containerRect.left + 10;
        break;
      default:
        break;
    }

    // Ensure tooltip stays within container bounds
    if (left < 0) left = 10;
    if (left + tooltipRect.width > containerRect.width) left = containerRect.width - tooltipRect.width - 10;
    if (top < 0) top = 10;
    if (top + tooltipRect.height > containerRect.height) top = containerRect.height - tooltipRect.height - 10;

    setTooltipPosition({ top, left });
  };

  const handleMouseEnter = () => {
    if (!isVisible) {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isVisible) {
      setShowTooltip(false);
    }
  };

  const handleClose = () => {
    setShowTooltip(false);
    if (onClose) onClose();
  };

  const tooltipStyle = {
    position: 'absolute',
    top: `${tooltipPosition.top}px`,
    left: `${tooltipPosition.left}px`,
    fontSize: style.textSize || '14px',
    padding: style.padding || '12px',
    color: style.textColor || '#ffffff',
    backgroundColor: style.backgroundColor || '#333333',
    borderRadius: style.cornerRadius || '8px',
    width: style.tooltipWidth || 'auto',
    maxWidth: style.tooltipWidth || '200px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    zIndex: 1000,
    ...style
  };

  return (
    <div className="tooltip-wrapper" style={{ position: 'relative', display: 'inline-block' }}>
      <div
        ref={targetRef}
        className="tooltip-target"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ display: 'inline-block' }}
      >
        {target}
      </div>
      
      {showTooltip && (
        <div
          ref={tooltipRef}
          className={`tooltip tooltip-${position}`}
          style={tooltipStyle}
        >
          <div className="tooltip-content">
            {text && <div className="tooltip-text">{text}</div>}
            {image && (
              <div className="tooltip-image">
                <img src={image} alt="Tooltip" style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
            )}
          </div>
          
          <div className={`tooltip-arrow tooltip-arrow-${position}`} />
          
          {isVisible && (
            <button 
              className="tooltip-close"
              onClick={handleClose}
              style={{
                position: 'absolute',
                top: '4px',
                right: '4px',
                background: 'none',
                border: 'none',
                color: style.textColor || '#ffffff',
                cursor: 'pointer',
                fontSize: '16px',
                padding: '2px',
                lineHeight: 1
              }}
            >
              ×
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
