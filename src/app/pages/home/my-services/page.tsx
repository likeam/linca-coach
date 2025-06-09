import Image from "next/image";

const MyServices = () => {
  return (
    <div className=" m-4 lg:m-4 xl:m-36 ">
      <div className=" grid grid-cols-3">
        <div className=" col-span-1 font-[Hanson] text-[24px] lg:text-[52px] text-[700]">
          My <span className=" text-[#F15C36]">Services</span>{" "}
        </div>
        <div className=" col-span-2 hidden lg:block  justify-center lg:pl-28 xl:pl-40 ]">
          <Image
            src="/linearrow.png"
            alt="arrowdwon"
            height={160}
            width={550}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row  xl:gap-8 items-center justify-center mt-12">
        <div className="">
          <div className=" flex items-center gap-4">
            <div className="">
              <Image src="/mealplan.svg" alt="meal" width={120} height={128} />
              <div className=" w-[136px] h-[136px] bg-[#333946] rounded-full -mt-[108px]" />
            </div>
            <div className="font-[Poppins] text-[24px] lg:text-[32px] text-[400] capitalize">
              Custom fitness & meal plans
            </div>
          </div>
          <div className=" flex items-center gap-4">
            <div className="">
              <Image
                src="/progresstracking.svg"
                alt="meal"
                width={86}
                height={136}
              />
              <div className=" w-[136px] h-[136px] bg-[#333946] rounded-full -mt-[108px]" />
            </div>
            <div className="font-[Poppins] text-[24px] lg:text-[32px] text-[400] capitalize">
              Personalized progress tracking
            </div>
          </div>
          <div className=" flex items-center gap-4">
            <div className="">
              <Image
                src="/weeklyworkout.svg"
                alt="meal"
                width={123}
                height={130}
              />
              <div className=" w-[136px] h-[136px] bg-[#333946] rounded-full -mt-[108px]" />
            </div>
            <div className="font-[Poppins] text-[24px] lg:text-[32px] text-[400] capitalize">
              Weekly workout plans
            </div>
          </div>
        </div>

        <div className=" border-l-[1px] border-r-[1px]  border-[#FFFFFF] hidden lg:block lg:p-8 xl:p-12">
          <div className=" flex flex-col gap-32">
            <Image
              src="/arrowcolordown.svg"
              alt="aorrowdown"
              width={23}
              height={12}
            />
            <Image
              src="/arrowcolordown.svg"
              alt="aorrowdown"
              width={23}
              height={12}
            />
            <Image
              src="/arrowcolordown.svg"
              alt="aorrowdown"
              width={23}
              height={12}
            />
          </div>
        </div>
        <div className=" ">
          <div className=" flex items-center gap-4">
            <div className="">
              <Image
                src="/homeexercise.svg"
                alt="meal"
                width={156}
                height={109}
              />
              <div className=" w-[136px] h-[136px] bg-[#333946] rounded-full -mt-[108px] " />
            </div>
            <div className="font-[Poppins] text-[24px] lg:text-[32px] text-[400] capitalize">
              Home-based exercises
            </div>
          </div>
          <div className=" flex items-center gap-4">
            <div className="">
              <Image
                src="/mealweight.svg"
                alt="meal"
                width={109}
                height={116}
              />
              <div className=" w-[136px] h-[136px] bg-[#333946] rounded-full -mt-[108px]" />
            </div>
            <div className="font-[Poppins] text-[24px] lg:text-[32px] text-[400] capitalize">
              Meal plans for weight loss, muscle gain
            </div>
          </div>
          <div className=" flex items-center gap-4">
            <div className="">
              <Image
                src="/healthyeating.svg"
                alt="meal"
                width={108}
                height={144}
              />
              <div className=" w-[136px] h-[136px] bg-[#333946] rounded-full -mt-[108px]" />
            </div>
            <div className="font-[Poppins] text-[24px] lg:text-[32px] text-[400] capitalize">
              Easy-to-follow healthy eating
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center mt-24">
        <div className="border border-dashed border-[#F15C36] bg-transparent rounded-full py-2 px-4 font-[Poppins] text-[20px]  text-[400]">
          Learn More
        </div>
      </div>
    </div>
  );
};

export default MyServices;
