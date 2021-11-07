class AlbumsToCart {
    constructor(id, cover, artist, price) {
        this.id = id
        this.cover = cover
        this.artist = artist
        this.price = price
        this.quantity = 1
        this.totalPrice = price
    }
}

let cart = []
let totalPriceInCart = 0
let quantityInCart = 0


function buyAlbum(id, cover, artist, price){
    let inCart = uppdateCart(id);

    if (inCart === false){
        let newAlbum = new AlbumsToCart(id, cover, artist, price)
        cart.push(newAlbum)
    }
    createCart()
}


function uppdateCart(id) {
    let existInCart = false
    for (const item of cart) {
        if (item.id == id) {
            item.quantity += 1
            item.totalPrice = item.price * item.quantity;
            existInCart = true;
        }
    }
    return existInCart
}
function createCart(){
    let albumsInCart = [];
    for (const item of cart){
        albumsInCart.push(createAlbum(item))
    }
    document.getElementById('addedBoughtAlbums').innerHTML = albumsInCart

    calculateTotalSumInCart()
    calculateShipping()
    calculateTotalQuantityInCart()
}
function createAlbum(album) {
    return `
    <article id="myAlbums${album.id}">
            <img src=${album.cover} alt=${album.artist} class="albumImage" id=${album.cover}>  
            <p>${album.artist }</p>
            <p> Pris: ${album.price} kr</p>
            <input id="quantity${album.id}" type="number" onclick="increase('${album.id}')" value="${album.quantity}" />
            <p id="totalPrice${album.id}">Summan: ${album.totalPrice} kr</p>
    </article>
    `;
}
function showTotalSum(totalPrice) {
    return `
    <article id="totalAddedPrice">
            <p>Summan: ${totalPrice}kr</p>
    </article>
 `;
}


function showTotalQuantity(quantity) {
    return `
    <article id="totalAddedItem">
            <p>Antal: ${quantity} album</p>
    </article>
 `;
}


function showShippingCost(shippingText) {
    return `
    <article id="shippingCost">
            <p>${shippingText}</p>
    </article>
 `;
}
function updateAlbumInCartWithNewValue(id, newValue) {
    let totalSumOfAlbum = 0
    for (const item of cart) {
        if (item.id == id) {
            item.quantity = newValue
            item.totalPrice = item.price * item.quantity;
            totalSumOfAlbum =  item.totalPrice ;
        }
    }
    return totalSumOfAlbum
}

function calculateTotalSumInCart() {
    totalPriceInCart
 = 0

    for (const item of cart) {
        totalPriceInCart
 += parseInt(item.totalPrice)
    }
    document.getElementById('totalAddedPrice').innerHTML = showTotalSum(totalPriceInCart
)
}

function calculateShipping() {
    let costToFreeFreight = 259 - totalPriceInCart;
    let costTest = ""

    if (costToFreeFreight <= 0) {
        costTest = "Du har nu fri frakt"
    } else {
        costTest = costToFreeFreight +  " kr  kvar till fri frakt"
    }

    document.getElementById('shippingCost').innerHTML = showShippingCost(costTest)
}

function calculateTotalQuantityInCart() {
    quantityInCart = 0
    for (const item of cart) {
        quantityInCart += parseInt(item.quantity)
    }

    document.getElementById('totalAddedItem').innerHTML = showTotalQuantity(quantityInCart)
}

function increase(id) {

    let newValue = document.getElementById("quantity" + id).value;

    if (parseInt(newValue) <= 0) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id == id) {
                cart.splice(i, 1);
                document.getElementById("myAlbums" + id).remove()
            }
        }
    }
    else {
        let totalPrice = updateAlbumInCartWithNewValue(id, newValue)
        if(!!totalPrice) {
            document.getElementById("totalPrice" + id).innerText = "Total: " + totalPrice + "kr";
        }
    }
    calculateTotalSumInCart()
    calculateShipping()
    calculateTotalQuantityInCart()
}
createCart()



