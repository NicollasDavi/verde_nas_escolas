import React, { useState, useEffect, useRef } from "react";

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Role = "system" | "user" | "assistant";

interface Message {
    
  role: Role;
  content: string;
}

export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "system", content: "Você é um assistente útil." },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!isOpen) return null;

  function handleSend() {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: 80,
        right: 24,
        width: 360,
        height: 480,
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: 8,
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        zIndex: 10001,
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="chat-modal-title"
    >
      <header
        style={{
          padding: "12px 16px",
          borderBottom: "1px solid #eee",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: 16,
          backgroundColor: "#22c55e",
          color: "white",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        <h2 id="chat-modal-title">Chat com a Eco</h2>
        <button
          onClick={onClose}
          aria-label="Fechar chat"
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: 20,
            cursor: "pointer",
          }}
        >
          ×
        </button>
      </header>

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: 12,
          fontSize: 14,
        }}
      >
        {messages
          .filter((m) => m.role !== "system")
          .map((msg, i) => (
            <div
              key={i}
              style={{
                marginBottom: 10,
                textAlign: msg.role === "user" ? "right" : "left",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "8px 12px",
                  borderRadius: 16,
                  backgroundColor:
                    msg.role === "user" ? "#22c55e" : "#e5e5ea",
                  color: msg.role === "user" ? "white" : "black",
                  maxWidth: "75%",
                  wordBreak: "break-word",
                }}
              >
                {msg.content}
              </span>
            </div>
          ))}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        style={{
          borderTop: "1px solid #eee",
          padding: 12,
          display: "flex",
          gap: 8,
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
          style={{
            flex: 1,
            padding: 8,
            borderRadius: 4,
            border: "1px solid #ccc",
            fontSize: 14,
          }}
          aria-label="Mensagem"
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#22c55e",
            color: "white",
            border: "none",
            borderRadius: 4,
            padding: "8px 12px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
