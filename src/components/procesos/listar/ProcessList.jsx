import React, { Fragment } from 'react'

import { ListPaginatedNavigation } from '../../generic/list/ListPaginatedNavigation';
import { 
    Box,
    List,
    Text,
    ListItem,
    ListIcon,
    Divider } from '@chakra-ui/react';
import { 
    FiHome,
    FiInbox } from "react-icons/fi";

const PROCESSES = [
    {
        id: 1,
        label: "Process 1",
        name: "Proceso 1",
        description: "El proceso 1 es blablabla"
    },    
    {
        id: 2,
        label: "Process 2",
        name: "Proceso 2",
        description: "El proceso 2 es blablabla"
    },
    {
        id: 3,
        label: "Process 3",
        name: "Proceso 3",
        description: "El proceso 3 es blablabla"
    },
    {
        id: 4,
        label: "Process 4",
        name: "Proceso 4",
        description: "El proceso 4 es blablabla"
    },
];




  
export function ProcessList({app_colors}) {

    return (
        <Fragment>
            <Box>
                <List margin={8} alignItems={"left"}>
                    <ListItem as="a" href="#home">
                        <ListIcon as={FiHome} />
                        Home
                    </ListItem>
                    <Divider/>
                    <ListItem as="a" href="#inbox">
                        <ListIcon as={FiInbox} />
                        Inbox
                    </ListItem>
                    <Divider/>
                    <ListItem as="a" href="#inbox">
                        <ListIcon as={FiInbox} />
                        AAAAAA
                    </ListItem>
                    <Divider/>
                    <ListItem as="a" href="#inbox">
                        <ListIcon as={FiInbox} />
                        BBBBBBBB
                    </ListItem>
                </List>
            </Box>

            <ListPaginatedNavigation></ListPaginatedNavigation>
        </Fragment>
    );
}

