import { configureStore } from '@reduxjs/toolkit'
import { productReducer } from './productReducer';
import { wishlistReducer } from './wishlistReducer';

const store = configureStore({
    reducer : {
        products : productReducer,
        wishlist : wishlistReducer,
    }
})

export default store;