import Image from "next/image";

const VideoCard = () => {
  return (
    <div className=" flex flex-col gap-0">
      <div className=" bg-[#1A1A1A] m-4 lg:m-24 rounded-lg p-2 lg:p-6 z-10">
        <div className=" grid grid-cols-1 md:grid-cols-3 ">
          <div className=" col-span-1">
            <video
              width="460"
              height="768"
              controls
              autoPlay
              className=" rounded-lg"
            >
              <source src="/exe.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className=" col-span-2">
            <div className=" flex flex-col m-2 lg:m-8 gap-4">
              <div className="">
                <Image src="/Logo.svg" alt="logo" width={207} height={34} />
              </div>
              <div className="font-[Poppins] text-[16px] lg:text-[20px] text-[400] mt-4">
                “Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.”
              </div>
              <div className=" border-b bordr-1 border-[#FFFFFF] mt-4 px-4" />
              <div className="font-[Poppins] text-[16px] lg:text-[20px] text-[600] mt-24 ">
                Wanda <br />{" "}
                <span className=" text-[400]"> School Teacher</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  justify-center -mt-[100px]  ">
        <div className=" hidden lg:block w-[800px]  xl:w-[1100px] h-[64px] bg-[#F15C36]  " />
      </div>
      <div className=" mx-4 lg:mx-24 rounded-lg border border-dashed border-[#F15C36] p-2 lg:p-10 z-10 mt-20 lg:mt-0  ">
        <div className="font-[Poppins] text-[24px] lg:text-[36px] text-[700]">
          If you’re ready to start, get in touch with us!👇
        </div>
        <div className=" border-b bordr-[1px] border-[#FFFFFF] mt-20 px-8" />
        <div className="font-[Poppins] text-[16px] lg:text-[20px] text-[600] mt-20">
          Hi, 👋 what’s your name & Email?
        </div>
        <div className="flex flex-col md:flex-row justify-evenly gap-8 mt-12">
          <input
            type="text"
            className=" border border-red-100 rounded-lg py-2 px-12"
            placeholder="First Name"
          />
          <input
            type="text"
            className=" border border-red-100 rounded-lg py-2 px-12"
            placeholder="Last Name"
          />
          <input
            type="text"
            className=" border border-red-100 rounded-lg py-2 px-12"
            placeholder="Email"
          />
        </div>
        <div className=" border-b bordr-[1px] border-[#FFFFFF] mt-20 px-8" />
        <div className=" flex justify-end pt-20 px-8 lg:px-16">
          <button className="bg-[#F15C36] rounded-full py-2 px-8">Next</button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
