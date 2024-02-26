import { Status, Data } from "@/interfaces";
import { ContainerCards } from "./ContainerCards";
import { data } from "@/blockTestData";
import { useState } from "react";

const typesBlocks: Status[] = ['first', 'second']

export const DragAndDrop = () => {

    const [isDragging, setIsDragging] = useState(false)
    const [listItems, setListItems] = useState<Data[]>(data)

    const handleDragging = (dragging: boolean) => setIsDragging(dragging)

    const handleUpdateList = (id: number, status: Status) => {
        let card = listItems.find(item => item.id === id)

        if (card && card.status != status){
            card.status = status

            setListItems( prev => ([
                card!,
                ...prev.filter(item => item.id !== id)
            ]))
        }
    }

    return (
        <div className="flex flex-row m-2 gap-8">
            {
                typesBlocks.map( container => (
                    <ContainerCards
                        status={container}
                        key={container}
                        items={listItems}

                        isDragging={isDragging}
                        handleDragging={handleDragging}
                        handleUpdateList={handleUpdateList}
                    />
                ))
            }
        </div>
    )
}