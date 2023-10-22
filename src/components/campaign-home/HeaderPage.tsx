export default function HeaderPage() {
  return (
    <>
      <div>
        {" "}
        <h1 className="text-[#ff0000c5] text-4xl font-gadget font-bold leading-normal">
          Transparencty <br />
          Authenticity
        </h1>{" "}
      </div>
      <div className="text-[#261839] pr-[5%] text-3xl pt-[0.5%] font-gadget font-bold">
        <span>for Community</span>
      </div>
      <div className="w-[60%] pt-3 pl-[13%] text-xs font-gadget font-[300]">
        <p>
          web3 playform for chartable fundraising using blockchanin to
          Authenticity anh transaction
        </p>
      </div>
      <div className="bg-[#6f3fac] flex items-center justify-center w-[14%] cursor-pointer h-[35px] mr-[20%] mt-5  rounded-lg text-xs text-white">
        <button>
          {" "}
          <span>Raise a fund</span>
        </button>
      </div>
    </>
  );
}
