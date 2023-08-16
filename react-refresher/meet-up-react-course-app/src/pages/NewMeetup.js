import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {

  function addMeetupHandler(meetupData) {}

  return (
    <div>
      <div>New Meetup Page</div>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </div>
  );
}

export default NewMeetupPage;
