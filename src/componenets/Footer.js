import React from 'react'
import styled from 'styled-components'
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";


function Footer() {
  return (
    <Container>
      <Wrap>
        <Left>
            <BsInstagram />
            <BsFacebook />
            <BsYoutube />
        </Left>
        <Right>
            <p>Developed by</p>
            <img src='./images/duomo.png' />
        </Right>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 80px;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;

`

const Wrap = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    //align-items: center;

    icons{
        color: #fff;
    }

    img{
        width: 5%;
    }

`
const Left = styled.div`
color: #fff;
font-size: 30px;

`

const Right = styled.div`
    display: flex;

`
export default Footer
