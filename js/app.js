const themeButton = document.getElementById('theme-button')
const themeComponents = document.querySelectorAll('.theme')

const handleTheme = e => {
    themeComponents.forEach(component => component.classList.toggle('DARK'))
}
themeButton.addEventListener('click', handleTheme, false)