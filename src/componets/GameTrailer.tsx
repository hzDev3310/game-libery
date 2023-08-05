import { Box } from '@chakra-ui/react';
import useTrailer from '../hooks/useTrailer';

interface Props {
  id: number;
}

const GameTrailer = ({ id }: Props) => {
  const { data, error, isLoading } = useTrailer(id);

  if (isLoading) return null;

  if (error) {
 
    return <p>{error.message}</p>;
  }

  if (!data || !data.results || data.results.length === 0) {

    return <p>{" "}</p>;
  }

  return (
    <Box width={'100%'} paddingY={2}>
      <video title="Game Trailer" controls poster={data.results[0].preview}>
        <source src={data.results[0].data['480']} type="video/mp4" />
      </video>
    </Box>
  );
};

export default GameTrailer;
