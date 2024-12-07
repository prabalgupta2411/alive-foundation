/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify where Tailwind should look for class names
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React component files
    "./public/index.html",        // Include the main HTML file
  ],
  
  // Uncomment the next line if you experience widespread conflicts with Bootstrap
  important: true, // Ensures Tailwind classes take precedence

  theme: {
    extend: {
      animation: {
        scroll: 'scroll 20s linear infinite', // Custom scroll animation
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' }, // Start off-screen to the right
          '100%': { transform: 'translateX(-100%)' }, // End off-screen to the left
        },
      },
      // Add customizations for colors, spacing, fonts, etc., here if needed
    },
  },
  
  plugins: [], // Add any plugins (e.g., forms, typography) if required
};
