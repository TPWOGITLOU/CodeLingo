"use client";

import Header from "@/components/Header";
import SpriteAnimator from "@/components/SpriteAnimator";
import Link from "next/link";
import { GlobalContext } from "../../contexts/globalContext";
import { useContext, useEffect } from "react";

const Home = (): JSX.Element => {
  let { language, setLanguage, setImgUrl } = useContext(GlobalContext);

  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(language));
  }, [language]);

  return (
    <main>
      <Header />
      <div className="h-screen flex flex-col items-center justify-center content-center font-bold text-center font-mono">
        <div className="text-3xl">
          <h2>Welcome to CodeLingo!</h2>
          <br />
          <p>Which language would you like to learn?</p>
        </div>
        <div className="flex flex-row justify-between p-2 m-2">
          <Link href="/topics/python">
            <div
              onClick={() => {
                setLanguage("python");
                setImgUrl("/snakeIcon.png");
              }}
              className="p-2 flex flex-col items-center border-8 border-button-coral bg-nice-yellow bg-opacity-50 mr-3"
            >
              <h3 className="mb-5 p-5 pt-1 text-center text-lg bg-white rounded-lg">
                Python
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
                imageSrc="/snake.png"
              />
            </div>
          </Link>
          <Link href="/topics/javascript">
            <div
              onClick={() => {
                setLanguage("javascript");
                setImgUrl("/coffeebeanIcon.png");
              }}
              className="p-2 flex flex-col items-center border-8 border-button-coral bg-nice-yellow bg-opacity-50"
            >
              <h3 className="mb-5 p-5 pt-1 text-center text-lg bg-white rounded-lg">
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
