"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const lowerVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const links = [
    { url: "/", title: "Home" },
    { url: "../pages/about", title: "About" },
    { url: "../pages/services", title: "Services" },
    { url: "../pages/contact", title: "Contact" },
  ];
  return (
    <div className=" h-full flex items-center justify-between   border-b-[1px] px-2 md:px-8 lg:px-24 xl:px-48 border-white">
      <div className=" ">
        <Image src="/Logo.svg" alt="logo" width={208} height={34} />
      </div>
      <div className=" hidden md:flex  gap-2 lg:gap-8 cursor-pointer  font-bold text-[12px] md:text-[16px] font-[hanson]">
        {links.map((link) => (
          <Link href={link.url} className="" key={link.title}>
            {link.title}
          </Link>
        ))}
      </div>
      <div className=" hidden md:flex gap-4">
        <Image src="/cart.svg" alt="cart" width={29} height={26} />
        <Image src="/user.svg" alt="cart" width={22} height={25} />
      </div>
      <div className=" md:hidden">
        <button
          className=" w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          />
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded"
          />
          <motion.div
            variants={lowerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          />
        </button>
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className=" md:hidden absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-14 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
