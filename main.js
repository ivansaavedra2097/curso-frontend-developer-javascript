/*~~~~~~~~~~~~~~~~  DESCKTOP MENU - NAVBAR  ~~~~~~~~~~~~~~~~~~ */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    const menuMyOrderClosed = menuMyOrder.classList.contains('inactive');
    const menuMobileClosed = mobileMenu.classList.contains('inactive');

    if (!menuMyOrderClosed) {
        menuMyOrder.classList.add('inactive');
    }

    if (!menuMobileClosed) {
        mobileMenu.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

/*~~~~~~~~~~~~~~~~  MOBILE MENU - NAVBAR  ~~~~~~~~~~~~~~~~~~ */
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    const menuMyOrderClosed = menuMyOrder.classList.contains('inactive');
    const menuDesktopClosed = desktopMenu.classList.contains('inactive');

    if (!menuDesktopClosed) {
        desktopMenu.classList.add('inactive');
    }

    if (!menuMyOrderClosed) {
        menuMyOrder.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

/*~~~~~~~~~~~~~~~~  MOBILE MENU - NAVBAR  ~~~~~~~~~~~~~~~~~~ */
const menuMyOrder = document.querySelector('.product-detail');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');

shoppingCartIcon.addEventListener('click', toggleShoppingCart);

function toggleShoppingCart() {
    const menuMobileClosed = mobileMenu.classList.contains('inactive');
    const menuDesktopClosed = desktopMenu.classList.contains('inactive');

    if (!menuDesktopClosed) {
        desktopMenu.classList.add('inactive');
    }
    if (!menuMobileClosed) {
        mobileMenu.classList.add('inactive');
    }

    menuMyOrder.classList.toggle('inactive');
}

/*~~~~~~~~~~~~~~~~  PRODUCT LIST  ~~~~~~~~~~~~~~~~~~ */
const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

//creando el card-container
const cardsContainer = document.querySelector('.cards-container');

//recorriendo el arreglo de productos
for(product in productList){
    // CREACION DE ELEMENTOS
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', productList[product].image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = `$${productList[product].price}`;

    const productName = document.createElement('p');
    productName.innerText = productList[product].name;

    const productInfoFigure = document.createElement('figure');

    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src',"./icons/bt_add_to_cart.svg");

    //ANIDANDO ELEMENTOS
        //div figure
        productInfoFigure.appendChild(productImgCard);
        //div dentro del product info
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        //div product info
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        //product card
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);


    //enviando elementos al div .cards-container
    cardsContainer.appendChild(productCard);
}
