
import Navbar from '../componets/Navbar'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

const Layouts = () => {
  return (
   
   <Box paddingX={5}>
    <Navbar />
    <Outlet /> 
   </Box>
  )
}

export default Layouts