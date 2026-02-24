import { ReactNode, CSSProperties } from "react";

interface Props {
  size?: number;
  spSize?: number;
  leading?: number;
  color?: string;
  weight?: "normal" | "bold" | "medium";
  className?:string;
  children: ReactNode;
}

interface CustomCSS extends CSSProperties {
  '--text-size'?: string;
  '--text-sp-size'?: string;
  '--text-lh'?: number;
  '--text-color'?: string;
}

export default function Text({
  size = 1.6,
  spSize = 1.5,
  leading = 2,
  color = "#333",
  weight = "normal",
  className= "",
  children,
}: Props) {
  
  const styles: CustomCSS = {
    "--text-size": `${size}rem`,
    "--text-sp-size": `${spSize}rem`,
    "--text-lh": leading,
    "--text-color": color,
  };

  const weightClass = {
    normal: "font-normal",
    bold: "font-bold",
    medium: "font-medium",
  }[weight] || "font-normal";

  return (
    <p
      className={`
        text-[length:var(--text-size)] 
        max-md:text-[length:var(--text-sp-size)] 
        leading-[var(--text-lh)] 
        text-[color:var(--text-color)]
        ${weightClass}
        ${className}
      `}
      style={styles}
    >
      {children}
    </p>
  );
}