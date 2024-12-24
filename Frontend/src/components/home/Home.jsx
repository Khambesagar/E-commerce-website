import React from 'react'


import Best_electronics_cards from '../Best_electronics_cards'
import Show_all_products from '../Show_all_products'
import Mens_Women_cards from '../fashion\'s/Mens_Women_cards'
import Fashion_cards from '../fashion\'s/Fashions_cards'
import Carousel from '../Carousel'



function Home() {
  return (
    <>
      {/* only this page show here ( you want to show in front home page)  */}
      {/* <Show_navbar_product/> */}
    
      {/* <div className='overflow-x-hidden'> */}
        <Carousel/>
      {/* </div> */}
      <Best_electronics_cards />
      <Fashion_cards />
      <Mens_Women_cards />
      <Show_all_products />

    </>
  )
}

export default Home