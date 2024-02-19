import Link from "next/link"
import ToggleTheme from "./ToggleTheme"
const Header = () : JSX.Element => {
    return (<>
    <header className="flex flex-row justify-center gap-x-2">
        <h1>CodeLingo</h1>
        <Link className="" href="/about">About</Link>
        <ToggleTheme />
      </header>
    </>)
}

export default Header