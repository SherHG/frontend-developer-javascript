const navEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function asideClosed() {
   const isAsideClosed = aside.classList.contains('inactive');


   if (!isAsideClosed) {
      aside.classList.add('inactive');
   }
}

function toggleDesktopMenu(){
   asideClosed();
   desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
   asideClosed();
   mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
   const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
   const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');


   if (!isMobileMenuClosed) {
      mobileMenu.classList.add('inactive');
   }

   if (!isDesktopMenuClosed) {
      desktopMenu.classList.add('inactive');
   }

   aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
   name: 'Bike',
   price: 120,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
   name: 'TV 50"',
   price: 3120,
   image: 'https://subgurim.net/imagenes/los-mejores-televisores-de-60-pulgadas.jpg',
});

productList.push({
   name: 'Laptop',
   price: 1120,
   image: 'https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=600',
});

function renderProducts(arr){
   for(product of arr){
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
   
      //product = {name, price, image} -> product.image
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
   
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
   
      const productInfoDiv = document.createElement('div');
      
      const productPrice = document.createElement('p'); 
      productPrice.innerText = '$' + product.price;
      const productName = document.createElement('p');
      productName.innerText = product.name; 
   
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
   
      const productInfoFigure = document.createElement('figure');
      const productImgCart = document.createElement('img');
      productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
   
      productInfoFigure.appendChild(productImgCart);
   
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
   
      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);
   
      cardsContainer.appendChild(productCard);     
   }   
}

renderProducts(productList);