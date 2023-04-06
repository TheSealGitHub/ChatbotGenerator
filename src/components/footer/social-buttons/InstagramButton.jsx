import React from 'react'

import { SocialButton } from './SocialButton'
import { FaInstagram } from 'react-icons/fa'

export function InstagramButton() {
  return (
    <SocialButton label={'Instagram'} href={'#'}>
        <FaInstagram/>
    </SocialButton>
  )
}
