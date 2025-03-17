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

function whatsapp() {
  let send = document.querySelector("#whatsapp");
  send.setAttribute("href", "https://wa.me/5516981994052");
}