
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { forwardRef, useState } from 'react'
const intitialState = {
  companyName: "",
  postition: "",
  contract: "",
  location: ""
}
export default function JobForm() {
  const [formState, setFormStata] = useState(intitialState);
  function handleChange(e) {
    const { name, value } = e.target;
    setFormStata({
      ...formState,
      [name]: value
    })

  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState)
  }
  const { companyName, position, contract, location } = formState;
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Post Job</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="companyName">
                <FormLabel>Company Name</FormLabel>
                <Input onChange={handleChange} name="companyName" value={companyName} type="companyName" />
              </FormControl><FormControl id="position">
                <FormLabel>Position</FormLabel>
                <Input onChange={handleChange} name="postition" value={position} type="position" />
              </FormControl>
              <FormControl id="contract">
                <FormLabel>Contract</FormLabel>
                <Input onChange={handleChange} name="contract" value={contract} type="contract" />
              </FormControl>
              <FormControl id="location">
                <FormLabel>Location</FormLabel>
                <Input onChange={handleChange} name="location" value={location} type="location" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Text color={'blue.400'}>Forgot location?</Text>
                </Stack>
                <Button
                  type='submit'
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Post Job
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  )
}