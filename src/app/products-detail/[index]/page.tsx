"use client";

import { DataType, userGlobalContext } from "@/app/context/Store";
import { useEffect, useState, FC } from "react";
interface pageProps {
  params: { index: number };
}

const PAGE: FC<pageProps> = ({ params }) => {
  const { data } = userGlobalContext();
  const [dataone, setdataone] = useState<DataType>();

  useEffect(() => {
    const searchData = data.find((item) => item.id == params.index);
    setdataone(searchData);
  }, [params.index]);

  return (
    <h1>trang detail</h1> 
  );
};

export default PAGE;
