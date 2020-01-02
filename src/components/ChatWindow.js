import React from "react";
import "./spinkit.css";
import "./spinkit.min.css";
function ChatWindow({ Chatlog }) {
  return (
    <div id="msgBody" className="card-body msg_card_body">
      {Chatlog.map(chat => (
        <div
          className={
            chat.name === "Bot" || chat.name === "loading"
              ? "d-flex justify-content-start mb-4"
              : "d-flex justify-content-end mb-4"
          }
          key={chat.key}
        >
          <div className="img_cont_msg">
            <img
              src={
                chat.name === "Bot" || chat.name === "loading"
                  ? "Bot.jpeg"
                  : "logo512.png"
              }
              className="rounded-circle user_img_msg"
            />
          </div>
          <div
            className="msg_cotainer"
            dangerouslySetInnerHTML={{
              __html:
                `${chat.chat}` +
                `<span class="msg_time">${chat.time} , Today</span>`
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default ChatWindow;
