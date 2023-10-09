"use client"

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import { clusterApiUrl } from "@solana/web3.js"
import { SolflareWalletAdapter } from "@solana/wallet-adapter-solflare";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import type { PropsWithChildren } from "react"
import React, { useMemo } from "react"
import "@solana/wallet-adapter-react-ui/styles.css"
import Header from "../header/header"
import Footer from "../header/footer"

export const Layout = ({ children }: PropsWithChildren) => {
    const network = WalletAdapterNetwork.Devnet

    const endpoint = useMemo(() => clusterApiUrl(network), [network])
    
    // add wallets if you want !
    const wallets = useMemo(() => [new PhantomWalletAdapter(), new SolflareWalletAdapter()], [])

    return (
        <div className="">
            <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect>
                    <WalletModalProvider>
                        <Header/>
                        <main className="flex justify-center md:p-4">
                            {children}
                        </main>
                        <Footer/>
                    </WalletModalProvider>
                </WalletProvider>
            </ConnectionProvider >
        </div>
    )
}
