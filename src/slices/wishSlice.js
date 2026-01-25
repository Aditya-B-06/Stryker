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
        state.wishListQty= state.wishList.length
      }
      console.log(state.wishList)
    },
    removeFromWishList:(state,action) =>{
      const index = state.wishList.findIndex(
          item => item.id === action.payload.id
      )
      if (index !== -1) {
        state.wishList.splice(index,1);
        state.wishListQty= state.wishList.length
      }
    }
  }
})

export const {addToWishList,removeFromWishList} = wishSlice.actions
export default wishSlice.reducer