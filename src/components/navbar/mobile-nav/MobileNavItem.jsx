import React from 'react'

import { 
    Stack, 
    Flex, 
    Text, 
    Icon, 
    Collapse, 
    Link, 
    useDisclosure } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

export function MobileNavItem({ app_colors, label, children, href }) {

    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
            py={2}
            as={Link}
            href={href ?? '#'}
            justify={'space-between'}
            align={'center'}
            _hover={{
                textDecoration: 'none',
            }}>
            <Text
                fontWeight={600}
                color={app_colors['primary_component_text_color']}>
                {label}
            </Text>
            {children && (
                <Icon
                    as={ChevronDownIcon}
                    transition={'all .25s ease-in-out'}
                    transform={isOpen ? 'rotate(180deg)' : ''}
                    w={6}
                    h={6}
                />
            )}
            </Flex>
    
            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={app_colors['component_border_color']}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                        <Link key={child.label} py={2} href={child.href}>
                            {child.label}
                        </Link>
                    ))}
                </Stack>

            </Collapse>
        </Stack>
    )
}