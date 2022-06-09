import Link from "next/link";
import PageTitle from "@components/PageTitle";
import { Input, Button, Heading, Text } from "@cabindao/topo";
import Box from "@components/Box";

const Token = (props) => {
  return (
    <Box>
      <PageTitle weight="light">New Registry: Token</PageTitle>
      <Box css={{ marginTop: "$12" }}>
        <Box css={{mb: "$10"}}>
          <Heading as="h3">Step 2: Governance Token</Heading>
          <Text weight="light" css={{ maxWidth: 700 }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua.
          </Text>
        </Box>
        <Box>
          <Box css={{display: 'flex', mb: "$10"}}>
            <Box css={{flex: 1, mr: "$5"}}>
              <Input label="Name" helpText={"Sit consequuntur libero aspernatur voluptatem magnam error."} placeholder="Token name"></Input>
            </Box>
            <Box css={{flex: 1, ml: "$5"}}>
              <Input label="Symbol" helpText={"Sit consequuntur libero aspernatur voluptatem magnam error."} placeholder="Token Symbol"></Input>
            </Box>
          </Box>
          <Box css={{width: "50%", pr: "$5"}}>
              <Input label="Supply" helpText={"Sit consequuntur libero aspernatur voluptatem magnam error."} placeholder="Token Supply"></Input>
          </Box>
        </Box>
      </Box>
      <Box
        css={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "$20",
        }}
      >
        <Link href="/registry/new" passHref>
          <Button type="link" as="a">
            Back
          </Button>
        </Link>

        <Link href="/registry/new" passHref>
          <Button type="primary" as="a" tone="wheat">
            Next
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Token;
