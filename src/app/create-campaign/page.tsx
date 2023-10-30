"use client";
import { ChangeEvent, useState } from "react";
import { userGlobalContext } from "../Context/Store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import Container from "@/components/ui/container";
const CreateCampaign = () => {
  const { data, setData } = userGlobalContext();
  const [newImage, setNewImage] = useState({
    id: 0,
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
    newImage.id++;
    setData([...data, newImage]);
    setNewImage({
      id: newImage.id,
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

    console.log(data)
  };

  return (
    <>
      <div className="w-[100%] flex flex-col items-center justify-center pt-[5%]">
        <div className="w-[30%]">
          <div className="w-[100%] flex items-center justify-center">
            <Label className="text-center text-[20px] pb-4 font-gadget font-[700]">Thêm Hình Ảnh Mới</Label>
          </div>
          <Container>
            <form>
              <Label htmlFor="src">Hình ảnh:</Label>
              <Input
                className="mb-4"
                type="file"
                id="src"
                accept="image/*"
                onChange={handleImageChange}
              />
              <Label htmlFor="title">Tiêu đề:</Label>
              <Input
                className="mb-4"
                type="text"
                id="title"
                value={newImage.title}
                onChange={(e) =>
                  setNewImage({ ...newImage, title: e.target.value })
                }
              />
              <Label htmlFor="startTime">Ngày bắt đầu:</Label>
              <Input
                className="mb-4"
                type="text"
                id="startTime"
                value={newImage.startTime}
                onChange={(e) =>
                  setNewImage({ ...newImage, startTime: e.target.value })
                }
              />
              <Label htmlFor="endTime">Ngày kết thúc:</Label>
              <Input
                className="mb-4"
                type="text"
                id="endTime"
                value={newImage.endTime}
                onChange={(e) =>
                  setNewImage({ ...newImage, endTime: e.target.value })
                }
              />
              <Label htmlFor="description">Mô tả:</Label>
              <Input
                className="mb-4"
                type="text"
                id="description"
                value={newImage.description}
                onChange={(e) =>
                  setNewImage({ ...newImage, description: e.target.value })
                }
              />
              <Label htmlFor="organization">Tổ chức:</Label>
              <Input
                className="mb-4"
                type="text"
                id="organization"
                value={newImage.organization}
                onChange={(e) =>
                  setNewImage({ ...newImage, organization: e.target.value })
                }
              />
              <Label htmlFor="funded">Funded:</Label>
              <Input
                className="mb-4"
                type="number"
                id="funded"
                value={newImage.funded.toString()}
                onChange={(e) =>
                  setNewImage({
                    ...newImage,
                    funded: parseInt(e.target.value, 10),
                  })
                }
              />

              <Label htmlFor="total">Total:</Label>
              <Input
                type="number"
                id="total"
                value={newImage.total}
                onChange={(e) =>
                  setNewImage({ ...newImage, total: Number(e.target.value) })
                }
              />
              <Button className="mt-5" type="button" onClick={addImage}>
                Thêm
              </Button>
            </form>
          </Container>
        </div>
      </div>
    </>
  );
};

export default CreateCampaign;
