import React from 'react'
import Hero from '../components/Hero'
import BestSeller from '../components/BestSeller'
import FavBook from '../components/FavBook'
import Promotion from '../components/Promotion'
import OtherBooks from '../components/OtherBooks'
import Review from '../components/Review'

const Home = () => {
  return (
    <div className="">
      <Hero/>
      <BestSeller/> 
      <FavBook/> 
      <Promotion/>
      <OtherBooks/> 
      <Review/>
  </div>
  )
}

export default Home
