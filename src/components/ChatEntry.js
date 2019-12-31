import React, { useState } from "react";
export default function ChatEntry({ newChat }) {
  const [chatVal, newChatVal] = useState([]);
  const handleSubmit = event => {
    event.preventDefault();
    if (chatVal.length > 0)
      newChat("Kola", chatVal)
    document.getElementById("chatInput").value = "";
    newChatVal("");
  }
  return (
    <div className="card-footer">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input onChange={event => newChatVal(event.target.value)} id="chatInput" className="form-control type_msg"
            placeholder="Type your message..."></input>
          <div onClick={handleSubmit} className="input-group-append">
            <span type="submit" className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></span>
          </div>
        </div>
      </form>

    </div>
  );
}
