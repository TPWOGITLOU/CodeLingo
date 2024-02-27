import { Data, Status } from "@/interfaces";
import { CardItem } from "./CardItem";

interface Props {
    items: Data[]
    status: Status
    isDragging: boolean
    handleDragging: (dragging: boolean) => void
    handleUpdateList: (id: number, status: Status, e: React.DragEvent<HTMLDivElement>, index: string) => void
    setTarget: (target: string) => void
}

export const ContainerCards = ({items = [], status, handleDragging, isDragging, handleUpdateList, setTarget}: Props) => {
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const id = +e.dataTransfer.getData('text')
        const index = e.dataTransfer.getData('index')
        handleUpdateList(id, status, e, index)
        handleDragging(false)
    }
    return (
        <div 
        className="min-h-32 border-2 border-black p-2 m-2 rounded"
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
            <p className="underline underline-offset-1">{status} block</p>
            <div className="flex flex-row gap-x-0.5">

                {
                    items.map((item, index) => (
                        status === item.status &&
                        <CardItem
                        data={item}
                        key={item.id}
                        handleDragging={handleDragging}
                        index={index}
                        setTarget={setTarget}
                        />
                        ))
                    }
            </div>
        </div>
    )
}