import { Button, Text } from "@chakra-ui/react"
import { useState } from "react"

interface ChildProps {
    children: string;
}

const ExpandbleText = ({ children }: ChildProps) => {
    const [b, setB] = useState(true);
    const text = children.substring(0, 299)

    
    return (
        <>
            {
                b &&
                <Text marginY={5} >{text}...
                    <Button 
                        onClick={() => {
                            setB(!b)
                        }} >
                        View more
                    </Button>
                </Text>
            }
            {
                !b && <Text marginY={5} marginX={2} >{children}
                    <Button
                        onClick={() => {
                            setB(!b)
                        }} >
                        View less
                    </Button>
                </Text>
            }

        </>
    )
}

export default ExpandbleText