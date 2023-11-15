"use client";
import { Button } from "@/components/ui/button";
import { ChangeEvent, useState } from "react";
import axios from "axios";
interface Campaign {
  id: number;
  image: string;
  title: string;
  endTime: Date;
  max : number;
  description: string;
}

const CreateCampaign = () => {
  const [newImage, setNewImage] = useState<Campaign>({
    id: 0,
    max : 0,
    image: "",
    endTime: new Date(),
    title: "",
    description: "",
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
              image: event.target.result as string,
            });
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const addImage = () => {
    axios
      .post("http://localhost:8080/api/v1/campaign/create", newImage, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.error("Error from server:", error.response.data);
      });
      setNewImage( {
        id: 0,
        image: "",
        max : 0 ,
        endTime: new Date(),
        title: "",
        description: ""
      }
      )
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
                  {newImage.image === "" ? (
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
                      src={newImage.image}
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
                  value={newImage.title}
                  onChange={(e) =>
                    setNewImage({ ...newImage, title: e.target.value })
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
                  value={newImage.description}
                  onChange={(e) =>
                    setNewImage({ ...newImage, description: e.target.value })
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
                <input
                  className="text-right text-2xl text-gray-500 pb-1 font-bold"
                  value={newImage.max}
                  onChange={(e) =>
                    setNewImage(
                      { ...newImage, max: Number(e.target.value)} || 0
                    )
                  }
                />

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
                <input
                  type="date"
                  onChange={(e) =>
                    setNewImage({
                      ...newImage,
                      endTime: new Date(e.target.value),
                    })
                  }
                  className="text-right text-2xl text-gray-500 pb-1 font-bold"
                />
                <p className="text-sm text-right"></p>
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
