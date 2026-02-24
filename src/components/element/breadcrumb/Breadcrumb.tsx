"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  title: string[];
}

export default function Breadcrumb({ title }: Props) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <div id="breadcrumb" className="py-2 pointer-events-auto" data-show="true">
      {/* PC用 */}
      <nav className="max-md:hidden flex items-center overflow-x-scroll whitespace-nowrap max-w-[1250px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <a
          href="/"
          className="ml-[10px] text-[1.2rem] font-normal text-[#666] flex items-center transition-all duration-[600ms] ease-[cubic-bezier(0.18,-0.01,0.3,1)]"
        >
          TOP
        </a>
        {pathSegments.map(function (pathSegment, index) {
          const isLast = index === pathSegments.length - 1;
          return (
            <Link
              key={`/${pathSegments.slice(0, index + 1).join("/")}/`}
              href={`/${pathSegments.slice(0, index + 1).join("/")}/`}
              className={`${
                isLast ? "pointer-events-none" : ""
              } ml-[10px] text-[1.2rem] font-normal text-[#666] flex items-center transition-all duration-[600ms] ease-[cubic-bezier(0.18,-0.01,0.3,1)]
                before:content-['']
                before:block
                before:w-[8px]
                before:h-[10px]
                before:mr-[10px]
                before:bg-[url('https://www.hoyu.co.jp/assets/img/common/icon_breadcrumb.svg')]
                before:bg-no-repeat`}
            >
              {title[index] || pathSegment}
            </Link>
          );
        })}
      </nav>

      {/* SP用 */}
      <nav className="md:hidden flex items-center overflow-x-scroll whitespace-nowrap max-w-[1250px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {pathSegments.length < 2 && (
          <Link
          key={"/"}
            href=""
            className="ml-[10px] text-[1.2rem] font-normal text-[#666] flex items-center transition-all duration-[600ms] ease-[cubic-bezier(0.18,-0.01,0.3,1)]
                before:content-['']
                before:block
                before:w-[6px]
                before:h-[7px]
                before:mr-[10px]
                before:bg-no-repeat
                before:bg-[url('/images/common/icon_breadcrumb_sp.svg')]
                before:mb-[2px]
                "
          >
            TOP
          </Link>
        )}
        {pathSegments.map(function (pathSegment, index) {
          const isLast = index === pathSegments.length - 1;
          if (isLast) {
            return null;
          }
          return (
            <Link
              key={`/${pathSegments.slice(0, index + 1).join("/")}/`}
              href={`/${pathSegments.slice(0, index + 1).join("/")}/`}
              className={`${
                isLast ? "pointer-events-none" : ""
              } ml-[10px] text-[1.2rem] font-normal text-[#666] flex items-center transition-all duration-[600ms] ease-[cubic-bezier(0.18,-0.01,0.3,1)]
                before:content-['']
                before:block
                before:w-[6px]
                before:h-[7px]
                before:mr-[10px]
                before:bg-no-repeat
                before:bg-[url('/images/common/icon_breadcrumb_sp.svg')]
                before:mb-[2px]
                `}
            >
              {title[index] || pathSegment}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
