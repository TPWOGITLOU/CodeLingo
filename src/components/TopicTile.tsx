// type Topic = {
//     topic: string
//     language: string
//     topicSlug: string
//     topicInfo: {
//         [key: string]: string
//     }
// }

interface Props {
    name: string
    slug: string
}

const TopicTile = (props: Props) : JSX.Element => {
    

    
    return(
        <li  className="p-8 text-xl" >
            <p >{props.name}</p>
            <p className="">{props.slug}</p>
        </li>
    )
}

export default TopicTile