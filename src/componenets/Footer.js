import React from 'react'
import styled from 'styled-components'
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";


function Footer() {
  return (
    <Container>
      <Wrap>
      <div>
            
            <a href='https://instagram.com/artclub.uwu?igshid=NTc4MTIwNjQ2YQ=='><BsInstagram  style={{fontSize: '40px', margin: '10px'}}/></a>
            <a href='https://www.facebook.com/artclubofuwu?mibextid=ZbWKwL'><BsFacebook style={{fontSize: '40px', margin: '10px'}}/></a>
            
            {/* <BsYoutube style={{fontSize: '40px', margin: '10px'}}/> */}
        </div>
        <div>
        <p>Adithya (President of Art club) &nbsp; - &nbsp; <span>+94 769371512</span></p>
            <p>Pathum (Event Main Cordinator) &nbsp; - &nbsp; <span>+94 769091560</span></p>
            <p>Thanu (Secretary of Art club) &nbsp; - &nbsp; <span>+94 717583510</span></p>
            <p>Gayaru (Event Junior cordinator) &nbsp; - &nbsp; <span>+94 714282870</span></p>
            
        </div>
        <div>
       
            <p>Anjana (Online Ticket Booking) &nbsp; - &nbsp; <span>+94 714282870</span></p>
            <p>Vimukthi (Ticket Booking Chief) &nbsp; - &nbsp; <span>+94 705323814</span></p>
            <p>Sandika &nbsp; - &nbsp; <span>+94 704008585</span></p>
            
        </div>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(206 178 102);

`

const Wrap = styled.div`
    width: 97%;
    //height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media only screen and (max-width: 1200px){
      flex-direction: column;
    }

    div{
      color: #fff;
      width: 32%;
      padding: 10px 0;

      @media only screen and (max-width: 1200px){
        width: 100%;;
      }
    }
    p{
      margin: 8px 0;
      font-family: 'Bruno Ace', cursive;
      font-size: 13px;

      @media only screen and (max-width: 1200px){
        font-size: 11px;
      }
    }
    a{
      color: #fff;
    }

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
