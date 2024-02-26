"use client";
import Link from "next/link";
import Image from "next/image";
import ToggleTheme from "./ToggleTheme";
import { useGlobalContext } from "../../contexts";
import { useEffect } from "react";
import { Tooltip } from "@nextui-org/react";
import DropdownCard from "./DropdownCard";

const Header = (): JSX.Element => {
  let { language, imgUrl } = useGlobalContext();

  useEffect(() => {
    localStorage.setItem("image", JSON.stringify(imgUrl));
  }, [imgUrl]);

  return (
    <>
      <header className="h-auto flex flex-row justify-between items-center p-2 text-xl border-b-medium border-black shadow-lg bg-header-colour text-slate-900">
        <div className="flex flex-row">
          <Link href="/">
            <h1 className="font-bold text-3xl p-2">CodeLingo</h1>
          </Link>
          <ToggleTheme />
        </div>
        <nav className="md:flex md:flex-row md:items-center hidden">
          <Link className="p-2" href="/about">
            About
          </Link>
          <Link className="p-2" href="/topics">
            Topics
          </Link>
          <Link className="p-2" href="/sandbox">
            Sandbox
          </Link>
          {language && (
            <Tooltip
              content={
                <div className="px-1 py-2">
                  <div className="text-small font-bold">
                    Studying{" "}
                    {language === "javascript" ? "JavaScript" : "Python"}
                  </div>
                  <div className="text-tiny">Click me to switch languages</div>
                </div>
              }
            >
              <Link href="/">
                <Image
                  className="p-0, m-0"
                  src={imgUrl}
                  alt={`${language} character icon`}
                  width={64}
                  height={64}
                ></Image>
              </Link>
            </Tooltip>
          )}
        </nav>
        <div className="md:hidden">
          <DropdownCard />
        </div>
      </header>
    </>
  );
};

export default Header;
