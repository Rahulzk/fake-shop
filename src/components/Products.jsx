import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import FilterProduct from './FilterProduct'
import SearchBar from './SearchBar'

const Products = () => {
    const { filter_products } = useSelector((state)=>state.products)

  return (
    <div className='container-fluid'>
        <SearchBar suggestionToggle={false}/>
        <p className='text'>Search Results</p>
        <div className="row">
            
            <div className="col-3">
                  <FilterProduct />
            </div>

            <div className="products-container col-9 ">
                {

                    filter_products.map((product,index)=>(
                        <CartItem key={index} product={product} ratingToggle={true} isWishlist={true} />
                    ))
                }
            </div>
        
    </div>
    </div >
  )
}

export default Products