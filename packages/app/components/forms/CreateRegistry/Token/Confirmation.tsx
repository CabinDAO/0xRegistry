import Link from "next/link";
import { Label, Button, Heading, Text } from "@cabindao/topo";
import PageTitle from "@components/PageTitle";
import Box from "@components/Box";
import ButtonRow from "@components/ButtonRow";

const TokenConfirmation = (props) => {
  return (
    <Box>
      <PageTitle weight="light">New Registry: Token</PageTitle>
      <Box css={{ marginTop: "$12" }}>
        <Box>
          <Heading as="h3">Step 2: Create Token</Heading>
          <Text weight="light" css={{ maxWidth: 700 }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
        </Box>
        <Box>
          <Box css={{ display: "flex", mb: "$10" }}>
            <Box css={{ flex: 1, mr: "$5" }}>
              <Heading css={{ mb: 0 }} as="h3">
                Token Name
              </Heading>
              <Text weight="light">The Whole DAO Catalog</Text>
            </Box>
            <Box css={{ flex: 1, ml: "$5" }}>
              <Heading css={{ mb: 0 }} as="h3">
                Token Symbol
              </Heading>
              <Text weight="light">DAO</Text>
            </Box>
          </Box>
          <Box css={{ width: "50%", pr: "$5" }}>
            <Heading css={{ mb: 0 }} as="h3">
              Token Supply
            </Heading>
            <Text weight="light">1,000,000</Text>
          </Box>
        </Box>
      </Box>
      <Box
        css={{
          marginTop: "$20",
        }}
      >
        <Text css={{ fontStyle: "italic" }} weight="light">
          This will launch a new token contract, which costs gas.
        </Text>
      </Box>

      <ButtonRow
        prev={{
          text: "Back",
          href: {
            pathname: "/registry/new",
            query: { step: 3 },
          },
        }}
        next={{
          text: "Next",
          href: {
            pathname: "/registry/new",
            query: { step: 5 },
          },
        }}
      />

      <Box
        css={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link href="/registry/new" passHref>
          <Button type="link" as="a">
            Back
          </Button>
        </Link>

        <Link href="/registry/new" passHref>
          <Button type="primary" as="a" tone="forest">
            Launch Token
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default TokenConfirmation;
