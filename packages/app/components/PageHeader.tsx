import { Wrapper, Button, Heading } from "@cabindao/topo";
import Box from "./Box"

export default function PageHeader() {
  return (
    <Box css={{
      borderBottom: '1px solid',
      borderColor: '$forest',
      paddingBottom: "$6"
      }}>
      <Wrapper>
        <Heading as="h3">0xRegistry</Heading>
      </Wrapper>
    </Box>
  )
}
