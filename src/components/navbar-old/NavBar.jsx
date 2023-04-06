import React, { useState } from 'react'

import { NavBarContainer } from './NavBarContainer'
import { NavBarLogo } from './NavBarLogo'
import { NavBarMenuToggleButton } from './NavBarMenuToggleButton'
import { MenuLinks } from './menu-links/MenuLinks'

export function NavBar(props) {

    const [isOpen, setIsOpen] = useState(false)  
    const toggle = () => setIsOpen(!isOpen)
      
    return (
        <NavBarContainer {...props}>
            <NavBarLogo color={"black"} />
            <NavBarMenuToggleButton toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </NavBarContainer>
    )
}
