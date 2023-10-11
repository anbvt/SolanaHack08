"use client";
import { Network, ShyftSdk, TokenBalance } from "@shyft-to/js";
import { useWallet } from "@solana/wallet-adapter-react";
import { SystemProgram, PublicKey } from "@solana/web3.js";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Profile = () => {
  const [tokenBalance, setTokenBalance] = useState<TokenBalance[] | null>(null);
  const { connected, publicKey, sendTransaction } = useWallet();

  useEffect(() => {
    const xAPIKey = "lXHn0L-0cC4s7YaN";
    const walletAddress = "3mFufooNGtcc8BMesZKJHSTVz7DBFEkEkbGcQB6Pqt41";

    const shyft = new ShyftSdk({
      apiKey: xAPIKey,
      network: Network.Devnet,
    });

    (async () => {
      try {
        const balance = await shyft.wallet.getAllTokenBalance({
          wallet: walletAddress,
        });
        setTokenBalance(balance);
        console.log(balance);
      } catch (error) {
        console.error("Error:", error);
      }
    })();
  }, []);

  return (
    <>
      {/* <div>
        {tokenBalance &&
          tokenBalance.map((balance, index) => (
            <div key={index}>
              <Image
                src={balance.info.image}
                alt={balance.info.name}
                width={500}
                height={400}
              />
              <h1>{balance.info.name}</h1>
              <h1>{balance.info.symbol}</h1>
            </div>
          ))}
      </div> */}

    {tokenBalance && tokenBalance.map((balance, index) => (
      <Card className="w-[350px] mx-3" key={index}>
        <form>
          <h1 className="text-center">NFTs Your Collectible</h1>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                  <div>
                    <Image
                      src={balance.info.image}
                      alt={'error image nft'}
                      width={330}
                      height={400}
                    />
                  </div>
              <Label className="text-center">Name NFT : {balance.info.name}</Label>
            </div>
          </div>
        </form>
      </Card>
        ))}
    </>
  );
};

export default Profile;
