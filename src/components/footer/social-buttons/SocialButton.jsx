import React from 'react'

import { chakra, VisuallyHidden, useColorModeValue } from '@chakra-ui/react';


export function  SocialButton({ children, label, href }) {
    return (
        <chakra.button
            bg={ useColorModeValue('blackAlpha.100', 'whiteAlpha.100') }
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{ bg: 'pink.200' }} >

            <VisuallyHidden> 
                {label} 
            </VisuallyHidden>

            {children}
        </chakra.button>
    );
}
