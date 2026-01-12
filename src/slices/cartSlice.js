import {createSlice} from 'react-redux'

const initialState = {
  cart:[{id:1,name:"",price:0,qty:0,image:"",desc:"",country:"",video:"",supplier:"",type:""}],
  cartPrice:0,
  cartSize:1
}

export const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers:{
    addTocart:(state,action) => {
      const product = {
        id:action.payload.id,
        name:action.payload.name,
        price:action.payload.price,
        image:action.payload.image,
        desc:action.payload.desc,
        video:action.payload.video,
        country:action.payload.country,
        supplier:action.payload.supplier,
        qty:action.payload.qty,
        type:action.payload.type
      }
      state.cart.push(product)
      state.cartSize = state.cart.length 
      state.cartPrice = state.cart.reduce((sum,item)=>sum+item.price,0)
    },
    removeFromCart:(state,action) => {
      state.cart.filter((items) => items.id !== action.payload.id)
      state.cartSize = state.cart.length 
      state.cartPrice = state.cart.reduce((sum,item)=>sum+item.price,0)
    },
    emptyCart:(state) => {
      state.cart.cartPrice = 0
      state.cart = []
      state.cart.length =0
    },
    decreaseQty: (state, action) => {
      const item = state.cart.find(
        (item) => item.id === action.payload.id
      )

      if (item && item.qty > 1) {
        item.qty -= 1
      }
    },
    increaseQty: (state, action) => {
      const item = state.cart.find(
        (item) => item.id === action.payload.id
      )

      if (item && item.qty > 1) {
        item.qty += 1
      }
    }

  }
    
})

export const {addTocart,removeFromCart,emptyCart,increaseQty,decreaseQty} = cartSlice.actions 
export default cartSlice.reducer