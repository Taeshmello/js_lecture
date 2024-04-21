const card = document.querySelectorAll(".card")


window.addEventListener("load",() =>{
    card.forEach(el => {
        el.classList.add("active")
    });
})

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card")
    
    
    cards.forEach((card) => {
      card.addEventListener("click", function () {
        card.querySelector(".card_inner").classList.toggle("active");
      });
    });
  });
  


  