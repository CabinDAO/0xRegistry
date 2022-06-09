import type { NextPage } from "next";
import Head from "next/head";
import Layout from "@components/Layout";
import CreateRegistryForm from "@forms/CreateRegistry"

const NewRegistry: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>New Registry: Overview</title>
      </Head>
      <CreateRegistryForm />
    </Layout>
  );
};

export default NewRegistry;
