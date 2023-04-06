import React from 'react'

import { Box, Text } from "@chakra-ui/react"
import { FaReact } from 'react-icons/fa'

export function NavBarLogo({...props }) {

  return (
    <Box {...props}>
        <FaReact size={50}/>
    </Box>
  )
}
