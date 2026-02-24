import { PageLayout } from "@/components/context/layout/PageLayout";
import type { Metadata } from "next";
import { FeaturesSection } from "@/components/variant/section/features/FeaturesSection";
import Breadcrumb from "@/components/element/breadcrumb/Breadcrumb";
import HeroSection from "@/components/variant/section/hero/HeroSection";
import Button from "@/components/element/button/Button";
import ImageLink from "@/components/element/imageLink/ImageLink";
import Card from "@/components/element/card/Card";
export const metadata: Metadata = {
  title: "hoyuについて",
  description: "aboutページです。",
};
export default function Home() {
  return (
    <PageLayout>
          <HeroSection
            titleJa="hoyuについて"
            titleEn="ABOUT"
            imageSrc="/images/about/img_mv.png"
            imageAlt="MV"
          >
            <Breadcrumb title={["hoyuについて","テストページ"]} />
          </HeroSection>
          <div className="w-full">
            <section className="pt-[100px] pb-[100px] md:pt-[160px] md:pb-[185px]">
              <div className="w-full max-w-[1250px] mx-auto md:px-10 px-5">
                <div className="w-full">
                  <p className="text-center w-full md:w-[93%] mx-auto md:ml-auto md:mr-0">
                    <picture>
                      <source
                        srcSet="/images/about/img_philosophy_lead.png"
                        media="(min-width: 768px)"
                      />
                      <img
                        src="/images/about/img_philosophy_lead_sp.png"
                        alt=""
                        loading="lazy"
                        className="w-full"
                      />
                    </picture>
                  </p>
    
                  <div className="mb-0 top-auto md:relative mt-[-165px] bg-white/0 max-md:mt-0">
                    <p className="text-[1.4rem] md:text-[1.6rem] leading-[2.5] text-gray-800 break-all font-normal">
                      hoyuは、頭髪のスペシャリストであり、
                      <br />
                      世界中のお客様のライフパートナーです。
                      <br />
                      世界のヘアファッション文化の発展のために、
                      <br />
                      貢献し、創造し続けていくこと。
                      <br />
                      それが私たちの使命です。
                    </p>
    
                    <Button href="#" position="left">
                      hoyuの想い
                    </Button>
                  </div>
                </div>
              </div>
            </section>
    
            <section className="pt-[0] pb-[100px] md:pt-[0] md:pb-[160px]">
              <div className="w-full max-w-[1250px] mx-auto md:px-10 px-5">
                <ImageLink
                  items={[
                    {
                      title: "ごあいさつ",
                      src: "https://www.hoyu.co.jp/assets/img/about/img_about_message.jpg",
                      href: "/about/",
                    },
                    {
                      title: "イキイキ・ワクワクビジョン2030",
                      src: "https://www.hoyu.co.jp/assets/img/about/img_about_vision.jpg",
                      href: "/about/",
                    },
                  ]}
                />
              </div>
            </section>
    
            <section className="pt-0 pb-[150px] md:pt-0 md:pb-[220px]">
              <div className="w-full max-w-[1250px] mx-auto md:px-10 px-5">
                <div className="mt-0 md:mt-0">
                  <Card col={3}/>
                </div>
              </div>
            </section>
          </div>
        </PageLayout>
  );
}
