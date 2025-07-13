'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()
  const handleClick =()=>{
    router.push('/dashboard')
  }
  return (
    <>
      <main className="h-screen flex flex-col items-center justify-center">
        <div className=" text-center m-10 space-y-2">
          <div className="text-4xl text-white font-bold">
            Learn Ali<span className="text-violet-600">bata</span>
          </div>
          <div className="text-xs text-zinc-400">
            The Ancient Script of the Philippines
          </div>
        </div>
        <div className="flex flex-col min-w-50 gap-2">
          <Button
            onClick={handleClick}
            className="rounded-full bg-violet-900 hover:bg-violet-950 p-6 cursor-pointer"
          >
            Get Started
          </Button>
          {/* <Button className="p-6">About</Button> */}
        </div>
      </main>
      <footer className="w-full p-4 fixed bottom-0 text-zinc-400 text-center text-xs">
        Develop by Rainer Morales &copy; 2025
      </footer>
    </>
  );
}
