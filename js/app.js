const themeButton = document.getElementById('theme-button')
const themeComponents = document.querySelectorAll('.theme')
const themeIcon = document.querySelector('.fa-lightbulb')

const handleTheme = e => {
    const iconClasses = ['far', 'fa-lightbulb', 'fas', 'fa-moon']
    iconClasses.forEach(className => themeIcon.classList.toggle(className))
    themeComponents.forEach(component => component.classList.toggle('DARK'))
}
themeButton.addEventListener('click', handleTheme, false)

// dark mode by default
themeComponents.forEach(component => component.classList.toggle('DARK'))