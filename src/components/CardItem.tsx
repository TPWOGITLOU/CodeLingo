import { Data } from "@/interfaces"

interface Props {
    data: Data
    handleDragging: (dragging: boolean) => void
}

export const CardItem = ({data, handleDragging}: Props) => {

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text', `${data.id}`)
        handleDragging(true)
    }

    const handleDragEnd = () => handleDragging(false)

    return(
        <div className="border-1 border-black rounded my-1 p-0.5"
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        >
            <p>{data.content}</p>
        </div>
    )
}