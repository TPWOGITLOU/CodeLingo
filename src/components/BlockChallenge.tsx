'use client'

import { challenge } from "../../lib/mongo/utils"
import { useState, useRef } from 'react';
import { CardItem } from "./CardItem";
import { DragAndDrop } from "./DragAndDrop";
import ChallengeFooter from "./ChallengeFooter";

const Block = (challengeData: challenge)=>{
  const [list, setList] = useState([
    'console',
    '.',
    'log',
    '(',
    'hello world',
    ')',
  ]);

  return(
    <section>

    <div className="h-[90%] w-[80%] mt-10 ml-[10%] flex flex-col flex-wrap gap-8 items-center align-middle justify-center">
      <h1>this is the block page WIP no libraries</h1>
      <DragAndDrop />
    <ChallengeFooter />
    </div>
  </section>
  )

};


export default Block