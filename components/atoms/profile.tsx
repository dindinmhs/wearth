"use client";

import Image from "next/image";
import Link from "next/link";
import { IoMdPerson } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { DropDown } from "../molecules";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { usePathname } from "next/navigation";
import { Tooltip } from "./tooltip";

interface Props {
  otherStyles?: string;
  type: "border" | "default";
  src?: string;
}

export const ProfileIcon = ({
  otherStyles = "w-12",
  type,
  src = "https://res.cloudinary.com/dokktqvdq/image/upload/v1741620664/sustyle/yt5mv1skywmczqrwinky.jpg",
}: Props) => {
  const pathname = usePathname();
  const pathSegment = pathname.split("/")[1];
  const [isActive, setActive] = useState("");
  useEffect(() => {
    setActive(pathSegment);
  }, [pathSegment]);
  if (type === "border") {
    return (
      <Image
        src={src}
        className={`${otherStyles} aspect-square rounded-full border-4 border-black`}
        width={200}
        height={200}
        alt="profile"
      />
    );
  }
  return (
    <Tooltip text="Profile" position="bottom">
      <div
        className={`p-1 rounded-full ${
          isActive == "profile" ? "bg-forest" : "hover:bg-gray-300"
        } bg-transparent overflow-hidden h-12 aspect-square`}
      >
        <Image
          src={src}
          className={`${otherStyles} rounded-full object-cover w-full h-full`}
          width={200}
          height={200}
          alt="profile"
        />
      </div>
    </Tooltip>
  );
};

export const ProfileDropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    setOpen(false);
  };

  return (
    <DropDown
      isOpen={isOpen}
      setOpen={setOpen}
      trigger={<ProfileIcon type="default" />}
    >
      <Link
        href={"/profile"}
        className="flex gap-2 hover:bg-gray-200 px-3 py-2 items-center"
      >
        <IoMdPerson size={25} />
        <p>Profile</p>
      </Link>
      <button
        onClick={handleLogout}
        className="flex w-full gap-2 hover:bg-gray-200 px-3 py-2 items-center"
      >
        <MdLogout color="red" size={25} />
        <p className="text-red-500">Sign Out</p>
      </button>
    </DropDown>
  );
};
