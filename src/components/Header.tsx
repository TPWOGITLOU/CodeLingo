import Link from "next/link";
import ToggleTheme from "./ToggleTheme";

const Header = (): JSX.Element => {
  return (
    <>
      <header className="fixed flex flex-col text-xl align-middle">
        <div className="flex flex-row contents-center">
          <h1 className="font-bold text-3xl light-purple">CodeLingo</h1>
          <div className="self-end">
            <ToggleTheme />
          </div>
        </div>
        <Link className="pt-5" href="/about">
          About
        </Link>
        <Link className="pt-5" href="/topics">
          Topics
        </Link>
        <Link className="pt-5" href="/progress">
          Progress
        </Link>
      </header>
    </>
  );
};

export default Header;
