import Image from "next/image";

export const Logo = ({ theme }) => {
  const LogoPath =
    theme === "dark" ? "/assets/vercel-light.svg" : "/assets/vercel-dark.svg";
  const altText = "vercel-logo";
  return <Image src={LogoPath} width={100} height={100} alt={altText} />;
};

export const NextLogo = ({ theme }) => {
  const LogoPath =
    theme === "dark" ? "/assets/next-light.svg" : "/assets/next-dark.svg";
  const altText = "next-logo";
  return <Image src={LogoPath} width={300} height={300} alt={altText} />;
};
