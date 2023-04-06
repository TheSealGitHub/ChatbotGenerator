import React from 'react'

import { SocialButton } from './SocialButton'
import { FaTwitter } from 'react-icons/fa'

export function TwitterButton() {
  return (
    <SocialButton label={'Twitter'} href={'#'}>
        <FaTwitter/>
    </SocialButton>
  )
}
