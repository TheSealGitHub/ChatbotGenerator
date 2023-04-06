import React from 'react'

import { Stack } from '@chakra-ui/react';
import { InstagramButton } from './social-buttons/InstagramButton';
import { TwitterButton } from './social-buttons/TwitterButton';
import { YoutubeButton } from './social-buttons/YoutubeButton';
import { GithubButton } from './social-buttons/GithubButton';

export function FooterMenuButtons() {
  return (
    <Stack direction={'row'} spacing={6}>
        <TwitterButton/>
        <YoutubeButton/>
        <InstagramButton/>
        <GithubButton/>
    </Stack>
  )
}
