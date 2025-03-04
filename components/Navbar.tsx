import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href={"/"} className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={38}
          height={38}
          alt="ShareTalk"
          className="max-sm:size-sm"
        />
        <p className="font-semibold text-white text-2xl ">ShareTalk</p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>{" "}
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
