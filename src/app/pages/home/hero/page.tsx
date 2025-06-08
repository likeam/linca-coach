import Line from "@/app/(components)/line";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="  w-full   h-screen  ">
      <div className=" grid grid-cols-1 lg:grid-cols-3 items-center gap-6 mt-8 mx-2 lg:mx-24">
        <div className=" col-span-2">
          <div className=" w-1/3 py-2 text-[40px]  md:text-[60px] rounded-full  font-bold lg:text-[90px] font-[hanson] ">
            UNLEASH YOUR INNER STRENGTH
          </div>
        </div>
        <div className=" col-span-1  ">
          <Image src="/hero1.png" alt="hero" width={400} height={550} />
        </div>
      </div>
      <div className=" hidden lg:inline-block rotate-[-8deg] origin-center  mt-7">
        <div className=" flex gap-24  text-white items-center justify-center bg-[#333946]">
          <Line />
        </div>
      </div>
      <div className="hidden lg:inline-block  rotate-[8deg] origin-center mt-7  ">
        <div className=" flex gap-24 bg-white text-black items-center justify-center">
          <Line />
        </div>
      </div>
    </div>
  );
};

export default Hero;
