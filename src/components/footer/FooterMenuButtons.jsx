import React from 'react'

import { 
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGithub  } from 'react-icons/fa';
import { Stack } from '@chakra-ui/react';
import { GenericSocialButton } from './social-buttons/GenericSocialButton';

const BUTTONS = [
  {
    id: 1,
    label: 'Twitter',
    href: '#',
    icon: <FaTwitter/>
  },
  {
    id: 2,
    label: 'Youtube',
    href: '#',
    icon: <FaYoutube/>
  },
  {
    id: 3,
    label: 'Instagram',
    href: '#',
    icon: <FaInstagram/>
  },
  {
    id: 4,
    label: 'Github',
    href: '#',
    icon: <FaGithub/>
  }
];

export function FooterMenuButtons({app_colors}) {

  return (
    <Stack direction={'row'} spacing={6}>
        {BUTTONS.map((item) => (
          <GenericSocialButton 
              key={item.id} 
              label={item.label} 
              href={item.href}
              app_colors={app_colors}
              icon={item.icon} />
        ))}
    </Stack>
  )
}
