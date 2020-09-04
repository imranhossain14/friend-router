
import { useState } from 'react';
import React, { useEffect } from 'react';
import Friend from '../Friend';

const Home = () => {

      //allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule.
 //const [state, setState] = useState(initialState);
  const [friend, setFriend] = useState([]);

  // load data from API 

  useEffect(()=> {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setFriend(data))


  }  ,[])
    return (
        <div>

         <h1>Friends : {friend.length}</h1>
                {
                    // friend er data ta
                    friend.map(friend => <Friend friend = {friend}></Friend>)   
                }
        </div>
    );
};

export default Home;