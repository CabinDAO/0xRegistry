export const initialState = {
  step: "",
  meta: {
    name: "",
    logo: {},
  },
  token: {
    name: "",
    symbol: "",
    supply: null
  },
  registry: {
    deposit: null,
    application: null,
    challenge: null,
  },
};

export const actions = {
  UPDATE_REGISTRY_NAME: "UPDATE_REGISTRY_NAME",
  UPDATE_LOGO_PATH: "UPDATE_LOGO_PATH",
  UPDATE_TOKEN_NAME: "UPDATE_TOKEN_NAME",
  UPDATE_TOKEN_SYMBOL: "UPDATE_TOKEN_SYMBOL",
  UPDATE_TOKEN_SUPPLY: "UPDATE_TOKEN_SUPPLY",
  UPDATE_REGISTRY_DEPOSIT: "UPDATE_REGISTRY_DEPOSIT",
  UPDATE_REGISTRY_APPLICATION: "UPDATE_REGISTRY_APPLICATION",
  UPDATE_REGISTRY_CHALLENGE: "UPDATE_REGISTRY_CHALLENGE",
}

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
    case actions.UPDATE_REGISTRY_NAME:
      return {
        ...state,
        meta: {
          ...state.meta,
          name: action.payload,
        }
      }
    case actions.UPDATE_LOGO_PATH:
      return {
        ...state,
        meta: {
          ...state.meta,
          logo: action.payload
        }
      }
    case actions.UPDATE_TOKEN_NAME:
      return {
        ...state,
        token: {
          ...state.token,
          name: action.payload
        }
      }
    case actions.UPDATE_TOKEN_SYMBOL:
      return {
        ...state,
        token: {
          ...state.token,
          symbol: action.payload
        }
      }
    case actions.UPDATE_TOKEN_SUPPLY:
      return {
        ...state,
        token: {
          ...state.token,
          supply: action.payload
        }
      }
    case actions.UPDATE_REGISTRY_DEPOSIT:
      return {
        ...state,
        registry: {
          ...state.registry,
          deposit: action.payload
        }
      }
    case actions.UPDATE_REGISTRY_APPLICATION:
      return {
        ...state,
        registry: {
          ...state.registry,
          application: action.payload
        }
      }
    case actions.UPDATE_REGISTRY_CHALLENGE:
      return {
        ...state,
        registry: {
          ...state.registry,
          challenge: action.payload
        }
      }
    default:
  }
}
