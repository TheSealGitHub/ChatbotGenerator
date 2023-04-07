import React from 'react'

import { 
    UnorderedList,
    ListItem } from '@chakra-ui/react';

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
    <UnorderedList>
        {PROCESSES.map((process) => (
            <ListItem key={process.id}>
                {process.name}
            </ListItem>
        ))}
    </UnorderedList>
  )
}
