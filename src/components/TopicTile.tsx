import Link from "next/link";

interface Props {
  name: string;
  slug: string;
}

const TopicTile = (props: Props): JSX.Element => {
  return (
    <>
      <p className="">{props.slug}</p>
      <div className="px-20 flex flex-row justify-between text-link-orange">
        <Link href="/topic/python/learning">
          <p>learning link here</p>
          </Link>
        <p>challenge link here</p>
      </div>
    </>
  );
};

export default TopicTile;
