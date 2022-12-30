import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './components/Home';
import Products from './components/Products';
import Suggestion from './components/Suggestion';
import './styles/app.scss'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Error from './components/Error';
import SearchBar from './components/SearchBar';
import SingleProduct from './components/SingleProduct';


function App() {

  const dispatch = useDispatch()

  const fetchProducts = async () =>{
     const URL = `https://fakestoreapi.com/products`;
     const { data } = await axios.get(URL);
     dispatch({type:"setProduct",payload:data});
     dispatch({type:'setSuggestionProduct',payload:getMultipleRandom(data,5)});
     dispatch({type:'setPriceRange'})
  }

  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0, num);
  }

  useEffect(()=>{
    fetchProducts()
  },[])


  return (
     <div className="app">
    
      <Router>
        <Routes>
          <Route path='/' element={ <Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/products/:id' element={<SingleProduct />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
