import React from "react";
function ChatWindow({ Chatlog }) {
  return (
    <div id="msgBody" className="card-body msg_card_body">
      {Chatlog.map(chat => (
        <div
          className={chat.name === "Bot" ? "d-flex justify-content-start mb-4" : "d-flex justify-content-end mb-4"}
          key={chat.key}>
          <div className="img_cont_msg">
            <img src={chat.name === "Bot" ? "https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" : "logo512.png"}
              className="rounded-circle user_img_msg" />
          </div>
          <div className="msg_cotainer">{`${chat.chat}`}<span className="msg_time">{`${chat.time} , Today`}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatWindow;
