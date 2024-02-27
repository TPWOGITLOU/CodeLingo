'use client'

import { challenge } from "../../lib/mongo/utils"
import { useState, useEffect } from 'react';
import { DragAndDrop } from "./DragAndDrop";
import ChallengeFooter from "./ChallengeFooter";
import { Data } from "../../lib/interfaces/interfaces";

import {
  Code,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";

const Block = (challengeData: challenge)=>{
  const initialList:any[] = [...challengeData.challengeSnippets]
  //convert to data array
  const numIndexList = []
  for(let i = 0; i < initialList.length; i++){
    numIndexList.push(initialList[i])
    numIndexList[i].id = +numIndexList[i].id
  }

  const [listItems, setListItems] = useState<Data[]>(numIndexList)
  const [correctState, setCorrectState] = useState(false)
  const correctAnswer = challengeData.answer

  useEffect(() => {
    let answerString = ''
    for (let i = 0; i < listItems.length; i++) {
      if (listItems[i].status === 'answer') {
        answerString = answerString + listItems[i].content
      }
    }
    if(answerString === correctAnswer){
      setCorrectState(true)
    } else {
      setCorrectState(false)
    }
  }, [listItems])

  return(
    <section>
      <div className="flex flex-col justify-center items-center">
          <h1 className="text-lg mx-80">Drag and drop the syntax blocks into the answer block</h1>
      <div className="flex flex-row gap-5">
        <Card className="w-full border-8 border-border-colour  bg-nice-yellow bg-opacity-50 flex-wrap p-5">
        <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-3xl font-bold">Multiple Choice</p>
              </div>
            </CardHeader>
        <DragAndDrop 
        listItems={listItems}
        setListItems={setListItems}
        />
        </Card>
        <Card className="w-full border-8 border-border-colour  bg-nice-yellow bg-opacity-50 flex-wrap p-5">

          <div className="self-center flex flex-col justify-center items-center">
            <div className="bg-white p-2 m-2 rounded-lg w-80 h-40">{correctState ? <p>correct</p> : <p>{`Order the syntax required to print 'hello world'`}</p>}</div>
            <Image 
            src="/character2.png"
            alt="2d pixel character with her arms in the air"/>
          </div>
        </Card>
      </div>
    <ChallengeFooter />
    </div>
  </section>
  )

};


export default Block