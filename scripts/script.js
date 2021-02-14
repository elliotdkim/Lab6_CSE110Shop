// Script.js
let myCart;



window.addEventListener('DOMContentLoaded', () => {
  // If data doesn't exist in local storage yet
  if (!localStorage.getItem('ShopData')) {
    // fetch products
    fetch('https://fakestoreapi.com/products')
      // Extract JSON body content from response
      .then(res => res.json())
      // Store the data as ShopData in localStorage
      .then(data => {
        localStorage.setItem('shopData', JSON.stringify(data));
        listProducts(data);
      });
      
  }
  // Data exists
  else {
    let data = localStorage.getItem('shopData');
    data = JSON.parse(data);
    listProducts(data);
  }

  if (!localStorage.getItem('Cart')) {
    myCart = [];
  }
  else {
    myCart = JSON.parse(localStorage.getItem('Cart'));
    document.getElementById('cart-count').innerHTML = myCart.length;
  }

});

function listProducts(data) {
  // For each item in data
  data.forEach(element => {
    // Create product-item
    let prod = document.createElement('product-item');

    const image = prod.shadowRoot.getElementById('image');
    image.setAttribute('src', element.image);
    image.setAttribute('alt', element.alt);

    const title = prod.shadowRoot.getElementById('title');
    title.innerHTML = element.title;

    const price = prod.shadowRoot.getElementById('price');
    price.innerHTML = '$' + element.price;

    const atcButton = prod.shadowRoot.getElementById('atcButton');

    // Item is in cart
    if (myCart.includes(element.id)) {
      atcButton.innerHTML = 'Remove from Cart';
    }
    // Item is not in cart
    else {
      atcButton.innerHTML = 'Add to Cart';
    }

    atcButton.addEventListener('click', (e) =>{
      // Item is in cart
      if (myCart.includes(element.id)) {
        myCart.splice(myCart.indexOf(element.id), 1);
        atcButton.innerHTML = 'Add to Cart';
        document.getElementById('cart-count').innerHTML--;
      }
      // Item is not in cart
      else {
        myCart.push(element.id);
        atcButton.innerHTML = 'Remove from Cart';
        document.getElementById('cart-count').innerHTML++;
      }
      localStorage.setItem('Cart', JSON.stringify(myCart));
    });


    /*
    // CSS pls work
    prod.setAttribute('img', element.image);
    prod.setAttribute('price', element.price);
    prod.setAttribute('title', element.title);
    */
    // nvm wasn't the problem lol

    document.getElementById('product-list').appendChild(prod);

  });
}