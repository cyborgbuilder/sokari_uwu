import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from 'styled-components'
import './Style.css'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Wrap>
        <h1>Sponsered by</h1>
        <Desktop>
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex' , flexDirection: 'column'}}>
        
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >

         <Tab label="Sports Council" style={{fontFamily: "'Bruno Ace', cursive", color: '#fff'}} {...a11yProps(0)} />
          <Tab label="UVA RAYON" {...a11yProps(1)} style={{fontFamily: "'Bruno Ace', cursive", color: '#fff'}}/>
          <Tab label="HTE CLUB" {...a11yProps(2)} style={{fontFamily: "'Bruno Ace', cursive", color: '#fff'}}/>
          <Tab label="IEEE" {...a11yProps(2)} style={{fontFamily: "'Bruno Ace', cursive", color: '#fff'}}/>
          <Tab label="EEMU" {...a11yProps(2)} style={{fontFamily: "'Bruno Ace', cursive", color: '#fff'}}/>
          <Tab label="STUDENT UNION" {...a11yProps(2)} style={{fontFamily: "'Bruno Ace', cursive", color: '#fff'}}/>>
          <Tab label="LEO" {...a11yProps(2)} style={{fontFamily: "'Bruno Ace', cursive", color: '#fff'}}/>
          <Tab label="ROTRACT" {...a11yProps(2)} style={{fontFamily: "'Bruno Ace', cursive", color: '#fff'}}/>
          <Tab label="AIESEC" {...a11yProps(2)} style={{fontFamily: "'Bruno Ace', cursive", color: '#fff'}}/>
        </Tabs>
       
      </Box>
      <TabPanel value={value} index={0} style={{display: 'flex'}}>

      <Main >
      <div className='border_div'>
      
      <img src='./images/sportsw.png' />
      
      
     
          <span class="top"></span>
      <span class="right"></span>
      <span class="bottom"></span>
      <span class="left"></span>
          </div>
        </Main>
        <Sub>
        
        <img src='./images/rayon.png' />
        <img src='./images/hte.png' />
        <img src='./images/IEEE.png' />
        <img src='./images/eemu.png' />
          <img src='./images/leo.png' />
          <img src='./images/union.png' />
          <img src='./images/rac.png' />
          <img src='./images/aisec.png' />
          
        </Sub>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Main >
      <div className='border_div'>
      
      
      <img src='./images/rayon.png' />
      
      
     
          <span class="top"></span>
      <span class="right"></span>
      <span class="bottom"></span>
      <span class="left"></span>
          </div>
        </Main>
        <Sub>
        
        <img src='./images/sportsw.png' />
        <img src='./images/hte.png' />
        <img src='./images/IEEE.png' />
        <img src='./images/eemu.png' />
          <img src='./images/leo.png' />
          <img src='./images/union.png' />
          <img src='./images/rac.png' />
          <img src='./images/aisec.png' />
          
        </Sub>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Main >
      <div className='border_div'>
      <img src='./images/hte.png' />
          <span class="top"></span>
      <span class="right"></span>
      <span class="bottom"></span>
      <span class="left"></span>
          </div>
        </Main>
        <Sub>
        <img src='./images/sportsw.png' />
        <img src='./images/rayon.png' />
          <img src='./images/IEEE.png' />
          <img src='./images/eemu.png' />
          <img src='./images/union.png' />
          <img src='./images/leo.png' />
          <img src='./images/rac.png' />
          <img src='./images/aisec.png' />
        </Sub>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Main >
      <div className='border_div'>
      
      <img src='./images/IEEE.png' />
          <span class="top"></span>
      <span class="right"></span>
      <span class="bottom"></span>
      <span class="left"></span>
          </div>
        </Main>
        <Sub>
        <img src='./images/sportsw.png' />
        <img src='./images/rayon.png' />
        <img src='./images/hte.png' />
          <img src='./images/eemu.png' />
          <img src='./images/union.png' />
          <img src='./images/leo.png' />
          <img src='./images/rac.png' />
          <img src='./images/aisec.png' />
        </Sub>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Main >
      <div className='border_div'>
      
      
      <img src='./images/eemu.png' />
          <span class="top"></span>
      <span class="right"></span>
      <span class="bottom"></span>
      <span class="left"></span>
          </div>
        </Main>
        <Sub>
        <img src='./images/sportsw.png' />
        <img src='./images/rayon.png' />
        <img src='./images/hte.png' />
        <img src='./images/IEEE.png' />
          <img src='./images/union.png' />
          <img src='./images/leo.png' />
          <img src='./images/rac.png' />
          <img src='./images/aisec.png' />
        </Sub>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Main >
      <div className='border_div'>
      
      
      
      <img src='./images/union.png' />
          <span class="top"></span>
      <span class="right"></span>
      <span class="bottom"></span>
      <span class="left"></span>
          </div>
        </Main>
        <Sub>
        <img src='./images/sportsw.png' />
        <img src='./images/rayon.png' />
        <img src='./images/hte.png' />
        <img src='./images/IEEE.png' />
        <img src='./images/eemu.png' />
          <img src='./images/leo.png' />
          <img src='./images/rac.png' />
          <img src='./images/aisec.png' />
        </Sub>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <Main >
      <div className='border_div'>
      <img src='./images/leo.png' />
          <span class="top"></span>
      <span class="right"></span>
      <span class="bottom"></span>
      <span class="left"></span>
          </div>
        </Main>
        <Sub>
        <img src='./images/sportsw.png' />
        <img src='./images/rayon.png' />
        <img src='./images/hte.png' />
        <img src='./images/IEEE.png' />
        <img src='./images/eemu.png' />
        <img src='./images/union.png' />
          <img src='./images/rac.png' />
          <img src='./images/aisec.png' />
        </Sub>
      </TabPanel>
      <TabPanel value={value} index={7}>
      <Main >
      <div className='border_div'>
      <img src='./images/rac.png' />
      
      
     
          <span class="top"></span>
      <span class="right"></span>
      <span class="bottom"></span>
      <span class="left"></span>
          </div>
        </Main>
        <Sub>
        <img src='./images/sportsw.png' />
        <img src='./images/rayon.png' />
        <img src='./images/hte.png' />
        <img src='./images/IEEE.png' />
        <img src='./images/eemu.png' />
          <img src='./images/leo.png' />
          <img src='./images/union.png' />
          <img src='./images/aisec.png' />
          
        </Sub>
      </TabPanel>
      <TabPanel value={value} index={8}>
      <Main >
      <div className='border_div'>
      
      <img src='./images/aisec.png' />
      
      
     
          <span class="top"></span>
      <span class="right"></span>
      <span class="bottom"></span>
      <span class="left"></span>
          </div>
        </Main>
        <Sub>
        <img src='./images/sportsw.png' />
        <img src='./images/rayon.png' />
        <img src='./images/hte.png' />
        <img src='./images/IEEE.png' />
        <img src='./images/eemu.png' />
          <img src='./images/leo.png' />
          <img src='./images/union.png' />
          <img src='./images/rac.png' />
          
          
        </Sub>
      </TabPanel>
    </Box>
        </Desktop>
        <Mobile>
        <img src='./images/sportsw.png' />
        <img src='./images/rayon.png' />
          <img src='./images/IEEE.png' />
          <img src='./images/eemu.png' />
          <img src='./images/union.png' />
          <img src='./images/leo.png' />
          <img src='./images/rac.png' />
          <img src='./images/hte.png' />
          <img src='./images/aisec.png' />
        </Mobile>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;


`

const Wrap = styled.div`
  width: 95%;
  border-radius: 15px;

  

  img{
    width: 30%;
  }
  h1{
    text-align: center;
    font-size: 40px;
    padding: 20px 0;

    @media only screen and (max-width: 1200px){
      font-size: 28px;
    }
  }

`
const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
img{
  width: 100%;
}

`

const Sub = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 10%;
    margin: 0 20px; 
  }

`

const Mobile = styled.div`
  display: none;
  width: 100%;

  @media only screen and (max-width: 1200px){
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    
  }

  img{
    width: 25%;
    margin: 10px;
  }

`

const Desktop = styled.div`
@media only screen and (max-width: 1200px){
  display: none;
}
`