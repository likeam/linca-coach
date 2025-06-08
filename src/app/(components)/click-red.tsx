import Image from "next/image";

const ClickRed = () => {
  return (
    <div className=" flex  flex-col">
      <Image
        src="/tick.svg"
        alt="tick"
        width={40}
        height={40}
        className=" relative "
      />
      <Image
        src="/click.svg"
        alt="tick"
        width={40}
        height={40}
        className=" -mt-7  "
      />
    </div>
  );
};

export default ClickRed;
