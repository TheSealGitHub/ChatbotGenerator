import React from 'react'
import { Stack, Text, Card, Image, CardBody, Divider, CardFooter, Button } from '@chakra-ui/react'


export function HomeCard({image, button_text}) {
  return (
    <Card maxW='sm' boxShadow={'2xl'}>
        <CardBody>
          <Stack align='center'>
              <Image
              src={image}
              alt='Green double couch with wooden legs'
              borderRadius='lg' />
          </Stack>
        </CardBody>

        <Divider />

        <CardFooter>
            <Button
                w={'full'}
                bg={'pink.400'}
                color={'white'}
                rounded={'xl'}
                boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                _hover={{ bg: 'pink.200', }}
                _focus={{ bg: 'blue.500', }}>
                <Text>
                  {button_text}
                </Text>
            </Button>
        </CardFooter>
    </Card>
  )
}
