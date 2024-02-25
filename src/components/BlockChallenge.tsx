'use client'

import { challenge } from "../../lib/mongo/utils"
import { useState } from 'react';

const Block = (challengeData: challenge)=>{
    const {_id,
      topic,
      language,
      challengeType,
      challengeQuestion,
      challengeSnippets,
      answer,} = challengeData


    const [answerBlocks, setAnswerBlocks] = useState<string[]>([])
    
    const handleOnDrag = (event: React.DragEvent, itemContents: string) => {
      event.dataTransfer.setData('itemContents', itemContents)
    }

    const handleOnDrop = (event: React.DragEvent) => {
      const itemContents = event.dataTransfer.getData('itemContents')
      console.log('itemContents: ', itemContents)
      setAnswerBlocks([...answerBlocks, itemContents])
    }

    const handleDragOver = (event: React.DragEvent) => {
      event.preventDefault()
    }


    return <div>
    
    <p>this is a block challenge about {topic}</p>
    <div className="">
        <div className="">
            <div className="flex flex-row" id="todo-lane">
                <h3>TODO</h3>
                <p className="" draggable="true" onDragStart={(event) => handleOnDrag(event, ')')}>)</p>
                <p className="" draggable="true" onDragStart={(event) => handleOnDrag(event, '.')}>.</p>
                <p className="" draggable="true" onDragStart={(event) => handleOnDrag(event, 'log')}>log</p>
                <p className="" draggable="true" onDragStart={(event) => handleOnDrag(event, '(')}>(</p>
                <p className="" draggable="true" onDragStart={(event) => handleOnDrag(event, 'hello world')}>'hello world'</p>
                <p className="" draggable="true" onDragStart={(event) => handleOnDrag(event, 'console')}>console</p>
            </div>

            <div className="" onDrop={handleOnDrop} onDragOver={handleDragOver}>
                <h3>DONE</h3>
                <ul className="flex flex-row">

                {answerBlocks.map((block, index) => {
                  return <li key={index}>
                      <p>{block}</p>
                  </li>
                })}
                </ul>
            </div>

        </div>
    </div>
    </div>
}

export default Block