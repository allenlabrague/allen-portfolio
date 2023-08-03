import { NavigationDots, SocialMedia } from "../components";
import Link from "next/link";
import Image from "next/image";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />

          <div className="w-full pt-8 flex flex-col justify-end items-end">
            <div className="flex gap-1 items-center justify-center">
              <h4 className="text-xs">Created by: </h4>
              <span className="text-[#313bac] font-semibold">Allen</span>
            </div>
            <div className="flex gap-1 items-center justify-center relative">
              <h4 className="text-lg font-semibold">Deployed on</h4>
              <Link
                href="https://vercel.com/"
                target="_blank"
                className="relative h-[20px] w-[80px]"
              >
                <Image
                  fill
                  className="cursor-pointer absolute right-0"
                  src="/assets/vercel.svg"
                  alt="vercel-logo"
                />
              </Link>
            </div>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
