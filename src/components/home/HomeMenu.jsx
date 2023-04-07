import { Stack } from '@chakra-ui/react'
import { HomeAccordion } from './HomeAccordion'
import { HomeCardMenu } from './HomeCardMenu'

export function HomeMenu({app_colors}) {
  return (
    <Stack spacing='5%'>
        <HomeAccordion app_colors={app_colors}/>
        <HomeCardMenu app_colors={app_colors}/>
    </Stack>
  )
}
