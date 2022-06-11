import Link from "next/link";
import { Wrapper, Button, Text, styled, Footer } from "@cabindao/topo";
import Box from "./Box";
import PageHeader from "./PageHeader";

const CabinLink = styled("a", {
  textDecoration: "underline",
  "&:hover": {
    color: "$sprout",
  },
});

export default function Layout(props) {
  return (
    <Box css={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <PageHeader />
      <Wrapper>
        <Box css={{ pt: "$10",pb: "$20" }}>{props.children}</Box>
      </Wrapper>
      <Box css={{ mt: "auto" }}>
        <Footer>
          <Text mono>
            Made with care by{" "}
            <CabinLink
              href="https://creatorcabins.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cabin
            </CabinLink>
            .
          </Text>
        </Footer>
      </Box>
    </Box>
  );
}
