import Link from "next/link";
import PageTitle from "@components/PageTitle";
import FileUpload from "@components/FileUpload";
import { Input, Button, Heading, Text } from "@cabindao/topo";
import Box from "@components/Box";

const RegistryMetadata = (props) => {
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
            ></Input>
          </Box>
          <Box>
            <FileUpload label="Registry Logo"></FileUpload>
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

export default RegistryMetadata;
