
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUp, X, MessageCircle } from "lucide-react";

export function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hi there! 👋 How can I help you with your learning journey today?",
      sender: "bot",
      timestamp: new Date().toISOString(),
    },
  ]);

  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      content: message,
      sender: "user",
      timestamp: new Date().toISOString(),
    };

    setMessages([...messages, userMessage]);
    setMessage("");

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        "I'd be happy to help with that! Let me find some resources for you.",
        "Great question! The best way to approach this is...",
        "You're making excellent progress! For your next step, I recommend...",
        "That's a common challenge. Here's how other learners have solved it...",
        "Let me check that for you. According to our course material...",
      ];

      const botMessage = {
        id: messages.length + 2,
        content: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: "bot",
        timestamp: new Date().toISOString(),
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {isOpen ? (
        <Card className="fixed bottom-4 right-4 w-80 md:w-96 z-50 shadow-lg border-primary/20">
          <CardHeader className="p-4 pb-2 flex flex-row justify-between items-center bg-primary/5 border-b">
            <CardTitle className="text-base flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-primary text-white text-xs">AI</AvatarFallback>
              </Avatar>
              Learning Assistant
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-0 h-80 overflow-y-auto">
            <div className="flex flex-col p-4 gap-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      msg.sender === "user" 
                        ? "bg-primary text-white" 
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p>{msg.content}</p>
                    <div
                      className={`text-xs mt-1 ${
                        msg.sender === "user" ? "text-white/70" : "text-gray-500"
                      }`}
                    >
                      {new Date(msg.timestamp).toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="p-2 border-t">
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <Input
                placeholder="Type your question..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon" className="shrink-0">
                <ArrowUp className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 z-50"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </>
  );
}
