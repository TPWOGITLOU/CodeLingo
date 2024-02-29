import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const About = (): JSX.Element => {
  return (
    <main className="w-[80%] mt-[60px] mb-[10px] mx-auto">
      <div id="title" className="
        mb-16
        flex 
        justify-center items-center
        font-bold text-center leading-10">
        <Image
          src="/character1.png"
          alt="2d pixel character with her arms in the air wearing glasses"
          className="float-right"
          width={64}
          height={64}/>
          <h1 className="text-5xl mx-5">Welcome to CodeLingo!</h1>
          <Image
          src="/character2.png"
          alt="2d pixel character with her arms in the air"
          className="float-right"
          width={64}
          height={64}/>        
      </div>
        
      <div id="text" className="">
        <p className="font-fredoka text-3xl mb-5">Let J-J and Georgie guide you through a series of fun challenges about writing the code that drives the internet!</p>

        <p className="font-fredoka text-xl leading-10">Choose between <Link className="underline" href="https://developer.mozilla.org/en-US/docs/Glossary/Javascript">JavaScript</Link> (the language that make the internet interactive) and <Link  className="underline" href="https://developer.mozilla.org/en-US/docs/Glossary/Python">Python</Link> ( a powerful tool for processing big-data) and complete the different challenges. Hit the 
        <Link href={`../../learning/javascript/primitives/learning`}>
                <Button
                  className="mx-1"
                  radius="full" 
                  size="sm" 
                  color="secondary" 
                  variant="bordered"
                  >
                  Learn More
                </Button>
        </Link>
        buttons to find out about each topic and collect trophies as you go!</p>
        <div id="nedboi-container" className="flex justify-center items-center">
          <Image
              src="/nerdboi.gif"
              alt="image of a kid excited to go try out the sandbox"
              className=""
              width={128}
              height={128}/>
            <p className="ml-[-24px] font-fredoka text-3xl">Finally, go and play in the <Link className="underline" href="/sandbox">Sandbox</Link> to try out what you've learned.</p>
        </div>
        
        <ul className="my-12 flex flex-wrap gap-5 justify-around">
          <li className="">Choose the correct answer
            <Image
            src="/drag-screen.png"
            alt="image of a code-block dragging challenge"
            className=""
            width={400}
            height={400}/>
          </li>
          <li>Match the items
          <Image
            src="/drag-screen.png"
            alt="image of a code-block dragging challenge"
            className=""
            width={400}
            height={400}/>
          </li>
          <li>Drag to blocks to make your code
          <Image
            src="/drag-screen.png"
            alt="image of a code-block dragging challenge"
            className=""
            width={400}
            height={400}/>
          </li>
          <li>Type into a real code-editor
            <Image
            src="/drag-screen.png"
            alt="image of a code-block dragging challenge"
            className=""
            width={400}
            height={400}/></li>
        </ul>
    </div>
  </main>
  );
};

export default About;
