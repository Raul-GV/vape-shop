const catalogo = document.getElementById("catalogo")
const products = document.querySelectorAll(".product")
const container_modal = document.getElementById("container_modal")
const sabores = document.getElementById("sabores")
console.log(sabores)

let array_sabores = {
    0:["ACAPULCO´CO", "CABO ICE", "SAYULILTA MARGARITA", "BANANA COCONUT", "BANANA COCONUT", "BANANA STRAWBERRY", "BLACKBERRY", "BLUEBERRY CHERRY", ],
    1:["BANANA CHERRY DRAGON FRUIT", "BANANA ICE", "BERRY WATERMELON", "BLACK DRAGON FRUIT", "BLACK MINT", "BLUE RAZ LEMON", "BLUEBERRY CHERRY"],
    2:["FRUTY CHEWS"]
}

products.forEach((element, index) => {
    element.addEventListener("click", (e) => {
        container_modal.style.display = "grid"
        let array = array_sabores[index]
        for(i = 0; i < array.length; i++){
            let html = `
                <div class="sabor">
                    <p>${array[i]}</p>
                </div>           
            `
            sabores.innerHTML += html
        }
    })
});
container_modal.addEventListener("click", e => {
    if(e.target.className == "container_modal"){
        container_modal.style.display = "none"
        sabores.innerHTML = ""
    }
})