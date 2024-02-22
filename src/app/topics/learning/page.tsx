"use client";

import Link from "next/link"
import { useSearchParams } from "next/navigation"


const Learning = (): JSX.Element =>  {
    const searchParams = useSearchParams()
    const topic = searchParams.get('topic')

    type TopicInfo = {
       [key: string]: string
}

//  const topicInformation = array[0].topicInfo

    const topicInformation: TopicInfo =  {
        p1: "Programming languages use lots of different data types to store information. While some of them get pretty complicated, we'll just be using three simple (or 'Primitive') ones for now: \n-  Strings\n-   Numbers \n-Booleans.",
        p2: "## Strings \nStrings are used to store a group of characters, like letters, numbers or punctuation. We can use them to make words, or sentences. In JavaScript strings need to be inside a pair of either 'single quote' or \"double quote\" marks so that the program knows where they start and end.",
        p3: "## Numbers \n JavaScript can store numbers in lots of different formats like integers such as 1, 2, 3, 4 or decimals such as 3.14159. These shouldn't be in quote marks, otherwise JavaScript will think they're a string of characters and it can do cool stuff (like maths) with them!",
        p4: "## Booleans \nBooleans are used to tell us if something is 'true' or 'false'. For example \n9 < 10 is 'true' \n red is the same as green is 'false'.even though these are words, JavaScript knows what they mean so when we use them as a boolean they should _not_ be in quote marks (otherwise they're just stored as a string!)",
      }

      let topicInfoArray: string[] = []

      for(const key in topicInformation){
        topicInfoArray.push(topicInformation[key])
        }

    return(
        <section className="content-center">
            <Link href="/">Home</Link>
            <h1 className="content-center">Learning</h1>
            <h2 className="content-center">Welcome to Learning</h2>
            <p> className="content-center"Here is some useful information describing {topic}</p>
            <ul className="content-center">{topicInfoArray.map((individualInfo: string) => {return <li key={individualInfo}>{individualInfo}</li>})}</ul>
        </section>
        )
}

export default Learning