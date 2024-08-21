import React from 'react'
import { Box, Heading, HStack, Text, Flex } from '@chakra-ui/react'
import { FaLocationDot } from 'react-icons/fa6'
import { RiSuitcaseFill } from "react-icons/ri";


function JobItem() {
    return (
        <Box bg={"white"} boxShadow={"initial"} borderRadius={"20px"}>
            <Heading as='h4' size='md' fontFamily={"Roboto, sans-serif"}>
                React Js Developer
            </Heading>
            <Text size={"md"} fontFamily={"Roboto, sans-serif"}>
                Tata Consultancy
            </Text>

            <HStack>
                <Flex gap={"5px"} alignItems={"center"}><FaLocationDot /> <Text fontFamily={"Roboto, sans-serif"}>Nowgong</Text> </Flex>
                <Text>|</Text>
                <Flex gap={"5px"} alignItems={"center"}><RiSuitcaseFill />
                    <Text fontFamily={"Roboto, sans-serif"}>Full Time</Text> </Flex>

            </HStack>
        </Box>
    )
}

export default JobItem