import Link from "next/link";
import { Input, Button, Heading, Text } from "@cabindao/topo";
import { actions } from "../reducer"
import PageTitle from "@components/PageTitle";
import Box from "@components/Box";
import ButtonRow from "@components/ButtonRow";

const Token = ({ currentStep, state, dispatch }) => {
  return (
    <Box>
      <PageTitle weight="light">New Registry: Token</PageTitle>
      <Box css={{ marginTop: "$12" }}>
        <Box css={{ mb: "$10" }}>
          <Heading as="h3">Step 2: Governance Token</Heading>
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
                label="Name"
                helpText={
                  "Sit consequuntur libero aspernatur voluptatem magnam error."
                }
                placeholder="Token name"
                value={state.token.name}
                onChange={e => dispatch({
                  type: actions.UPDATE_TOKEN_NAME,
                  payload: e.target.value
                })}
              ></Input>
            </Box>
            <Box css={{ flex: 1, ml: "$5" }}>
              <Input
                label="Symbol"
                helpText={
                  "Sit consequuntur libero aspernatur voluptatem magnam error."
                }
                placeholder="Token Symbol"
                value={state.token.symbol}
                onChange={e => dispatch({
                  type: actions.UPDATE_TOKEN_SYMBOL,
                  payload: e.target.value
                })}
              ></Input>
            </Box>
          </Box>
          <Box css={{ width: "50%", pr: "$5" }}>
            <Input
              type="number"
              min="0"
              label="Supply"
              helpText={
                "Sit consequuntur libero aspernatur voluptatem magnam error."
              }
              placeholder="Token Supply"
                value={state.token.supply}
                onChange={e => dispatch({
                  type: actions.UPDATE_TOKEN_SUPPLY,
                  payload: e.target.value
                })}
            ></Input>
          </Box>
        </Box>
      </Box>
      <ButtonRow
        prev={{
          text: "Back",
          href: {
            pathname: "/registry/new",
            query: { step: 2 },
          },
        }}
        next={{
          text: "Next",
          href: {
            pathname: "/registry/new",
            query: { step: 4 },
          },
        }}
      />
    </Box>
  );
};

export default Token;
