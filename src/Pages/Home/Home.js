import React from 'react'
import Banner from './Banner'
import Info from './Info'
import MakeApoinment from './MakeApoinment'
import Services from './Services'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <MakeApoinment></MakeApoinment>
    </div>
  )
}

export default Home
