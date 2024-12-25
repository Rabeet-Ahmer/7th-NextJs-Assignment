import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface IBook {
    id: number;
    name: string;
    type: string;
    available: boolean;
  }

const ServerCard = async () => {
    const res = await fetch("https://simple-books-api.glitch.me/books/");
    if (!res.ok){
        throw new Error("Error in fetching data");
    }
    const data: IBook[] = await res.json();
    console.log(data);
  return (
    <main className="my-3 space-y-4">
        <h1 className="text-center text-7xl font-play">Books</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 font-play place-items-center min-h-screen gap-3">
        {data.map((item) => (
            <Card key={item.id} className="p-4 flex flex-col justify-between items-center bg-teal-500 h-96 border-none">
                <Image src={"/image.png"} alt="image" width={200} height={200} className="rounded-md mb-1"/>
                <CardTitle>{item.name}</CardTitle>
                <CardContent className="flex items-center gap-2 font-sans">
                    <p>Type:</p>
                    <CardDescription className="text-black">{item.type}</CardDescription>
                </CardContent>
                <CardContent>
                    <Badge variant={item.available ? "secondary" : "destructive"} className="font-mono font-light">{item.available ? "Available": "Sold out"}</Badge>
                </CardContent>
                <CardContent>
                    <Button variant={'outline'} className="font-poppins p-5 px-9 bg-green-400 border-none">Buy</Button>
                </CardContent>
            </Card>
        ))}
    </div>
    </main>
  )};

export default ServerCard;


