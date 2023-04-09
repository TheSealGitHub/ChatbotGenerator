import React from 'react'

import { 
    chakra,
    Icon } from '@chakra-ui/react';
import { 
    HiDotsHorizontal,
    HiChevronDoubleRight,
    HiChevronDoubleLeft } from "react-icons/hi";



export function ListMButton({...props}) {
    
    const DoubleArrow = props.left ? HiChevronDoubleLeft : HiChevronDoubleRight;
    const [hovered, setHovered] = React.useState(false);
    const hoverColor = "brand.800";
    const unHoverColor = "gray.100";

    return (
      <chakra.a
        w={8}
        py={2}
        color="gray.700"
        _dark={{ color: "gray.200", }}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        cursor="pointer"
        textAlign="center"
      >

        {hovered ? (
          <Icon as={DoubleArrow} boxSize={3} cursor="pointer" color={hoverColor} />
        ) : (
          <Icon as={HiDotsHorizontal} color={unHoverColor} boxSize={4} opacity={0.5} />
        )}

      </chakra.a>
    );
}
