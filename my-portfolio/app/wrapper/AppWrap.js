import { NavigationDots, SocialMedia } from "../components";
import Link from "next/link";
import Image from "next/image";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div
        id={idName}
        className={`app__container ${classNames} dark:bg-[#121212]`}
      >
        <div className="invisible">
          <SocialMedia />
        </div>

        <div className="app__wrapper app__flex">
          <Component />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
