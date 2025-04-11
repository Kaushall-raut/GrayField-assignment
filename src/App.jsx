import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/Loginpage.jsx';
import ProductList from './pages/productList.jsx';
import ProductDetailPage from './pages/productsDetailPage';
import CartPage from './pages/cartPage.jsx';
import Header from './components/header.jsx';
import { CartProvider } from './context/cartContext.jsx';


const App = () => {
  const isAuthenticated = localStorage.getItem('token');

  return (
    <CartProvider>
      <BrowserRouter>
        {isAuthenticated && <Header />}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products" element={isAuthenticated ? <ProductList /> : <Navigate to="/login" />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
