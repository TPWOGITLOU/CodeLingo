import { Data } from "@/interfaces"

interface Props {
    index: number
    data: Data
    handleDragging: (dragging: boolean) => void
    setTarget: (target: string) => void
}

export const CardItem = ({data, handleDragging, index, setTarget}: Props) => {

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        e.dataTransfer.setData('text', `${data.id}`)
        e.dataTransfer.setData(`index`, `${index}`)
        handleDragging(true)
        
    }

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        e.dataTransfer.setData('target', `${index}`)
        setTarget(`${index}`)
    }

    const handleDragEnd = () => handleDragging(false)

    return(
        <div className="border-1 border-black rounded my-1 p-0.5"
        draggable
        onDragStart={(e) => handleDragStart(e, index)}
        onDragEnd={handleDragEnd}
        onDragEnter={(e) => handleDragEnter(e, index)}
        >
            {/* <p>{index}</p> */}
            <p>{data.content}</p>

        </div>
    )
}