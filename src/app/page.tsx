import Bodypage from "@/components/campaign-home/Bodypage";
import HeaderPage from "@/components/campaign-home/HeaderPage";
import ImagePage from "@/components/campaign-home/ImagePage";

export default function Home() {
  return (
    <>

    <div className="w-[100%] h-[400px] bg-[#fef6f0]">
      <div className="pt-8 flex justify-center items-center ">
        <div className="w-[50%] flex  items-center flex-col">
          <HeaderPage />
        </div>
        <div className="w-[50%] flex justify-center flex-col">
          <ImagePage />
        </div>
      </div>
    </div>
    <div className="w-[100%] flex items-center justify-center ">
      <div className="w-[80%] h-100 ">
        <div className="flex items-center justify-center  flex-col pt-[8%] pb-10">
          <h1 className="text-[#6f3fac] font-gadget font-bold text-3xl pb-5 ">
            Make the word bertter through charity
          </h1>
          <span className="text-[#9aa4ac]">
            Meet some wortd - changing communties using Socha to raise
          </span>
          <span className="text-[#9aa4ac]">money and make a difference</span>
        </div>
        <div className="flex  flex-wrap ">
          <Bodypage />
        </div>
      </div>
    </div>


   
    </>
  );
}
