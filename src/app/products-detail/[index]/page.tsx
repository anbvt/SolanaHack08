"use client";

import { userGlobalContext } from "@/app/Context/Store";
import { useEffect, useState } from "react";

const CreateCampaignDetail = () => {
  const idString = window.location.pathname.split("/").pop();

  const { data } = userGlobalContext();
  const [imageList, setImageList] = useState([]);
  useEffect(() =>{
    if (idString !== undefined) {
        const id = parseInt(idString, 10); 
        
        const selectedImage = data.find(image => image.id = id);
        console.log(id)
      } 
   
  },[data])

  return (
    <div>
      <h1>Chi tiết hình ảnh có ID:</h1>
    </div>
  );
};

export default CreateCampaignDetail;
