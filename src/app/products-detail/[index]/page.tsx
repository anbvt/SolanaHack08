"use client";
import HomePage from "@/app/transaction/page";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
const Detail = () => {
  const [imageList, setImageList] = useState<Campaign>();
  const [listDonate, setListDonate] = useState<Data[]>([]);
  const id = Number(window.location.pathname.split("/").pop() as string);
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    axios
      .get("http://localhost:8080/api/v1/campaign/find", {
        params: { id: id },
        cancelToken: cancelToken.token,
      })
      .then((resp) => {
        setImageList(resp.data);
      })
      .catch((e) => {
        console.log(e);
      });
    return () => {
      cancelToken.cancel;
    };
  }, [id]);

  useEffect(() => {
    const fetchDataa = async () => {
      try {
        const result = await axios.post(
          "http://localhost:8080/api/v1/donate/campaign-get-all",
          {
            id: id,
          }
        );
        setListDonate(result.data);
        console.log(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataa();
  }, [id]);
  return (
    <>
      <section className="max-w-7xl px-6 mx-auto">
        <section className="flex m-5">
          <img
            src={imageList?.image}
            className="max-w-lg w-auto max-h-screen h-auto bg-cover rounded-xl"
            alt="Image Campaign"
          />
          <span className="py-5 px-12">
            <h2 className="pb-5 md:text-3xl text-xl font-bold">
              {imageList?.title}
            </h2>
            <p className="text-md leading-loose text-gray-600 dark:text-gray-300">
              {imageList?.description}
            </p>
          </span>
        </section>

        <section className="flex justify-center items-center">
          <div className="bg-white rounded-xl shadow-md overflow-hidden w-full m-5">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold pb-2">
                Raise amount
              </div>
              <p className="text-right text-3xl text-black pb-5 font-bold">
                {imageList?.total}/{imageList?.max}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{
                    width: `${
                      ((imageList?.total || 0) / (imageList?.max || 1)) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden w-full m-5">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold pb-2">
                End time
              </div>
              <h1 className="text-right text-3xl text-black pb-2 font-bold">
                {imageList?.endTime}
              </h1>
              <p className="text-sm text-right">
                Start time: {imageList?.startTime}
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden w-1/2 m-5">
            <div className="p-10">
              <img
                className="justify-center m-auto w-10 h-10 rounded-full"
                src="/img/1.png"
                alt=""
              />
              <p className="text-center pt-4">{imageList?.description}</p>
            </div>
          </div>
        </section>
        <section className="flex p-5">
          <div className="antialiased mx-auto w-full rounded-xl shadow-md overflow-hidden p-8">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Comments
            </h3>
            <div className="space-y-4">
              <div className="flex">
                <div className="flex-shrink-0 mr-3">
                  <img
                    className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                    src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                  <strong>Sarah</strong>{" "}
                  <span className="text-xs text-gray-400">3:34 PM</span>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="flex -space-x-2 mr-2">
                      <img
                        className="rounded-full w-6 h-6 border border-white"
                        src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                        alt=""
                      />
                      <img
                        className="rounded-full w-6 h-6 border border-white"
                        src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                        alt=""
                      />
                    </div>
                    <div className="text-sm text-gray-500 font-semibold">
                      5 Replies
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-3">
                  <img
                    className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                    src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                  <strong>Sarah</strong>{" "}
                  <span className="text-xs text-gray-400">3:34 PM</span>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                  <h4 className="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs">
                    Replies
                  </h4>
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="flex-shrink-0 mr-3">
                        <img
                          className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                          src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                        <strong>Sarah</strong>{" "}
                        <span className="text-xs text-gray-400">3:34 PM</span>
                        <p className="text-xs sm:text-sm">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 mr-3">
                        <img
                          className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                          src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                        <strong>Sarah</strong>{" "}
                        <span className="text-xs text-gray-400">3:34 PM</span>
                        <p className="text-xs sm:text-sm">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="font-manrope flex h-screen w-2/3 items-start justify-center">
            <HomePage id={id} />
          </div>
        </section>
      </section>
      <div className="font-manrope w-200">
        <div className="text-center mb-3 text-green-600">
          <h1>History Transaction</h1>
        </div>
        {listDonate.map((item, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md mb-4">
            <div className="flex justify-between">
              <div>
                <div className="text-purple-500">
                  Donated to :{" "}
                  <span className="text-blue-600">{item.publicKey}</span>
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
    </>
  );
};

export default Detail;
