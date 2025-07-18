"use client";
import Navbars from "@/components/ui/Navbars";
export default function dashboard() {
  return (
    <>
      {/* <Navbars></Navbars> */}
      <main className="max-w-2xl m-auto text-white bg-black">
        <div className="m-2 col-span-4">
          <div className="text-xl font-bold">Learn Baybayin</div>
        </div>
        <div className="m-2 grid grid-cols-2">
          <div className="border border-zinc-900 rounded m-2 min-h-60 col-span-2">
            1
          </div>
          <div className="border border-zinc-900 rounded m-2 min-h-60">2</div>
          <div className="border border-zinc-900 rounded m-2 min-h-60">3</div>
        </div>
      </main>
    </>
  );
}
