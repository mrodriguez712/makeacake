let dark = document.querySelector('.dark-theme')
let light = document.querySelector('.light-theme')

function setTheme(theme) {
    let root = document.documentElement;
    if (theme === 'light') {
        root.style.setProperty('--bg-color', '#ECF2FF');
        root.style.setProperty('--text-color', '#2B283A');
        root.style.setProperty('--title-color', '#4A4E74');
        light.style.display = 'none'
        dark.style.display = 'inline'
    } else if (theme === 'dark') {
        root.style.setProperty('--bg-color', '#2B283A');
        root.style.setProperty('--text-color', '#ECF2FF');
        root.style.setProperty('--title-color', '#D5D4D8');
        dark.style.display = 'none'
        light.style.display = 'inline'
    }
}

// change property
dark.addEventListener('click', () => setTheme('dark'))

light.addEventListener('click', () => setTheme('light'))

// moving ingredients
function toggleClass(event) {
    event.target.classList.toggle('excited')
}

let list = document.querySelectorAll('.scared')

list.forEach(list => {
    list.addEventListener('click', toggleClass)
})