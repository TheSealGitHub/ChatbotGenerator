import React from 'react'

import { SimpleGrid } from '@chakra-ui/react'
import { HomeCard } from './card/HomeCard'

const CARD_ITEMS = [
  {
    id: 1,
    image: "/src/assets/chatbot.png",
    alt: "Chatbot",
    href: "/listar-chatbots",
    button_text: "Listar Chatbots",
  },
  {
    id: 2,
    image: "/src/assets/chatbot.png",
    alt: "Chatbot",
    href: "/listar-chatbots",
    button_text: "Editar Chatbot"
  },
  {
    id: 3,
    image: "/src/assets/chatbot.png",
    alt: "Chatbot",
    href: "/listar-chatbots",
    button_text: "Crear proceso"
  },
  {
    id: 4,
    image: "/src/assets/chatbot.png",
    alt: "Chatbot",
    href: "/listar-chatbots",
    button_text: "Editar proceso"
  }
];

export function HomeCardMenu({app_colors}) {
  
  return (
    <SimpleGrid columns={4} spacing={10} hideBelow='lg'>
        {CARD_ITEMS.map((item) => (
            <HomeCard key={item.id}
                app_colors={app_colors}
                {...item} />
        ))}
    </SimpleGrid>
  )
}
