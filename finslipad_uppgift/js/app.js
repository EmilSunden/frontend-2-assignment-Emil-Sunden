let collBtn = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < collBtn.length; i++) {
  collBtn[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
