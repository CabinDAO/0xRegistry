import Head from "next/head";
import { Wrapper, Button, styled } from "@cabindao/topo";
import Box from "./Box";
import PageHeader from "./PageHeader";

export default function Layout(props) {
  return (
    <Box>
      <PageHeader />
      <Wrapper>
        <Box css={{ pt: "$10" }}>
          {props.children}
        </Box>
      </Wrapper>
    </Box>
  );
}
