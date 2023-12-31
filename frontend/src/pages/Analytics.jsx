import React, { useState } from 'react';
import axios from 'axios';
import { ContactService } from '../Services/ContactService';
import './Meeting.css';

import { headers } from '../Constants/ApiConstant';

function Analytics() {

  const [meetingId, setMeetingId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [meetingData, setMeetingData] = useState({
    meetingId: '',
    title: '',
    startTime: '',
    endTime: '',
    organizer: '',
    location: '',
  });

  const handleIdChange = (e) => {
    setMeetingId(e.target.value);
  };

  const handleDelete = () => {
    // Make a DELETE request to delete the meeting by ID
    let url = 'http://localhost:8080/api/meetings/' + meetingId;

    console.log(url);
    
    axios.delete(url , { headers : headers }).then((res) => {
      setSuccessMessage('successfully done');

      console.log(res);
      setErrorMessage('');
    })
    .catch((error) => {
      setSuccessMessage('');
      setErrorMessage('Error deleting event: ' + error.response.data.message);
    });
    };



  // const [successMessage, setSuccessMessage] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeetingData({ ...meetingData, [name]: value });
  };

  
  return (
    

     
      
    <div className='meeting'>
      <h2>Delete Event</h2>
      <div className='meeting'>
        <label>Event ID:</label>
        <input
          type="text"
          value={meetingId}
          onChange={handleIdChange}
        />
        <button onClick={handleDelete}>Delete</button>
      </div>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
    
  );
}


export default Analytics;