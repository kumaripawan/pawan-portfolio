"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";

type Message = { sender: "user" | "bot"; text: string };

export default function ChatBot() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const nodeRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Show only on home page
  useEffect(() => {
    if (pathname !== "/") return;

    const hero = document.getElementById("home");
    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMsg: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMsg: Message = {
        sender: "bot",
        text: data.reply || "Sorry, I couldn’t respond.",
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("ChatBot error:", err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error talking to the server." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  if (pathname !== "/" || !visible) return null;

  return (
    <Draggable handle=".drag-handle" nodeRef={nodeRef}>
      <div ref={nodeRef} className="fixed bottom-6 right-6 z-50 max-w-[90vw]">
        <Resizable
          size={open ? undefined : { width: 320, height: 40 }}
          defaultSize={{ width: 320, height: 400 }}
          minWidth={260}
          minHeight={open ? 300 : 40}
          maxWidth={500}
          maxHeight={600}
          enable={{
            bottom: open,
            right: true,
            bottomRight: open,
          }}
          className="border border-white/10 rounded-lg overflow-hidden shadow-lg bg-black/80 backdrop-blur-md flex flex-col"
        >
          {/* Header */}
          <div className="drag-handle cursor-move bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600 text-white px-4 py-2 flex justify-between items-center">
            <span className="font-semibold">💬 ChatBot</span>
            <button
              onClick={() => setOpen(!open)}
              className="text-sm bg-white/20 px-2 py-0.5 rounded hover:bg-white/30 transition"
            >
              {open ? "–" : "+"}
            </button>
          </div>

          {open && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-2 p-3 text-sm">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`p-2 rounded-lg max-w-[75%] ${
                      m.sender === "user"
                        ? "bg-indigo-600 text-white self-end ml-auto"
                        : "bg-gray-700 text-gray-100 self-start"
                    }`}
                  >
                    {m.text}
                  </div>
                ))}
                {loading && (
                  <div className="p-2 rounded-lg bg-gray-700 text-gray-300 w-fit">
                    Bot is typing...
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input bar */}
              <div className="flex gap-2 p-3 border-t border-white/10 bg-black">
                <input
                  type="text"
                  className="flex-1 rounded-lg bg-gray-800 text-gray-100 px-3 py-2 text-sm focus:outline-none"
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button
                  onClick={sendMessage}
                  className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600 px-4 py-2 rounded-lg text-white text-sm hover:opacity-90 transition"
                >
                  Send
                </button>
              </div>
            </>
          )}
        </Resizable>
      </div>
    </Draggable>
  );
}
