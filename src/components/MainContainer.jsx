import React from 'react'

import { Box } from "@chakra-ui/react";

export function MainContainer({ children, app_colors }) {

  return (
    <Box 
        borderWidth='1px' 
        margin='auto' 
        marginTop={0}
        padding={6} 
        boxShadow='lg' 
        rounded='md' 
        bg={app_colors['primary_component_bg_color']}
        width='85%' 
        textAlign='center'> 
        {children}
    </Box>
  )
}
