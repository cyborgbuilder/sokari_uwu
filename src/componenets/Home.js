import React from 'react'
import Hero from './Hero'
import BlankPage from './Blank'
import styled from 'styled-components'
import LogoPage from './LogoPage'
import About from './About'
import Order from './Order'
import Feedback from './Feedback'
import Footer from './Footer'
import MapPage from './MapPage'
import Sponsers from './Sponsers'
import Ticket from './Ticket'

function Home() {
  return (
    <Container>
      <Hero />
      <About />
      <BlankPage />
      <LogoPage />
      <Ticket />
      <Order />
      <Feedback />
      <MapPage />
      <Sponsers />
      {/* <Footer /> */}

    </Container>
  )
}

const Container = styled.div`
width: 100%;
overflow: hidden;
    position: absolute;
    top: 0;

`

export default Home
