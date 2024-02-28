"use client";

import SpriteAnimator from "@/components/SpriteAnimator";
import Link from "next/link";

const Home = (): JSX.Element => {
  return (
    <main className="h-[100%]">
      <div className="font-bold text-center font-mono 
      mt-[20px]
      ">
        <div id="welcome-text"className="text-3xl pb-8">
          <h2>Welcome to CodeLingo!</h2>
          <br />
          <p>Which language would you like to learn?</p>
        </div>
        <div id="sprite container" className="
        flex flex-row flex-wrap
        justify-center 
        gap-5
        ">
          <Link href="/python" className="
            p-5 
            border-8 rounded-medium border-border-colour bg-nice-yellow bg-opacity-50
            ">
              <h3 className="
                mb-5 px-5 py-2 
                text-center text-2xl dark:bg-black  bg-white rounded-lg">
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
          </Link>
          <Link href="/javascript" className="
            p-5 
            border-8 rounded-medium border-border-colour bg-nice-yellow bg-opacity-50
            ">
              <h3 className="mb-5 px-5 py-2 
                text-center text-2xl dark:bg-black  bg-white rounded-lg">
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
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
