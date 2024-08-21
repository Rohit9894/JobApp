
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
    firstName: "",
    lastName: "",
    email: "",
    password: ""
}
export default function SignUp() {
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
    const { firstName, lastName, email, password } = formState;
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign Up to your account</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={4}>
                            <FormControl id="firstName">
                                <FormLabel>First Name</FormLabel>
                                <Input onChange={handleChange} name="firstName" value={firstName} type="firstName" />
                            </FormControl><FormControl id="lastName">
                                <FormLabel>Last Name</FormLabel>
                                <Input onChange={handleChange} name="lastName" value={lastName} type="lastName" />
                            </FormControl>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input onChange={handleChange} name="email" value={email} type="email" />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input onChange={handleChange} name="password" value={password} type="password" />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox>Remember me</Checkbox>
                                    <Text color={'blue.400'}>Forgot password?</Text>
                                </Stack>
                                <Button
                                    type='submit'
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Sign in
                                </Button>
                            </Stack>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
    )
}