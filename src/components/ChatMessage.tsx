import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { GraduationCap, User } from "lucide-react";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp?: Date;
}

export const ChatMessage = ({ message, isUser, timestamp }: ChatMessageProps) => {
  return (
    <div className={`flex gap-3 mb-4 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      <Avatar className={`w-8 h-8 ${isUser ? 'bg-primary' : 'bg-secondary-accent'}`}>
        <AvatarFallback className={`${isUser ? 'text-primary-foreground' : 'text-white'}`}>
          {isUser ? <User className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
        </AvatarFallback>
      </Avatar>
      <div className={`max-w-[80%] ${isUser ? 'text-right' : 'text-left'}`}>
        <div
          className={`inline-block p-3 rounded-2xl shadow-soft transition-all duration-300 ${
            isUser
              ? 'bg-primary text-primary-foreground rounded-br-md'
              : 'bg-card border border-border rounded-bl-md'
          }`}
        >
          <p className="whitespace-pre-wrap text-sm leading-relaxed">{message}</p>
        </div>
        {timestamp && (
          <p className="text-xs text-muted-foreground mt-1">
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        )}
      </div>
    </div>
  );
};