import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {

  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-getting-started-933dc-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }

  return (
    <div>
      <div>New Meetup Page</div>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </div>
  );
}

export default NewMeetupPage;
