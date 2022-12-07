const moreInfoProject = document.querySelector('.portfolio__button');
const maxInfo = document.querySelector('.portfolio__max-info');

moreInfoProject.addEventListener('click', openInfoMore);

function openInfoMore(evt) {
    maxInfo.classList.toggle('active');
}