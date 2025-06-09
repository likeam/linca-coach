import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const links = [
    { url: "/", title: "Home" },
    { url: "../pages/about", title: "About" },
    { url: "../pages/services", title: "Services" },
    { url: "../pages/contact", title: "Contact" },
  ];
  return (
    <div className=" bg-[#191919] py-[106px] px-8 md:px-[194px]">
      <div className="">
        <div className="">
          <Image src="/Logo.svg" alt="logo" width={208} height={34} />
        </div>
        <div className=" w-full grid grid-cols-2 md:grid-cols-6 mt-12 custom-grid-cols gap-36">
          <div className=" col-span-2 ">
            <div className=" flex gap-4">
              <Image src="/facebook.svg" alt="logo" width={50} height={50} />
              <Image src="/instagram.svg" alt="logo" width={50} height={50} />
              <Image src="/tiktok.svg" alt="logo" width={50} height={50} />
            </div>
            <div className=" font-semibold font-[Poppins] text-[21px] mt-36">
              Subscribe to our newsletter!
            </div>
            <div className=" mt-8">
              <div className=" flex justify-between">
                <label className="">Enter Email</label>
                <Image src="/arrow.svg" alt="arrow" width={17} height={17} />
              </div>

              <input
                type="text"
                className=" w-full border-b-[1px] border-white"
              />
            </div>
          </div>
          <div className="col-span-1  ">
            <div className="">
              <div className=" font-bold font-[Poppins] text-[16px] ">
                Quick links
              </div>
              <div className=" flex flex-col gap-8 mt-12">
                {links.map((link) => (
                  <Link
                    href={link.url}
                    className=" font-[Poppins] text-[16px] text-[400]"
                    key={link.title}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="">
              <div className=" font-bold font-[Poppins] text-[16px] ">News</div>
              <div className=" font-[Poppins] text-[16px] text-[400] mt-8">
                Fitness Blog
              </div>
              <div className=" font-[Poppins] text-[16px] text-[400] mt-8">
                FAQ
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="">
              <div className=" font-bold font-[Poppins] text-[16px] ">News</div>
              <div className=" font-[Poppins] text-[16px] text-[400] mt-8">
                Book a Free Consultation
              </div>
              <div className=" font-[Poppins] text-[16px] text-[400] mt-8">
                Refer a Friend & Earn Reward
              </div>
              <div className=" font-[Poppins] text-[16px] text-[400] mt-8">
                Membership & Pricing
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-36">
          <div className=" flex justify-between">
            <p className="">© 2025 Abdul Rehman. All Rights Reserved. </p>
            <div className=" flex justify-center items-center gap-2 md:gap-12">
              <div className=" font-[Poppins] text-[12px] lg:text-[16px] text-[400] ">
                Privacy Policy
              </div>
              <div className=" font-[Poppins] text-[12px] lg:text-[16px] text-[400] ">
                Legal Notice
              </div>
              <div className=" font-[Poppins] text-[12px] lg:text-[16px] text-[400] ">
                Cookie Policy
              </div>
              <div className=" font-[Poppins] text-[12px] lg:text-[16px] text-[400] ">
                Terms & Conditions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
