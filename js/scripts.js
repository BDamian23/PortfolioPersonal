
// --> Manejo del DOM
const toggleTheme = document.getElementById('toggle-theme')
const toggleIcon = document.getElementById('toggle-icon')
const toggleText = document.getElementById('toggle-text')
const toggleColors = document.getElementById('toggle-colors')

const rootStyles = document.documentElement.style;


// --> Funciones
const changeBody = () => {
    document.body.classList.toggle('dark');
    if(toggleIcon.src.includes('moon.svg')){
        toggleIcon.src = 'assets/icons/sun.svg'
        toggleText.textContent = 'Light Mode'
    } else {
        toggleIcon.src = 'assets/icons/moon.svg'
        toggleText.textContent = 'Dark Mode'
    }
}

const changeColor = (e) => {
    const {color} = e.target.dataset;
    rootStyles.setProperty('--primary-color', color);
}

// --> Eventos
toggleTheme.addEventListener('click', changeBody)
toggleColors.addEventListener('click', changeColor)