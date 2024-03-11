import React, { useState } from 'react';

const  ProductList=()=> {
  const [cartCount, setCartCount] = useState(0);

  
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  }
  
    

}
export default ProductList;
