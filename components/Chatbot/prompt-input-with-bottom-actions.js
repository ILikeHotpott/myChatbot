import React, {useState} from "react";
import {Button, ScrollShadow, Tooltip} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import axios from "axios";
import {cn} from "./cn";
import PromptInput from "./prompt-input";

export default function PromptInputWithBottomActions({onSendMessage}) {
    const [prompt, setPrompt] = useState("");
    const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);

    const ideas = [
        {
            title: "Help me make a travel plan to Australia",
            description: "include all necessary details",
        },
        {
            title: "Give me 10 ideas for my next blog post",
            description: "include only the best ideas",
        },
        {
            title: "Activities for making friends in a new city",
            description: "be as objective as possible",
        },
        {
            title: "Write a text message to my friend",
            description: "be polite and friendly",
        },
    ];

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isWaitingForResponse || !prompt) return;

        setIsWaitingForResponse(true);

        try {
            const userMessage = {content: prompt};
            onSendMessage(userMessage, "user");
            setPrompt(""); // 清空输入栏

            const response = await axios.post("https://chatbot.music-top.com/api/chatbot/", userMessage, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const assistantMessage = {content: response.data};
            onSendMessage(assistantMessage, "assistant");
        } catch (error) {
            console.error(error);
        } finally {
            setIsWaitingForResponse(false);
        }
    };

    return (
        <div className="flex w-full flex-col gap-4">
            <ScrollShadow hideScrollBar className=" flex flex-nowrap gap-2" orientation="horizontal">
                <div className="flex gap-2">
                    {ideas.map(({title, description}, index) => (
                        <Button key={index} className=" flex h-14 flex-col items-start gap-0" variant="flat">
                            <p className="-mb-[1px]" >{title}</p>
                            <p className="text-default-500 -mb-0.5">{description}</p>
                        </Button>
                    ))}
                </div>
            </ScrollShadow>
            <div className="flex justify-center w-full items-center">
                <form onSubmit={handleSubmit}
                      className=" flex w-full flex-col items-start rounded-medium bg-default-100 transition-colors hover:bg-default-200/70">
                    <PromptInput
                        classNames={{
                            inputWrapper: "!bg-transparent shadow-none",
                            innerWrapper: "relative",
                            input: "pt-1 pl-2 pb-6 !pr-10 text-medium",
                        }}
                        endContent={
                            <div className="flex items-end gap-2">
                                <Tooltip showArrow content="Send message">
                                    <Button
                                        isIconOnly
                                        color={!prompt ? "default" : "primary"}
                                        isDisabled={!prompt || isWaitingForResponse}
                                        radius="lg"
                                        size="sm"
                                        variant="solid"
                                        type="submit"
                                    >
                                        <Icon
                                            className={cn(
                                                "[&>path]:stroke-[2px]",
                                                !prompt ? "text-default-600" : "text-primary-foreground",
                                            )}
                                            icon="solar:arrow-up-linear"
                                            width={20}
                                        />
                                    </Button>
                                </Tooltip>
                            </div>
                        }
                        radius="lg"
                        value={prompt}
                        variant="flat"
                        onValueChange={setPrompt}
                    />

                </form>
            </div>
        </div>
    );
}
