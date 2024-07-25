import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

export default function SingleProduct() {
  const [product, setProducts] = useState({});
  const params = useParams();
  const [loader, setLoader] = useState(true);

  async function getSingleProduct(productId) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      if(!response.ok){
        throw new Error("Something went wrong")
      }
      const ProductData = await response.json();
      // console.log(ProductData);
      setProducts(ProductData);
      setLoader(false);
      } catch (err) {
      console.error(err);
      }
    }
    useEffect(()=>{
      const productId = params.id;
      getSingleProduct(productId)
    },[])
  return (
    <div className='single-product-component'>
      <h2>Single Products ID: </h2>
      {
        <div className='single-product'>
            <img src={product.image}
                 alt={product.title}
                 className='product-image'
            />
           <div className='single-product-deatail'>
                 <h4>{product.title}</h4>
                 <p>{product.description}</p>
                 <p>Price: &#8377; {product.price}</p>
           </div>
        </div>
      }
      {loader && <p className='loader'>Loading...</p>}
    </div>
  )
}
