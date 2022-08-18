import React from 'react'
import Footer from '../Components/Footer/Footer'
import Hero from '../Components/HeroSection/Hero'
import Landingsection2 from '../Components/LandingSection2/Landingsection2'
import Navbar from '../Components/Navbar/Navbar'
import ProductSection from '../Components/ProductsSection/ProductSection'
import Topnfts from '../Components/Top NFTs/Topnfts'

function Render() {
  return (
    
    <div style={{background:"#1e1e1e"}}>
        {/* <Navbar/> */}
        <Hero/>
        <Landingsection2/>
        <ProductSection/>
        <Topnfts/>
        <Footer/>
    </div>
  )
}

export default Render