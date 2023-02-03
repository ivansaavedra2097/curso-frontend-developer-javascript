/*~~~~~~~~~~~~~~~~  DESCKTOP MENU - NAVBAR  ~~~~~~~~~~~~~~~~~~ */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    const menuMyOrderClosed = menuMyOrder.classList.contains('inactive');
    const menuMobileClosed = mobileMenu.classList.contains('inactive');
    const productDtlContClosed = productDtlContainer.classList.contains('inactive');

    if (!menuMyOrderClosed) {
        menuMyOrder.classList.add('inactive');
    }

    if (!menuMobileClosed) {
        mobileMenu.classList.add('inactive');
    }

    if(!productDtlContClosed){
        productDtlContainer.classList.add('inactive');
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
    const productDtlContClosed = productDtlContainer.classList.contains('inactive');

    if (!menuDesktopClosed) {
        desktopMenu.classList.add('inactive');
    }

    if (!menuMyOrderClosed) {
        menuMyOrder.classList.add('inactive');
    }

    if(!productDtlContClosed){
        productDtlContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

/*~~~~~~~~~~~~~~~~  MY ORDER, SHOPPING CART   ~~~~~~~~~~~~~~~~~~ */
const menuMyOrder = document.querySelector('.product-detail');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');

shoppingCartIcon.addEventListener('click', toggleShoppingCart);

function toggleShoppingCart() {
    const menuMobileClosed = mobileMenu.classList.contains('inactive');
    const menuDesktopClosed = desktopMenu.classList.contains('inactive');
    const productDtlContClosed = productDtlContainer.classList.contains('inactive');

    if (!menuDesktopClosed) {
        desktopMenu.classList.add('inactive');
    }
    if (!menuMobileClosed) {
        mobileMenu.classList.add('inactive');
    }
    if(!productDtlContClosed){
        productDtlContainer.classList.add('inactive');
    }

    menuMyOrder.classList.toggle('inactive');
}

/*~~~~~~~~~~~~~~~~  PRODUCT LIST  ~~~~~~~~~~~~~~~~~~ */
const productDtlContainer = document.querySelector('.product-dtl2');
const productDtlCloseBtn = document.querySelector('.product-dtl2-close');

productDtlCloseBtn.addEventListener('click',closeProductDtl2);

function openProductDtl2()  {
    const menuDesktopClosed = desktopMenu.classList.contains('inactive');
    const menuMobileClosed = mobileMenu.classList.contains('inactive');
    const menuMyOrderClosed = menuMyOrder.classList.contains('inactive');

    if (!menuDesktopClosed) {
        desktopMenu.classList.add('inactive');
    }
    if (!menuMobileClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!menuMyOrderClosed) {
        menuMyOrder.classList.add('inactive');
    }

    productDtlContainer.classList.remove('inactive');
}

function closeProductDtl2() {
    productDtlContainer.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'Bike 01',
    price: 199,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bike 02',
    price: 760,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bike 03',
    price: 99,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bike 04',
    price: 780,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bike 05',
    price: 303,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bike 06',
    price: 210,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bike 07',
    price: 159,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bike 08',
    price: 200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bike 09',
    price: 1900,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bike 10',
    price: 1201,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bike 11',
    price: 420,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bike 12',
    price: 590,
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
    productImg.addEventListener('click',openProductDtl2);

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
