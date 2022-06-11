import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Heading, Button, Text } from "@cabindao/topo";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Layout from "@components/Layout";
import Box from "@components/Box";

const Home: NextPage = () => {
  const { data, isError, isLoading } = useAccount();

  if (data) console.log("data: ", data);

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
      {data ? (
        <Link href="/registry/new" passHref>
          <Button type="primary" as="a" tone="wheat">
            New Registry
          </Button>
        </Link>
      ): (
      <Box>
        <Text weight="light" css={{fontStyle: "italic"}}>Connect your wallet to get started.</Text>
        <ConnectButton />
      </Box>
      )}
    </Layout>
  );
};

export default Home;
