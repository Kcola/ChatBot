import React from "react";
function ChatWindow({ Chatlog }) {
  debugger;
  console.log(typeof Chatlog);
  return (
    <div>
      {Chatlog.map(chat => (
        <h3
          className={chat.name === "Bot" ? "reciever" : "sender"}
          key={chat.key}
        >{`${chat.time} ${chat.name} : ${chat.chat}`}</h3>
      ))}
    </div>
  );
}

export default ChatWindow;
