import { createReducer } from '@reduxjs/toolkit'


const initialState = {
    isLoading : true,
    products : [],
    suggestion_product : [],
    filter_products : [],
    filters :{
        text : '',
        category:'all',
        price:0,
        maxPrice:0,
        minPrice:0,
    },
    isProductLoading : true,
    product_detail : {},
}

export const productReducer = createReducer(initialState,{

    setProduct : (state,action) =>{
        state.products = action.payload;
        state.filter_products = action.payload;
    },
    setSuggestionProduct : (state,action) =>{
        state.isLoading = false;
        state.suggestion_product = action.payload;
    },

    setFilterValue : (state,action) =>{
        const { name, value } = action.payload;
        state.filters = { ...state.filters, [name]: value }

    },
    filterProducts: (state) => {
        const { text, category, price } = state.filters;

              
        let tempFilterProducts = state.products;
        let newFilterProducts = state.products;


        if (text) {
            newFilterProducts = tempFilterProducts.filter((curr) => {
                return curr.title.toLowerCase().includes(text);
            })
            state.filter_products = newFilterProducts;
            return;
        }

        if (price === 0) {
            newFilterProducts = tempFilterProducts.filter(
              (curElem) => curElem.price === price
            );
          } else {
            newFilterProducts = tempFilterProducts.filter(
              (curElem) => curElem.price <= price
            );
          }

        if (category !== 'all') {
            newFilterProducts = tempFilterProducts.filter((curr) => {
                return curr.category === category;
            })
        }

        state.filter_products = newFilterProducts;
    },
    
    setPriceRange: (state) => {
        const { products } = state;

        const priceArr = products.map((item) => (item.price));
        const maxPrice = Math.max(...priceArr);

        state.filters.price = maxPrice+1;
        state.filters.maxPrice = maxPrice;
    },
    setProductDetail : (state,action) =>{
        state.isProductLoading = false;
        state.product_detail = action.payload;
    }
})