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
        time: new Date().getHours() + ":" + new Date().getMinutes()
      }
    ]);
  };
  const showLoading = loading => {
    if (loading === true) {
      enterChat([
        ...Chatlog,
        {
          key: Chatlog.length,
          name: "loading",
          chat:
            '<div style="margin-bottom: -35px; margin-top: 6px;" class="sk-flow"><div class="sk-flow-dot"></div><div class="sk-flow-dot"></div><div class="sk-flow-dot"></div></div>',
          time: new Date().getHours() + ":" + new Date().getMinutes()
        }
      ]);
    } else {
      Chatlog.splice(-1, 1);
    }
  };
  useEffect(() => {
    var data;
    if (SubmitFired == 0) {
      enterChat([
        ...Chatlog,
        {
          key: Chatlog.length,
          name: "Bot",
          chat: "Welcome to the chat room, I'm Bot",
          time: new Date().getHours() + ":" + new Date().getMinutes()
        }
      ]);
    } else {
      async function BotApi() {
        showLoading(true);

        try {
          const response = await fetch("https://benjaminbotman.azurewebsites.net/qnamaker/knowledgebases/5632106f-b384-4d61-87d6-93cfc9bc2275/generateAnswer", {
            method: "POST",
            headers:{
              "Content-Type": "application/json",
              Authorization: "EndpointKey 25b4213b-5dff-40cd-9bfb-7595051ed0a8"
            },
            body: JSON.stringify({ question: Chatlog[Chatlog.length - 1].chat })
          });

          data = { bot_response: "Server is down try again later" };
          let responseObject = (await response.json()).answers;
          debugger
          data = {bot_response:responseObject[0].answer};
          if(data.bot_response === "No good match found in KB.")
          data = {bot_response:"English pls"};
        } catch (error) {
          data = { bot_response: "Server is down try again later" };
        }

        //This is where you I will call your API.
        await enterChat([
          ...Chatlog,
          {
            key: Chatlog.length,
            name: "Bot",
            chat: data.bot_response,
            time: new Date().getHours() + ":" + new Date().getMinutes()
          }
        ]);
        showLoading(false);
      }
      BotApi();
    }
  }, [SubmitFired]);
  useEffect(() => {
    var objDiv = document.getElementById("msgBody");
    objDiv.scrollTop = objDiv.scrollHeight;
  });
  return (
    <div className="card">
      <div className="card-header msg_head">
        <div className="d-flex bd-highlight">
          <div className="img_cont">
            <img src="Bot.jpeg" className="rounded-circle user_img" />
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
