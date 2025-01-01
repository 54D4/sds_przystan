let currentFontSize = 1; // Base font size in rem (1rem = 16px)

// Function to increase the font size (in rem)
function increaseFontSize() {
    currentFontSize += 0.1; // Increase by 0.1rem
    document.documentElement.style.fontSize = currentFontSize + 'rem';
}

// Function to decrease the font size (in rem)
function decreaseFontSize() {
    currentFontSize -= 0.1; // Decrease by 0.1rem
    document.documentElement.style.fontSize = currentFontSize + 'rem';
}

// Function to toggle the theme between light and dark
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}
