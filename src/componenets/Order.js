import React from 'react'
import styled from 'styled-components'

function Order() {
  return (
    <Container>
      <Image>
        <img src='./images/ticket.jpg' />
        <Wrap>
          <Left></Left>
          <Right>
            <div>
            <button>ORDER</button>
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
background-image: url('./images/back.png');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
position: relative;

`

const Image = styled.div`
  width: 100%;
  height: 100%;

  img{
    width: 100%;
    height: 100%;
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

`

const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  div{
    width: 300px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #fff;
    border-radius: 5px;
    position: relative;
    z-index: 1000;

    &:hover{
      //background: #e1ad21;
      //border: 2px solid #e1ad21;
      transform: scale(1.05);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);

box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }

  //   &:before{
  //     content: '';  #e1ad21
  //     position: absolute;
  //     bottom: 25px;
  //     left: 0;
  //     width: 15%;
  //     height: 20%;
  //     background: #e1ad21;
  //     border-radius: 50% 50% 50% 50%;
  //     box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73% ) 0px 16px 10px -10px;
  //     z-index: -1;
  //     animation: rotation 10s infinite linear;
  // }
  }

  button{
    width: 80%;
    height: 90px;
    font-size: 28px;
    border: none;
    outline: none;
    border-radius: 5px;
    background: #fff;
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
