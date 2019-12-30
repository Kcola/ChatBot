import React, { useState } from "react";
export default function ChatEntry({ newChat }) {
  const [chatVal, newChatVal] = useState([]);
  const handleSubmit = event => {
    event.preventDefault();
    newChat("Kola", chatVal)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={event => newChatVal(event.target.value)}></input>
        <input type="submit" value="Send"></input>
      </form>

    </div>
  );
}
