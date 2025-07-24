# In-App Nudge Builder

A comprehensive React.js application for building and previewing in-app tooltips with dynamic positioning, styling, and real-time preview functionality.

## Features

### Must-Have Features ✅
- **Dynamic Tooltip Positioning**: Support for top, bottom, left, and right positioning
- **Real-time Mobile Preview**: Live preview of tooltips on a mobile screen interface
- **Multiple Target Elements**: 5 different buttons to test tooltip positioning
- **Customizable Styling**: Full control over colors, sizes, padding, and border radius
- **No External Libraries**: Built entirely with vanilla React.js and CSS

### Good-to-Have Features ✅
- **Image Support**: Ability to include images in tooltips
- **Data Persistence**: Configuration is automatically saved to localStorage
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI/UX**: Beautiful gradient background and clean interface

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd in-app-nudge
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to Use

### Configuration Panel (Left Side)
1. **Select Target Element**: Choose which button should display the tooltip
2. **Set Position**: Choose from top, bottom, left, or right positioning
3. **Add Content**: Enter tooltip text and optionally an image URL
4. **Customize Styling**: Adjust colors, sizes, padding, and border radius
5. **Preview**: Click "Show Tooltip" to see the tooltip in action

### Mobile Preview (Right Side)
- **Real-time Preview**: See your tooltip configuration applied instantly
- **Interactive Buttons**: Click on any button to trigger the tooltip
- **Mobile-like Interface**: Simulates a real mobile app environment

### Features Explained

#### Tooltip Positioning
- **Top**: Tooltip appears above the target element
- **Bottom**: Tooltip appears below the target element  
- **Left**: Tooltip appears to the left of the target element
- **Right**: Tooltip appears to the right of the target element

#### Styling Options
- **Text Size**: Control the font size (e.g., "14px", "16px")
- **Padding**: Adjust internal spacing (e.g., "12px", "16px")
- **Text Color**: Choose text color with color picker or hex value
- **Background Color**: Choose background color with color picker or hex value
- **Corner Radius**: Control border radius (e.g., "8px", "12px")
- **Tooltip Width**: Set maximum width (e.g., "200px", "300px")

#### Image Support
- Add image URLs to include images in tooltips
- Images are automatically resized to fit within the tooltip
- Supports any valid image URL

#### Data Persistence
- All configuration settings are automatically saved to localStorage
- Settings persist between browser sessions
- Use "Reset Configuration" to restore default settings

## Project Structure

```
src/
├── components/
│   └── Tooltip/
│       ├── Tooltip.jsx      # Main tooltip component
│       └── ToolTip.css      # Tooltip-specific styles
├── App.js                   # Main application component
├── App.css                  # Application styles
├── index.js                 # Application entry point
└── index.css                # Global styles
```

## Technical Implementation

### Tooltip Component
- **Dynamic Positioning**: Uses `getBoundingClientRect()` for precise positioning
- **Boundary Detection**: Ensures tooltips stay within container bounds
- **Smooth Animations**: CSS transitions and keyframe animations
- **Accessibility**: Proper ARIA attributes and keyboard navigation

### State Management
- **React Hooks**: Uses `useState` and `useEffect` for state management
- **Local Storage**: Automatic configuration persistence
- **Real-time Updates**: Immediate preview of configuration changes

### Responsive Design
- **Flexbox Layout**: Responsive grid system
- **Mobile-First**: Optimized for mobile devices
- **Breakpoints**: Adapts to different screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with React.js
- Styled with modern CSS
- Icons and design inspiration from modern UI/UX principles
