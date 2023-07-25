import { NavigationDots, SocialMedia } from "../components";
import Link from "next/link";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <div className="flex gap-1 items-center justify-center">
              <h4 className="text-xs">Created by: </h4>
              <span className="text-[#313bac] font-semibold">Allen</span>
            </div>
            <div className="flex gap-1 items-center justify-center">
              <h4 className="text-lg font-semibold">Deployed on</h4>
              <Link href="https://vercel.com/" target="_blank">
                <img className="cursor-pointer" src="/assets/vercel.svg" />
              </Link>
            </div>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
