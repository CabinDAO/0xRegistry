export const initialState = {
  step: "",
  meta: {
    name: "",
    logo: "",
  },
  token: {
    name: "",
    symbol: "",
    supply: "",
  },
  registry: {
    deposit: null,
    application: null,
    challenge: null,
  },
};

export interface iRegistryFormState {
  step: string;
  meta: Metadata;
  token: Token;
  registry: Registry;
}

type Metadata = {
  name: string;
  logo: string;
};

type Token = {
  name: string;
  symbol: string;
  supply: string;
};

type Registry = {
  deposit: number;
  application: number;
  challenge: number;
};

export function registryReducer(state, action) {
  switch (action.type) {
    case "case":
      break;

    default:
  }
}
