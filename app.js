// render a list of fruits. at least 3
// should have different prices listed that i can modify
// delete fruits

const wrapper = document.getElementById("wrapper");
const fruitsList = [
    {name:"Apple", price:2.99},
    {name:"Banana", price:4.99},
    {name:"Orange", price:3.99},
    {name:"Pineapple", price:1.99},
    {name:"Melon", price:0.99}
]

function renderFruitCard(fruitItem) {
    const card = document.createElement("div");
    card.style.border = "2px solid black";

    const header = document.createElement("h1");
    header.innerHTML = fruitItem.name;
    const price = document.createElement("h4");
    price.innerHTML = "Price: $" + fruitItem.price;
    // const price = document.createElement("label");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", ()=>{
        wrapper.removeChild(card);
    })

    
    card.appendChild(deleteBtn);
    card.appendChild(header);
    card.appendChild(price);
    return card;
}

function renderFruits(fruit){
    wrapper.innerHTML = "";
    const mapped = fruit.map((item)=> {
        return renderFruitCard(item);
    })

    wrapper.append(...mapped);

}

renderFruits(fruitsList);