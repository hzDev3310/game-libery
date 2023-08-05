import { useInfiniteQuery } from '@tanstack/react-query';
import useGameQueryStore from '../store';

import { Game } from '../interfaces/Game';
import { Schema } from '../interfaces/Schema';
import { getAllClient } from '../services/api-client';



const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<Schema<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) => getAllClient("games",
      {
        params: {
          genres: gameQuery.genre,
          parent_platforms: gameQuery.genre,
          ordering: gameQuery.order,
          search: gameQuery.searchValue,
          page: pageParam,
        },
      }
    ),

    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },

  });
};

export default useGames;
