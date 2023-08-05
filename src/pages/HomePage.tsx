import { Grid, Show, GridItem, HStack, Box } from '@chakra-ui/react'

import GameGrid from '../componets/GameGrid'
import GenreList from '../componets/GenreList'
import OrderList from '../componets/OrderList'
import PlatformsList from '../componets/PlatformsList'
import { useSide } from "../store";
const HomePage = () => {
   const { str }= useSide()
    return (
        <>
        <Box display={str}>
        <GenreList />
        </Box >
        <Grid
            templateAreas={{ base: ` "main"`, lg: `"aside main" `, }}
            templateColumns={{ base: "1fr", lg: "260px 1fr", }}
        >
            <Show above="lg">
                <GridItem area="aside" paddingTop={8}>
                    <GenreList />
                </GridItem>
            </Show>

            <GridItem area="main" paddingX={8}>

                <HStack paddingTop={8}>
                    <PlatformsList />
                    <OrderList />
                </HStack>
                <GameGrid />
            </GridItem>
        </Grid>
        </>
    )
}

export default HomePage