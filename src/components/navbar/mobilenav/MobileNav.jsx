import { Stack } from '@chakra-ui/react';
import { MobileNavItem } from './MobileNavItem';

export function MobileNav({items, app_colors}) {
  return (
    <Stack
        bg={app_colors['primary_component_bg_color']}
        padding={4}
        display={{ md: 'none' }}>
        {items.map((navItem) => (
            <MobileNavItem 
                key={navItem.label} 
                app_colors={app_colors}
                {...navItem} />
        ))}
    </Stack>
  )
}
