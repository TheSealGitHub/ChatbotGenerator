import React from 'react'

import { Box } from '@chakra-ui/react'
import { FaAlignJustify } from "react-icons/fa";

export function NavBarMenuToggleButton({ toggle, isOpen }) {

    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            {isOpen ? <FaAlignJustify /> : <FaAlignJustify />}
        </Box>
    )
  }
