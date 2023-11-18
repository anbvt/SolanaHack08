"use client";
import { userGlobalContext } from "@/app/Context/Store";
import HomePage from "@/app/transaction/page";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
interface Campaign {
  id: number;
  name: string;
  image: string;
  title : string;
  max : number;
  total: number;
}
function Bodypage() {
  const [dataList, setDataList] = useState<Campaign[]>([]);
  useEffect(() => {
   const fetchData= async () => {
     try {
       const resp = await axios.get("http://localhost:8080/api/v1/campaign/get-all-where");   
       setDataList(resp.data)
     } catch (error) {
      console.log(error);
     }
   }
   fetchData();
  }, []);
  
  return (
    <>
      {dataList.map((image, index) => (
        <div className="relative m-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md" key={index}>
          <div >
            <Link
              className="relative flex h-60 overflow-hidden rounded-xl"
              href={`/products-detail/${image.id}`}
            >
              <Image
                className="object-cover w-full"
                src={image?.image}
                alt={""}
                width={210}
                height={10}
              />
            </Link>
            <div className="mt-4 px-5 pb-5">
              <Link href="#">
                <h5 className="text-xl font-bold text-ellipsis overflow-hidden whitespace-nowrap  tracking-tight text-slate-900">
                  {image?.title}
                </h5>
              </Link>
              <Link href="#">
                <h4 className="text-base font-bold  tracking-tight text-gray-300">
                  norcirpac
                </h4>
              </Link>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <div className={` bg-gray-200 rounded-full h-2.5`}
                style={{ width: `${(image?.total / image?.max) * 100}%`}}>
                  <div className="bg-green-400 h-2.5 rounded-full"></div>
                </div>
              </div>
              <Link href="#">
                <h5 className="text-lg font-bold text-ellipsis overflow-hidden whitespace-nowrap  tracking-tight text-slate-900">
                  {" "}
                  $ {image.total} funded of $ {image.max}
                </h5>
              </Link>
              <Link href="#">
                <h4 className="text-base font-bold  tracking-tight text-gray-300">
                  Last donate:
                </h4>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Bodypage;
