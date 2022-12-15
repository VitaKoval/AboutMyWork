const moreInfoProject = document.querySelectorAll(".portfolio__button");
const maxInfo = document.querySelectorAll(".portfolio__max-info");
const arrow = document.querySelectorAll(".arrow-group");

for (let i = 0; i < moreInfoProject.length; i++) {
  moreInfoProject[i].addEventListener("click", openInfoMore);

  function openInfoMore(evt) {
    maxInfo[i].classList.toggle("active");

    if (maxInfo[i].classList.contains("active")) {
      moreInfoProject[i].textContent = "Less";
      arrow[i].style.display = "none";
    } else {
      moreInfoProject[i].textContent = "More";
      arrow[i].style.display = "block";
    }
  }
}
