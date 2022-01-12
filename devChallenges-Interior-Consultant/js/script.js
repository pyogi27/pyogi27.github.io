
/* ================ show menu =============== */
const navIcon = document.getElementById('navbar__icon');
const navModal = document.getElementById('header__modal');

function showModal() {
    navModal.classList.toggle('show__modal');
    navIcon.innerHTML = 'close';
    navIcon.classList.add('z__index');
    if (!navModal.classList.contains('show__modal')) {
        navIcon.innerHTML = 'menu';
        navIcon.classList.toggle('z__index');
    }
}

navIcon.addEventListener('click', showModal);
