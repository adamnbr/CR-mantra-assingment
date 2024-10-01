
const products = [
    { name: "Shirt", price: 10.00, image: "goku-dragon-ball-guru-150x150.jpg" },
    { name: "pants", price: 15.00, image: "goku-dragon-ball-guru-150x150.jpg" },
    { name: "sweater", price: 20.00, image: "goku-dragon-ball-guru-150x150.jpg" },
    { name: "jeans", price: 25.00, image: "goku-dragon-ball-guru-150x150.jpg" },
    { name: "shirt", price: 10.00, image: "goku-dragon-ball-guru-150x150.jpg" },
    { name: "Shirt", price: 25.00, image: "goku-dragon-ball-guru-150x150.jpg" },
    { name: "Shirt ", price: 25.00, image: "goku-dragon-ball-guru-150x150.jpg" },
    { name: "Shirt ", price: 25.00, image: "goku-dragon-ball-guru-150x150.jpg" },
    { name: "Shirt ", price: 25.00, image: "goku-dragon-ball-guru-150x150.jpg" },
    { name: "Shirt ", price: 25.00, image: "goku-dragon-ball-guru-150x150.jpg" },
    { name: "Shirt ", price: 25.00, image: "goku-dragon-ball-guru-150x150.jpg" },
    { name: "Shirt ", price: 25.00, image: "goku-dragon-ball-guru-150x150.jpg" },
    { name: "Shirt ", price: 25.00, image: "goku-dragon-ball-guru-150x150.jpg" },
    { name: "Shirt ", price: 25.00, image: "goku-dragon-ball-guru-150x150.jpg" },
    { name: "Shirt ", price: 25.00, image: "goku-dragon-ball-guru-150x150.jpg" },
    { name: "Shirt ", price: 25.00, image: "goku-dragon-ball-guru-150x150.jpg" },
    { name: "Shirt ", price: 25.00, image: "goku-dragon-ball-guru-150x150.jpg" },
    { name: "Shirt ", price: 25.00, image: "goku-dragon-ball-guru-150x150.jpg" },
    { name: "Shirt ", price: 25.00, image: "goku-dragon-ball-guru-150x150.jpg" },
    { name: "Shirt ", price: 25.00, image: "goku-dragon-ball-guru-150x150.jpg" },
    { name: "Shirt ", price: 25.00, image: "goku-dragon-ball-guru-150x150.jpg" },
    { name: "shirt", price: 100.00, image: "goku-dragon-ball-guru-150x150.jpg" }
];


const productsContainer = document.getElementById('products');


products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.setAttribute('data-name', product.name);
    productDiv.setAttribute('data-price', product.price.toFixed(2));

    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
    `;


    productsContainer.appendChild(productDiv);
});
