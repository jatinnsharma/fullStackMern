import React from 'react'
import Header from '../../component/header/Header'
import NavData from '../../component/header/NavData'
import Carousel from '../../component/carousel/Carousel'
import ProductsList from '../../component/product/ProductsList'

const Home = () => {
  return (
    <>
        <Header/>
        <NavData/>
        <Carousel/>
        <ProductsList/>
    </>
  )
}

export default Home