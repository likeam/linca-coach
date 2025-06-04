import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = [
    { url: "/", title: "Home" },
    { url: "../pages/about", title: "About" },
    { url: "../pages/services", title: "Services" },
    { url: "../pages/contact", title: "Contact" },
  ];
  return (
    <div className=" h-full flex items-center justify-between   border-b-[1px] border-white">
      <div className="">
        <Image src="/Logo.svg" alt="logo" width={208} height={34} />
      </div>
      <div className=" flex gap-8 cursor-pointer  font-bold text-[16px] font-[hanson]">
        {links.map((link) => (
          <Link href={link.url} className="" key={link.title}>
            {link.title}
          </Link>
        ))}
      </div>
      <div className=" flex gap-4">
        <Image src="/cart.svg" alt="cart" width={29} height={26} />
        <Image src="/user.svg" alt="cart" width={22} height={25} />
      </div>
    </div>
  );
};

export default Navbar;
