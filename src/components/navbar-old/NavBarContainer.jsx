import React from 'react'

import { Flex } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

export function NavBarContainer({ children, ...props }) {

  return (
    <Flex
        as="nav"
        wrap="wrap"
        width="100%"
        padding={2}
        align="center"
        marginBottom={8}
        justify="space-between"
        bg={useColorModeValue(props['bgLightColor'], props['bgDarkColor'])}
        color={["green", "green", "primary.700", "primary.700"]}
        {...props} >
        {children}
    </Flex>
  )
}
