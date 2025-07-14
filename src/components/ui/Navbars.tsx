"use client";

import { Home, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-80 h-12 text-white bg-violet-950/50 rounded-full flex items-center justify-around shadow-lg z-50">
      <Button
        variant="ghost"
        className="flex flex-col items-center gap-0  text-xs"
        onClick={() => router.push("/")}
      >
        <Home className="w-5 h-5 mb-0.5" />
        Home
      </Button>
      <Button
        variant="ghost"
        className="flex flex-col items-center gap-0 text-xs"
        onClick={() => router.push("/search")}
      >
        <Search className="w-5 h-5 mb-0.5" />
        Search
      </Button>
      <Button
        variant="ghost"
        className="flex flex-col items-center gap-0 text-xs"
        onClick={() => router.push("/profile")}
      >
        <User className="w-5 h-5 mb-0.5" />
        Profile
      </Button>
    </nav>
  );
}
