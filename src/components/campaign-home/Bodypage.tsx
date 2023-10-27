"use client";
import { GlobalContext } from "@/app/context/Store";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { userGlobalContext } from "@/app/context/Store";
import { Label } from "@radix-ui/react-dropdown-menu";
function Bodypage() {
  const { data } = userGlobalContext();
  const [dataList, setDataList] = useState(data);
  useEffect(() => {
    setDataList(data);
    console.log(data);
  }, [data]);
  return (
    <>
      {dataList.map((image, index) => (
        <div className="w-[33%] pl-[12px] pr-[12px] h-[600px] pb-5">
          <div
            key={index}
            className="bg-red-100 flex justify-center items-center flex-col h-[100%] rounded-lg"
          >
            <div className="w-[85%] flex items-start justify-start flex-col h-[500px]">
              <div className="flex items-center justify-center flex-col w-[100%] ">
                <Link href={`/products-detail/${image.id}`}>
                  <Image
                    src={image.src}
                    className="rounded-lg"
                    alt={""}
                    width={210}
                    height={10}
                  />
                </Link>

                <div className="">
                  <Label className="pt-5 text-[#8265a7] text-1xl font-gadget font-[700] pb-2">
                    {image.description}
                  </Label>
                  <Label className="text-[#9aa4ac] pb-3"></Label>
                  <Label className="pt-5 text-black text-1xl font-gadget font-[700] pb-2">
                    ${image.funded} funded of ${image.total}
                  </Label>
                  <Label className="text-[#9aa4ac]">{image.lastDonation}</Label>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Bodypage;
