import Image from "next/image";

function ImagePage() {
    return ( <>
       <div className="relative">
            <Image
              src="/img/vungcao.png"
              className="rounded-lg"
              alt=""
              width={500}
              height={200}
            />
            <div className="absolute top-[35%] left-[-8%]">
              <Image
                src="/img/tuthien.jpg"
                className="rounded-lg"
                alt=""
                width={140}
                height={60}
              />
            </div>
          </div>
    
    </>  );
}

export default ImagePage;