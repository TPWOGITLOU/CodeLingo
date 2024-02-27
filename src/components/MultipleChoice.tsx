"use client"
import { challenge } from "../../lib/mongo/utils"

import {
  Code,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Link,
} from "@nextui-org/react"
import ChallengeFooter from "./ChallengeFooter"

const MultipleChoice = (challengeData: challenge): JSX.Element => {
  const onClick = (e: any, targetID: string, buttonContent: string) => {
    let correctAns:boolean = false
    for (let x = 0; x < Object.entries(challengeData.challengeSnippets).length; x++) {
      console.log(`Challenge Object : ${Object.entries(challengeData.challengeSnippets)[x][0]} | Intended Challenge Answer : ${Object.entries(challengeData.challengeSnippets)[x][1]} | Challenge Answer : ${String(Object.entries(challengeData.challengeSnippets)[x][1])} | Provided Answer : ${buttonContent}`)
      if (Object.entries(challengeData.challengeSnippets)[x][0] === challengeData.answer && String(Object.entries(challengeData.challengeSnippets)[x][1]) === buttonContent) {
        const element = document.getElementById(targetID) as HTMLButtonElement
        if (element) {
          element.className =
            "bg-green-500 pt-2 pr-2 pl-2 pb-2 border border-black rounded-md hover:shadow-md"
          element.disabled = true
          correctAns = true
        }
        break
      }
    }
    if (!correctAns) {
      const element = document.getElementById(targetID)
      if (element) {
        const defaultColour: string =
          "pt-2 pr-2 pl-2 pb-2 border border-black rounded-md hover:shadow-md"
        element.className =
          "bg-red-500 pt-2 pr-2 pl-2 pb-2 border border-black rounded-md hover:shadow-md"
        setTimeout(() => {
          element.className = defaultColour
        }, 500)
      }
    }
  }
  let questionSnippets = Object.values(
    challengeData.challengeSnippets
  )
  return (
    <section id="component-container" className=" 
    w-[80%]
    min-w-[450px]
    mt-10 ml-auto mr-auto
    box-border
    ">
      <div id="head-container" className="
        flex gap-5
        mb-5
        ">
          <Card cid="question-card"
          className="
            w-full 
            border-8 border-border-colour  bg-nice-yellow bg-opacity-50 
            flex-wrap 
            p-5
            ">
            <CardHeader className="flex gap-3">
                <p className="text-3xl font-bold">
                {challengeData.language} - {challengeData.topic}
                </p>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>{challengeData.challengeQuestion}</p>
            </CardBody>
          </Card>
    </div>
    <div id="activity-container" className="flex flex-wrap gap-5 mb-5">
    <Card
          id="activity-card"
          className="
          grow
          border-8 border-border-colour 
          bg-nice-yellow bg-opacity-50
          ">
            <CardBody  className="p-5">
              <div className="flex gap-4 items-center justify-around">
                {questionSnippets &&
                  questionSnippets.map((question , index) => {
                    return (
                      <button
                        key ={index}
                        id={String(index)}
                        onClick={(e) => {
                          const target = e.target as HTMLButtonElement
                          onClick(
                            e,
                            target.id,
                            (e.target as HTMLButtonElement)?.textContent || ""
                          )
                        }}
                        className="bg-blue-500 p-4 text-white rounded-lg hover:shadow-lg"
                      >
                        {String(question)}
                      </button>
                    )
                  })}
              </div>
            </CardBody>
      </Card>
      <Card id="information-card" className="          
          border-8 border-border-colour bg-nice-yellow bg-opacity-50
          grow 
          p-5
          ">
          <CardBody className="p-5">
            <p>Click the right answer.</p>
          </CardBody>
          <CardFooter className="justify-end">
            <Image
              src="/character2.png"
              alt="2d pixel character with her arms in the air"
              className="float-right"
            />
          </CardFooter>
      </Card>
        </div>
      <ChallengeFooter />
    </section>
  )
}
export default MultipleChoice
