import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="mailto:allenlabrague06@gmail.com" target="_blank">
          <BiLogoGmail />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/allen.labrague.75/" target="_blank">
          <FaFacebook />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/allen-labrague-aa2a35273/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
