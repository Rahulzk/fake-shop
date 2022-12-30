import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Loader from './Loader'
import SearchBar from './SearchBar'
import Suggestion from './Suggestion'

const Home = () => {
     const { isLoading } = useSelector((state)=>state.products)
  return (
    <div className="home-container">
       {
         isLoading ? <Loader />   :  <SearchBar suggestionToggle={true}/>
       }
        {/* <Suggestion /> */}
               <NavLink to='/products'>
                  <button className='btn btn-primary'>All Products</button>
               </NavLink>
    </div>    
)
}

export default Home