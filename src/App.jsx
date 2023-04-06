import './App.css'

import { HomeAccordion } from './components/home/HomeAccordion'
import { HomeCardMenu } from './components/home/HomeCardMenu'
import { Stack, Box } from '@chakra-ui/react'
import { NavBar } from './components/navbar/NavBar'
import { Footer } from './components/footer/Footer'

const bg_light_primary_color = 'gray.50';
const bg_dark_primary_color = 'gray.900';

function App() {
  return (
    <div id="app-root">
      <div id="navbar">
        <NavBar bgLightColor={bg_light_primary_color}
                bgDarkColor={bg_dark_primary_color}/>
      </div>
      <div id="home-box">
        <Box borderWidth='1px' p={6} boxShadow='lg' rounded='md' bg="#ffffff">
          <Stack spacing='5%'>
            <HomeAccordion/>
            <HomeCardMenu/>
          </Stack>
        </Box>
      </div>
      <div id="footer">
        <Footer bgLightColor={bg_light_primary_color}
                bgDarkColor={bg_dark_primary_color}/>
      </div>
    </div>
  )
}

export default App
