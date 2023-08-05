import { Grid, GridItem, Heading, Text } from '@chakra-ui/react'

import GameScore from './GameScore'
import { Game } from '../interfaces/Game'
interface Props{
 data : Game  |undefined
}
const GameDeatilsGrid = ({data }: Props) => {
  return (
    <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem p={4}>
          <Heading color={"gray.500"} >Platforms</Heading>

          {data?.parent_platforms?.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}

        </GridItem>
        <GridItem color={"gray.500"} p={4}>
          <Heading>Metascore</Heading>
         {data?.metacritic &&  <GameScore score={data!.metacritic!} />}
        </GridItem>
        <GridItem color={"gray.500"} p={4}>
          <Heading>Genres</Heading>
          {data?.genres.map((g) => (
            <Text key={g.id}>{g.name}</Text>
          ))}
        </GridItem>
        <GridItem color={"gray.500"} p={4}>
          <Heading>Publishers</Heading>
          {data?.publishers.map((g) => (
            <Text key={g.id}>{g.name}</Text>
          ))}
        </GridItem>
      </Grid>
  )
}

export default GameDeatilsGrid