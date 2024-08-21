import { HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import JobItem from '../components/JobItem';

function User() {
    return (
       <HStack>
        <JobItem />
       </HStack>
    )
}

export default User