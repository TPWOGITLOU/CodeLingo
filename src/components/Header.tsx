import Link from "next/link";
import ToggleTheme from "./ToggleTheme";

const Header = (): JSX.Element => {
  return (
    <header className="h-auto flex flex-row justify-between text-xl p-4 border-b-medium border-black shadow-lg bg-header-colour text-slate-900">
      <div className="flex flex-row">
        <Link href="/">
          <h1 className="font-bold text-3xl ">CodeLingo</h1>
        </Link>
        <ToggleTheme />
      </div>
      <nav className="p-2 align-end">
        <Link className="p-2" href="/about">
          About
        </Link>
        <Link className="p-2" href="/topics">
          Topics
        </Link>
        <Link className="p-2" href="/progress">
          Progress
        </Link>
      </nav>
    </header>
  );
};

export default Header;
