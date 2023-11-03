"use client";
import { Button } from "@/components/ui/button";
import { ChangeEvent, useState } from "react";

import { userGlobalContext } from "../context/Store";

const CreateCampaign = () => {
  // initTE();
  const { data, setData, nextId, setNextId } = userGlobalContext();

  const [newImage, setNewImage] = useState({
    id: nextId,
    title: "",
    startTime: "",
    endTime: "",
    src: "",
    description: "",
    organization: "",
    funded: 0,
    total: 0,
    lastDonation: "",
  });

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    if (e.target && e.target.files) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target) {
            setNewImage({
              ...newImage,
              src: event.target.result as string,
            });
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const addImage = () => {
    setData([...data, newImage]);
    setNextId(nextId + 1);
    setNewImage({
      id: nextId + 1,
      title: "",
      endTime: "",
      startTime: "",
      src: "",
      description: "",
      organization: "",
      funded: 0,
      total: 0,
      lastDonation: "",
    });
  };

  return (
    <>
      <div className="w-[100%] h-[1000px] flex flex-col items-center  bg-[#fef6f0] select-none">
        <div className="w-[80%]  h-[70%] pt-9">
          {/* Image with description */}
          <form className="h-[80%] flex justify-center">
            <div className="flex justify-center  items-center w-[50%] h-[100%] bg-[#fcf0ea]  rounded">
              <label className="flex flex-col rounded-lg border-4 border-none w-full h-[100%] group text-center">
                <div className="h-full w-full text-center flex flex-col items-center justify-center">
                  {/* <div className="flex flex-auto max-h-48 w-2/5 mx-auto justify-center">
                    <span></span>
                    
                  </div> */}
                  {newImage.src === "" ? (
                    <>
                      <img
                        className="h-36 object-center"
                        src="/img/add-image.png"
                        alt=""
                      />{" "}
                      <p className=" pointer-events-none text-gray-500 first-letter:">
                        <span className="text-sm">
                          Upload your campaign picture
                        </span>
                      </p>
                    </>
                  ) : (
                    <img
                      className="h-[33rem] w-[36rem] object-center rounded"
                      src={newImage.src}
                      alt=""
                    />
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  id="src"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
            <div className="w-[50%] flex flex-col pt-8 h-[60%] ">
              <div className=" relative w-full pb-4" data-te-input-wrapper-init>
                <input
                  placeholder={`Fill the name of your campaign`}
                  className="border w-full rounded-md p-2 text-[30px]  outline-none border-none font-gadget font-[600] bg-transparent "
                  type="text"
                  id="description"
                  data-te-input-showcounter="true"
                  value={newImage.description}
                  onChange={(e) =>
                    setNewImage({ ...newImage, description: e.target.value })
                  }
                />
                <div
                  className="absolute w-full text-sm text-neutral-500 peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary"
                  data-te-input-helper-ref
                ></div>
              </div>
              <div>
                <textarea
                  id="organization"
                  rows={20}
                  cols={100}
                  value={newImage.organization}
                  onChange={(e) =>
                    setNewImage({ ...newImage, organization: e.target.value })
                  }
                  className="block p-2.5  w-full text-sm rounded-lg border border-none bg-transparent font-gadget font-[600]"
                  placeholder="Give an overview of your campaign's mission and vision here."
                ></textarea>
              </div>
            </div>
          </form>
          {/* Fund and time */}
          <div className="flex justify-center items-center h-[30%] select-none">
            <div className="bg-white rounded-xl shadow-md overflow-hidden w-full m-3">
              <div className="p-8">
                <div className=" tracking-wide text-sm text-gray-600 font-semibold pb-2">
                  Raise amount
                </div>
                <p className="text-right text-2xl text-gray-500 pb-1 font-bold">
                  1000 USDC
                </p>
                <p className="text-right text-1xl text-gray-400 pb-1 font-bold">
                  Or
                  <a href="" className="text-orange-300 underline">
                    {" "}
                    choose Unlimited
                  </a>
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden w-full m-3">
              <div className="p-8">
                <div className=" tracking-wide text-sm  text-gray-600 font-semibold pb-2">
                  End time
                </div>
                <h1 className="text-right text-2xl text-gray-500 pb-1 font-bold">
                  30/10/2023
                </h1>
                {/* <p className="text-sm text-right"></p> */}
                <p className="text-right text-1xl text-gray-400 pb-1 font-bold">
                  Or
                  <a href="" className="text-orange-300 underline">
                    {" "}
                    choose Perpetual
                  </a>
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden w-1/2 m-3">
              <div className="p-10">
                <img
                  className="justify-center m-auto w-10 h-10 rounded-full"
                  src="/img/1.png"
                  alt=""
                />
                <p className="text-center pt-4">Trieu Bao</p>
              </div>
            </div>
          </div>
          {/* Button */}
          <div className="flex items-center justify-center">
            <Button
              className="mt-5 bg-purple-800 hover:bg-purple-500"
              type="button"
              onClick={addImage}
            >
              Publish Your Campaign
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCampaign;
