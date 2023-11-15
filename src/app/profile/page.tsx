"use client";
import { Network, ShyftSdk, TokenBalance } from "@shyft-to/js";
import { useWallet } from "@solana/wallet-adapter-react";
import { SystemProgram, PublicKey } from "@solana/web3.js";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import TransactionLayout from "@/app/transaction/page"

interface WalletBalance {
    message: string;
    result: balance;
    // Thêm các trường khác nếu cần
}

interface balance {
    balance: number;
    // Thêm các trường khác nếu cần
}

interface WalletBalanceToken {
    message: string;
    result: balanceToken[];
    // Thêm các trường khác nếu cần
}

interface balanceToken {
    address: string;
    balance: number;
    info: info;
    // Thêm các trường khác nếu cần
}

interface info {
    name: string;
    symbol: string;
    image: string;
    // Thêm các trường khác nếu cần
}

interface getPortfolio {
    result: balanceToken;
    // Thêm các trường khác nếu cần
}

interface result {
    "sol_balance": number,
    "num_tokens": number,
    "tokens": token[]
}

interface token {
    "address": string,
    "balance": number
}

const Profile = () => {
    const [balance, setbalance] = useState<Number>(0);
    const [publicKey, setpublickey] = useState<String>("");



    const [balanceToken, setbalanceToken] = useState<balanceToken[]>([]);

    const [info, setInfo] = useState<result>();

    const myHeaders = new Headers();
    myHeaders.append("x-api-key", "Vus5VBA9XGmOsBhk");

    // const getBalanceCha = async () => {
    //     await setpublickey("3mFufooNGtcc8BMesZKJHSTVz7DBFEkEkbGcQB6Pqt41")
    //     const getBalanceCon: RequestInit = {
    //         method: 'GET',
    //         headers: myHeaders,
    //         redirect: 'follow',
    //     };

    //     fetch(`https://api.shyft.to/sol/v1/wallet/balance?network=devnet&wallet=${publicKey}`, getBalanceCon)
    //         .then(response => response.json() as Promise<WalletBalance>)
    //         .then(result => {

    //             setbalance(result.result.balance)
    //         })
    //         .catch(error => console.log('error', error));

    // }
    // useEffect(() => {
    //     getBalanceCha();
    // }, [publicKey])

    const getAllTokenCha = () => {
        // const myHeaders = new Headers();
        // myHeaders.append("x-api-key", "Vus5VBA9XGmOsBhk");

        // // await setpublickey("3mFufooNGtcc8BMesZKJHSTVz7DBFEkEkbGcQB6Pqt41")
        // var getAllToken: RequestInit = {
        //     method: 'GET',
        //     headers: myHeaders,
        //     redirect: 'follow'
        // };

        // fetch("https://api.shyft.to/sol/v1/wallet/all_tokens?network=devnet&wallet=3mFufooNGtcc8BMesZKJHSTVz7DBFEkEkbGcQB6Pqt41", getAllToken)
        //     .then(response => response.json() as Promise<WalletBalanceToken>)
        //     .then(result => {
        //         console.log(result.result)
        //         setbalanceToken(result.result)
        //     }

        //     )
        //     .catch(error => console.log('error', error));
    }

    // useEffect(() => {
    //     const myHeaders = new Headers();
    //     myHeaders.append("x-api-key", "Vus5VBA9XGmOsBhk");

    //     // await setpublickey("3mFufooNGtcc8BMesZKJHSTVz7DBFEkEkbGcQB6Pqt41")
    //     var getAllToken: RequestInit = {
    //         method: 'GET',
    //         headers: myHeaders,
    //         redirect: 'follow'
    //     };

    //     fetch("https://api.shyft.to/sol/v1/wallet/all_tokens?network=devnet&wallet=3mFufooNGtcc8BMesZKJHSTVz7DBFEkEkbGcQB6Pqt41", getAllToken)
    //         .then(response => response.json() as Promise<WalletBalanceToken>)
    //         .then(result => {
    //             console.log(result.result)
    //             setbalanceToken(result.result)
    //         }

    //         )
    //         .catch(error => console.log('error', error));
    // }, [])


    // useEffect(() => {
    //     const myHeaders = new Headers();
    //     myHeaders.append("x-api-key", "Vus5VBA9XGmOsBhk");

    //     // await setpublickey("3mFufooNGtcc8BMesZKJHSTVz7DBFEkEkbGcQB6Pqt41")
    //     var getAllToken: RequestInit = {
    //         method: 'GET',
    //         headers: myHeaders,
    //         redirect: 'follow'
    //     };

    //     fetch("https://api.shyft.to/sol/v1/wallet/get_portfolio?network=devnet&wallet=3mFufooNGtcc8BMesZKJHSTVz7DBFEkEkbGcQB6Pqt41", getAllToken)
    //         .then(response => response.json() as Promise<getPortfolio>)
    //         .then(result => {
    //             console.log(result.result)
    //             setInfo(result.result)
    //         })
    //         .catch(error => console.log('error', error));
    // }, [])

    return (
        <>
            <div>
                {balanceToken.map(token => (
                    <div key={token.address}>
                        <p>Address: {token.address}</p>
                        <p>Balance: {token.balance}</p>
                        <p>Name: {token.info.name}</p>
                        <p>Symbol: {token.info.symbol}</p>
                        <p>Image: {token.info.image}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <div className="w-1/2">
                    <div className="p-4 border rounded-lg shadow-md">

                        <div className="flex justify-between">
                            <div className="flex">
                                <img src="https://media1.nguoiduatin.vn/m24/upload/3-2023/images/2023-07-09/Than-hinh-muot-muon-muot-cua-gai-xinh-xu-Han-co-trieu-fan-han-kyung-1688907525-217-width1440height1728.jpeg?v=1689466382" alt="Hình ảnh" className="mr-4 h-24" />
                                <div>
                                    <div className="text-xl font-bold">Tên</div>
                                    <div className="text-gray-500"></div>
                                </div>

                            </div>
                        </div>
                        <div className="w-max mb-2">asdffd</div>

                        <div className="grid gap-4 grid-cols-3 grid-rows-1">

                            <div className="border rounded-lg bg-gray-100 py-3 p-3">
                                <div className="text-xs">Donate</div>
                                <div>
                                    <span className="text-purple-700 text-2xl">700</span>
                                    <span className="text-xs">  asdf</span>
                                </div>
                            </div>

                            <div className="border rounded-lg bg-gray-100 py-3 p-3">
                                <div className="text-xs">Project donate</div>
                                <div>
                                    <span className="text-purple-700 text-2xl">700</span>
                                    <span className="text-xs">  USDC</span>
                                </div>
                            </div>

                            <div className="border rounded-lg bg-gray-100 py-3 p-3">
                                <div className="text-xs">Balance</div>
                                <div>
                                    <span className="text-purple-700 text-2xl">{info?.sol_balance.toFixed(2)}</span>
                                    <span className="text-xs">  SOL</span>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="my-3">
                        <span className="hover mx-2 hover:text-purple-500 hover:bg-purple-50 hover:p-1 hover:rounded-2xl">Recent activity</span>
                        <span className="hover mx-2 hover:text-purple-500 hover:bg-purple-50 hover:p-1 hover:rounded-2xl">My campaign</span>
                        <span className="hover mx-2 hover:text-purple-500 hover:bg-purple-50 hover:p-1 hover:rounded-2xl">Achirvement</span>
                    </div>

                    <div className="p-4 border rounded-lg shadow-md">
                        <div className="flex justify-between">
                            <div>
                                <div className="text-purple-500">
                                    Donated to <span>asdfdfsfa</span>
                                </div>
                                <div className="">date</div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="p-1 text-green-500 bg-green-200 jus h-0.2 rounded-2xl">
                                    +50 USDC
                                </div>
                            </div>

                            <div className="flex justify-center items-center">
                                <div className="p-1 text-green-500 bg-green-200 jus h-0.2 rounded-2xl">
                                    +50 USDC
                                </div>
                            </div>

                            <div className="flex justify-center items-center">
                                <div className="p-1 text-green-500 bg-green-200 jus h-0.2 rounded-2xl">
                                    +50 USDC
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <TransactionLayout />
        </>


    );
};

export default Profile;