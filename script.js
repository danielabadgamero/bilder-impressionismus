const cards = [...document.querySelectorAll(".card")];
const authors = [];

cards.forEach((card) => {
    authors.push(document.createElement("h1"));
    authors[authors.length - 1].textContent = card.id.toUpperCase().replaceAll("-", " ");
    card.appendChild(authors[authors.length - 1])
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