import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'


const GameLoading = () => {
  return (
    <Card width={260} borderRadius={20} overflow={"hidden"}>
        <Skeleton height={250}  ></Skeleton >
        <CardBody>
            <SkeletonText></SkeletonText>
        </CardBody>
    </Card>
  )
}

export default GameLoading