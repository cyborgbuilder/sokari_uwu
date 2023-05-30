import React from 'react'
import styled from 'styled-components'
import './Style.css'

function Order() {
  return (
    <Container>
      <Image>
        <img src='./images/ticket.jpg' />
        <Wrap>
          <Left></Left>
          <Right>
            <div className='border_div'>
            
            <a href='https://bit.ly/Sokari_2023'><button>ORDER</button></a>
            <span class="top"></span>
      <span class="right"></span>
      <span class="bottom"></span>
      <span class="left"></span>
            </div>
          </Right>
        </Wrap>
      </Image>
    </Container>
  )
}

const Container = styled.div`
width: 100%;
height: 80vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
position: relative;
overflow: hidden;

@media only screen and (max-width: 1200px){
  height: 60vh;
}

`

const Image = styled.div`
  width: 100%;
  height: 100%;

  img{
    width: 100%;
    height: 100%;

    @media only screen and (max-width: 1200px){
      width: 185%;
    } 
  }

`

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;

`

const Left = styled.div`
  width: 50%;

  @media only screen and (max-width: 1200px){
    display: none;
  } 

`

const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1200px){
    width: 100%;
  } 

 

  button{
    width: 200px;
    height: 90px;
    font-size: 28px;
    border: none;
    outline: none;
    border-radius: 5px;
    background: #ecece1;
    color: black;
    font-family: 'Bruno Ace', cursive;
    letter-spacing: 1.6px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover{
      cursor: pointer;
      background: #e1ad21;
      color: #fff;
      transform: scale(1.05);
    }
  }

`

export default Order
