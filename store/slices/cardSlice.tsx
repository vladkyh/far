import { createSlice } from '@reduxjs/toolkit'
// import CardItems from 'components/CardItems'
import GetCookie from '../../hooks/getCookie'
import SetCookie from '../../hooks/setCookie'
const initialState= {
    totalPrice: GetCookie('totalPrice'),
    items: GetCookie('yesyes')
  }
export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    // добавить товар в корзину
    addProduct(state, action){
    const findItem = state.items.find(obj => obj.id === action.payload.id)
    if(findItem){
      findItem.count++
    } else{
      state.items.push({
        ...action.payload,
        count:1
      })
    }
      // state.totalPrice 
      state.totalPrice = state.items.reduce((sum,obj)=>{
        const total = obj.count * obj.price + sum;
        SetCookie('totalPrice', total)
        return total
      },0)
    },
    // соответственно минус
    minusProduct(state, action){
      const findItem = state.items.find(obj => obj.id === action.payload.id)
      if(findItem && findItem.count >=1){
        findItem.count--
      }
      state.totalPrice = state.items.reduce((sum,obj)=>{
        const total = obj.count * obj.price + sum;
        SetCookie('totalPrice', total)
        return total
      },0)
      
    },
    // удалить все
    removeProduct(state, action){
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      },
    clearProduct(state, action){ 
      state.items = [];
      state.totalPrice = 0;
      
    },
  },
})
export const {removeProduct, clearProduct ,addProduct,minusProduct  } = cardSlice.actions
export default cardSlice.reducer