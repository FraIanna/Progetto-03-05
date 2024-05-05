//funzione per il carosello
let items = document.querySelectorAll(".carousel-item");
items.forEach((element) => {
  const slide = 5;
  let next = element.nextElementSibling;
  for (i = 0; i < slide; i++) {
    if (!next) {
      next = items[0];
    }
    let clonechild = next.cloneNode(true);
    element.appendChild(clonechild.children[0]);
    next = next.nextElementSibling;
  }
});
