'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {

  const router = useRouter()

  const handleClick = (route: string) =>{
    router.push(`${route}`)
  }

  return (
    <main className="h-[80vh] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-7 border-[2px] rounded-md border-black p-7 backdrop-blur-sm bg-slate-300/30">
        <h1 className="font-play text-xl font-semibold">Choose One Below</h1>
        <div className="space-x-3 font-poppins">
          <Button onClick={()=>handleClick("clientSide")} variant={"ghost"} className="text-lg hover:bg-green-400">Client Side Fetching</Button>
          <Button onClick={()=>handleClick("serverSide")} variant={"ghost"} className="text-lg hover:bg-green-400">Server Side Fetching</Button>
        </div>
      </div>
    </main>
  );
};

export default Page;
