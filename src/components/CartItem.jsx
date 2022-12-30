import React, { useEffect, useState } from 'react'
import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import StarRatings from 'react-star-ratings';


const CartItem = ({ product,isWishlist,ratingToggle }) => {

  const {id} = product;
  const [toggleWishlist,setToggleWishlist] = useState(false);
  const dispatch = useDispatch();

  const { wishlist} = useSelector((state)=>state.wishlist);


  const handleClick = (id) =>{
      console.log('click ho rha hhh');
      dispatch({type:'addRemoveItem',payload:id});
  }

  useEffect(()=>{
    if(wishlist.indexOf(product.id) !== -1){
      setToggleWishlist(true);
   }else setToggleWishlist(false);

  },[wishlist])


  return (
    <div className="cart-container">
      {        
       isWishlist && <div className="heart-icon-div" onClick={()=>handleClick(product.id)}>
              { 
                toggleWishlist ?  <AiFillHeart className='heart-icon' /> : <AiOutlineHeart className='heart-icon-outline' />
              }
        </div>
        }
        <NavLink to={`/products/${id}`} style={{textDecoration:'none',color:'black'}}>

        <div className='image-div'>
          <img className='cart-image' src={product.image} alt="" />
        </div>
        </NavLink>
        <p style={{fontSize:'15px',fontWeight:500,marginTop:'3px',marginBottom:'3px'}} >{product.title.substring(0,20)}...</p>
        
        
      {ratingToggle && <>
          <p style={{paddingTop:'-3px'}}> <del>RS. {product.price+123}</del> <span className='text3'>{product.price}</span> </p>
          <p>
          <StarRatings
            rating={product.rating.rate}
            starDimension='18px'
            starRatedColor='#fccf03'
          />
          <span style={{fontSize:'10px',marginBottom:'6px'}}>( {product.rating.count})</span>
          </p>
      </>
      }
      
    </div>
  )
}

export default CartItem