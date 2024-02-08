import React from 'react'
import "./home.css"
import Header from '../../Components/Header/Header'
import Featured from '../../Components/Featured/Featured'
import PropertyList from '../../Components/PropertyList/PropertyList'
import FeaturedProperties from '../../Components/FeaturedPropertyList/FeaturedProperties'
import MailList from '../../Components/MailList/MailList'

const Home = () => {
  return (
    <>
       <Header />
       <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse With Property Type</h1>
        <PropertyList />
        <h1 className='homeTitle'>Home Guests Love</h1>
        <FeaturedProperties />
        <MailList />
       </div>
    </>
  )
}

export default Home
