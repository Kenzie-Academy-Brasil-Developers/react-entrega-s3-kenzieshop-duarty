import { CardContainer, ProductsContainer } from './style'
import { useDispatch, useSelector } from "react-redux";
import { addCartThunk } from '../../store/modules/cart/thunk';


const Card = () => {

  const dispatch = useDispatch()
  
  const products = useSelector(({products}) => products)
  const cart = useSelector(({cart}) => cart)

  const addToCart = (product) => {
    console.log(product)
     if(!cart.find((item) => item === product)){
      dispatch(addCartThunk(product))
     }
     
     
     
  }

  return (
    <ProductsContainer>
       {products.map((product) =>  
        <CardContainer key={product.id}>
            <img src={product.image} alt={product.name}/>
            <h1>{product.name}</h1>
            <p>R$ {product.price},99</p>
            <button onClick={() => addToCart(product)}>Comprar</button>

        </CardContainer>)}
    </ProductsContainer>
  )
}

export default Card