import React from 'react'
import Card from '../components/card/Card'
import CartList from '../components/cartList/cartList'
import Header from '../components/header/Header'
import { ContainerPage } from './styled'

const MarketPlace = () => {
    //<CartList></CartList>
  return (
    <ContainerPage>
      <Header/>
      <Card/>
    </ContainerPage>
  )
}

export default MarketPlace