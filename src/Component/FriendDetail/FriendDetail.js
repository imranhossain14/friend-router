import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const FriendDetail = () => {
    const {friendId} = useParams();
    //amra object pabo api theke. tai default value dilam empty object
    const [friend, setFriend] = useState({}); 
    const {name, email, id,phone , website } = friend;
    
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(response =>response.json())
        .then(data =>setFriend(data));

    }, [])

  
    return (
        <div>
            <h2> This is Friend component {friendId} </h2>
            <h2>Name : {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website : {website}</p>
            {/* <p>Address: {address.zipcode}</p> */}
        </div>
    );
};

export default FriendDetail;