"use client";
import Navbars from "@/components/ui/Navbars";
export default function dashboard() {
  return (
    <>
      <Navbars></Navbars>
      <main className="max-w-2xl m-auto  h-screen grid grid-cols-4 text-white">
        <div className="border border-zinc-800 m-2 rounded-2xl col-span-4">1</div>
        <div className="border border-zinc-800 m-2 rounded-2xl col-span-4">2</div>
      </main>
    </>
  );
}
