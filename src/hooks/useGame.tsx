import { useQuery } from "@tanstack/react-query"
import { getClient } from "../services/api-client"
import { Game } from "../interfaces/Game"



const useGame = (slug : string) =>  useQuery({
    queryKey : ['games', slug],
    queryFn : ()=> getClient<Game>(`/games/${slug}`)
})
 

export default useGame