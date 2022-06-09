import Link from "next/link";
import { Input, Button, Heading, Text } from "@cabindao/topo";
import { actions } from "../reducer"
import PageTitle from "@components/PageTitle";
import Box from "@components/Box";
import ButtonRow from "@components/ButtonRow";

const Registry = ({ currentStep, state, dispatch }) => {
  return (
    <Box>
      <PageTitle weight="light">New Registry: Registry</PageTitle>
      <Box css={{ marginTop: "$12" }}>
        <Box>
          <Heading as="h3">Step 3: Application Deposit</Heading>
          <Text weight="light" css={{ maxWidth: 700 }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
        </Box>
        <Box>
          <Box css={{ display: "flex", mb: "$10" }}>
            <Box css={{ flex: 1, mr: "$5" }}>
              <Input
                type="number"
                min="0"
                label="Application Deposit"
                helpText={
                  "How many tokens need to be deposited to apply or challenge?"
                }
                placeholder="Deposit ammount"
                value={state.registry.deposit}
                onChange={(e) =>
                  dispatch({
                  type: actions.UPDATE_REGISTRY_DEPOSIT,
                  payload: e.target.value,
                })
                }
              ></Input>
            </Box>
            <Box css={{ flex: 1, ml: "$5" }}>
              <Input
                type="number"
                min="0"
                label="Application Length (in days)"
                helpText={
                  "How many days will the review period be?"
                }
                placeholder="Length of application period"
                value={state.registry.application}
                onChange={(e) =>
                  dispatch({
                  type: actions.UPDATE_REGISTRY_APPLICATION,
                  payload: e.target.value,
                })
                }
              ></Input>
            </Box>
          </Box>
          <Box css={{ width: "50%", pr: "$5" }}>
            <Input
              type="number"
              min="0"
              label="Challenge Length (in days)"
              helpText={
                "How many days will the challenge period be?"
              }
              placeholder="Length of challenge period"
              value={state.registry.challenge}
              onChange={(e) =>
                dispatch({
                type: actions.UPDATE_REGISTRY_CHALLENGE,
                payload: e.target.value,
              })
              }
            ></Input>
          </Box>
        </Box>
      </Box>
      <ButtonRow
        prev={{
          text: "Back",
          href: {
            pathname: "/registry/new",
            query: { step: 5 },
        },
        }}
        next={{
          text: "Next",
          href: {
            pathname: "/registry/new",
            query: { step: 7 },
        },
        }}
      />
    </Box>
  );
};

export default Registry;
