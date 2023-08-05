import { useRouteError, isRouteErrorResponse } from 'react-router-dom'
import Navbar from '../componets/Navbar';
import { Box, Heading, Text } from '@chakra-ui/react';

export const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            <Navbar />
            <Box padding={10}>
                <Heading >
                    Opps !
                </Heading>
                <Text>
                    {isRouteErrorResponse(error) ? 'This page does not exist.'
                        : 'An unexpected error occurred.'}
                </Text>
            </Box>
        </>
    ) 
}
