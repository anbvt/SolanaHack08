"use client";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { userGlobalContext } from "../context/Store";
import { Button } from "@/components/ui/button";

const CreateCampaign = () => {

  const { data, setData, nextId, setNextId } = userGlobalContext();

  const [newImage, setNewImage] = useState({
    id: nextId,
    src: "",
    description: "",
    organization: "",
    funded: 0,
    total: 0,
    lastDonation: "",
  });

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
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
      <div className="w-[100%] h-[1000px] flex flex-col items-center  bg-[#fef6f0]">
        <div className="w-[80%]  h-[70%] pt-9">
          <form className="h-[100%] flex justify-center">
            <div className="flex justify-center  items-center w-[50%] h-[60%] bg-[#fcf0ea]  rounded">
              <input
                className="w-[40%]"
                type="file"
                id="src"
                accept="image/*"
                onChange={handleImageChange}
              />
              <></>
            </div>
            <div className="w-[50%] flex flex-col items-center  pt-8    h-[60%] ">
              <div className="w-[50%] ">
                <input
                  placeholder={`Fill the name of your campaign`}
                  className="border w-[120%] rounded-md p-2 text-[30px]  outline-none border-none font-gadget font-[600] bg-transparent"
                  type="text"
                  id="description"
                  value={newImage.description}
                  onChange={(e) =>
                    setNewImage({ ...newImage, description: e.target.value })
                  }
                />
              </div>
              <div >
                <input
                  className="mb-4"
                  type="text"
                  id="organization"
                  value={newImage.organization}
                  onChange={(e) =>
                    setNewImage({ ...newImage, organization: e.target.value })
                  }
                />
              </div>
            </div>

            <Button className="mt-5" type="button" onClick={addImage}>
              Thêm
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateCampaign;
