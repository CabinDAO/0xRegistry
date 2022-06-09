import Link from "next/link";
import PageTitle from "@components/PageTitle";
import { Input, Button, Heading, Text } from "@cabindao/topo";
import Box from "@components/Box";

const Registry = (props) => {
  return (
    <Box>
      <PageTitle weight="light">New Registry: Registry</PageTitle>
      <Box css={{ marginTop: "$12" }}>
        <Box>
          <Heading as="h3">Step 3: Application Deposit</Heading>
          <Text weight="light" css={{ maxWidth: 700 }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
        </Box>
        <Box css={{width: "50%"}}>
          <Input
            name="Application Deposit"
            label="Application Deposit"
            placeholder="Deposit Amount"
              helpText={"Sit consequuntur libero aspernatur voluptatem magnam error."}
          ></Input>
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

export default Registry;
