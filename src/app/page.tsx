"use client";

import SpriteAnimator from "@/components/SpriteAnimator";
import Link from "next/link";

const Home = (): JSX.Element => {
  return (
    <main>
      <div className="flex flex-col items-center">
        <div className="inline-block align-middle">
          <div className="h-[80%] mt-[10%] mb-[10%] flex flex-col items-center align-middle font-bold text-center">
            <div id="welcome-text" className="text-3xl pb-8">
              <h2 className="text-5xl text-header dark:text-white">
                Welcome to CodeLingo!
              </h2>
              <br />
              <p className="font-fredoka text-3xl">
                Which language would you like to learn?
              </p>
            </div>

            <div
              id="sprite container"
              className="
        flex flex-row flex-wrap
        justify-center 
        gap-5
        "
            >
              <Link
                href="/python"
                className="
            p-5 
            border-8 rounded-medium border-border-colour bg-nice-yellow bg-opacity-50
            "
              >
                <h3
                  className="font-fredoka
                mb-5 px-5 py-2 
                text-center text-3xl dark:bg-header  bg-white rounded-lg"
                >
                  Python
                </h3>
                <div className="w-[100%] flex flex-col">
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
                  imageSrc="/snake.png"
                />
                </div>
                <h3
              className="
                mt-6 px-5 py-2
                text-center text-2xl dark:bg-header  bg-white rounded-lg"
            >
            Python is powerful <br></br> at crunching numbers!
            </h3>
              </Link>

              <Link
                href="/javascript"
                className="
            p-5 
            border-8 rounded-medium border-border-colour bg-nice-yellow bg-opacity-50
            "
              >
                <h3
                  className="mb-5 px-5 py-2 
                text-center text-3xl dark:bg-header  bg-white rounded-lg"
                >
                  JavaScript
                </h3>
                <div className="w-[100%] flex flex-col">
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
                <h3
              className="
                mt-6 px-6 py-2
                text-center text-2xl dark:bg-header  bg-white rounded-lg"
            >
              JavaScript is the <br></br> language of the web!
            </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
