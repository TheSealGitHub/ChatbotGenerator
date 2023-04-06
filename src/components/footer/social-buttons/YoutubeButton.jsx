import React from 'react'

import { SocialButton } from './SocialButton'
import { FaYoutube } from 'react-icons/fa'

export function YoutubeButton() {
  return (
    <SocialButton label={'FaYoutube'} href={'#'}>
        <FaYoutube/>
    </SocialButton>
  )
}
