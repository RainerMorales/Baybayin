"use client";
// import Navbars from "@/components/ui/Navbars";
export default function dashboard() {
  return (
    <>
      {/* <Navbars></Navbars> */}
      <main className="max-w-2xl m-auto  bg-black">
        <div className="m-2 grid grid-cols-2">
          <div className="border space-y-4 p-4 bg-violet-950/60 border-zinc-900 rounded-2xl m-2 min-h-60 col-span-2">
            <div className="font-bold text-2xl text-white/80">
              Learn
            </div>
            <div className="text-white/50 ">
              Explore the ancient script of the Philippines—each symbol
              represents a syllable rooted in culture and identity.
            </div>
          </div>
          <div className="border border-zinc-900 rounded m-2 min-h-60">2</div>
          <div className="border border-zinc-900 rounded m-2 min-h-60">3</div>
        </div>
      </main>
    </>
  );
}
