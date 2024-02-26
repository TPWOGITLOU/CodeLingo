import { Data, Status } from "@/interfaces";
import { CardItem } from "./CardItem";

interface Props {
    items: Data[]
    status: Status
    isDragging: boolean
    handleDragging: (dragging: boolean) => void
    handleUpdateList: (id: number, status: Status) => void
}

export const ContainerCards = ({items = [], status, handleDragging, isDragging, handleUpdateList}: Props) => {
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const id = +e.dataTransfer.getData('text')
        handleUpdateList(id, status)
        handleDragging(false)
    }
    return (
        <div 
        className="min-h-32 border-2 border-black p-2 m-2"
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
            <p className="underline underline-offset-1">{status} block</p>
            {
                items.map(item => (
                    status === item.status &&
                    <CardItem
                        data={item}
                        key={item.id}
                        handleDragging={handleDragging}
                    />
                ))
            }
        </div>
    )
}