"use client";

import { userGlobalContext } from "@/app/Context/Store";
import { useEffect, useState } from "react";

const CreateCampaignDetail = () => {
  // const idString = window.location.pathname.split("/").pop();
  // const { data } = userGlobalContext();
  // const [imageList, setImageList] = useState([]);
  // useEffect(() => {
  //   if (idString !== undefined) {
  //     const id = parseInt(idString, 10);
  //     const selectedImage = data.find(image => image.id = id);
  //     console.log(id)
  //   }

  // }, [data])
  const data = {
    id: 'CP1',
    title: 'Chiến dịch gọi vốn khởi nghiệp',
    subTitle: 'Sinh viên nghèo vượt khó kêu gọi vốn',
    info: { id: 1, username: 'Bùi Vũ Thiên Ân' },
    link: "ZFpeMmN392w",
    description: 'Welcome to Meraki UI! You’re already on your way to creating beautiful visual products. We’ve created a quick intro video to get you up and running as soon as possible. If you have any questions'
  }

  return (
    <>
      <section className="py-20 relative z-50">
        <div className="container">
          <div className="mx-auto max-w-2xl sm:text-center pb-10">
            <span className="font-medium text-gray-400 tracking-widest">Campaign / {data.info.username}</span>
            <h2 className="md:text-5xl text-3xl font-medium tracking-tight mt-7">{data.title}</h2>
            <div className="w-10 mx-auto mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 h-[2px]"></div>
            <p className="mt-6 text-xl/8 text-gray-600 dark:text-gray-400">{data.subTitle}</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-white rounded-3xl border shadow-xl p-8 w-3/6">
            <div className="flex justify-between items-center mb-4">
              <button className="inline-flex items-center justify-center w-14 h-14 text-blue-100 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full">
                <img src="https://i.pinimg.com/564x/15/d1/19/15d119914857b2bf333b5a12992ea8d1.jpg" alt="" />
              </button>
              <div>
                <span className="font-bold text-green-500">+ $726 (15%)</span><br />
                <span className="font-medium text-xs text-gray-500 flex justify-end">0.382 coin</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-gray-400">SOL</h3>
              <h1 className="font-semibold text-xl text-gray-700">$ 1,936.00</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-3xl px-6 mx-auto bg-white dark:bg-gray-900">
        <h2 className="mt-6 text-gray-700 dark:text-gray-200">{data.title},</h2>
        <section>
          <p className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
            {data.description}
          </p>
          <iframe className="w-full h-64 my-10 rounded-lg md:h-80" src={`https://www.youtube.com/embed/${data.link}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </section>
      </section>
    </>
  );
};

export default CreateCampaignDetail;
