import React from 'react'
import styled from 'styled-components'
function Map() {
    return (
        <Container>
            <img src='./images/banner2.jpg' />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url('/Images/banner.jpg');
    background: black;
    position: fixed;
    top: 0;

    img{
        width: 100%;
        height: 100%;
    }
    
`
export default Map