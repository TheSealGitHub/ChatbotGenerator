import { 
    chakra, 
    VisuallyHidden } from '@chakra-ui/react';

export function SocialButton({ children, label, href, app_colors }) {
    return (
        <chakra.button
            bg={ 'blackAlpha.100' }
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
            _hover={{ bg: app_colors['details_hover_bg_color'] }} >

            <VisuallyHidden> 
                {label} 
            </VisuallyHidden>

            {children}
        </chakra.button>
    );
}
