import React from "react";
import "./message.css";

const Message = ({own}) => {
  return (
    <div className={own? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageTopImg"
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />

        <p className="messageText">
          helooo oooo oooo oooo oooo oooo oooo oooo ooo 
        </p>
      </div>
      <div className="messageBottom">
        <span>1 Hr Ago</span>
      </div> 
    </div>
  );
};

export default Message;
