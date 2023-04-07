import React from 'react'

import './App.css'
import { HomeMenu } from './components/home/HomeMenu'
import { NavBar } from './components/navbar/NavBar'
import { Footer } from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import { MainContainer } from './components/MainContainer'
import { ChatbotList } from './components/chatbots/listar/ChatbotList'
import { ProcessList } from './components/procesos/listar/ProcessList'
import { ProcessForm } from './components/procesos/crear/ProcessForm'

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
    <div className='App'>
      <NavBar app_colors={app_colors}/>
      <MainContainer app_colors={app_colors}>


        <Routes>
          <Route 
              path='/' 
              element={
                <HomeMenu app_colors={app_colors}/> 
          }/>
          <Route 
              path='/listar-chatbots' 
              element={
                <ChatbotList app_colors={app_colors}/> 
          }/>
          <Route 
              path='/listar-procesos' 
              element={
                <ProcessList app_colors={app_colors}/> 
          }/>
          <Route 
              path='/crear-proceso' 
              element={
                <ProcessForm app_colors={app_colors}/> 
          }/>
        </Routes>
      

      </MainContainer> 
      <Footer app_colors={app_colors}/>
    </div>
  )
}

export default App
