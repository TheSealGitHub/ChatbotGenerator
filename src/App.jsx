
import { HomeMenu } from './components/home/HomeMenu'
import { NavBar } from './components/navbar/NavBar'
import { Footer } from './components/footer/Footer'
import { Fragment } from 'react'

const app_colors = {
  'primary_component_bg_color': 'white',
  'primary_component_text_color': 'gray.600',
  'details_main_bg_color': 'pink.400',
  'details_main_text_color': 'white',
  'details_hover_bg_color': 'pink.200',
  'details_hover_text_color': 'white',
  'component_border_color': 'gray.200'
}

function App() {
  return (
    <Fragment>
      <NavBar app_colors={app_colors}/>
      <HomeMenu app_colors={app_colors}/>
      <Footer app_colors={app_colors}/>
    </Fragment>
  )
}

export default App
