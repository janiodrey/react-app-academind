import Card from "../ui/Card";
import css from "./NewMeetupForm.module.css";

function NewMeetupForm() {
  return (
    <Card>
      <form className={css.form}>
        <div className={css.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" required />
        </div>
        <div className={css.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" required />
        </div>
        <div className={css.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required />
        </div>
        <div className={css.control}>
          <label htmlFor="description">Address</label>
          <textarea type="text" id="description" required rows="5"></textarea>
        </div>
        <div className={css.actions}>
            <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
