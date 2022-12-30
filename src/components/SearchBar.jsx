import React, { useEffect } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import Suggestion from './Suggestion';

const SearchBar = ({ suggestionToggle }) => {

  const { filters:{text}} = useSelector((state)=>state.products);

  const dispatch = useDispatch();
   
  const updateFilterItem = (e) =>{
    const {name,value} = e.target;
    dispatch({type:'setFilterValue',payload:{name,value}})
}

useEffect(()=>{
    dispatch({type:'filterProducts'})
},[text])


  return (
    <div className="search-bar row">
        <div className="col-9 mx-auto search-bar-div">
            <input className='search-box' type="text" name="text" placeholder='SEARCH' readOnly onChange={(e)=>updateFilterItem(e)}   />
            {/* <BsSearch className='search-icon'/> */}

             {
              suggestionToggle && <div className="suggestions">
              <Suggestion />
           </div>
             }
        </div>
        

    </div>
  )
}

export default SearchBar