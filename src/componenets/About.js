import React from 'react';
import styled  from 'styled-components';
import ReactPlayer from 'react-player';
function About() {
  return (
    <Container>
      <Wrap>
        <Left>
        <ReactPlayer url='/images/mask.mp4' config={{ file: { attributes: {autoPlay: true,muted: true }}}}  playing='playing' loop='true' width='80%' height='100%' />
        {/* <ReactPlayer
        url="/images/mask.mp4"
        config={{
          file: {
            attributes: {
              autoPlay: true,
              muted: true,
            },
          },
        }}
        playing={true}
        loop={true}
        controls={false}
        width="80%"
        height="100%"
      /> */}
        </Left>
        <Right>
            <h1>ABOUT SOKARI</h1>
            <p>Welcome to the "Sokari", the remarkable event brought to you by the Art Club of Uva Wellassa University. We are thrilled to present this unique fusion of Music, Dancing, and Drama, uniting the vibrant talents of our Music Circle, Dancing Circle, and Drama Circle.</p>
            <p>Sokari, meaning "a celebration of diverse arts," promises to be an unforgettable experience that will ignite your senses and transport you into a world of creativity and expression. With our slogan, "Sakala Kalawaka Nawasi Wrundawa," we aim to embrace the rich heritage of artistry while ushering in a new era of cultural appreciation.</p>
            <p>Prepare to be enthralled as enchanting melodies intertwine with captivating choreography, all woven together by powerful narratives. Our artists, driven by passion and dedication, have poured their hearts into crafting an evening of pure artistry that will leave you inspired.</p>
            <p>Join us for this historic moment as we showcase the boundless talents within our university community and beyond. Let Sokari be the canvas where the colors of music, dance, and drama blend harmoniously, creating an unforgettable masterpiece</p>
        </Right>
      </Wrap>
    </Container>
  )
}
const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: black;

`

const Wrap = styled.div`
    width: 95%;
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
      width: 100%;
    }

`

const Right = styled.div`
    width: 50%;
    @media only screen and (max-width: 1200px){
      width: 100%;
    }

    h1{
        text-align: center;
        font-size: 35px;
        padding: 20px 0;
        //color: #e1ad21;

        @media only screen and (max-width: 1200px){
          font-size: 28px;
        }
    }

    p{
        font-size: 19px;
        text-align: center;
        line-height: 2.1rem;
        letter-spacing: 1.7px;
        //color: #d4af37;

        @media only screen and (max-width: 1200px){
          font-size: 16px;
        }
    }

`
export default About
