import { addProduct, rmvProduct } from "./actions"

export const addCartThunk = (product) => {
    return (dispatch) => {
        dispatch(addProduct(product))
    }

}

export const rmvProductThunk = (id) => (dispatch, getState) => {
    const { cart }= getState()
    const newCart = cart.filter((product) => product.id !== id);
    dispatch(rmvProduct(newCart))
}