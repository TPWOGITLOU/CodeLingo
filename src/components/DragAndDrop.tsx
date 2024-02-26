import { Status, Data } from "@/interfaces";
import { ContainerCards } from "./ContainerCards";
import { data } from "@/blockTestData";
import { useState, useRef } from "react";

const typesBlocks: Status[] = ['answer', 'question']

export const DragAndDrop = () => {

    const [isDragging, setIsDragging] = useState(false)
    const [listItems, setListItems] = useState<Data[]>(data)
    const [target, setTarget] = useState('')

    const draggingItem = useRef('')
    const draggingOverItem = useRef('')

    const handleDragging = (dragging: boolean) => setIsDragging(dragging)

    const handleUpdateList = (id: number, status: Status, e: React.DragEvent<HTMLDivElement>, index: string) => {
        let card = listItems.find(item => item.id === id)
        if (card && card.status != status){
            card.status = status
            setListItems( prev => ([
                card!,
                ...prev.filter(item => item.id !== id)
            ]))
        } else {
            const listCopy = [...listItems]
            const draggingItemContent = listCopy[+index]
            listCopy.splice(+index, 1)
            listCopy.splice(+target,0 ,draggingItemContent )

            setListItems(listCopy)
        }
    }

    return (
        <div className="flex flex-col text-center m-2 gap-8 w-80">
            {
                typesBlocks.map( container => (
                    <ContainerCards
                        status={container}
                        key={container}
                        items={listItems}
                        setTarget={setTarget}
                        isDragging={isDragging}
                        handleDragging={handleDragging}
                        handleUpdateList={handleUpdateList}
                    />
                ))
            }
        </div>
    )
}