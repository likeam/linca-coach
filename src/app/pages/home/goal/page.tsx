import ClickRed from "@/app/(components)/click-red";
import Image from "next/image";

const Goal = () => {
  return (
    <div className=" mx-2 md:mx-8 lg:mx-12 xl:px-48   mb-48">
      <div className=" grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-8 mt-4 lg:mt-8 px-2 lg:px-6">
        <div className=" col-span-1 ">
          <Image src="/ball.png" alt="ball" width={525} height={635} />
        </div>
        <div className=" col-span-1  relative">
          <Image
            src="/subtract.svg"
            alt="sub"
            width={23}
            height={23}
            className=" absolute right-0"
          />
          <div className="font-[500] md:font-[600] lg:font-bold font-[Hanson] text-[24px] md:text-[48px] lg:text-[52px]">
            Reach your body <span className=" text-[#F15C36]">Goals</span>
          </div>
          <div className="font-[300] lg:font-[400] font-[Poppins] text-[12px]  lg:text-[20px]">
            Personalized Training & Nutrition Plans Designed to Perfectly Align
            with Your Lifestyle, Fitness Goals, and Daily Routine for
            Sustainable Results.
          </div>
          <div className=" flex gap-8 mt-6">
            <ClickRed />
            <div className="font-[400] font-[Poppins] text-[16px] lg:text-[20px] mt-7 ">
              Certified Personal Train
            </div>
          </div>

          <div className=" flex gap-8 mt-6">
            <ClickRed />
            <div className="font-[400] font-[Poppins] text-[16px] lg:text-[20px] mt-7 ">
              Customized Workout & Diet Plans
            </div>
          </div>
          <div className=" flex gap-8 mt-6">
            <ClickRed />
            <div className="font-[400] font-[Poppins] text-[16px] lg:text-[20px] mt-7 ">
              100+ Client Transformations
            </div>
          </div>
          <div className=" flex gap-8 mt-6">
            <ClickRed />
            <div className="font-[400] font-[Poppins] text-[16px] lg:text-[20px] mt-7 ">
              Train Anytime, Anywhere
            </div>
          </div>

          <div className=" my-8">
            <button className=" px-4 py-2 border-2 border-white rounded-full flex ">
              <div className="font-[500] font-[Poppins] text-[16px] ">
                BOOK A FREE CONSULTANT
              </div>
              <Image src="/arrow-up.svg" alt="tick" width={25} height={25} />
            </button>
            <Image
              src="/subtractx.svg"
              alt="sub"
              width={23}
              height={23}
              className=" absolute left-0 bottom-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
