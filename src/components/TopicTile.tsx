import Link from "next/link"

interface Props {
    name: string
    slug: string
    language: string | null
}

const TopicTile = (props: Props) : JSX.Element => {
    return(<>
                <p className="">{props.slug}</p>
                <div className="px-20 flex flex-row justify-between text-link-orange">
                    <Link href={`topics/learning?language=${props.language}&topic=${props.name}`}>
                    <p>learning link here</p>
                    </Link>
                    <Link href={`${props.language}/${props.name}/challenges`}>
                    <p>challenge link here</p>
                    </Link>
                </div>
        </>
        )
}

export default TopicTile