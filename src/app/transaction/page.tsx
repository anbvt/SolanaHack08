"use client";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import truncate from "@/types/truncate";
import ConnectWalletButton from "@/components/wallet/connect-wallet-button";
import { cn } from "@/lib/utils";
import { ShyftSdk, Network, TokenBalance } from "@shyft-to/js";
import Image from "next/image";
import axios from "axios";
import {useRouter } from "next/navigation";

type ResultStatus = "idle" | "success" | "failed";
interface Donate{
  id_campaign : number;
  sol: number;
  publicKey: string
}
interface HomePageProps {
  id: number;
}
export default function HomePage({ id }: HomePageProps) {
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ResultStatus>("idle");
  const [signature, setSignature] = useState("");
  const defaultReceiver = "3mFufooNGtcc8BMesZKJHSTVz7DBFEkEkbGcQB6Pqt41";

  const { connected, publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();

  const submitTransaction = async () => {
    if (!publicKey) throw new WalletNotConnectedError();

    try {
      setLoading(true);
      setResult("idle");
      setSignature("");
      const ix = SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new PublicKey(defaultReceiver),
        lamports: parseFloat(amount) * LAMPORTS_PER_SOL,
      });
      const tx = new Transaction().add(ix);
      const signature = await sendTransaction(tx, connection);
      await connection.confirmTransaction(signature, "processed");
      setSignature(signature);
      setResult("success");
      const donateData = {
        id_campaign: id, 
        sol: parseFloat(amount),
        publicKey: publicKey.toBase58(),
      };
      const response = await axios.post('http://localhost:8080/api/v1/donate', donateData);

      if (response.status === 200) {
        console.log('Donate successful');
      } else {
        console.error('Donate failed');
      }
    } catch (error) {
      console.error(error);
      setResult("failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <h1>-------------------------------------</h1>
        <label className="font-bold">Transfer</label>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <label color="secondary">Sender</label>
            <label className="font-semibold">
              {publicKey ? truncate(publicKey.toBase58(), 16, true) : "--"}
            </label>
          </div>
          <div className="flex items-center justify-between">
            <label>receiver</label>
            <label>
              <h1 className="font-semibold">{truncate(defaultReceiver, 16, true)}</h1>
            </label>
          </div>

          <Input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="Amount"
          />
          {connected ? (
            <Button disabled={!amount} onClick={submitTransaction}>
              Send
            </Button>
          ) : (
            <ConnectWalletButton />
          )}
          {result !== "idle" && (
            <div
              className={cn("rounded-xl p-4", {
                "bg-success-100 text-success-900": result === "success",
                "bg-error-100 text-error-900": result === "failed",
              })}
            >
              {result === "success" ? (
                <a
                  href={`https://explorer.solana.com/tx/${signature}?cluster=devnet`}
                  target="_blank"
                  className="underline"
                  rel="noreferrer"
                >
                  View success transaction
                </a>
              ) : (
                <p>Transaction failed</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
