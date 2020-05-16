import React from "react";
import "./spinkit.css";
import "./spinkit.min.css";
function ChatWindow({ Chatlog }) {
  return (
    <div id="msgBody" className="card-body msg_card_body">
      {Chatlog.map((chat) => (
        <div
          data-time={chat.time}
          name={
            chat.name === "Bot" || chat.name === "loading"
              ? "bubble-sender"
              : "bubble-reciever"
          }
          data-time={chat.time}
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
            data-time={chat.time}
            className="msg_cotainer"
            dangerouslySetInnerHTML={{
              __html: `${chat.chat}`,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default ChatWindow;
