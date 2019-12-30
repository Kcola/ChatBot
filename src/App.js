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
          new Date().getMinutes()
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
            new Date().getMinutes()
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
            new Date().getMinutes()
        }
      ]);}, 2000) 
     }
    
  }, [SubmitFired]) 
  return (
    <div class="card">
      <div class="card-header msg_head">
      <div class="d-flex bd-highlight">
        <div class="img_cont">
          <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img" />
          <span class="online_icon"></span>
        </div>

        <div class="user_info">
          <span>Chat with Bot</span>
        </div>


      </div>
    </div>
      <ChatWindow Chatlog={Chatlog} />
      <ChatEntry newChat={newChat} />
    </div>
  );
}

export default App;
