'use client'
import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Play from "@/components/Play/Index";
import Blog from "@/components/blog";
import Discord from "@/components/discord";
import Blog2 from "@/components/blogTwo";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Play /> 
      <Blog/> 
      <Discord />
      <Blog2 />
    </main>
  );
}
