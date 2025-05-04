// Function to toggle the theme
function toggleTheme() {
    const body = document.body;
    const themeSwitch = document.querySelector('.ui-switch input');
  
    // Toggle dark theme class on body
    body.classList.toggle('dark-theme');
  
    // Sync checkbox state with theme
    localStorage.setItem('theme', themeSwitch.checked ? 'dark' : 'light');
  }
  
  // Maintain theme state on page load
  document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.querySelector('.ui-switch input');
    const savedTheme = localStorage.getItem('theme');
  
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      themeSwitch.checked = true;
    }
  });