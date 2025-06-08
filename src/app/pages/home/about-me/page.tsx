import ClickWhite from "@/app/(components)/click-white";
import Line from "@/app/(components)/line";
import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="m-24 bg-[#F15C36] rounded-lg p-8 overflow-hidden ">
      <div className=" grid grid-cols-2 border border-black border-dashed   rounded-lg ">
        <div className=" col-span-1 m-24">
          <div className="">
            <div className="font-bold font-[Hanson] text-[44px]">About Me</div>
            <div className="font-[500] font-[Poppins] text-[28px]">
              Hi, I’m Lenka. Your Fitness Coach! 👋
            </div>
            <div className="font-[400] font-[Poppins] text-[18px]">
              With over 10 years of experience, I specialize in helping clients
              achieve their goals through personalized fitness plans.
            </div>
            <div className="">
              <div className=" flex gap-8 mt-6">
                <ClickWhite />
                <div className="font-[400] font-[Poppins] text-[20px] mt-7 ">
                  European Certified Personal Trainer / REPs UAE
                </div>
              </div>
              <div className=" flex gap-8 mt-6">
                <ClickWhite />
                <div className="font-[400] font-[Poppins] text-[20px] mt-7 ">
                  Powerlifter️ - 52kg IPF
                </div>
              </div>
              <div className=" flex gap-8 mt-6">
                <ClickWhite />
                <div className="font-[400] font-[Poppins] text-[20px] mt-7 ">
                  Strength Coach
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-1">
          <Image src="/about1.png" alt="ball" width={515} height={631} />
        </div>
        <div className=" inline-block rotate-[-16deg] origin-bottom-right">
          <div className="inline-block rotate-[-12deg] origin-center -mt-7  ">
            <div className=" flex gap-24  text-white items-center justify-center bg-[#333946]">
              <Line />
            </div>
          </div>
          <div className="inline-block rotate-[2deg] origin-center -mt-7">
            <div className=" flex gap-24 bg-white text-black items-center justify-center">
              <Line />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
