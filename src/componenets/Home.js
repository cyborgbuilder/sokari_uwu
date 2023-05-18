import React from 'react'
import Hero from './Hero'
import BlankPage from './Blank'
import styled from 'styled-components'
import LogoPage from './LogoPage'
import About from './About'
import Order from './Order'

function Home() {
  return (
    <Container>
      <Hero />
      <About />
      <BlankPage />
      <LogoPage />
      <Order />
    </Container>
  )
}

const Container = styled.div`
width: 100%;
    position: absolute;
    top: 0;

`

export default Home