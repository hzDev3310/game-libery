import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";

import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GameLoading from "./GameLoading";
const GameGrid = () => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } = useGame();
  const ske = [1, 2, 3, 4, 5, 6];
  const fetchedGamesCount =
    data?.pages.reduce(
      (total, page) => total + page.results.length,
      0
    ) || 0;

  return (
    <>
      {error && <p>Error: {error.message}</p>}
      {isLoading && (
        <SimpleGrid columns={{ sm: 1, lg: 2, xl: 4 }} spacing={10} paddingTop={5}>
          {ske.map((i) => <GameLoading key={i}></GameLoading>)}
        </SimpleGrid>
      )}
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
          paddingY={5}
        >

          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (

                <GameCard key={game.id} game={game} />

              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>

  );
};

export default GameGrid;
