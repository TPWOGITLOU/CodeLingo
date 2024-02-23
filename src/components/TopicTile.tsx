interface Props {
  name: string;
  slug: string;
}

const TopicTile = (props: Props): JSX.Element => {
  return (
    <>
      <p className="">{props.slug}</p>
      <div className="px-20 flex flex-row justify-between text-link-orange">
        <p>learning link here</p>
        <p>challenge link here</p>
      </div>
    </>
  );
};

export default TopicTile;
