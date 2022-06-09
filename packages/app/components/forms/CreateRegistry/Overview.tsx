import Link from "next/link";
import PageTitle from "@components/PageTitle";
import { Button, Heading, Text, styled } from "@cabindao/topo";
import Box from "@components/Box";
import { iRegistryFormState } from "./reducer";

interface iOverviewProps {
  state: iRegistryFormState;
  steps: [string];
  currentStep: number;
  description: string;
  next: string;
}

let Step = styled("li");

const Overview = ({ description, steps, currentStep, next }) => {
  return (
    <Box>
      <PageTitle weight="light">New Registry: Overview</PageTitle>
      <Box css={{ marginTop: "$12" }}>
        <Heading as="h3">Overview</Heading>
        <Text weight="light" css={{ maxWidth: 700 }}>
          {description}
        </Text>
        <ol>
          {steps.map((step, i) => {
            return (
              <Step
                css={{
                  textDecoration: i < currentStep ? "line-through" : "",
                }}
              >
                {step}
              </Step>
            );
          })}
        </ol>
      </Box>
      <Box
        css={{
          display: "flex",
          flexDirection: "row-reverse",
          marginTop: "$20",
        }}
      >
        <Link
          href={{
            pathname: "/registry/new",
            query: { step: next },
          }}
          passHref
        >
          <Button type="primary" as="a" tone="wheat">
            Next
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Overview;
