import React from 'react'
import styled from 'styled-components'

function Feedback() {
  return (
    <Container>
      <Wrap>
        <Left>
            <img src='./images/disk.png' />
        </Left>
        <Right>
            <h1>Give us your feedback!</h1>
            <p>We would love to hear your thoughts on Sokari, the mesmerizing event that brought together Music, Dance, and Drama in an unforgettable spectacle. Share your feedback about the experience, performances, and any suggestions you may have. Your input is invaluable in shaping future editions of Sokar</p>
            
           {/* <button ><a href='https://bit.ly/Sokari2023_Feedback'>Click</a> </button> */}
           <a href='https://bit.ly/Sokari2023_Feedback'><button>Click</button></a>
        </Right>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 70vh;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrap = styled.div`
    width: 95%;
    height: 100%;
    display: flex;

    @media only screen and (max-width: 1200px){
      flex-direction: column;
    }

`
const Left = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media only screen and (max-width: 1200px){
      position: relative;
    }

    img{
        animation: rotation 10s infinite linear;

        @media only screen and (max-width: 1200px){
          position: absolute;
          top: 10%;
          z-index: 0;
        }
    }

`

const Right = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 1000;

    @media only screen and (max-width: 1200px){
      width: 100%;
    }

    

    h1{
        text-align: center;
        padding: 30px 0;
        letter-spacing: 1.3px;

        @media only screen and (max-width: 1200px){
          font-size: 28px;
        }


    }
    p{
        text-align: center;
        font-size: 19px;
        line-height: 2.1rem;
        letter-spacing: 1.2px;

        @media only screen and (max-width: 1200px){
          font-size: 16px;
        }
    }
    button{
        width: 150px;
        height: 40px;
        font-size: 18px;
        margin: 30px 0;
        border: none;
        outline: none;
        border-radius: 5px;
        background: #ecece1;
        color: black;
        font-family: 'Bruno Ace', cursive;
        letter-spacing: 1.6px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

        @media only screen and (max-width: 1200px){
          width: 150px;
          height: 50px;
        }
        &:hover{
          cursor: pointer;
          background: #e1ad21;
          color: #fff;
          transform: scale(1.05);
        }
      }
    
`

export default Feedback
