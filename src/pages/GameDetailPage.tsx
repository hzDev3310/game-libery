import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame";
import ExpandbleText from "../componets/ExpandbleText";
import GameDeatilsGrid from "../componets/GameDeatilsGrid";
import { Grid, GridItem, Heading } from "@chakra-ui/react";
import GameTrailer from "../componets/GameTrailer";
import GameScreenshots from "../componets/GameuseScreenshots";


const GameDetailPage = () => {
  const { slug } = useParams();
  const { data } = useGame(slug!)

  return (
    <>
      <Grid
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={4}
      >
        <GridItem>
          <Heading fontSize={60}>{data?.name}</Heading>

          {data?.description_raw && <ExpandbleText children={data?.description_raw} />}

          <GameDeatilsGrid data={data} />
        </GridItem>
        <GridItem>
          {data?.id && <GameTrailer id={data?.id} />}
          {data?.id && <GameScreenshots id={data?.id} />}
        </GridItem>
      </Grid>
    </>
  )

}

export default GameDetailPage