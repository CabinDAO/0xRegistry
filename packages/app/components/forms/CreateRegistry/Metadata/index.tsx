import Link from "next/link";
import { Input, Button, Heading, Text } from "@cabindao/topo";
import { actions } from "../reducer"
import PageTitle from "@components/PageTitle";
import FileUpload from "@components/FileUpload";
import Box from "@components/Box";
import ButtonRow from "@components/ButtonRow";

const RegistryMetadata = ({ currentStep, state, dispatch }) => {

  return (
    <Box>
      <PageTitle weight="light">New Registry: Metadata</PageTitle>
      <Box css={{ marginTop: "$12" }}>
        <Box css={{ marginBottom: "$10" }}>
          <Heading as="h3">Step 1: Registry Metadata</Heading>
          <Text weight="light" css={{ maxWidth: 700 }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
        </Box>
        <Box css={{ maxWidth: "50%" }}>
          <Box css={{ marginBottom: "$10" }}>
            <Input
              label="Registry Name"
              required
              placeholder="Name of your registry"
              value={state.meta.name}
              onChange={e => dispatch({ type: actions.UPDATE_REGISTRY_NAME, payload: e.target.value })}
            ></Input>
          </Box>
          <Box>
            <FileUpload
              label="Registry Logo"
              accept="image/png, image/jpeg"
              // input:file can't be controlled component
              //value={state.meta.logo}
              //onChange={e => console.log(e.target.files[0])}
              onChange={e => dispatch({ type: actions.UPDATE_LOGO_PATH, payload: e.target.files[0] })}
            />
          </Box>
        </Box>
      </Box>
      <ButtonRow
        prev={{
          text: "Back",
          href: {
            pathname: "/registry/new",
            query: { step: 0 },
          },
        }}
        next={{
          text: "Next",
          href: {
            pathname: "/registry/new",
            query: { step: 2 },
          },
        }}
      />
    </Box>
  );
};

export default RegistryMetadata;
