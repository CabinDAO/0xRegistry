import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Box from "../components/Box";
import { Heading, Button, Text } from "@cabindao/topo";

const Home: NextPage = () => {
  return (
    <Layout>
      <Box css={{ maxWidth: 575, mb: "$20", mt: "$10" }}>
        <Heading weight="light">New Registry</Heading>
        <Text weight="light">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Text>
      </Box>
      <Button type="primary" as="a" tone="wheat" href="/registry/new">
        New Registry
      </Button>
    </Layout>
  );
};

export default Home;
