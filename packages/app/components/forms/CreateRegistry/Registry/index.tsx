import Link from "next/link";
import { Input, Button, Heading, Text } from "@cabindao/topo";
import PageTitle from "@components/PageTitle";
import Box from "@components/Box";
import ButtonRow from "@components/ButtonRow";

const Registry = ({currentStep}) => {
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
        <Box>
          <Box css={{ display: "flex", mb: "$10" }}>
            <Box css={{ flex: 1, mr: "$5" }}>
              <Input
                label="Application Deposit"
                helpText={
                  "Sit consequuntur libero aspernatur voluptatem magnam error."
                }
                placeholder="Deposit ammount"
              ></Input>
            </Box>
            <Box css={{ flex: 1, ml: "$5" }}>
              <Input
                label="Application Length"
                helpText={
                  "Sit consequuntur libero aspernatur voluptatem magnam error."
                }
                placeholder="Length of application period"
              ></Input>
            </Box>
          </Box>
          <Box css={{ width: "50%", pr: "$5" }}>
            <Input
              label="Challenge Length"
              helpText={
                "Sit consequuntur libero aspernatur voluptatem magnam error."
              }
              placeholder="Length of challenge period"
            ></Input>
          </Box>
        </Box>
      </Box>
      <ButtonRow
        prev={{
          text: "Back",
          href: {
            pathname: "/registry/new",
            query: { step: 5 },
          },
        }}
        next={{
          text: "Next",
          href: {
            pathname: "/registry/new",
            query: { step: 7 },
          },
        }}
      />
    </Box>
  );
};

export default Registry;
