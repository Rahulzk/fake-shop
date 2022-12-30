import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import Loader from './Loader';

const SingleProduct = () => {

    const [val,setVal] = useState(false);
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product_detail,isProductLoading } = useSelector((state)=>state.products)
    // const { wishlist } = useSelector((state)=>state.wishlist)

    const LoadProduct = async () =>{
        const URL = `https://fakestoreapi.com/products/${id}`
        const { data } = await axios.get(URL);
        await dispatch({type:'setProductDetail',payload:data})
    }

    const handleClick = (id) =>{
        dispatch({type:'addRemoveItem',payload:id})
        
        // const index = wishlist.indexOf(id);
        // index === -1 ? setVal(false) : setVal(true)

    }

    useEffect(()=>{
        LoadProduct();
    },[])


  return (
    // {
    //     isProductLoading ? <Loader /> :
    
    <div className='single-product-container my-10'>
        <div className="row mx-auto">
            <div className="d-flex col-6">
                <img className='mx-auto my-auto' src={product_detail.image} alt="" />
            </div>
            <div className="col-6">
                <p className='title'>{product_detail.title}</p>
                <p className='price' style={{paddingTop:'-3px'}}> <del>RS. {product_detail.price+123}</del> <span className='text3'>{product_detail.price}</span> </p>
                <p className='desc'>{product_detail.description}</p>
                <p className='category'>Categoty : {product_detail.category}</p>
               {
                product_detail.rating &&  <>
                        <StarRatings
                // rating={product_detail.rating.rate}
                starDimension='18px'
                starRatedColor='#fccf03'
            /> 
            {/* <span>({product_detail.rating})</span> */}
                </>
               }
               <br />
               <button className='btn btn-outline-primary my-2' onClick={()=>handleClick(product_detail.id)}>
                {val ? "RemoveFromWishlist":  "AddToWishList"}
               </button>
            </div>
        </div>
    </div>
    )
            // }
  
}

export default SingleProduct