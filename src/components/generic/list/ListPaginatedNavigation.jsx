import React from 'react'

import { 
    Flex,
    Icon } from '@chakra-ui/react'
import { ListPagButton } from './ListPagButton'
import { 
    IoIosArrowForward,
    IoIosArrowBack } from "react-icons/io";

export function ListPaginatedNavigation({app_colors}) {

  return (
    <Flex
        bg="#edf3f8"
        _dark={{ bg: "#3e3e3e", }}
        padding={50}
        width="full"
        alignItems="center"
        justifyContent="center" >

        <Flex>
            <ListPagButton>
                <Icon
                as={IoIosArrowBack}
                color="gray.700"
                _dark={{ color: "gray.200" }}
                alignItems="center"
                justifyContent="center"
                boxSize={4} />

            </ListPagButton>
            <ListPagButton>1</ListPagButton>
            <ListPagButton active>2</ListPagButton>
            <ListPagButton>3</ListPagButton>
            <ListPagButton>4</ListPagButton>
            <ListPagButton>5</ListPagButton>
            <ListPagButton>
                <Icon
                    as={IoIosArrowForward}
                    color="gray.700"
                    _dark={{ color: "gray.200" }}
                    alignSelf="center"
                    justifyContent="center"
                    boxSize={4} />
            </ListPagButton>
        </Flex>
    </Flex>
  )
}



const second_paginated_section = {

    //   <Flex
    //     bg="#edf3f8"
    //     _dark={{ bg: "#3e3e3e" }}
    //     p={50}
    //     w="full"
    //     alignItems="center"
    //     justifyContent="center"
    //   >
    //     <Flex>
        
    //       <ListPagButton>
    //         <Icon
    //           as={IoIosArrowBack}
    //           color="gray.700"
    //           _dark={{
    //             color: "gray.200",
    //           }}
    //           boxSize={4}
    //         />
    //       </ListPagButton>
    //       <ListPagButton>1</ListPagButton>
    //       <ListMButton left />
    //       <ListPagButton>5</ListPagButton>
    //       <ListPagButton>6</ListPagButton>
    //       <ListPagButton active>7</ListPagButton>
    //       <ListPagButton>8</ListPagButton>
    //       <ListPagButton>9</ListPagButton>
    //       <ListMButton right />
    //       <ListPagButton>50</ListPagButton>
    //       <ListPagButton>
    //         <Icon
    //           as={IoIosArrowForward}
    //           color="gray.700"
    //           _dark={{
    //             color: "gray.200",
    //           }}
    //           boxSize={4}
    //         />
    //       </ListPagButton>
    //     </Flex>
    //   </Flex>
}