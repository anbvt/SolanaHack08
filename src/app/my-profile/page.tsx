"use client";
import { Network, ShyftSdk, TokenBalance } from "@shyft-to/js";
import { useWallet } from "@solana/wallet-adapter-react";
import { SystemProgram, PublicKey } from "@solana/web3.js";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import TransactionLayout from "@/app/transaction/page";
import axios from "axios";

interface balance {
  balance: number;
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
interface token {
  address: string;
  balance: number;
}

interface getUserDonate {
  countProject: number;
  sumDonate: number;
}
interface Campaign {
  id: number;
  image: string;
  title: string;
  endTime: string;
  startTime: string;
  max: number;
  total: number;
  description: string;
}
interface Data {
  id: number;
  sol: number;
  dateDonate: null | string;
  publicKey: string;
  campaign: Campaign;
}

const Profile = () => {
  const [info, setInfo] = useState<getUserDonate>();
  const [historyTransaction, setHistoryTransaction] = useState<Data[]>([]);
  const { publicKey } = useWallet();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/donate/publicly",
          {
            params: { publicly: publicKey?.toBase58() },
          }
        );
        setInfo(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [publicKey]);

  useEffect(() => {
    const fetchDataa = async () => {
      try {
        const result = await axios.post(
          "http://localhost:8080/api/v1/donate/publicly-find-all",
          {
            publickey: publicKey?.toBase58(),
          }
        );
        setHistoryTransaction(result.data);
        console.log(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataa();
  }, [publicKey]);
  return (
    <>
      <div className="flex justify-center">
        <div className="w-1/2">
          <div className="p-4 border rounded-lg shadow-md">
            <div className="flex justify-between">
              <div className="flex">
                <img
                  src="https://media1.nguoiduatin.vn/m24/upload/3-2023/images/2023-07-09/Than-hinh-muot-muon-muot-cua-gai-xinh-xu-Han-co-trieu-fan-han-kyung-1688907525-217-width1440height1728.jpeg?v=1689466382"
                  alt="Hình ảnh"
                  className="mr-4 h-24"
                />
              </div>
            </div>
            <div className="w-max mb-2">Shizuku</div>

            <div className="grid gap-4 grid-cols-3 grid-rows-1">
              <div className="border rounded-lg bg-gray-100 py-3 p-3">
                <div className="text-xs">Donate</div>
                <div>
                  <span className="text-purple-700 text-2xl">
                    {info?.sumDonate}
                  </span>
                </div>
              </div>

              <div className="border rounded-lg bg-gray-100 py-3 p-3">
                <div className="text-xs">Project donate</div>
                <div>
                  <span className="text-purple-700 text-2xl">
                    {info?.countProject}
                  </span>
                </div>
              </div>

              <div className="border rounded-lg bg-gray-100 py-3 p-3">
                <div className="text-xs">Balance</div>
                <div>
                  <span className="text-purple-700 text-2xl">{}</span>
                  <span className="text-xs"> SOL </span>
                </div>
              </div>
            </div>
          </div>

          <div className="my-3">
            <span className="hover mx-2 hover:text-purple-500 hover:bg-purple-50 hover:p-1 hover:rounded-2xl">
              History Transaction
            </span>
          </div>
          {historyTransaction.map((item, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md mb-4">
              <div className="flex justify-between">
                <div>
                  <div className="text-purple-500">
                    Donated to : {" "}
                    <span className="text-blue-600">{item.campaign.title}</span>
                  </div>
                  <div className="">Date Donate: {item.dateDonate}</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="text-purple-500">Donate</span>
                  <div className="p-1 text-green-500 bg-green-200 jus h-0.2 rounded-2xl">
                    {item.sol}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
