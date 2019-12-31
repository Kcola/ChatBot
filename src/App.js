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

    if (SubmitFired == 0) {
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
    else {
      async function BotApi() {
        const response = await fetch("https://52.15.39.6:5000/send", {
          method: 'POST',
          body: JSON.stringify({ chat: Chatlog[Chatlog.length - 1].chat })
        });
        const data = await response.json();
        //This is where you I will call your API.
        enterChat([
          ...Chatlog,
          {
            key: Chatlog.length,
            name: 'Bot',
            chat: data.bot_response,
            time:
              new Date().getHours() +
              ":" +
              new Date().getMinutes()
          }
        ]);
        var objDiv = document.getElementById("msgBody");
        objDiv.scrollTop = objDiv.scrollHeight
      }
      BotApi();
    }

    var objDiv = document.getElementById("msgBody");
    objDiv.scrollTop = objDiv.scrollHeight
  }, [SubmitFired])
  return (
    <div className="card">
      <div className="card-header msg_head">
        <div className="d-flex bd-highlight">
          <div className="img_cont">
            <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img" />
            <span className="online_icon"></span>
          </div>

          <div className="user_info">
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
