import Cookies from 'js-cookie';

function addToCart(id, name, flavor, price) {
    // Retrieve the existing cart items from cookies
    const cartItems = JSON.parse(Cookies.get('cartItems') || '[]');
    
    // Create a new cart item
    const newItem = { id, name, flavor, price }; // Include price in the newItem object
    
    // Add the new item to the cart
    cartItems.push(newItem);
    
    // Update the cookies with the new cart items
    Cookies.set('cartItems', JSON.stringify(cartItems), { expires: 7 }); // Cookie expires in 7 days
    
    console.log(`Item added to cart: ${name} (${flavor})`);
    
    // Dispatch a custom event to notify about the cart update
    const event = new Event('cartUpdated');
    window.dispatchEvent(event);
}

function getCartItems() {
    return JSON.parse(Cookies.get('cartItems') || '[]');
}

export { addToCart, getCartItems };
