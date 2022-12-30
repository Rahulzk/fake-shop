import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    wishlist : [],
}

export const wishlistReducer = createReducer(initialState,{
    addRemoveItem:(state,action) =>{

        const tempList = state.wishlist;
        const  id  = action.payload;


        const index = tempList.indexOf(id);

        if(tempList.indexOf(id) !== -1){            
            tempList.splice(index,1);
        }else{
            tempList.push(id);
        }
        state.wishlist = tempList;
        //  return {...state, state.wishlist : tempList};

    },
    
})