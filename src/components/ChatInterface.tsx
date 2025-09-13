import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ChatMessage } from "./ChatMessage";
import { findBestMatch, quickResponses } from "@/data/campusData";
import { Send, BookOpen, Clock, Utensils, MapPin, FileText, Bot, GraduationCap } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const quickActions = [
  { icon: Clock, text: "Library Hours", query: "What are the library hours?" },
  { icon: Utensils, text: "Dining Options", query: "What dining options are available?" },
  { icon: MapPin, text: "Campus Facilities", query: "Where is the fitness center?" },
  { icon: FileText, text: "Registration", query: "When does registration open?" },
];

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your Smart Campus Assistant. I can help you with campus schedules, facilities, dining options, library services, and administrative procedures. What would you like to know?",
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateTyping = async (response: string) => {
    setIsTyping(true);
    // Simulate realistic typing delay
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1000));
    
    const newMessage: Message = {
      id: Date.now(),
      text: response,
      isUser: false,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, newMessage]);
    setIsTyping(false);
  };

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    const response = findBestMatch(messageText);
    await simulateTyping(response);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const TypingIndicator = () => (
    <div className="flex gap-3 mb-4">
      <div className="w-8 h-8 rounded-full bg-secondary-accent flex items-center justify-center">
        <Bot className="w-4 h-4 text-white" />
      </div>
      <div className="bg-card border border-border rounded-2xl rounded-bl-md p-3 shadow-soft">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );

  return (
    <Card className="w-full max-w-4xl mx-auto bg-gradient-card shadow-card border-0 overflow-hidden">
      <div className="bg-gradient-hero text-white p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Smart Campus Assistant</h2>
            <p className="text-white/80 text-sm">AI-powered campus information</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4 bg-muted/30 border-b">
        <p className="text-xs font-medium text-muted-foreground mb-3">Quick questions:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleSendMessage(action.query)}
              className="flex items-center gap-2 h-auto py-2 px-3 text-xs hover:bg-accent hover:border-accent-warm transition-colors"
            >
              <action.icon className="w-3 h-3" />
              <span className="truncate">{action.text}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="h-96 overflow-y-auto p-4 bg-gradient-chat">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message.text}
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-card border-t">
        <div className="flex gap-2">
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about campus schedules, facilities, dining, library services..."
            className="flex-1 bg-chat-input border-input focus:ring-2 focus:ring-primary/20"
            disabled={isTyping}
          />
          <Button
            onClick={() => handleSendMessage()}
            disabled={!inputValue.trim() || isTyping}
            size="icon"
            className="bg-primary hover:bg-primary-dark transition-colors shadow-chat"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};