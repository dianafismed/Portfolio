const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);


const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");
myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});

function change() {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");

  let foto = document.getElementsByTagName("img");
  foto.src = "assets/img/diana-sun.jpg";
  console.log(foto[0].src);
  
}