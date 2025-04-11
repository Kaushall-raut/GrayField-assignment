import { useCart } from '../context/cartContext.jsx';
import { useState } from 'react';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    clearCart();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 4000);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <p>{item.title}</p>
          <span>Quantity:</span>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          />
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: Rs.{total.toFixed(2)}</h3>
      <button onClick={handleCheckout}>Checkout</button>

      {showPopup && <div className="popup">Order placed successfully!</div>}
    </div>
  );
};

export default CartPage;