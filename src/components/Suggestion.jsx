import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';

const Suggestion = () => {
  const { suggestion_product } = useSelector((state)=>state.products);
  return (
    <div className="suggestion-container ">
      <p style={{fontSize:'30px',fontWeight:600}}>Latest Trends</p>
        <div className="py-2 item-wrapper">
            {
              suggestion_product.map((product,index)=>(
                <CartItem key={index} product={product} wishlist={false} ratingToggle={false}/>
              ))
            }
        </div>
    </div>
  )
}

export default Suggestion