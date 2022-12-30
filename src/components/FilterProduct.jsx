import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const FilterProduct = () => {

    const { products,filters:{category,price,maxPrice,minPrice} } = useSelector((state)=>state.products)

    const dispatch = useDispatch();

    const updateFilterValue = (e) =>{
         const {name,value} = e.target;
         dispatch({type:'setFilterValue',payload:{name,value}})
    }






    const getUniqueProperty = (data,property) =>{
        let result = data.map((item)=>{
            return item[property]
        })

        result = ["all",...new Set(result)]
        return result;
    }

    const uniqueCategoryData = getUniqueProperty(products,'category')

    useEffect(()=>{
        dispatch({type:'filterProducts'})
    },[category,price])

  return (
      <div className="filter-item">
            <div className="category-filter">
                <p>Category</p>

                {
                    uniqueCategoryData.map((cur,index)=>(
                        <div className=' my-2'>
                            <div>
                             <button className={cur===category ? 'category-btn my-1 active' : 'category-btn my-1'} key={index} type='button' name="category" value={cur} onClick={(e)=>updateFilterValue(e)}>
                                {cur}
                             </button>
                            </div> 
                        </div>
                    ))
                }

            </div>

            <div className="price-filter">
                <p>Price</p>
                <p> ₹ {price} </p>
                <input 
                    type="range" 
                    name="price"
                    min={minPrice}
                    max={maxPrice} 
                    value={price}
                    step="1"
                    onChange={(e)=>updateFilterValue(e)}
                />
                    
            </div>

      </div>
  )
}

export default FilterProduct