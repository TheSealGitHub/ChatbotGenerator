import React from 'react'

import { 
    Link, 
    Stack, 
    Box, 
    Text, 
    Flex, 
    Icon } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';

export function DesktopSubNav({ app_colors, label, href, subLabel }) {
  return (
    <Link
        href={href}
        role={'group'}
        display={'block'}
        padding={2}
        rounded={'md'}
        _hover={{ bg: app_colors['details_hover_bg_color'] }}>
        <Stack direction={'row'} align={'center'}>
            <Box>
                <Text
                    transition={'all .3s ease'}
                    _groupHover={{ color: app_colors['details_hover_text_color'] }}
                    fontWeight={500}>
                    {label}
                </Text>
                <Text fontSize={'sm'}>{subLabel}</Text>
            </Box>
            <Flex
                transition={'all .3s ease'}
                transform={'translateX(-10px)'}
                opacity={0}
                _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                justify={'flex-end'}
                align={'center'}
                flex={1}>
                <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
            </Flex>
        </Stack>
      </Link>
  )
}