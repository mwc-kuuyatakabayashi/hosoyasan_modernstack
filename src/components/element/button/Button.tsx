import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  isExternal?: boolean;
  position?:string;
};

export default function Button({ href, children, className = "", isExternal = false, position ="" }: Props) {
  let positionClass = "justify-start";
  if (position === "center") positionClass = "justify-center";
  if (position === "right") positionClass = "justify-end";

  const linkStyles = `
    group flex justify-center items-center relative
    min-w-full md:min-w-[350px] h-[65px] md:h-[64px] px-[45px] md:px-[50px]
    bg-white border border-red-600 rounded-[35px]
    transition-all duration-[600ms] ease-[cubic-bezier(0.18,-0.01,0.3,1)]
    hover:bg-[var(--primary)]
  `;

  const content = (
    <>
      <span className="text-[1.5rem] md:text-[1.8rem] text-red-600 transition-colors duration-400 group-hover:text-white">
        {children}
      </span>
      <span className="absolute top-1/2 right-5 -translate-y-1/2 w-[20px] h-[7px] bg-[url('https://www.hoyu.co.jp/assets/img/common/icon_arrow_red.svg')] bg-no-repeat transition-all duration-[600ms] ease-[cubic-bezier(0.18,-0.01,0.3,1)] group-hover:opacity-0 group-hover:translate-x-[5px]"></span>
      <span className="absolute top-1/2 right-5 -translate-y-1/2 w-[20px] h-[7px] bg-[url('https://www.hoyu.co.jp/assets/img/common/icon_link_arrow_white.svg')] bg-no-repeat transition-all duration-[600ms] ease-[cubic-bezier(0.18,-0.01,0.3,1)] opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-[5px]"></span>
    </>
  );

  return (
    <div className={`flex max-md:justify-center ${positionClass} mt-[30px] md:mt-[40px] ${className}`}>
      <p className="w-full md:w-auto">
        {isExternal ? (
          <a href={href} target="_blank" className={linkStyles}>
            {content}
          </a>
        ) : (
          <Link href={href} className={linkStyles}>
            {content}
          </Link>
        )}
      </p>
    </div>
  );
}