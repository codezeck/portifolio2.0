function btnMenu() {
    const nav = document.querySelector('.navegation');
    if (nav.classList.contains('hidden')) {
        nav.classList.remove('hidden');
    } else if (!nav.classList.contains('hidden')){
        nav.classList.add('hidden');
    }
}
