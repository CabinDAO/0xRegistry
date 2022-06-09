import Link from "next/link";
import { Button, Heading, Text, styled } from "@cabindao/topo";
import { iRegistryFormState } from "./reducer";
import PageTitle from "@components/PageTitle";
import Box from "@components/Box";
import ButtonRow, { RowButton } from "@components/ButtonRow";

interface iOverviewProps {
  state: iRegistryFormState;
  steps: [string];
  currentStep: number;
  description: string;
  next: RowButton;
  prev?: RowButton;
}

let Step = styled("li");

const Overview = ({ description, steps, currentStep, next, prev }) => {
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
                key={i}
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

      {currentStep > 0 ? (
        <ButtonRow prev={prev} next={next} />
      ) : (
        <ButtonRow next={next} />
      )}
    </Box>
  );
};

export default Overview;
