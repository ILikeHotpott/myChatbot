"use client";

import React from "react";
import { Input } from "@nextui-org/react";

const PromptInput = React.forwardRef(({classNames = {}, ...props}, ref) => {
  return (
    <Input
      aria-label="Prompt"
      size="lg"
      minRows={1}
      placeholder="Enter a prompt here"
      variant="bordered"
      {...props}
    />
  );
});

export default PromptInput;

PromptInput.displayName = "PromptInput";
