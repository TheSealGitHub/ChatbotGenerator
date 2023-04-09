import React from 'react'

import { chakra } from '@chakra-ui/react';

const activeStyle = {
    bg: "brand.600",
    _dark: {
      bg: "brand.500",
    },
    color: "white",
  };

export function ListPagButton({children, ...props}) {


    return (
        <chakra.button
          mx={1}
          px={4}
          py={2}
          rounded="md"
          bg="white"
          _dark={{ bg: "gray.800" }}
          color="gray.700"
          opacity={props.disabled && 0.6}
          _hover={!props.disabled && activeStyle}
          cursor={props.disabled && "not-allowed"}
          {...(props.active && activeStyle)}
        >
          {children}
        </chakra.button>
    );
}
