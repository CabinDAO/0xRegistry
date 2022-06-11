import type { AppProps } from "next/app";
import { globalCss } from "@cabindao/topo";
import "@rainbow-me/rainbowkit/styles.css";
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  wallet,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider, webSocketProvider } = configureChains(
  [chain.rinkeby],
  [
    alchemyProvider({ alchemyId: "pjZhqAniW1nYhws_CPcst-QGXgbOxwIx" }),
    publicProvider(),
  ],
);

const { wallets } = getDefaultWallets({
  appName: "RainbowKit Demo",
  chains,
});

const demoAppInfo = {
  appName: "RainbowKit Demo",
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      wallet.argent({ chains }),
      wallet.trust({ chains }),
      wallet.ledger({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

const globalStyles = globalCss({
  "html, body": {
    padding: 0,
    margin: 0,
    fontFamily: "$sans",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  "*": {
    boxSizing: "border-box",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider appInfo={demoAppInfo} chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
