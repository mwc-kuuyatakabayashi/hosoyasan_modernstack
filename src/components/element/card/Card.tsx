interface CardItem {
  title: string;
  href: string;
}

type CategoryType = 'about' | 'sustainability';

interface CardProps {
  col?: 2 | 3 | 4;
  category: 'about' | 'sustainability';
}

const cardData: Record<CategoryType, CardItem[]> = {
    about: [
      { title: "会社概要", href: "#" },
      { title: "拠点案内", href: "#" },
      { title: "組織", href: "#" },
      { title: "行動憲章", href: "#" },
      { title: "委員会の概要", href: "#" },
      { title: "沿革", href: "#" },
      { title: "製品史", href: "#" },
    ],
    sustainability: [
      { title: "サステナビリティ方針", href: "#" },
      { title: "環境への取り組み", href: "#" },
      { title: "社会との関わり", href: "#" },
    ],
};

export default function Card({col=3,category}:CardProps) {
  interface ColumnClass{
    2:string;
    3:string;
    4:string;
  }
  const columnClasses:ColumnClass ={
    2:"md:w-[calc((100%-30px)/2)]",
    3:"md:w-[calc((100%-60px)/3)]",
    4:"md:w-[calc((100%-90px)/4)]",
  }
  return (
    <ul className="flex flex-wrap gap-y-5 gap-x-[30px]">
      {cardData[category].map((data, index) => (
        <li className={`${columnClasses[col]} w-full`} key={index}>
          <a
            href={data.href}
            className="group flex justify-start items-center w-full min-h-[72px] md:min-h-[99px] p-5 pr-[50px] bg-[url('https://www.hoyu.co.jp/assets/img/common/bg_card_link.png')] bg-cover bg-center bg-no-repeat relative text-[1.4rem] md:text-[1.8rem] transition-all duration-400 hover:opacity-70"
          >
            <span className="break-all transition-opacity duration-400 group-hover:opacity-60">
              {data.title}
            </span>
            <span className="absolute top-1/2 right-5 -translate-y-1/2 w-[20px] h-[7px] bg-[url('https://www.hoyu.co.jp/assets/img/common/icon_link_arrow.svg')] bg-no-repeat transition-transform duration-400 group-hover:translate-x-[5px]"></span>
          </a>
        </li>
      ))}
    </ul>
  );
}
