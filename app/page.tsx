"use client"

import Image from "next/image";
import Me from "../public/me.jpeg"
import Message from "@/components/icons/message";
import { CarouselPlugin } from "./_components/carousel";


export default function Home() {
  return (
    <main>
      <section className="bg-white">
        <div className="m-auto"> 
          <CarouselPlugin/>
        </div>
      </section>
      <section className="flex text-left space-x-10">
        <div className="flex flex-col">
        <h1 className="text-white uppercase text-3xl font-bold ml-20 mt-10 mb-10">Bentobox design</h1>
        <Image 
          src={Me}
          alt="me"
          height={200}
          width={200}
          className="rounded-full ml-20 mb-10"
        />
        </div>
        <div className="mt-20">
          <Message />
          <h2 className="font-bold text-neutral-100 text-2xl ml-10">
            The people are looking for you online!
          </h2>
          <p className="text-neutral-200 ml-10 mr-20 text-justify">
          Let us be your partner in achieving your business goals. Our tailored solutions address your specific needs and challenges, whether through strategic marketing, innovative technology, or efficient operational support. With our dedicated team, we work closely with you to enhance capabilities and drive sustainable growth. Trust us to deliver measurable results, supporting you every step of the way on your journey to success.
          </p>
        </div>
      </section>
    </main>
  );
}
