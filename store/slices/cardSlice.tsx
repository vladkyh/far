import { createSlice } from '@reduxjs/toolkit';
import GetCookie from '../../hooks/getCookie';
import SetCookie from '../../hooks/setCookie';

const initialState = {
  totalPrice : GetCookie('totalPrice'),
  items : GetCookie('yesyes'),
};

export const cardSlice = createSlice({

  name: 'card',
  initialState,

  reducers: {

    addProduct(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        const total = obj.count * obj.price + sum;
        return total;
      }, 0);
      SetCookie('totalPrice', state.totalPrice.toString());
      SetCookie('yesyes', JSON.stringify(state.items));
    },

    minusProduct(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload.id);
      if (findItem && findItem.count >= 1) {
        findItem.count--;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        const total = obj.count * obj.price + sum;
        return total;
      }, 0);
      SetCookie('totalPrice', state.totalPrice.toString());
      SetCookie('yesyes', JSON.stringify(state.items));
    },

    removeProduct(state, action) {
      state.items = state.items.filter(obj => obj.id !== action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        const total = obj.count * obj.price + sum;
        return total;
      }, 0);
      SetCookie('totalPrice', state.totalPrice.toString());
      SetCookie('yesyes', JSON.stringify(state.items));
    },

    clearProduct(state) {
      state.totalPrice = 0;
      state.items = [];
      SetCookie('totalPrice', '0');
      SetCookie('yesyes', '[]');
    }
    
  }
});

export const { removeProduct, clearProduct, addProduct, minusProduct } = cardSlice.actions;

export default cardSlice.reducer;





// import { createSlice } from '@reduxjs/toolkit'
// // import CardItems from 'components/CardItems'
// import GetCookie from '../../hooks/getCookie'
// import SetCookie from '../../hooks/setCookie'
// const initialState= {
//     totalPrice: GetCookie('totalPrice'),
//     items: GetCookie('yesyes')
//   }
// export const cardSlice = createSlice({
//   name: 'card',
//   initialState,
//   reducers: {
//     // добавить товар в корзину
//     addProduct(state, action){
//     const findItem = state.items.find(obj => obj.id === action.payload.id)
//     if(findItem){
//       findItem.count++
//     } else{
//       state.items.push({
//         ...action.payload,
//         count:1
//       })
//     }
//       // state.totalPrice 
//       state.totalPrice = state.items.reduce((sum,obj)=>{
//         const total = obj.count * obj.price + sum;
//         SetCookie('totalPrice', total)
//         return total
//       },0)
//     },
//     // соответственно минус
//     minusProduct(state, action){
//       const findItem = state.items.find(obj => obj.id === action.payload.id)
//       if(findItem && findItem.count >=1){
//         findItem.count--
//       }
//       state.totalPrice = state.items.reduce((sum,obj)=>{
//         const total = obj.count * obj.price + sum;
//         SetCookie('totalPrice', total)
//         return total
//       },0)
      
//     },
//     // удалить все
//     removeProduct(state, action){
//       state.items = state.items.filter((obj) => obj.id !== action.payload);
//       },
//     clearProduct(state){ 
//       state.totalPrice = 0;
//       state.items = [];
      
      
//     },
//   },
// })
// export const {removeProduct, clearProduct ,addProduct,minusProduct  } = cardSlice.actions
// export default cardSlice.reducer