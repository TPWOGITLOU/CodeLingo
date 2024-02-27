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
      if (Object.entries(challengeData.challengeSnippets)[x][0] === challengeData.answer && Object.entries(challengeData.challengeSnippets)[x][1] === buttonContent) {
        const element = document.getElementById(targetID) as HTMLButtonElement
        console.log(targetID)
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

  let questionSnippets: string[] = Object.values(
    challengeData.challengeSnippets
  )

  return (
    <section className="h-[90%] w-[80%] mt-10 ml-[10%] flex flex-col flex-wrap gap-8 items-center align-middle justify-center ">
      <section className="flex flex-row flex-wrap justify-between gap-5">
        <div className="md:max-w-[62%] w-[100%] flex flex-col flex-wrap gap-5">
          <Card className="w-full border-8 border-border-colour  bg-nice-yellow bg-opacity-50 flex-wrap p-5">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-3xl font-bold">
                  {challengeData.challengeQuestion}
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                Thinking about the above question, select the correct answer
                from the options below:
              </p>
            </CardBody>
            <Divider />
          </Card>
          <Card className="gap-3 pt-10 pb-10 border-8 border-border-colour  bg-nice-yellow bg-opacity-50">
            <CardBody>
              <div className="flex flex-wrap gap-4 items-center justify-around">
                {questionSnippets &&
                  questionSnippets.map((index, question) => {
                    return (
                      <button
                        key={index}
                        id={index}
                        onClick={(e) => {
                          const target = e.target as HTMLButtonElement
                          onClick(
                            e,
                            target.id,
                            (e.target as HTMLButtonElement)?.textContent || ""
                          )
                        }}
                        className="pt-2 pr-2 pl-2 pb-2 border border-black rounded-md hover:shadow-md"
                      >
                        {questionSnippets[question]}
                      </button>
                    )
                  })}
              </div>
            </CardBody>
          </Card>
        </div>
        <Card className="md:max-w-[50%] w-100% h-auto border-8 border-border-colour bg-nice-yellow bg-opacity-50 p-5">
          <CardBody>
            <p>Explanation of the task and link to the information page</p>
          </CardBody>
          <CardFooter className="justify-end">
            <Image
              src="/character2.png"
              alt="2d pixel character with her arms in the air"
              className="float-right"
            />
          </CardFooter>
        </Card>
      </section>
      <ChallengeFooter />
    </section>
  )
}

export default MultipleChoice
