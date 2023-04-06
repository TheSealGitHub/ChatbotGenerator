import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { HomeCard } from './card/HomeCard'

export function HomeCardMenu() {
  return (
    <SimpleGrid columns={3} spacing={10}>
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
    </SimpleGrid>
  )
}
