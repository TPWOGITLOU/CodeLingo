import Image from "next/image";
import Link from "next/link";

const Home=() : JSX.Element=> {
  return (
    <main >
      <h1>Welcome to CodeLingo</h1>
      <Link href="/about">about</Link>
    </main>
  );
}

export default Home
