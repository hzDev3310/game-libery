import { useQuery } from '@tanstack/react-query';

import { Schema } from '../interfaces/Schema';
import { getAllClient } from '../services/api-client';

 interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}

const useScreenshots = (gameId: number) => {
 
   
  return useQuery<Schema<Screenshot>, Error>({
    queryKey: ['screenshots', gameId],
    queryFn:() => getAllClient<Screenshot>( `/games/${gameId}/screenshots`), 
  });
};

export default useScreenshots;