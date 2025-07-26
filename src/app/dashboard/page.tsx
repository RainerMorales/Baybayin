"use client";
import Navbars from "@/components/ui/Navbars";
export default function dashboard() {
  return (
    <>
      <Navbars></Navbars>
      <main className="max-w-2xl m-auto  bg-black">
        <div className="m-2 grid grid-cols-2">
          <div className="border space-y-4 p-6 btn-bg-color rounded-2xl m-2 col-span-2">
            <div className="font-bold text-xl text-white">Learn Basics</div>
            <div className="text-white/50 text-sm ">
              Understand the origins and basic writing system of this ancient
              script.
            </div>
          </div>
          <div className="border space-y-4 p-6 btn-bg-color rounded-2xl m-2 col-span-2">
            <div className="font-bold text-xl text-white">Games</div>
            <div className="text-white/50 text-sm ">
              Challenge yourself and make learning fun with engaging activities.
            </div>
            <div>
              <div className="border p-4 btn-bg-color rounded-2xl m-2 col-span-2">
                <div className="font-bold text-lg text-white">Flashcards</div>
                <div className="text-white/50 text-sm ">
                  Challenge yourself and make learning fun with engaging
                  activities.
                </div>
              </div>
              <div className="border p-4 btn-bg-color rounded-2xl m-2 col-span-2">
                <div className="font-bold text-lg text-white">Slide Puzzle</div>
                <div className="text-white/50 text-sm ">
                  Sharpen your focus and logic by solving Baybayin slide
                  puzzles.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
