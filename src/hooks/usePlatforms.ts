import { useQuery } from "@tanstack/react-query";


import { Platform } from "../interfaces/Platform";
import { getAllClient } from "../services/api-client";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => getAllClient<Platform>("platforms/lists/parents"),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default usePlatforms;
