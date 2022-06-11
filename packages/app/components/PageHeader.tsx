import { Wrapper, Button, Heading } from "@cabindao/topo";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import Box from "./Box";

export default function PageHeader() {
  return (
    <Box
      css={{
        borderBottom: "1px solid",
        borderColor: "$forest",
        paddingBottom: "$6",
      }}
    >
      <Wrapper>
        <Box
          css={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pt: "$4",
          }}
        >
          <Link href="/">
            <Heading
              as="a"
              css={{ display: "inline-block", cursor: "pointer" }}
            >
              0xRegistry
            </Heading>
          </Link>
          <ConnectButton />
        </Box>
      </Wrapper>
    </Box>
  );
}
