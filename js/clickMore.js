const moreInfoProject = document.querySelector('.portfolio__button');
const maxInfo = document.querySelector('.portfolio__max-info');
const arrow = document.querySelector('.arrow-group');

moreInfoProject.addEventListener('click', openInfoMore);

function openInfoMore(evt) {
    maxInfo.classList.toggle('active');

    if (maxInfo.classList.contains('active')) {
        moreInfoProject.textContent = 'Less';
        arrow.style.display = "none";
    } else {
        moreInfoProject.textContent = 'More';
        arrow.style.display = 'block';
    }

   

}