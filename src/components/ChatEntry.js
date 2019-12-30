import React, { useState } from "react";
export default function ChatEntry({ newChat }) {
  const [chatVal, newChatVal] = useState([]);
  const handleSubmit = event => {
    event.preventDefault();
    if(chatVal.length > 0)
    newChat("Kola", chatVal)
    document.getElementById("chatInput").value = "";
    newChatVal("");
  }
  return (
    <div class="card-footer">
      <form onSubmit={handleSubmit}>
      <div class="input-group">
          <input onChange={event => newChatVal(event.target.value)} id ="chatInput" class="form-control type_msg"
              placeholder="Type your message..."></input>
          <div onClick={handleSubmit} class="input-group-append">
              <span type="submit" class="input-group-text send_btn"><i class="fas fa-location-arrow"></i></span>
          </div>
      </div>
      </form>

    </div>
  );
}
