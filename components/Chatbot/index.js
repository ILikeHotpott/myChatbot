"use client";

import React, {useState} from "react";
import {ScrollShadow} from "@nextui-org/react";
import SidebarContainer from "./sidebar-with-gradient-background";
import Conversation from "./conversation";
import PromptInputWithBottomActions from "./prompt-input-with-bottom-actions";

export default function Chatbot() {
    const [userMessages, setUserMessages] = useState([]);
    const [assistantMessages, setAssistantMessages] = useState([]);

    const handleSendMessage = (message, role) => {
        if (role === "user") {
            setUserMessages((prevMessages) => [...prevMessages, message]);
        } else if (role === "assistant") {
            setAssistantMessages((prevMessages) => [...prevMessages, message]);
        }
    };

    return (
        <div className="h-full w-full max-w-full">
            <SidebarContainer>
                <div className="relative flex h-full flex-col">
                    <ScrollShadow className="flex max-h-[60vh] flex-col overflow-y-auto">
                        <Conversation userMessages={userMessages} assistantMessages={assistantMessages}/>
                    </ScrollShadow>
                    <div className="mt-auto flex justify-center items-center max-w-full flex-col gap-2">
                        <PromptInputWithBottomActions onSendMessage={handleSendMessage}
                        />
                        <p className="px-2 text-tiny text-default-400">
                            AI can make mistakes. Consider checking important information.
                        </p>
                    </div>
                </div>
            </SidebarContainer>
        </div>
    );
}
