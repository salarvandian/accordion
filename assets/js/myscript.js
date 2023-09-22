const tabs = document.querySelectorAll('.wrapper')
const contents = document.querySelectorAll('.content')
const icons = document.querySelectorAll('.icon')
const toggles = document.querySelectorAll('.toggle')


function closeAllTabs() {
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.height = '0px'
        toggles[i].style.color = '#111130'
        icons[i].classList.remove('fa-minus')
        icons[i].classList.add('fa-plus')

    }
}

tabs.forEach(tab => {
    tab.addEventListener('click', function() {

        closeAllTabs()

        let contentElem = tab.querySelector('.content')
        let toggleElem = tab.querySelector('.toggle')
        let iconElem = tab.querySelector('.icon')

        contentElem.style.height = contentElem.scrollHeight + 'px'
        toggleElem.style.color = '#0084e9'
        iconElem.classList.add('fa-minus')
        iconElem.classList.remove('fa-plus')

    })
})