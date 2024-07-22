import React, { useEffect, useState } from "react";

export default function TextTyper({ text }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, 50); // 50ms 可以根据需要调整速度

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}</span>;
}
