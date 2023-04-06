import React from 'react'

import { Link, Text } from '@chakra-ui/react'

export function MenuItem({ children, isLast, to = "/", ...rest }) {
    
  return (
    <Link href={to}>
        <Text display="block" {...rest}>
            {children}
        </Text>
    </Link>
  )
}