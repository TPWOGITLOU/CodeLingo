'use client'

import { challenge } from "../../lib/mongo/utils"
import { useState, useRef } from 'react';

const Block = (challengeData: challenge)=>{
  const draggingItem = useRef();
  const dragOverItem = useRef();

  const [list, setList] = useState([
    'console',
    '.',
    'log',
    '(',
    'hello world',
    ')',
  ]);

  const handleDragStart = (e, position) => {
    draggingItem.current = position;
    console.log(e.target.innerHTML);
  };

  const handleDragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
    const listCopy = [...list];
    console.log(draggingItem.current, dragOverItem.current);
    const draggingItemContent = listCopy[draggingItem.current];
    listCopy.splice(draggingItem.current, 1);
    listCopy.splice(dragOverItem.current, 0, draggingItemContent);

    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;
    setList(listCopy);
  };

  return (
    <><div className="flex flex-row">

      {list &&
        list.map((item, index) => (
          <h1 className="min-w-24 border-2 border-black"
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={(e) => handleDragEnter(e, index)}
          key={index}
          draggable
          >
            {item}
          </h1>
        ))}
        </div>
    </>
  );
};


export default Block