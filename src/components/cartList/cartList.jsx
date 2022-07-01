import { useDispatch, useSelector } from "react-redux"
import { rmvProductThunk } from "../../store/modules/cart/thunk"
import { CardContainer } from "../card/style"
import { CartContainer } from "./styled"


const CartList = () => {

  const cart =  useSelector(({cart}) => cart)
  
  const dispatch = useDispatch()

  return (
    <CartContainer>
        {cart.map((product) =>  
            <CardContainer key={product.id}>
                <img src={product.image} alt={product.name}/>
                <h1>{product.name}</h1>
                <p>R$ {product.price},99</p>
                <button onClick={() => dispatch(rmvProductThunk(product.id))}>remover</button>
           </CardContainer>)
       
        }
    </CartContainer>
  )
}

export default CartList