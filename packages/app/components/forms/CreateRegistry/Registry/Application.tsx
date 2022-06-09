import Link from "next/link";
import { Input, Button, Heading, Text } from "@cabindao/topo";
import PageTitle from "@components/PageTitle";
import Box from "@components/Box";
import ButtonRow from "@components/ButtonRow";

const RegistryApplication = ({ currentStep }) => {
  return (
    <Box>
      <PageTitle weight="light">New Registry: Registry</PageTitle>
      <Box css={{ marginTop: "$12" }}>
        <Box>
          <Heading as="h3">Step 3: Application Length</Heading>
          <Text weight="light" css={{ maxWidth: 700 }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
        </Box>
        <Box css={{ width: "50%" }}>
          <Input
            name="Application Length"
            label="Application Length"
            placeholder="Length of application period"
            helpText={
              "Sit consequuntur libero aspernatur voluptatem magnam error."
            }
          ></Input>
        </Box>
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
            pathname: "/registry/new",
            query: { step: 8 },
          },
        }}
      />
    </Box>
  );
};

export default RegistryApplication;
