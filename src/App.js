import React, { useState } from 'react';
import Tooltip from './components/Tooltip/Tooltip.jsx';
import './components/Tooltip/ToolTip.css'

const App = () => {
  const [tooltips, setTooltips] = useState([]);

  const handleAddTooltip = () => {
    setTooltips([...tooltips, {}]);
  };

  const handleRemoveTooltip = (index) => {
    const updatedTooltips = [...tooltips];
    updatedTooltips.splice(index, 1);
    setTooltips(updatedTooltips);
  };

  const handleTooltipChange = (index, key, value) => {
    const updatedTooltips = [...tooltips];
    updatedTooltips[index][key] = value;
    setTooltips(updatedTooltips);
  };

  return (
    <div>
      <div className="preview-container">
        {tooltips.map((tooltip, index) => (
          <Tooltip
            key={index}
            target={<button>{tooltip.target || `Button ${index + 1}`}</button>}
            position={tooltip.position || 'top'}
            style={{
              fontSize: tooltip.textSize || 'inherit',
              padding: tooltip.padding || '8px',
              color: tooltip.textColor || '#fff',
              backgroundColor: tooltip.backgroundColor || '#333',
              borderRadius: tooltip.cornerRadius || '4px',
              width: tooltip.tooltipWidth || 'auto',
              arrowWidth: tooltip.arrowWidth || '10px',
              arrowHeight: tooltip.arrowHeight || '10px',
            }}
            text={tooltip.text || ''}
            image={tooltip.image || ''}
          />
        ))}
      </div>
      <div className="config-container">
        <h2>Tooltip Configuration</h2>
        {tooltips.map((tooltip, index) => (
          <div key={index} className="tooltip-config">
            <h3>Tooltip {index + 1}</h3>
            <div>
              <label>
                Target Element:
                <input
                  type="text"
                  value={tooltip.target || ''}
                  onChange={(e) =>
                    handleTooltipChange(index, 'target', e.target.value)
                  }
                />
              </label>
            </div>
            <div>
              <label>
                Position:
                <select
                  value={tooltip.position || 'top'}
                  onChange={(e) =>
                    handleTooltipChange(index, 'position', e.target.value)
                  }
                >
                  <option value="top">Top</option>
                  <option value="right">Right</option>
                  <option value="bottom">Bottom</option>
                  <option value="left">Left</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Tooltip Text:
                <input
                  type="text"
                  value={tooltip.text || ''}
                  onChange={(e) =>
                    handleTooltipChange(index, 'text', e.target.value)
                  }
                />
              </label>
            </div>
            <div>
              <label>
                Text Size:
                <input
                  type="text"
                  value={tooltip.textSize || ''}
                  onChange={(e) =>
                    handleTooltipChange(index, 'textSize', e.target.value)
                  }
                />
              </label>
            </div>
            <div>
              <label>
                Padding:
                <input
                  type="text"
                  value={tooltip.padding || ''}
                  onChange={(e) =>
                    handleTooltipChange(index, 'padding', e.target.value)
                  }
                />
              </label>
            </div>
            <div>
              <label>
                Text Color:
                <input
                  type="text"
                  value={tooltip.textColor || ''}
                  onChange={(e) =>
                    handleTooltipChange(index, 'textColor', e.target.value)
                  }
                />
              </label>
            </div>
            <div>
              <label>
                Background Color:
                <input
                  type="text"
                  value={tooltip.backgroundColor || ''}
                  onChange={(e) =>
                    handleTooltipChange(index, 'backgroundColor', e.target.value)
                  }
                />
              </label>
            </div>
            <div>
              <label>
                Corner Radius:
                <input
                  type="text"
                  value={tooltip.cornerRadius || ''}
                  onChange={(e) =>
                    handleTooltipChange(index, 'cornerRadius', e.target.value)
                  }
                />
              </label>
            </div>
            <div>
              <label>
                Tooltip Width:
                <input
                  type="text"
                  value={tooltip.tooltipWidth || ''}
                  onChange={(e) =>
                    handleTooltipChange(index, 'tooltipWidth', e.target.value)
                  }
                />
              </label>
            </div>
            <div>
              <label>
                Arrow Width:
                <input
                  type="text"
                  value={tooltip.arrowWidth || ''}
                  onChange={(e) =>
                    handleTooltipChange(index, 'arrowWidth', e.target.value)
                  }
                />
              </label>
            </div>
            <div>
              <label>
                Arrow Height:
                <input
                  type="text"
                  value={tooltip.arrowHeight || ''}
                  onChange={(e) =>
                    handleTooltipChange(index, 'arrowHeight', e.target.value)
                  }
                />
              </label>
            </div>
            <button onClick={() => handleRemoveTooltip(index)}>
              Remove Tooltip
            </button>
          </div>
        ))}
        <button onClick={handleAddTooltip}>Add Tooltip</button>
      </div>
    </div>
  );
};

export default App;
