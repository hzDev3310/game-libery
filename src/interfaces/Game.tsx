import { Genre } from "./Genre";
import { Platform } from "./Platform";

interface Publishers{
    id:number
    name : string
}
export interface Game {
    released: string | number | Date;
    added: string | number | Date;
    created: string | number | Date;
    updated: string | number | Date;
    rating: number;
    rating_top: number;
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform; }[];
    metacritic: number;
    genres: Genre[];
    slug: string;
    description_raw: string;
    publishers : Publishers[]
}
