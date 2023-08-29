import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className="app__social dark:bg-[#121212]">
      <div className="dark:dark:bg-[#383838] dark:border-[#383838] dark:hover:border-gray-400">
        <Link href="mailto:allenlabrague06@gmail.com" target="_blank">
          <BiLogoGmail />
        </Link>
      </div>
      <div className="dark:dark:bg-[#383838] dark:border-[#383838] dark:hover:border-gray-400">
        <Link
          href="https://www.facebook.com/allen.labrague.75/"
          target="_blank"
        >
          <FaFacebook />
        </Link>
      </div>
      <div className="dark:dark:bg-[#383838] dark:border-[#383838] dark:hover:border-gray-400">
        <Link
          href="https://www.linkedin.com/in/allen-labrague-aa2a35273/"
          target="_blank"
        >
          <AiFillLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
