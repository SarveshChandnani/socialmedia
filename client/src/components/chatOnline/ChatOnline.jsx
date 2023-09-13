import React from "react";
import "./chatOnline.css";

const ChatOnline = () => {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="imgContainer">
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="chatOnlineImage"
          />
          <div className="onlineBadge"></div>
        </div>
        <span className="onlineName">Sarvesh Chandnani</span>
      </div>
    </div>
  );
};

export default ChatOnline;
