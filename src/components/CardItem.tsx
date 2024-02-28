import { Data } from "../../lib/interfaces/interfaces"

interface Props {
    index: number
    data: Data
    handleDragging: (dragging: boolean) => void
    setTarget: (target: string) => void
}

export const CardItem = ({data, handleDragging, index, setTarget}: Props) => {

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        e.dataTransfer.clearData()
        e.dataTransfer.setData('text', `${data.id}`)
        e.dataTransfer.setData(`index`, `${index}`)
        handleDragging(true)
        
    }

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        //e.dataTransfer.setData('target', `${index}`)
        setTarget(`${index}`)
    }

    const handleDragEnd = () => handleDragging(false)

    return(
        <div className="border-1 border-black bg-white rounded p-1 text-lg"
        draggable
        onDragStart={(e) => handleDragStart(e, index)}
        onDragEnd={handleDragEnd}
        onDragEnter={(e) => handleDragEnter(e, index)}
        >
            {/* <p>{index}</p> */}
            <p className="dark:text-text-purple">{data.content}</p>

        </div>
    )
}