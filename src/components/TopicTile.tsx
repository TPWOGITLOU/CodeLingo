import Link from "next/link"

interface Props {
    name: string
    slug: string
    language: string | null
}

const TopicTile = (props: Props) : JSX.Element => {
    
    console.log(props.name, "prop name")

    
    return(<>
                <p className="">{props.slug}</p>
                <div className="px-20 flex flex-row justify-between text-link-orange">
                    <Link href={`topics/learning?language=${props.language}&topic=${props.name}`}>
                    <p>learning link here</p>
                    </Link>
                    <p>challenge link here</p>
                </div>
        </>
        )
}

export default TopicTile