const cartCardsContainer = document.getElementById('cart-cards-container');

function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCardsContainer.innerHTML = '';
    cart.forEach(user => {
        const cartCard = document.createElement('div');
        cartCard.classList.add('cart-card');
        cartCard.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <button onclick="removeFromCart(${user.id})">Delete</button>
        `;
        cartCardsContainer.appendChild(cartCard);
    });
}

function removeFromCart(userId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(user => user.id !== userId);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

renderCart();
