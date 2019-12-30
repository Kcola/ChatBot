import React, { useState } from "react";
function ChatWindow() {
  const [Chatlog, enterChat] = useState([]);
  const [chatVal, newChatVal] = useState([]);
  const newChat = (newName, newChat) => {
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
      },
      {
        key: Chatlog.length + 1,
        name: "Bot",
        chat: "You're Trash",
        time:
          new Date().getHours() +
          ":" +
          new Date().getMinutes() +
          ":" +
          new Date().getSeconds()
      }
    ]);
  };
  return (
    <div>
      <input onChange={event => newChatVal(event.target.value)}></input>
      <button onClick={event => newChat("Kola", chatVal)}>Enter</button>
      {Chatlog.map(chat => (
        <h3
          className={chat.name == "Bot" ? "reciever" : "sender"}
          key={chat.key}
        >{`${chat.time} ${chat.name} : ${chat.chat}`}</h3>
      ))}
    </div>
  );
}

export default ChatWindow;
