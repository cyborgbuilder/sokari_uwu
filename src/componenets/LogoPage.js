import React from 'react'
import styled from 'styled-components'
function LogoPage() {
    return (
        <Container>
            <div>
            <img src="/Images/uwu.png"/>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 200vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transperant;
    

    @media only screen and (max-width: 768px) {
        height: 100vh;
    }

    div{
        width: 25%;
        //border: 2px solid rgb(102, 233, 51);
        border-radius: 50%;
        //background: rgb(102, 233, 51);
        border-radius: 50%;

        @media only screen and (max-width: 768px) {
            width: 50%;
        }
    }


        img{
            width: 100%;
            
        }
    }
`
export default LogoPage