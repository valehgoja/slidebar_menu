let i = document.querySelector("i");
let ul = document.querySelector("ul");
let section = document.querySelector("section");
let li = document.querySelectorAll("li");
i.addEventListener("click", function () {
  if (ul.className == "") {
    ul.className = "ul_show";
    section.className = "slide_image";
  } else {
    ul.className = "";
    section.className = "";
  }
});
let a = 0;

function navigationBar() {
  for (let i = 0; i < li.length; i++) {
    if (i == a) {
      li[i].className = "active";
    } else {
      li[i].className = "";
    }
    li[i].addEventListener("click", function () {
      a = i;
      console.log(i);
      navigationBar();
    });
  }
}
navigationBar();
