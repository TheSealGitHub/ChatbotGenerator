import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { HomeCard } from './card/HomeCard'

const CARD_ITEMS = [
  {
    id: 1,
    image: "/src/assets/chatbot.png",
    button_text: "Crear Chatbot",
  },
  {
    id: 2,
    image: "/src/assets/chatbot.png",
    button_text: "Editar Chatbot"
  },
  {
    id: 3,
    image: "/src/assets/chatbot.png",
    button_text: "Crear proceso"
  },
  {
    id: 4,
    image: "/src/assets/chatbot.png",
    button_text: "Editar proceso"
  }
];

export function HomeCardMenu() {
  return (
    <SimpleGrid columns={4} spacing={10} hideBelow='lg'>
      {CARD_ITEMS.map((item) => (
        <HomeCard key={item.id} image={item.image} button_text={item.button_text}/>
      ))}
    </SimpleGrid>
  )
}
