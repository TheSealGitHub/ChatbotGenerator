import React from 'react'

import { SocialButton } from './SocialButton'
import { FaGithub } from 'react-icons/fa'

export function GithubButton() {
  return (
    <SocialButton label={'Github'} href={'#'}>
        <FaGithub/>
    </SocialButton>
  )
}
