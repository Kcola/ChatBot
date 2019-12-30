import React, { useState } from "react";
export default function ChatEntry({ newChat }) {
  const [chatVal, newChatVal] = useState([]);
  return (
    <div>
      <input onChange={event => newChatVal(event.target.value)}></input>
      <button onClick={event => newChat("Kola", chatVal)}>Enter</button>
    </div>
  );
}
