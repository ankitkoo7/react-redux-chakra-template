import { Button, Container, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Illustration } from '../components/common/Illustration';

function Home() {
  const navigate = useNavigate();
  return (
    <Container maxW='5xl'>
      <Stack
        textAlign='center'
        align='center'
        spacing={{ base: 8, md: 10 }} //responsive sapcing
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }} //Responsive font size
          lineHeight='110%'>
          Creating React App{' '}
          <Text as='span' color='orange.400'>
            made easy
          </Text>
        </Heading>
        <Text color='gray.500' maxW='3xl'>
          This CRA template is bootstrap with Redux 👾, Chakra UI 💥 and Formik 👨‍💻, now you can easliy create and build react app and it's components.
          You can find chakra components documentation <Link href='https://chakra-ui.com/docs/components/overview' target="_blank" color="blue.300">here</Link>. 
          And for Formik docs you can check-out this <Link href='https://formik.org/docs/overview' target="_blank" color="blue.300">link</Link>.

        </Text>
        <Stack spacing={6} direction='row'>
          <Button
            rounded='full'
            px={6}
            colorScheme='orange'
            bg='orange.400'
            _hover={{ bg: 'orange.500' }} //applying hover effect
            onClick={()=>navigate("/login")}
            >
            Get started
          </Button>
          <Button rounded='full' px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex w='full'>
          <Illustration
            height={{ sm: '24rem', lg: '28rem' }} //resposive height
            mt={{ base: 12, sm: 16 }} //responsive margin top
          />
        </Flex>
      </Stack>
    </Container>
  )
}

export default Home;