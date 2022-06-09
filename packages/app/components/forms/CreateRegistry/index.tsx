import { useReducer } from "react";
import { useRouter } from "next/router";
import { registryReducer, initialState } from "./reducer";
import Box from "@components/Box";
import Overview from "./Overview";
import Metadata from "./Metadata";
import Token from "./Token";
import TokenConfirmation from "./Token/Confirmation";
import Registry from "./Registry";
import RegistryDeposit from "./Registry/Deposit";
import RegistryApplication from "./Registry/Application";
import RegistryChallenge from "./Registry/Challenge";
import RegistryConfirmation from "./Registry/Confirmation";

const CreateRegistryForm = (props) => {
  const router = useRouter();
  const [state, dispatch] = useReducer(registryReducer, initialState);

  console.log(router.query);

  let formStep;
  switch (router.query.name) {
    case "metadata":
      formStep = <Metadata></Metadata>;
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
          next="metadata"
        />
      );
  }

  return <Box>{formStep}</Box>;
};

export default CreateRegistryForm;
