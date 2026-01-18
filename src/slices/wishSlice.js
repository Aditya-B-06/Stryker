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
      const exists = state.wishList.some(
          item => item.id === action.payload.id
      )
      if (!exists) {
        state.wishList.push(action.payload)
        state.wishListQty++
      }
    },
    removeFromWishList:(state,action) =>{
      const exists = state.wishList.some(
          item => item.id === action.payload.id
      )
      if (exists) {
        state.wishList.pop(action.payload)
        state.wishListQty--
      }
    }
  }
})

export const {addToWishList,removeFromWishList} = wishSlice.actions
export default wishSlice.reducer