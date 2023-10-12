


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Meeting.css';
import { ContactService } from '../Services/ContactService';

function Saved() {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Make an API request to fetch meetings when the component mounts
  //   axios.get('http://localhost:8080/api/meetings/get') // Replace with your actual API endpoint
  //     .then((response) => {
  //       setMeetings(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching meetings:', error);
  //       setLoading(false);
  //     });
  // }, []);

  const fetchMeeting = async () => {
    let response = await ContactService.getAllMeetings();
    console.log(response);
    if (response.data.length !== 0) {
      setMeetings(response.data);
      setLoading(false);
    }
    else {
      console.log("Unable to fetch");
    }
  }
  useEffect(() => {
    fetchMeeting()
  }, []);



  return (
    <div className='meeting'>
      <h2>Event List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {meetings && meetings.map((meeting) => (
            
            <li key={meeting.id}>{meeting.title}    {meeting.startTime} {meeting.EndTime} {meeting.organizer} {meeting.location}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Saved;