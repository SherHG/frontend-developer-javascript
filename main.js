const navEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function asideClosed() {
   const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

   if (!isAsideClosed) {
      shoppingCartContainer.classList.add('inactive');
   }
}

function toggleDesktopMenu(){
   asideClosed();
   desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
   asideClosed();
   closeProductDetailAside();

   mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
   const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

   if (!isMobileMenuClosed) {
      mobileMenu.classList.add('inactive');
   }

   const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

   if (!isProductDetailClosed) {
      productDetailContainer.classList.add('inactive');
   }

   shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {  
   shoppingCartContainer.classList.add('inactive');
   productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
   shoppingCartContainer.classList.add('inactive');
   productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
   name: 'Bike',
   price: 1120,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
   name: 'TV 50"',
   price: 6120,
   image: 'https://subgurim.net/imagenes/los-mejores-televisores-de-60-pulgadas.jpg',
});

productList.push({
   name: 'Laptop',
   price: 11250,
   image: 'https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=600',
});

productList.push({
   name: 'Nintendo Switch',
   price: 6999,
   image: 'https://images.pexels.com/photos/6993182/pexels-photo-6993182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

function renderProducts(arr){
   for(product of arr){
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
   
      //product = {name, price, image} -> product.image
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
      productImg.addEventListener('click', openProductDetailAside);
   
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