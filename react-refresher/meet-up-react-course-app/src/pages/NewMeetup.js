import NewMeetupForm from "../components/meetups/NewMeetupForm";

import {useHistory} from 'react-router-dom'

function NewMeetupPage() {
  const history = useHistory()

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
    ).then(() => {
      history.replace('/')
    })
  }

  return (
    <div>
      <div>New Meetup Page</div>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </div>
  );
}

export default NewMeetupPage;
