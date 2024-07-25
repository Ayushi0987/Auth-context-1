import React, {useState, useEffect} from 'react'

export default function Favourite() {
  const [favouriteProducts, setFavouriteProducts] = useState([]);
  useEffect(()=>{
      const existingLocalStorage = JSON.parse(localStorage.getItem('favouriteProducts')) || [];
      setFavouriteProducts(existingLocalStorage);
  },[])
  function removeProductFromLocalStorage(id){
      const filteredFavouriteProduct = favouriteProducts.filter((product)=>{
        return product.id != id
      })
      setFavouriteProducts(filteredFavouriteProduct);
      localStorage.setItem('favouriteProducts', JSON.stringify(filteredFavouriteProduct))
  }
  return (
    <div className='favourite-component'>
      <h2>Favourite</h2>
      {favouriteProducts.map((product)=>{
          return(
          <div className='favourite-product'>
            <img 
                 src={product.image}
                 alt={product.title}
                 className='favourite-product-image'
            />
            <div className='favourite-product-details'>
                 <h4>{product.title}</h4>
                 <p>Price: &#8377; {product.price}</p>
                 <button onClick={()=> removeProductFromLocalStorage(product.id)}>Remove from Favourites</button>
            </div>
         </div>
        )})
      }
      {!favouriteProducts.length && <p className='favourite-para'>No favourite product found.</p>}
    </div>
  )
}
