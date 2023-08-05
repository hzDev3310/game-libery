import { useQuery } from "@tanstack/react-query";


import { Genre } from "../interfaces/Genre";
import { getAllClient } from "../services/api-client";


const useGenre = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: () => getAllClient<Genre>('/genres'),
    staleTime: 24 * 60 * 60 * 1000
  })

export default useGenre;
