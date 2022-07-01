import { ADD_PRODUCT, RMV_PRODUCT } from "./actionTypes";


const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const { products } = action
            return [...state, products]

        case RMV_PRODUCT:
            const {list} = action
            return list
           
            
       default:
            return state;
    }
  }
  
  export default cartReducer;