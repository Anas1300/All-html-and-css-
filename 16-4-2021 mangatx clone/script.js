const search = document.querySelector(".searchBar");

function myFunction() {
  search.classList.toggle("active");
}

search.addEventListener("click", myFunction());
