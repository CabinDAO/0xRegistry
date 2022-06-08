import { Wrapper, Button, Heading } from "@cabindao/topo";
import Link from "next/link";
import Box from "./Box";

export default function PageHeader() {
  return (
    <Box css={{
      borderBottom: '1px solid',
      borderColor: '$forest',
      paddingBottom: "$6"
      }}>
      <Wrapper>
        <Link href="/">
          <Heading as="a" css={{ display: "inline-block", mt: "$4", cursor: "pointer" }}>0xRegistry</Heading>
        </Link>
      </Wrapper>
    </Box>
  )
}
