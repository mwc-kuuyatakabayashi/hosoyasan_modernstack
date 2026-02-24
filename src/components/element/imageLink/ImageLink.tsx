interface Props {
  items: {
    title: string;
    src: string;
    href: string;
    alt?: string;
  }[];
  col?: 2|3|4;
}
export default function ImageLink ({ items,col=2 }: Props) {
  const columnClasses ={
    2:"w-[47%]",
    3:"w-[31.33%]",
    4:"w-[23.5%]"
  }
  const gapClasses ={
    2: "gap-x-[6%]",
    3: "gap-x-[3%]",
    4: "gap-x-[2%]",
  }
  return (
    <ul className={`flex flex-wrap max-md:gap-y-[40px] gap-y-[60px] ${gapClasses[col]} mt-[50px] md:mt-0`}>
      {items.map((item,index) => (
        <li className={`max-md:w-full ${columnClasses[col]}`} key={index}>
          <a
            href={item.href}
            className="group block transition-all duration-[600ms] ease-[cubic-bezier(0.18,-0.01,0.3,1)]"
          >
            <p className="text-center w-full overflow-hidden mt-0">
              <img
                src={item.src}
                alt={item.alt??""}
                loading="lazy"
                className="w-full transition-transform duration-[600ms] ease-[cubic-bezier(0.18,-0.01,0.3,1)] group-hover:scale-110"
              />
            </p>
            <p className="flex justify-between items-center text-[1.6rem] md:text-[2rem] leading-normal mt-[15px] md:mt-[25px] transition-all duration-[600ms] ease-[cubic-bezier(0.18,-0.01,0.3,1)] group-hover:opacity-70">
              {item.title}
              <span className="block w-[20px] h-[7px] ml-[20px] shrink-0 bg-[url('https://www.hoyu.co.jp/assets/img/common/icon_link_arrow.svg')] bg-no-repeat"></span>
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
}
