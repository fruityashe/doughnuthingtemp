let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
		// Milkshake
        id: 1,
        name: 'Cake Batter Milkshake',
        image: 'milkshake-1.JPG',
        price: 149
    },
    {
        id: 2,
        name: 'Irish Cream Milkshake',
        image: 'milkshake-2.JPG',
        price: 149
    },
    {
        id: 3,
        name: 'Boozy Coffe Milkshake',
        image: 'milkshake-3.JPG',
        price: 149
    },
    {
        id: 4,
        name: 'Banana Milkshake',
        image: 'milkshake-4.JPG',
        price: 149
    },
    {
        id: 5,
        name: 'S&lsquo;Mores Milkshake',
        image: 'milkshake-5.JPEG',
        price: 139
    },
	{
		// Crepe
        id: 6,
        name: 'Chocolate Banana Crepe',
        image: 'crepe-1.JPG',
        price: 99
    },
	{
        id: 7,
        name: 'Mixed Berry Crepe',
        image: 'crepe-4.JPG',
        price: 109
    },
	{
        id: 8,
        name: 'Sweet Mango Crepe',
        image: 'crepe-5.JPG',
        price: 109
    },
	{
        id: 9,
        name: 'Cookies & Cream Crepe',
        image: 'crepe-2.JPG',
        price: 109
    },
	{
        id: 10,
        name: 'Creamy Strawberry Crepe',
        image: 'crepe-3.JPG',
        price: 109
    },
	{
		// Sandwich
        id: 11,
        name: 'Churro Sandwich',
        image: 'sandwich-2.JPG',
        price: 89
    },
	{
        id: 12,
        name: 'Cinnamon Roll Sandwich',
        image: 'sandwich-1.JPG',
        price: 89
    },
	{
        id: 13,
        name: 'Matcha Sandwich',
        image: 'sandwich-4.JPG',
        price: 79
    },
	{
        id: 14,
        name: 'S&lsquo;Mores Sandwich',
        image: 'sandwich-5.JPG',
        price: 89
    },
	{
        id: 15,
        name: 'Galaxy Sandwich',
        image: 'sandwich-3.JPG',
        price: 99
    },
	{
		// Rolled
        id: 16,
        name: 'Chocolate Rolled',
        image: 'rolled-2.JPG',
        price: 119
    },
	{
        id: 17,
        name: 'Vanilla Rolled',
        image: 'rolled-4.JPG',
        price: 109
    },
	{
        id: 18,
        name: 'Caramel Rolled',
        image: 'rolled-1.JPG',
        price: 109
    },
	{
        id: 19,
        name: 'Cookies & Cream Rolled',
        image: 'rolled-3.JPG',
        price: 119
    },
	{
        id: 20,
        name: 'Strawberry Rolled',
        image: 'rolled-5.JPG',
        price: 119
    },
	{
		// Vegan
        id: 21,
        name: 'Chocolate Avocado Ice Cream',
        image: 'vegan-1.JPG',
        price: 149
    },
	{
        id: 22,
        name: 'Raspberry Delight Ice Cream',
        image: 'vegan-4.JPG',
        price: 159
    },
	{
        id: 23,
        name: 'Coconut Ice Cream',
        image: 'vegan-2.JPG',
        price: 139
    },
	{
        id: 24,
        name: 'Sweet Potato Ice Cream',
        image: 'vegan-5.JPG',
        price: 149
    },
	{
        id: 25,
        name: 'Mint Chocolate Ice Cream',
        image: 'vegan-3.JPG',
        price: 149
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}