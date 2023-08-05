

import { Heading } from '@chakra-ui/react'
import useGameQueryStore from '../store'

const GameHeadding = () => {
  const {gameQuery} = useGameQueryStore()
  return (
   <Heading>
    {gameQuery.genre || ''}
    {' '}
    {gameQuery.platform || ''}
    {" "}
    Games
   </Heading>
  )
}

export default GameHeadding