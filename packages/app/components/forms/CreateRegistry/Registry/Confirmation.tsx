import Link from "next/link";
import { Label, Button, Heading, Text } from "@cabindao/topo";
import { formatNumber } from "@utils/format";
import PageTitle from "@components/PageTitle";
import Box from "@components/Box";
import ButtonRow from "@components/ButtonRow";

const RegistryConfirmation = ({ state }) => {
  return (
    <Box>
      <PageTitle weight="light">New Registry: Registry</PageTitle>
      <Box css={{ marginTop: "$12" }}>
        <Box>
          <Heading as="h3">Step 2: Create Registry</Heading>
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
                Application Deposit
              </Heading>
              <Text weight="light">
                {state.registry.deposit} {`$${state.token.symbol}`}
              </Text>
            </Box>
            <Box css={{ flex: 1, ml: "$5" }}>
              <Heading css={{ mb: 0 }} as="h3">
                Application Length
              </Heading>
              <Text weight="light">{state.registry.application} Days</Text>
            </Box>
          </Box>
          <Box css={{ width: "50%", pr: "$5" }}>
            <Heading css={{ mb: 0 }} as="h3">
              Challenge Length
            </Heading>
            <Text weight="light">{state.registry.challenge} Days</Text>
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
            query: { step: 6 },
          },
        }}
        next={{
          text: "Next",
          href: {
            pathname: "/",
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
            Launch Registry
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default RegistryConfirmation;
