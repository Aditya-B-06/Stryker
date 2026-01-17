import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen:false,
  isProductOpen:false,
  theme:"light"
}

export const uiSlice = createSlice({
  name:"ui",
  initialState,
  reducers:{
    cartToggle:(state) =>{
      state.isCartOpen = !state.isCartOpen
    },
    productToggle:(state) => {
      state.isProductOpen = !state.isProductOpen
    },
    themeToggle:(state) => {
      const currTheme = state.theme
      if(currTheme === "dark"){
        state.theme = "light"
      } else {
        state.them = "dark"
      }
    }
  }
})

export const {cartToggle,productToggle,themeToggle} = uiSlice.actions
export default uiSlice.reducer