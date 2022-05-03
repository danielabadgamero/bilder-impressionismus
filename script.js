const cards = [...document.querySelectorAll(".card")];

cards.forEach((card) => {
    card.children[0].setAttribute("src", `${card.id}.jpg`);
    card.addEventListener("mousedown", () => {
        location.href = `./gallery/${card.id}.html`
    })
    card.addEventListener("mouseenter", () => {
        card.classList.add("card-hover");
    })
    card.addEventListener("mouseleave", () => {
        card.classList.remove("card-hover")
    })
})