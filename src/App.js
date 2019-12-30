import React, { useState, useEffect } from "react";
import ChatWindow from "./components/ChatWindow";
import ChatEntry from "./components/ChatEntry";
function App() {
  const [Chatlog, enterChat] = useState([]);
  const [SubmitFired, SetSubmitFired] = useState([]);
  const newChat = (newName, newChat) => {
    SetSubmitFired(Chatlog.length);
    enterChat([
      ...Chatlog,
      {
        key: Chatlog.length,
        name: newName,
        chat: newChat,
        time:
          new Date().getHours() +
          ":" +
          new Date().getMinutes() +
          ":" +
          new Date().getSeconds()
      }
    ]);
  };
   useEffect(() => {
     if(SubmitFired==0){
      enterChat([
        ...Chatlog,
        {
          key: Chatlog.length,
          name: 'Bot',
          chat: "Welcome to the chat room, I'm Bot",
          time:
            new Date().getHours() +
            ":" +
            new Date().getMinutes() +
            ":" +
            new Date().getSeconds()
        }
      ]);
     }
     else{
       //This is where you I will call your API.
      setTimeout(()=>{enterChat([
        ...Chatlog,
        {
          key: Chatlog.length,
          name: 'Bot',
          chat: "Bot response",
          time:
            new Date().getHours() +
            ":" +
            new Date().getMinutes() +
            ":" +
            new Date().getSeconds()
        }
      ]);}, 2000) 
     }
    
  }, [SubmitFired]) 
  return (
    <div>
      <ChatWindow Chatlog={Chatlog} />
      <ChatEntry newChat={newChat} />
    </div>
  );
}

export default App;
