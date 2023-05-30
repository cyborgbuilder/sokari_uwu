import React from 'react'
import styled from 'styled-components'


function Ticket() {
  return (
    <Container>
      <img src='./ticket1.png' />
      <img src='./ticket2.png' />
      <img src='./ticket3.png' />
    </Container>
  )
}

export default Ticket

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: transperant;
    display: flex;
    align-items: center;
    justify-content: center;
    //flex-direction: column;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }

    img{
        width: 40%;
        margin: 5px;
        transform: rotate(30deg);

        @media only screen and (max-width: 768px) {
            width: 80%;
            margin: 35px;
            transform: rotate(0deg);
        }
    }

`