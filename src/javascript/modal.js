document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".usluge-nav a");
  const modals = document.querySelectorAll(".modal-kartica");

  links.forEach((link, index) => {
    link.addEventListener("click", () => {
      // 1. Ukloni klasu 'aktivna' sa svih linkova
      links.forEach(l => l.classList.remove("aktivna"));
      
      // 2. Sakrij sve modale
      modals.forEach(modal => modal.style.display = "none");

      // 3. Dodaj 'aktivna' klasu na kliknuti link
      link.classList.add("aktivna");

      // 4. Prikaži odgovarajući modal koristeći indeks
      // Budući da su poredani istim redoslijedom, index se podudara
      modals[index].style.display = "block";
    });
  });
});