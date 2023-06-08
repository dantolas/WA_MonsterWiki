let cards = document.querySelectorAll(".monsterCard");


cards.forEach(card =>{
    card.addEventListener("click",()=>{
        try {
            console.log(card.lastElementChild.href);
            card.lastElementChild.click();
            //window.location.href = card.name;
        } catch (error) {
            console.log("Error redirecting to page.")
        }
    })
})