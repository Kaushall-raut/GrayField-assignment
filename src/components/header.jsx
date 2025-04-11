import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/cartContext.jsx';
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="header">
        {/* <p>online shop</p> */}
      {/* <Link to="/">Online shop</Link> */}
      <Link to="/products">Home</Link>
     
      <Link to="/cart"> <CiShoppingCart style={{fontSize:"1rem"}}  />Cart ({cartItems.length})</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Header;
