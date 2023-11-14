"use client";
import { cn } from "@/lib/utils";
import { useState, HTMLAttributes } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}
const ChatInput = ({ className, ...props }: { className: string }) => {
  const [input, setInput] = useState<string>("");
  return (
    <div {...props} className={cn("border-t border-zinc-300", className)}>
      <div className="relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none">
        <ReactTextareaAutosize
          rows={2}
          maxRows={4}
          value={input}
          autoFocus
          // disabled={isLoading}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write a message..."
          className="peer disabled:opacity-50 pr-14 resize-none block w-full border-0 bg-zinc-100 py-1.5 text-gray-900 focus:ring-0 text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default ChatInput;
