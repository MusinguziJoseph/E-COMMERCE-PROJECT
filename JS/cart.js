// Function to add a product to the cart
function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item is already in the cart
    const existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {
        // If the item exists, increase the quantity
        existingProduct.quantity += 1;
    } else {
        // If the item is not in the cart, add it with a quantity of 1
        cart.push({ id, name, price, quantity: 1 });
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart icon count
    updateCartCount();

    // Optionally, show a message or update the cart icon
    alert(`${name} has been added to the cart.`);
}

// Function to update the cart count on the cart icon
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

// Function to display cart items on the cart page
function displayCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement("div");
            cartItem.className = "cart-item";
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" style="width:50px; height:auto;">
                <p><strong>${item.name}</strong> - UGX${item.price} x ${item.quantity}</p>
                <p>Total: UGX${item.price * item.quantity}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartContainer.appendChild(cartItem);
        });

        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const totalDisplay = document.createElement("p");
        totalDisplay.innerHTML = `<strong>Total: UGX${total}</strong>`;
        cartContainer.appendChild(totalDisplay);
    }
}



// Function to remove an item from the cart
function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Filter out the item to be removed
    cart = cart.filter(item => item.id !== id);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart display and cart count
    displayCart();
    updateCartCount();
}

// Initialize cart count on page load
updateCartCount();

// Display cart items on the cart page
if (document.getElementById('cart-items')) {
    displayCart();
}
