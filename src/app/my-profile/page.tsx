"use client";
import { Network, ShyftSdk, TokenBalance } from "@shyft-to/js";
import { useWallet } from "@solana/wallet-adapter-react";
import { SystemProgram, PublicKey } from "@solana/web3.js";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import TransactionLayout from "@/app/transaction/page"
import axios from "axios";

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

interface getUserDonate{
    countProject: number;
    sumDonate: number;
}


const Profile = () => {
    const [balanceToken, setbalanceToken] = useState<balanceToken[]>([]);
    const [info, setInfo] = useState<getUserDonate>();
    const {publicKey} = useWallet();
    const apiKey = 'lXHn0L-0cC4s7YaN';

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:8080/api/v1/donate/publicly", {
              params: { publicly: publicKey?.toBase58() }
            });
            setInfo(response.data);
            console.log(response.data)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData(); 
      }, [publicKey]);

      const headers = {
        'x-api-key': apiKey,
      };
      
      // Tạo URL của yêu cầu
      const apiUrl = "https://api.shyft.to/sol/v1/transaction/history";
      
      axios.get(apiUrl, {
        params: {
          network: Network.Devnet,
          account: publicKey?.toBase58(),
          tx_num: 10,
          enable_raw: true,
        },
        headers: headers,
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    return (
        <>
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
                        <div className="w-max mb-2">Shizuku</div>

                        <div className="grid gap-4 grid-cols-3 grid-rows-1">

                            <div className="border rounded-lg bg-gray-100 py-3 p-3">
                                <div className="text-xs">Donate</div>
                                <div>
                                    <span className="text-purple-700 text-2xl">{info?.sumDonate}</span>
                                </div>
                            </div>

                            <div className="border rounded-lg bg-gray-100 py-3 p-3">
                                <div className="text-xs">Project donate</div>
                                <div>
                                    <span className="text-purple-700 text-2xl">{info?.countProject}</span>
                                </div>
                            </div>

                            <div className="border rounded-lg bg-gray-100 py-3 p-3">
                                <div className="text-xs">Balance</div>
                                <div>
                                    <span className="text-purple-700 text-2xl">{}</span>
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
        </>


    );
};

export default Profile;
