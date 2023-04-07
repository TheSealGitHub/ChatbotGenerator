import { 
  Stack, 
  Text, 
  Card, 
  Image, 
  CardBody, 
  Divider, 
  CardFooter, 
  Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export function HomeCard({app_colors, ...props}) {
  return (
    <Card maxW='sm' boxShadow={'2xl'}>
        <CardBody>
          <Stack align='center'>
              <Image
              src={props.image}
              alt={props.alt}
              borderRadius='lg' />
          </Stack>
        </CardBody>

        <Divider />

        <CardFooter>
          <Link to={props.href} style={{ width: "100%" }}>
            <Button
                w={'full'}
                bg={app_colors['details_main_bg_color']}
                color={'white'}
                rounded={'xl'}
                boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                _hover={{ bg: app_colors['details_hover_bg_color'] }}
                _focus={{ bg: 'blue.500' }}>

                  <Text>
                    {props.button_text}
                  </Text>
                
            </Button>
          </Link>
        </CardFooter>
    </Card>
  )
}
