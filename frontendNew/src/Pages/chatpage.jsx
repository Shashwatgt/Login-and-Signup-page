import React, { useState, useEffect } from "react";
import axios from "axios";

const chatpage = () => {
  const [chats,setChats]=useState([])

  const fetchChats = async () => {
    const data = await axios.get("http://127.0.0.1:3000/chats");
    console.log(data);
  };

  useEffect(() => {
    fetchChats();
  },[]);

  return (
  <div>
    {/* {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div> // Use the unique identifier of the chat
      ))} */}
     chatapp
  </div> 
   

    
);
};

export default chatpage;
