"use client";
import Link from "next/link";
import Image from "next/image";
import ToggleTheme from "./ToggleTheme";
import { Tooltip } from "@nextui-org/react";
import DropdownCard from "./DropdownCard";
import { useParams } from "next/navigation";

const Header = (): JSX.Element => {
  const params = useParams<{
    language: string;
  }>();

  return (
    <>
      <header className="h-auto flex flex-row justify-between items-center text-xl pr-2 pl-2 border-b-5 border-double dark:border-opacity-50 dark:border-white border-black p-2 text-black font-bold dark:text-white bg-white dark:bg-header bg-opacity-70 dark:bg-opacity-70">
        <div className="flex flex-row">
          <Link href="/">
            <Image
              src="/logo-light.png"
              height={65}
              width={405}
              alt="CodeLingo logo"
            ></Image>
          </Link>
          <ToggleTheme />
        </div>
        <nav className="md:mr-2 md:flex md:flex-row md:items-center  hidden">
          <Link
            className="p-2 transition-transform transform hover:-translate-y-1"
            href="/"
          >
            Home
          </Link>
          <Link
            className="p-2 transition-transform transform hover:-translate-y-1"
            href="/about"
          >
            About
          </Link>
          <Link
            className="p-2 transition-transform transform hover:-translate-y-1"
            href="/sandbox"
          >
            Sandbox
          </Link>
          {params.language && (
            <Link href="/">
              <Tooltip
                content={
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">
                      Studying{" "}
                      {params.language === "javascript"
                        ? "JavaScript"
                        : "Python"}
                    </div>
                    <div className="text-tiny">
                      Click me to switch languages
                    </div>
                  </div>
                }
              >
                <Image
                  className="p-0, mr-2 ml-2"
                  src={`/${params.language}.png`}
                  alt={`${params.language} character icon`}
                  width={64}
                  height={64}
                ></Image>
              </Tooltip>
            </Link>
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
