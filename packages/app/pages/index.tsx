import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Heading, Button, Text } from "@cabindao/topo";
import Layout from "@components/Layout";
import Box from "@components/Box";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>0xRegistry</title>
      </Head>
      <Box css={{ maxWidth: 575, mb: "$20", mt: "$10" }}>
        <Heading weight="light">New Registry</Heading>
        <Text weight="light">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Text>
      </Box>
      <Link href="/registry/new" passHref>
        <Button type="primary" as="a" tone="wheat">
          New Registry
        </Button>
      </Link>
    </Layout>
  );
};

export default Home;
