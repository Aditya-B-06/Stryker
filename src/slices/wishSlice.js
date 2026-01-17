import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishList:[],
    wishListQty:0
}

export const wishSlice = createSlice({
  name:"Wish List",
  initialState,
  reducers:{
    addToWishList:(state,action)=>{
      state.wishList.push(product)
      state.wishListQty = state.wishList.length
    },
    removeFromWishList:(state,action) =>{
      state.wishList.filter((items) => items.id !== action.payload.id)
      state.wishListQty = state.wishList.length
    }
  }
})

export const {addToWishList,removeFromWishList} = wishSlice.actions
export default wishSlice.reducer