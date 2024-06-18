function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var arrow = this.querySelector(".arrow");
    if (content.style.display === "block") {
      content.style.display = "none";
      arrow.innerHTML = "&#9660;";
    } else {
      content.style.display = "block";
      arrow.innerHTML = "&#9650;";
    }
  });
}
