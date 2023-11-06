"use client";
import { userGlobalContext } from "@/app/context/Store";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Bodypage() {
  const { data } = userGlobalContext();

  const [dataList, setDataList] = useState(data);
  useEffect(() => {
    // setDataList(data);
    console.log(data);
  }, [data]);
  return (
    <>
      {dataList.map((image, index) => (
        // <div className="w-[33%] pl-[12px] pr-[12px] h-[600px] pb-5 ">
        //   <div
        //     key={index}
        //     className="bg-red-100 flex justify-center items-center flex-col h-[100%] rounded-lg"
        //   >
        //     <div className="w-[85%] flex items-start justify-start flex-col h-[500px]">
        //       <div className="flex items-center justify-center flex-col w-[100%] ">
        //         <Link href={`/products-detail/${image.id}`}>
        //           <Image
        //             src={image.src}
        //             className="rounded-lg"
        //             alt={""}
        //             width={210}
        //             height={10}
        //           />
        //         </Link>

        //         <div className="">
        //           <Label className="pt-5 text-[#8265a7] text-1xl font-gadget font-[700] pb-2">
        //             {image.title}
        //           </Label>
        //           <Label className="text-[#9aa4ac] pb-3"></Label>
        //           <Label className="pt-5 text-black text-1xl font-gadget font-[700] pb-2">
        //             ${image.funded} funded of ${image.total}
        //           </Label>
        //           <Label className="text-[#9aa4ac]">{image.lastDonation}</Label>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        // eslint-disable-next-line react/jsx-key
        <div className="relative m-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
          <div key={index}>
            <Link className="relative flex h-60 overflow-hidden rounded-xl"href={`/products-detail/${image.id}`}>
              <Image className="object-cover w-full" 
                    src={image.src} 
                    alt={""}
                    width={210}
                    height={10}
                />
            </Link>
            <div className="mt-4 px-5 pb-5">
              <Link href="#">
                <h5 className="text-xl font-bold text-ellipsis overflow-hidden whitespace-nowrap  tracking-tight text-slate-900">{image.title}</h5>
              </Link>
              <Link href="#">
                <h4 className="text-base font-bold  tracking-tight text-gray-300">norcirpac</h4>
              </Link>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <div className="w-full bg-gray-200 rounded-full h-2.5 bg-white">
                    <div className="bg-green-400 h-2.5 rounded-full"  ></div>
                </div>
              </div>
              <Link href="#">
                <h5 className="text-lg font-bold text-ellipsis overflow-hidden whitespace-nowrap  tracking-tight text-slate-900"> ${image.funded} funded of ${image.total}</h5>
              </Link>
              <Link href="#">
                <h4 className="text-base font-bold  tracking-tight text-gray-300">Last donate:{image.lastDonation}</h4>
              </Link>
            </div>
          </div>
      </div>
      
      ))}
    </>
  );
}

export default Bodypage;
