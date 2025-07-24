import React, { useState, useEffect } from 'react';
import Tooltip from './components/Tooltip/Tooltip.jsx';
import './components/Tooltip/ToolTip.css';

const App = () => {
  const [tooltipConfig, setTooltipConfig] = useState({
    targetElement: 'button3',
    position: 'bottom',
    text: 'Tooltip text goes here',
    image: '',
    textSize: 3,
    padding: 3,
    textColor: '#ffffff',
    backgroundColor: '#333333',
    cornerRadius: 3,
    tooltipWidth: 3,
    arrowWidth: 3,
    arrowHeight: 3,
    isVisible: true
  });

  const [activeTooltip, setActiveTooltip] = useState('button3');

  // Load saved configuration from localStorage
  useEffect(() => {
    const savedConfig = localStorage.getItem('tooltipConfig');
    if (savedConfig) {
      setTooltipConfig(JSON.parse(savedConfig));
    }
  }, []);

  // Save configuration to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('tooltipConfig', JSON.stringify(tooltipConfig));
  }, [tooltipConfig]);

  const handleConfigChange = (key, value) => {
    setTooltipConfig(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleShowTooltip = () => {
    setActiveTooltip(tooltipConfig.targetElement);
  };

  const handleHideTooltip = () => {
    setActiveTooltip(null);
  };

  const handleResetConfig = () => {
    const defaultConfig = {
      targetElement: 'button3',
      position: 'bottom',
      text: 'Tooltip text goes here',
      image: '',
      textSize: 3,
      padding: 3,
      textColor: '#ffffff',
      backgroundColor: '#333333',
      cornerRadius: 3,
      tooltipWidth: 3,
      arrowWidth: 3,
      arrowHeight: 3,
      isVisible: true
    };
    setTooltipConfig(defaultConfig);
    setActiveTooltip('button3');
  };

  const targetButtons = [
    { id: 'button1', label: 'Button 1', className: 'primary' },
    { id: 'button2', label: 'Button 2', className: 'secondary' },
    { id: 'button3', label: 'Button 3', className: 'success' },
    { id: 'button4', label: 'Button 4', className: 'danger' },
    { id: 'button5', label: 'Button 5', className: 'warning' }
  ];

  const renderTargetButton = (button) => {
    const isActive = activeTooltip === button.id;
    const showTooltip = tooltipConfig.targetElement === button.id && isActive;

    return (
      <Tooltip
        key={button.id}
        target={
          <button
            className={`target-button ${button.className}`}
            onClick={() => {
              if (tooltipConfig.targetElement === button.id) {
                handleShowTooltip();
              }
            }}
          >
            {button.label}
          </button>
        }
        position={tooltipConfig.position}
        style={{
          textSize: `${tooltipConfig.textSize * 4}px`,
          padding: `${tooltipConfig.padding * 4}px`,
          textColor: tooltipConfig.textColor,
          backgroundColor: tooltipConfig.backgroundColor,
          cornerRadius: `${tooltipConfig.cornerRadius * 2}px`,
          tooltipWidth: `${tooltipConfig.tooltipWidth * 50}px`,
          arrowWidth: `${tooltipConfig.arrowWidth * 2}px`,
          arrowHeight: `${tooltipConfig.arrowHeight * 2}px`
        }}
        text={tooltipConfig.text}
        image={tooltipConfig.image}
        isVisible={showTooltip}
        onClose={handleHideTooltip}
      />
    );
  };

  return (
    <div className="app-container">
      {/* Configuration Panel */}
      <div className="config-panel">
        <h1>Tooltip Configuration</h1>
        
        <div className="config-section">
          <div className="form-group">
            <label>Target Element:</label>
            <select
              value={tooltipConfig.targetElement}
              onChange={(e) => handleConfigChange('targetElement', e.target.value)}
            >
              {targetButtons.map(button => (
                <option key={button.id} value={button.id}>
                  {button.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="config-section">
          <div className="form-group">
            <label>Tooltip text:</label>
            <input
              type="text"
              value={tooltipConfig.text}
              onChange={(e) => handleConfigChange('text', e.target.value)}
              placeholder="Input"
            />
          </div>
        </div>

        <div className="config-section">
          <div className="form-row">
            <div className="form-group">
              <label>Text Size:</label>
              <input
                type="number"
                value={tooltipConfig.textSize}
                onChange={(e) => handleConfigChange('textSize', parseInt(e.target.value) || 0)}
                min="1"
                max="10"
              />
            </div>
            <div className="form-group">
              <label>Padding:</label>
              <input
                type="number"
                value={tooltipConfig.padding}
                onChange={(e) => handleConfigChange('padding', parseInt(e.target.value) || 0)}
                min="1"
                max="10"
              />
            </div>
          </div>
        </div>

        <div className="config-section">
          <div className="form-group">
            <label>Text Colour:</label>
            <input
              type="text"
              value={tooltipConfig.textColor}
              onChange={(e) => handleConfigChange('textColor', e.target.value)}
              placeholder="Input"
            />
          </div>
          <div className="form-group">
            <label>Background colour:</label>
            <input
              type="text"
              value={tooltipConfig.backgroundColor}
              onChange={(e) => handleConfigChange('backgroundColor', e.target.value)}
              placeholder="Input"
            />
          </div>
        </div>

        <div className="config-section">
          <div className="form-row">
            <div className="form-group">
              <label>Corner radius:</label>
              <input
                type="number"
                value={tooltipConfig.cornerRadius}
                onChange={(e) => handleConfigChange('cornerRadius', parseInt(e.target.value) || 0)}
                min="1"
                max="10"
              />
            </div>
            <div className="form-group">
              <label>Tooltip width:</label>
              <input
                type="number"
                value={tooltipConfig.tooltipWidth}
                onChange={(e) => handleConfigChange('tooltipWidth', parseInt(e.target.value) || 0)}
                min="1"
                max="10"
              />
            </div>
          </div>
        </div>

        <div className="config-section">
          <div className="form-row">
            <div className="form-group">
              <label>Arrow width:</label>
              <input
                type="number"
                value={tooltipConfig.arrowWidth}
                onChange={(e) => handleConfigChange('arrowWidth', parseInt(e.target.value) || 0)}
                min="1"
                max="10"
              />
            </div>
            <div className="form-group">
              <label>Arrow height:</label>
              <input
                type="number"
                value={tooltipConfig.arrowHeight}
                onChange={(e) => handleConfigChange('arrowHeight', parseInt(e.target.value) || 0)}
                min="1"
                max="10"
              />
            </div>
          </div>
        </div>

        <div className="button-group">
          <button className="btn btn-primary" onClick={handleShowTooltip}>
            Show Tooltip
          </button>
          <button className="btn btn-secondary" onClick={handleHideTooltip}>
            Hide Tooltip
          </button>
        </div>
        
        <div className="button-group">
          <button className="btn btn-danger" onClick={handleResetConfig}>
            Reset Configuration
          </button>
        </div>
      </div>

      {/* Mobile Preview Panel */}
      <div className="preview-panel">
        <div className="mobile-preview">
          <div className="mobile-content">
            {targetButtons.map(button => renderTargetButton(button))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
