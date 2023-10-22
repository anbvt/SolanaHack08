"use client";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { SolflareWalletAdapter } from "@solana/wallet-adapter-solflare";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import type { PropsWithChildren } from "react";
import React, { useMemo } from "react";
import "@solana/wallet-adapter-react-ui/styles.css";
import Header from "../header/header";
import Footer from "../header/footer";
import HomePage from "@/app/transaction/page";
import Campaign from "@/app/page";
import CreateCampaign from "@/app/create-campaign/page";
import Home from "@/app/page";
import { GlobalContextProvider } from "@/app/Context/Store";
export const Layout = ({ children }: PropsWithChildren) => {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // add wallets if you want !
  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
    []
  );

  return (
    <div className="">
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
              <Header />
              <main>{children}</main>
              <Footer />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
};
