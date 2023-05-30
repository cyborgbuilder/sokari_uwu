import React, {useRef } from 'react'
import styled from 'styled-components'

function Hero() {
  
  return (
    <Container>
      <video src='./images/back.mp4' 
      autoPlay={true} 
      muted 
      loop={true}
      controls={false}
      playsInline />

{/* <div className='video' dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="./images/back.mp4"
          classname='vvideo'
          
        />,
      ` }}></div> */}
      <Wrap>
        {/* <h1>SOKARI</h1>
        <h2>UVA WELLASSA UNIVERSITY PRESENTS</h2> */}
        <img src='./logo2.png' />
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: black;;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    video{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

`
const Wrap = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1{
      font-size: 90px;
    }
    h2{
      letter-spacing: 1.6px;
      margin: 20px 0;
      //color: #e1ad21;
    }

    img{
      width: 30%;

      @media only screen and (max-width: 1200px){
        width: 80%;
      } 
    }

`
export default Hero
