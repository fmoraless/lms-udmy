"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import {} from "next/router";

export const NavbarRoutes = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="flex gap-x-2 ml-auto">
      <UserButton />
    </div>
  );
};
