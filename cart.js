// cart.js
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0.00;

// Add to Cart Function
function addToCart(name, price) {
    cart.push({ name, price });
    totalPrice += price;
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('totalPrice', totalPrice.toFixed(2));
    alert(`${name} added to the cart!`);
}

// Display Cart on Cart Page
if (document.getElementById('cart-items')) {
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-btn');

    cartItemsContainer.innerHTML = ''; // Clear existing items

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        totalPriceElement.textContent = '0.00';
        checkoutButton.disabled = true;
    } else {
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${item.name} - $${item.price.toFixed(2)}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
        totalPriceElement.textContent = totalPrice.toFixed(2);
        checkoutButton.disabled = false;
    }
}

// Remove from Cart
function removeFromCart(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('totalPrice', totalPrice.toFixed(2));
    updateCartDisplay();
}

// Checkout Page: Load Cart Items
if (document.getElementById('checkout-items')) {
    displayCheckoutItems();
}

function displayCheckoutItems() {
    const checkoutItemsContainer = document.getElementById('checkout-items');
    const checkoutTotalElement = document.getElementById('checkout-total');
    
    checkoutItemsContainer.innerHTML = ''; // Clear existing items

    if (cart.length === 0) {
        checkoutItemsContainer.innerHTML = '<p>No items in the cart.</p>';
    } else {
        cart.forEach(item => {
            const checkoutItem = document.createElement('div');
            checkoutItem.innerHTML = `<p>${item.name} - $${item.price.toFixed(2)}</p>`;
            checkoutItemsContainer.appendChild(checkoutItem);
        });
        checkoutTotalElement.textContent = totalPrice.toFixed(2);
    }
}

// Place Order (Clear Cart after checkout)
const placeOrderBtn = document.getElementById('place-order-btn');
if (placeOrderBtn) {
    placeOrderBtn.addEventListener('click', () => {
        alert('Order placed successfully!');
        localStorage.clear();
        window.location.href = 'index.html'; // Redirect to products page
    });
}


document.getElementById('logout-btn').addEventListener('click', function() {
    // Clear login state from localStorage
    localStorage.removeItem('loggedIn');

    // Redirect to login page
    window.location.href = 'login.html';
});
