'use client'

import { challenge } from "../../lib/mongo/utils"
import { useState, useRef } from 'react';
import { CardItem } from "./CardItem";
import { DragAndDrop } from "./DragAndDrop";

const Block = (challengeData: challenge)=>{
  const [list, setList] = useState([
    'console',
    '.',
    'log',
    '(',
    'hello world',
    ')',
  ]);

  return(<div>
    <h1>this is the block page WIP no libraries</h1>
    <DragAndDrop />
  </div>)

};


export default Block