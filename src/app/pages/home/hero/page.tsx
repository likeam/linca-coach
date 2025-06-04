import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="  w-full   h-screen  ">
      <div className=" grid grid-cols-1 lg:grid-cols-3 items-center gap-6 mt-8 mx-24">
        <div className=" col-span-2">
          <div className=" w-1/3 py-2  md: rounded-full  font-bold text-[90px] font-[hanson]">
            UNLEASH YOUR INNER STRENGTH💪
          </div>
        </div>
        <div className=" col-span-1 ">
          <Image src="/hero1.png" alt="hero" width={400} height={550} />
        </div>
      </div>
      <div className="inline-block rotate-[-8deg] origin-center -mt-7  ">
        <div className=" flex gap-24  text-white items-center justify-center bg-[#333946]">
          <div className="font-[400] font-[Poppins] text-[16px]">
            DEDICATION
          </div>
          <div className=" h-[7px] w-[7px] bg-[#F15C36] rounded-full" />
          <div className="font-[400] font-[Poppins] text-[16px] py-3">
            CONSISTENCY
          </div>
          <div className=" h-[7px] w-[7px] bg-[#F15C36] rounded-full" />
          <div className="font-[400] font-[Poppins] text-[16px]">TRAINING</div>
          <div className=" h-[7px] w-[7px] bg-[#F15C36] rounded-full" />
          <div className="font-[400] font-[Poppins] text-[16px]">
            DEDICATION
          </div>
          <div className=" h-[7px] w-[7px] bg-[#F15C36] rounded-full" />
          <div className="font-[400] font-[Poppins] text-[16px] py-3">
            CONSISTENCY
          </div>
          <div className=" h-[7px] w-[7px] bg-[#F15C36] rounded-full" />
          <div className="font-[400] font-[Poppins] text-[16px]">TRAINING</div>
          <div className=" h-[7px] w-[7px] bg-[#F15C36] rounded-full" />
          <div className="font-[400] font-[Poppins] text-[16px] py-3">
            CONSISTENCY
          </div>
          <div className=" h-[7px] w-[7px] bg-[#F15C36] rounded-full" />
          <div className="font-[400] font-[Poppins] text-[16px]">TRAINING</div>
          <div className=" h-[7px] w-[7px] bg-[#F15C36] rounded-full" />
        </div>
      </div>
      <div className="inline-block rotate-[8deg] origin-center -mt-7">
        <div className=" flex gap-24 bg-white text-black items-center justify-center">
          <div className="font-[400] font-[Poppins] text-[16px]">
            DEDICATION
          </div>
          <div className=" h-[7px] w-[7px] bg-[#F15C36] rounded-full" />
          <div className="font-[400] font-[Poppins] text-[16px] py-3">
            CONSISTENCY
          </div>
          <div className=" h-[7px] w-[7px] bg-[#F15C36] rounded-full" />
          <div className="font-[400] font-[Poppins] text-[16px]">TRAINING</div>
          <div className=" h-[7px] w-[7px] bg-[#F15C36] rounded-full" />
          <div className="font-[400] font-[Poppins] text-[16px]">
            DEDICATION
          </div>
          <div className=" h-[7px] w-[7px] bg-[#F15C36] rounded-full" />
          <div className="font-[400] font-[Poppins] text-[16px] py-3">
            CONSISTENCY
          </div>
          <div className=" h-[7px] w-[7px] bg-[#F15C36] rounded-full" />
          <div className="font-[400] font-[Poppins] text-[16px]">TRAINING</div>
          <div className=" h-[7px] w-[7px] bg-[#F15C36] rounded-full" />
          <div className="font-[400] font-[Poppins] text-[16px] py-3">
            CONSISTENCY
          </div>
          <div className=" h-[7px] w-[7px] bg-[#F15C36] rounded-full" />
          <div className="font-[400] font-[Poppins] text-[16px]">TRAINING</div>
          <div className=" h-[7px] w-[7px] bg-[#F15C36] rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
