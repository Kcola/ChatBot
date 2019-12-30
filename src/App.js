import React, { useState } from "react";
import ChatWindow from "./components/ChatWindow";

function App() {
  const [Chatlog, enterChat] = useState([]);
  const [chatVal, newChatVal] = useState([]);
  const newChat = (newName, newChat) => {
    enterChat([
      ...Chatlog,
      {
        name: newName,
        chat: newChat,
        time:
          new Date().getHours() +
          ":" +
          new Date().getMinutes() +
          ":" +
          new Date().getSeconds()
      },
      {
        name: 'Bot',
        chat: "You're Trash",
        time:
          new Date().getHours() +
          ":" +
          new Date().getMinutes() +
          ":" +
          new Date().getSeconds()
      }
    ]);
  }
  return (
    <div>
      <input onChange={event => newChatVal(event.target.value)}></input>
      <button onClick={event => newChat('Kola', chatVal)}>Enter</button>
        {Chatlog.map(chat => (
          <p>{`${chat.time} ${chat.name} : ${chat.chat}`}</p>
        ))}
    </div>
  );
}

export default App;
