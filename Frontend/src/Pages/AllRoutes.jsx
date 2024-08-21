import React from 'react'
import Login from './Login'
import SignUp from './Signup'
import { Route, Routes } from 'react-router-dom'
import User from './User'
import JobForm from './JobForm'
import JobList from './JobList'
import { Heading } from '@chakra-ui/react'

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/find_job' element={<User />} />
            <Route path='/post_job' element={<JobForm />} />
            <Route path='/job_list' element={<JobList />} />
            <Route path='/*' element={<Heading textAlign={"center"} mt={"15%"}>Page Not Found</Heading>} />
        </Routes>
    )
}

export default AllRoutes