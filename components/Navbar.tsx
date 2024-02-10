import { Socials } from "@/contants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
          <div>
            {social.link ? (
              <Link target="_blank" href={`${social.link}`} key={social.name}>
                <Image
                  key={social.name}
                  src={social.src}
                  alt={social.name}
                  width={28}
                  height={28}
                />
              </Link>
            ) : (
              <div className="relative" key={social.name}>
                <Image
                  key={social.name}
                  src={social.src}
                  alt={social.name}
                  width={28}
                  height={28}
                  className="peer/icon"
                />
                  <p className="absolute -bottom-12 -left-8 text-nowrap px-4 py-2 mt-2 bg-gray-700 rounded-xl text-white font-semibold text-sm opacity-0 peer-hover/icon:opacity-100 duration-300">087-3719388</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
