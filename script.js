const btn = document.getElementsByTagName('button')[0]
const header = document.getElementsByTagName('header')[0]
const headerNav = header.getElementsByTagName('nav')[0]
const body = document.getElementsByTagName('body')[0]
const btnImg = btn.getElementsByTagName('img')

btn.addEventListener('click', () => {
    if(btn.hasAttribute('opened')){
        headerNav.classList.add('hidden-height')
        btn.removeAttribute('opened', '')
        btnImg[0].classList.remove('hidden-op')
        btnImg[1].classList.add('hidden-op')
        body.classList.remove('no-scroll')
    }
    else{
        headerNav.classList.remove('hidden-height')
        btn.setAttribute('opened', '')
        btnImg[1].classList.remove('hidden-op')
        btnImg[0].classList.add('hidden-op')
        body.classList.add('no-scroll')
    }
})