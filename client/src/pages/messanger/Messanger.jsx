import React from "react";
import "./messanger.css";
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";

const Messanger = () => {
  return (
    <>
      <Topbar />
      <div className="messanger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
          
          <input className="chatMenuInput"  placeholder="Search for your friends"/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          </div>
        </div>
        <div className="chatBox">
          
          <div className="chatBoxWrapper">
          <div className="chatBoxTop">
           <Message/>
            <Message own/>
            <Message/>
            <Message own/>
            <Message/>
            <Message own/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
          </div>
          <div className="chatBoxBottom">
            <textarea className="messageArea" placeholder="Write Something......"></textarea>
            <button className="messageSend">Send Message</button>
          </div>
           
          </div>
        </div>
        <div className="chatOnline">
         
          <div className="chatOnlineWrapper">
          <ChatOnline/>
          <ChatOnline/>
          <ChatOnline/>
          <ChatOnline/>

          <ChatOnline/>
          <ChatOnline/>
          <ChatOnline/>
          <ChatOnline/>
          <ChatOnline/>
          
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Messanger;
