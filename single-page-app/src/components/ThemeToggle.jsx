import React, { useState } from 'react';

function ThemeToggle() {
  // Initialize the theme state, starting with 'black'
  const [theme, setTheme] = useState('black');

  // Function to toggle the theme
  const toggleTheme = () => {
    // Toggle the theme between 'black' and 'white'
    const newTheme = theme === 'black' ? 'white' : 'black';
    setTheme(newTheme);
  };

  // Apply the current theme to the background
  const styles = {
    backgroundColor: theme,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={styles}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggle;
