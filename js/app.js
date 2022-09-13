window.onscroll = function() {
    if(document.documentElement.scrollTop > 200) {
        document.querySelector('.go-up-container').classList.add('show')    
    } else {
        document.querySelector('.go-up-container').classList.remove('show')    
    }
}

document.querySelector('.go-up-container').addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
})