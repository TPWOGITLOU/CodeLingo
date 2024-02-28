"use client";

import SpriteAnimator from "@/components/SpriteAnimator";
import Link from "next/link";

const Home = (): JSX.Element => {
  return (
    <main className="h-screen">
      <div className="h-[90%] pt-10 flex flex-col items-center justify-center content-center font-bold text-center font-mono">
        <div className="text-3xl pb-8">
          <h2>Welcome to CodeLingo!</h2>
          <br />
          <p>Which language would you like to learn?</p>
        </div>
        <div className="flex md:flex-row flex-col justify-between p-2 m-2">
          <Link href="/topics/python">
            <div className="p-2 mb-2 flex flex-col items-center border-8 rounded-medium border-coral bg-nice-yellow bg-opacity-50 md:mr-3">
              <h3 className="mb-5 p-5 pt-1 text-center text-lg dark:bg-black  bg-white rounded-lg">
                Python
              </h3>
              <SpriteAnimator
                spriteWidth={258}
                spriteHeight={256}
                borderWidth={0}
                spacingWidth={0}
                animationCycle={[
                  { x: 0, y: 0 },
                  { x: 256, y: 0 },
                  { x: 512, y: 0 },
                ]}
                animationSpeed={200}
                imageSrc="/snake.png"
              />
            </div>
          </Link>
          <Link href="/topics/javascript">
            <div className="p-2 flex flex-col items-center border-8 rounded-medium border-coral bg-nice-yellow bg-opacity-50">
              <h3 className="mb-5 p-5 pt-1 text-center text-lg  dark:bg-black bg-white rounded-lg">
                JavaScript
              </h3>
              <SpriteAnimator
                spriteWidth={256}
                spriteHeight={256}
                borderWidth={0}
                spacingWidth={0}
                animationCycle={[
                  { x: 0, y: 0 },
                  { x: 256, y: 0 },
                  { x: 512, y: 0 },
                ]}
                animationSpeed={200}
                imageSrc="/coffeebean.png"
              />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
