import { useQuery } from "@tanstack/react-query";

import { Schema } from "../interfaces/Schema";
import { getAllClient } from "../services/api-client";


interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: {
    480 :string
  };
}
const useTrailer = (id: number) =>
  useQuery<Schema<Trailer>, Error>({
    queryKey: ["trailers", id],
    queryFn: () => getAllClient<Trailer>(`/games/${id.toString()}/movies`),
  });

export default useTrailer;
