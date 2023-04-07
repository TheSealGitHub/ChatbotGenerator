import { Box,
        Stack } from '@chakra-ui/react'
import { HomeAccordion } from './HomeAccordion'
import { HomeCardMenu } from './HomeCardMenu'

export function HomeMenu({app_colors}) {
  return (
    <Box 
        borderWidth='1px' 
        margin='auto' 
        padding={6} 
        boxShadow='lg' 
        rounded='md' 
        bg={app_colors['primary_component_bg_color']}
        width='85%' 
        textAlign='center'> 

        <Stack spacing='5%' >
            <HomeAccordion app_colors={app_colors}/>
            <HomeCardMenu app_colors={app_colors}/>
        </Stack>
    </Box>
  )
}
