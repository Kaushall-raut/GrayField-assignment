import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from './slider';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    const url = category ? `https://fakestoreapi.com/products/category/${category}` : 'https://fakestoreapi.com/products';
    axios.get(url).then((res) => setProducts(res.data));
  }, [category]);

  return (
    <div>
        <Slider/>
        <h2> choose Category</h2>
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men&apos;s Clothing</option>
        <option value="women's clothing">Women&apos;s Clothing</option>
      </select>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Rs.{product.price}</p>
            <Link to={`/products/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;