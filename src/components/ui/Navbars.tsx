"use client";

import { Home, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <>
    <div className="bg-color text-white font-bold p-4  ">
      Alibata
    </div>
    </>
  );
}
