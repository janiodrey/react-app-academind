import MeetupItem from "./MeetupItem";
import css from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={css.list}>
      {props.meetups.map((el) => {
        return (
          <MeetupItem
            key={el.id}
            id={el.id}
            imageUrl={el.image}
            title={el.title}
            address={el.address}
            description={el.description}
          />
        );
      })}
    </ul>
  );
}

export default MeetupList;
