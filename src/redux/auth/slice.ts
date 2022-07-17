// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//
// const initialState: CartSliceState = {
//     totalPrice: totalPrice,
//     items: items,
// };
//
// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         addItem(state, action: PayloadAction<TCartItem>) {
//             const findItem = state.items.find((obj) => obj.id === action.payload.id);
//             if (findItem) {
//                 findItem.count++;
//             } else {
//                 state.items.push({ ...action.payload, count: 1 });
//             }
//             state.totalPrice = state.items.reduce((sum, obj) => {
//                 return obj.price * obj.count + sum;
//             }, 0);
//         },
//     },
// });
//
// export const { addItem } = authSlice.actions;
// export default authSlice.reducer;
