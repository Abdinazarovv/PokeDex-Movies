let elList = document.querySelector(".list");
let elBtn1 = document.querySelector(".btn__1");
let elBtn2 = document.querySelector(".btn__2");
let elBtnClean = document.querySelector(".btn__clean");
let elResult = document.querySelector(".result");

let pokemonArray = pokemons;
let moviesArray = movies.slice(0, 151);

elBtn1.addEventListener("click", function () {
    elList.innerHTML = null
    render(pokemonArray)
})

elBtn2.addEventListener("click", function () {
    elList.innerHTML = null
    render(moviesArray)
})

elBtnClean.addEventListener("click", function () {
    elList.innerHTML = null
    elList.innerHTML = `<li class="list__item text-center m-0">Tugamalardan birini bosing!</li>`
    elResult.textContent = "Cleaned"
})

function render(array) {
    array = array.slice(0, prompt("Nechta tur kerak"));
    elResult.textContent = array.length
    for (const item of array) {
        let newLi = document.createElement("li");
        newLi.classList = "list__item"
        
        let newImg = document.createElement("img");
        let newH3 = document.createElement("h3");
        newImg.width = "200"
        
        if (item.name) {
            newImg.src = item.img;
            newH3.textContent = item.name;
        }else {
            newH3.textContent = item.Title;
            newImg.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`;
        }
        
        newLi.appendChild(newImg);
        newLi.appendChild(newH3);
        
        elList.appendChild(newLi);
    }
}