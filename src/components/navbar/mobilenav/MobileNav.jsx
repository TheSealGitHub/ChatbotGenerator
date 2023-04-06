import React from 'react';

import { Stack, useColorModeValue } from '@chakra-ui/react';
import { MobileNavItem } from './MobileNavItem';

export function MobileNav({items}) {
  return (
    <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {items.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
        ))}
    </Stack>
  )
}
