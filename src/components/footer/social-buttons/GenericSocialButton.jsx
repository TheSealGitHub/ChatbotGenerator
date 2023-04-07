import React from 'react'

import { SocialButton } from './SocialButton'

export function GenericSocialButton({label, app_colors, href, icon}) {

  return (
    <SocialButton label={label} href={href} app_colors={app_colors}>
        {icon}
    </SocialButton>
  )
}
