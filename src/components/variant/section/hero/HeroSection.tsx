import Breadcrumb from "@/components/element/breadcrumb/Breadcrumb";
import { ReactNode } from "react";

interface Props{
  titleJa:string;
  titleEn:string;
  imageSrc:string;
  imageAlt:string;
  children?: ReactNode;
}
export default function HeroSection({titleJa,titleEn,imageSrc,imageAlt,children}:Props){
  return (
    <div className="flex justify-end relative w-full">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 h-full w-full max-w-[1250px] max-md:px-[2rem] px-10 pointer-events-none">
      {children}
        <div className="absolute top-[54%] max-md:left-[2rem] left-[2.5rem] -translate-y-1/2 pointer-events-auto">
          <hgroup>
            <p
              className="max-md:text-[1.4rem] md:text-[1.5rem] tracking-widest mb-2"
              lang="en"
            >
              {titleJa}
            </p>
            <h2 className="font-crimson max-md:text-[4.5rem] text-[7rem] tracking-[0.1em]">
              {titleEn}
            </h2>
          </hgroup>
        </div>
      </div>

      {/* 画像エリア */}
      <div className="w-[73%] max-h-[400px] max-md:h-[380px]">
        <img
          src={imageSrc}
          alt={imageAlt}
          width="1000"
          height="500"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>
    </div>
  );
}