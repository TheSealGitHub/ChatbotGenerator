import React from 'react'

const CHATBOTS = [
    {
        id: 1,
        label: "Chatbot GPD",
        name: "Chatbot GPD",
        description: "El chatbot 1 es blablabla",
        processes: [
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
            }
        ]
    },
    {
        id: 2,
        label: "Chatbot 2",
        name: "Chatbot 2",
        description: "El chatbot 2 es blablabla",
        processes: [
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
            }
        ]
    }
];

export function ChatbotList({ app_colors }) {
  return (
    <div>ChatbotList</div>
  )
}
