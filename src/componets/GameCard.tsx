import { Card, CardBody, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import { Game } from "../interfaces/Game";
import GameIcons from './GameIcons';
import GameScore from './GameScore';
import Emoji from './Emoji';
import { Link } from 'react-router-dom';


interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {

  return (
    <Card borderRadius={20} overflow={'hidden'} _hover={{
      transform: 'scale(1.03)',
      transition: 'transform .15s ease-in'
    }}  >
      <Image src={game.background_image} />
      <CardBody padding={5} >
        <SimpleGrid justifyContent={'space-between'} display={'flex'}>
          <GameIcons platforms={game.parent_platforms?.map(p => p.platform)} />
          <GameScore score={game.metacritic} />
        </SimpleGrid>
        <Heading marginY={2} fontSize={20}>
          <Link to={
            '/games/' + game.slug
          }>
            {game.name}
          </Link>
        </Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
