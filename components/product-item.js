// product-item.js

class ProductItem extends HTMLElement {

  constructor() {
    super();

    this.attachShadow({mode: 'open'});

    // Outer thing containing product
    const product = document.createElement('li');
    product.className = 'product';

    // Product image
    const image = document.createElement('img');
    // For access through script
    image.id = 'image';
    image.className = 'img';
    // Add element to the product
    product.appendChild(image);

    // Product title
    const title = document.createElement('p');
    // For access through script
    title.id = 'title';
    title.className = 'title';
    // Add element to the product
    product.appendChild(title);

    // Product price
    const price = document.createElement('p');
    // For access through script
    price.id = 'price';
    price.className = 'price';
    // Add element to the product
    product.appendChild(price);
    
    // Product add to cart button
    const atcButton = document.createElement('button');
    // For access through script
    atcButton.id = 'atcButton';
    atcButton.className = 'button';
    atcButton.innerHTML = 'Add to Cart';
    // Add element to the product
    product.appendChild(atcButton);
    
    // Product style
    const style = document.createElement('style');
    style.textContent = `
    .price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }
    
    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }
    
    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }
    
    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }
    
    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }
    
    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }`;
    this.shadowRoot.appendChild(product);
    this.shadowRoot.appendChild(style);

  }
}

customElements.define('product-item', ProductItem);