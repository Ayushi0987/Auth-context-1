import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([]);
  async function getProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        if(!response.ok){
          throw new Error("Something went wrong")
        }
        const ProductData = await response.json();
        // console.log(ProductData);
        setProducts(ProductData);
        } catch (err) {
        console.error(err);
        }
  }
  function addProductToLocalStorage(product){
    const existingLocalStorage = JSON.parse(localStorage.getItem('favouriteProducts')) || [];
    existingLocalStorage.push(product);
    localStorage.setItem('favouriteProducts', JSON.stringify(existingLocalStorage));
  }
  useEffect(()=>{
    getProducts();
  }, [])
  return (
    <div className='product-component'>
      <h2>Products</h2>
      {products.map((product)=>(
          <div className='product' key={product.id}>
            <Link to={`/products/${product.id}`}>
                <img 
                   src={product.image}
                   alt={product.title}
                   className='product-image'
                />
            </Link>
            <div className='product-details'>
                <h4>{product.title}</h4>
                <p>Price: &#8377; {product.price}</p>
                <button onClick={()=>addProductToLocalStorage(product)}>Add to Favourites</button>
            </div>
          </div>
        ))}
    </div>
  )
}
