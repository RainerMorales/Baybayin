'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function Home() {
  const dates = new Date().getFullYear()
  const router = useRouter()
  const handleClick =()=>{
    router.push('/dashboard')
  }
  return (
    <>
      <main className="h-screen flex flex-col items-center justify-center bg-violet-950/30">
        <div className=" text-center m-10 space-y-6">
          <div>
            <div className="text-4xl text-white font-bold">
              Learn Ali<span className="text-violet-600">bata</span>
            </div>
            <div className="text-xl text-white">ᜎᜒᜀᜇ᜔ᜈ᜔ ᜀᜎᜒᜊᜆ</div>
          </div>
          <div className="text-xs text-zinc-400">
            The Ancient Script of the Philippines
          </div>
        </div>
        <div className="flex flex-col min-w-50 gap-2 m-20">
          <Button
            onClick={handleClick}
            className="rounded-full bg-violet-900 hover:bg-violet-700 p-6 cursor-pointer hover:scale-95 active:scale-95 active:bg-violet-700 transition-transform"
          >
            Get Started
          </Button>
          {/* <Button className="p-6">About</Button> */}
        </div>
      </main>
      <footer className="w-full p-4 fixed bottom-0 text-zinc-400 text-center text-xs">
        Developed by Rainer Morales &copy; {dates}
      </footer>
    </>
  );
}
