import React from 'react'
import styled from 'styled-components'

function MapPage() {
  return (
    <Container>
      <h1>Event Plan View</h1>
      <img src='./images/map3.png' />
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 110vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: black;
    flex-direction: column;

    h1{
      font-size: 40px;
      padding: 30px 0;
      @media only screen and (max-width: 1200px){
        font-size: 28px;
      }
    }

    @media only screen and (max-width: 1200px){
        height: 70vh;
      }

    img{
        width: 90%;
        height: 90%;
        border-radius: 15px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

        &:hover{
          transform: scale(1.01);
        }

        
    }


`


export default MapPage
