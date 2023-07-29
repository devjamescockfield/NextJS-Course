import Card from "../../components/ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="text" required id="image" />
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
