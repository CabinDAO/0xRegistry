import { useReducer } from "react";
import { useRouter } from "next/router";
import { registryReducer, initialState } from "./reducer";
import Box from "@components/Box";
import Overview from "./Overview";
import Metadata from "./Metadata";
import Token from "./Token";
import TokenConfirmation from "./Token/Confirmation";
import Registry from "./Registry";
import RegistryConfirmation from "./Registry/Confirmation";

const CreateRegistryForm = () => {
  const router = useRouter();
  const [state, dispatch] = useReducer(registryReducer, initialState);

  //console.log("step: ", router.query.step);
  console.log("state: ", state)

  return (
    <Box>{renderFormStep(parseInt(router.query.step), state, dispatch)}</Box>
  );
};

function renderFormStep(step = null, state, dispatch) {
  let formStep;
  switch (step) {
    case 1:
      formStep = (
        <Metadata
          currentStep={step}
          state={state}
          dispatch={dispatch}
        ></Metadata>
      );
      break;
    case 2:
      formStep = (
        <Overview
          state={state}
          dispatch={dispatch}
          description={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          }
          currentStep={1}
          steps={["Registry Metadata", "Governance Token", "Registry"]}
          next={{
            text: "Next",
            href: {
              pathname: "/registry/new",
              query: { step: 3 },
            },
          }}
          prev={{
            text: "Back",
            href: {
              pathname: "/registry/new",
              query: { step: 1 },
            },
          }}
        />
      );
      break;
    case 3:
      formStep = <Token currentStep={step} state={state} dispatch={dispatch} />;
      break;
    case 4:
      formStep = (
        <TokenConfirmation
          currentStep={step}
          state={state}
          dispatch={dispatch}
        />
      );
      break;
    case 5:
      formStep = (
        <Overview
          state={state}
          dispatch={dispatch}
          description={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          }
          currentStep={2}
          steps={["Registry Metadata", "Governance Token", "Registry"]}
          next={{
            text: "Next",
            href: {
              pathname: "/registry/new",
              query: { step: 6 },
            },
          }}
          prev={{
            text: "Back",
            href: {
              pathname: "/registry/new",
              query: { step: 4 },
            },
          }}
        />
      );
      break;
    case 6:
      formStep = (
        <Registry currentStep={step} state={state} dispatch={dispatch} />
      );
      break;
    case 7:
      formStep = (
        <RegistryConfirmation
          currentStep={step}
          state={state}
          dispatch={dispatch}
        />
      );
      break;
    default:
      formStep = (
        <Overview
          state={state}
          dispatch={dispatch}
          description={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          }
          currentStep={0}
          steps={["Registry Metadata", "Governance Token", "Registry"]}
          next={{
            text: "Next",
            href: {
              pathname: "/registry/new",
              query: { step: 1 },
            },
          }}
        />
      );
  }
  return formStep;
}

export default CreateRegistryForm;
