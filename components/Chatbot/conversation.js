import React, { useEffect, useRef, useState } from "react";
import MessageCard from "./message-card";

export default function Conversation({ userMessages, assistantMessages }) {
  const [messages, setMessages] = useState([]);
  const messageEndRef = useRef(null);

  // 合并 userMessages 和 assistantMessages
  useEffect(() => {
    const combinedMessages = [];
    const maxLength = Math.max(userMessages.length, assistantMessages.length);

    for (let i = 0; i < maxLength; i++) {
      if (i < userMessages.length) {
        combinedMessages.push({ role: "user", message: userMessages[i] });
      }
      if (i < assistantMessages.length) {
        combinedMessages.push({ role: "assistant", message: assistantMessages[i] });
      }
    }

    setMessages(combinedMessages);
  }, [userMessages, assistantMessages]);

  // 当 messages 变化时，滚动到底部
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex flex-col gap-4 px-1 overflow-y-auto" style={{ maxHeight: "60vh" }}>
      {messages.map(({ role, message }, index) => (
        <MessageCard
          key={index}
          role={role}
          attempts={index === 1 ? 2 : 1}
          avatar={
            role === "assistant"
              ? "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/chatbot.webp"
              : "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/head.jpg"
          }
          currentAttempt={index === 1 ? 2 : 1}
          message={message.content}
          messageClassName={role === "user" ? "bg-content3 text-content3-foreground" : ""}
          showFeedback={role === "assistant"}
          className="mb-2"
        />
      ))}
      <div ref={messageEndRef} />
    </div>
  );
}
