import Card from "../ui/Card";
import css from "./MeetupItem.module.css";

function MeetupItem(props) {
  return (
    <li className={css.item}>
      <Card>
        <div className={css.image}>
          <img src={props.imageUrl} alt={props.title} />
        </div>
        <div className={css.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={css.actions}>
          <button>To Favorites</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
