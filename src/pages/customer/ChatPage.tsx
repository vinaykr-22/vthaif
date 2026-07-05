import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Paperclip, Search, MoreVertical } from 'lucide-react';
import { cn } from '@/utils/cn';
import { mockConversations, mockMessages } from '@/mock/data';
import { useAuthStore } from '@/store/authStore';

export default function ChatPage() {
  const [activeConv, setActiveConv] = useState(mockConversations[0].id);
  const [newMsg, setNewMsg] = useState('');
  const { user } = useAuthStore();
  const messages = mockMessages.filter(m => m.conversationId === activeConv);
  const activeConversation = mockConversations.find(c => c.id === activeConv);
  const otherParticipant = activeConversation?.participants.find(p => p.id !== user?.id);

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex h-[calc(100vh-8rem)] rounded-xl border border-border bg-card overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 border-r border-border flex flex-col">
        <div className="p-4 border-b border-border">
          <h2 className="font-semibold text-foreground mb-3">Messages</h2>
          <div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><input type="text" placeholder="Search conversations" className="w-full rounded-lg border border-input bg-background py-2 pl-9 pr-3 text-sm" /></div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {mockConversations.map(conv => {
            const other = conv.participants.find(p => p.id !== user?.id);
            return (
              <button key={conv.id} onClick={() => setActiveConv(conv.id)} className={cn("w-full flex items-center gap-3 p-4 text-left hover:bg-accent transition-colors border-b border-border", activeConv === conv.id && "bg-accent")}>
                <div className="relative"><img src={other?.avatar} alt="" className="h-10 w-10 rounded-full object-cover" />{other?.isOnline && <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-success border-2 border-card" />}</div>
                <div className="flex-1 min-w-0"><p className="text-sm font-medium text-foreground truncate">{other?.name}</p><p className="text-xs text-muted-foreground truncate">{conv.lastMessage.content}</p></div>
                {conv.unreadCount > 0 && <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xs font-medium">{conv.unreadCount}</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <img src={otherParticipant?.avatar} alt="" className="h-9 w-9 rounded-full object-cover" />
            <div><p className="text-sm font-semibold text-foreground">{otherParticipant?.name}</p><p className="text-xs text-muted-foreground">{otherParticipant?.isOnline ? 'Online' : 'Offline'}</p></div>
          </div>
          <button className="p-2 rounded-lg hover:bg-accent"><MoreVertical className="h-4 w-4 text-muted-foreground" /></button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map(msg => {
            const isMe = msg.senderId === user?.id;
            return (
              <div key={msg.id} className={cn("flex gap-2", isMe ? "justify-end" : "justify-start")}>
                {!isMe && <img src={msg.senderAvatar || otherParticipant?.avatar} alt="" className="h-7 w-7 rounded-full object-cover mt-1" />}
                <div className={cn("max-w-[70%] rounded-2xl px-4 py-2.5", isMe ? "bg-primary text-primary-foreground rounded-br-md" : "bg-muted text-foreground rounded-bl-md")}>
                  <p className="text-sm">{msg.content}</p>
                  <p className={cn("text-2xs mt-1", isMe ? "text-primary-foreground/60" : "text-muted-foreground")}>{new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <form onSubmit={e => { e.preventDefault(); setNewMsg(''); }} className="flex items-center gap-2">
            <button type="button" className="p-2 rounded-lg hover:bg-accent text-muted-foreground"><Paperclip className="h-4 w-4" /></button>
            <input type="text" value={newMsg} onChange={e => setNewMsg(e.target.value)} placeholder="Type a message..." className="flex-1 rounded-xl border border-input bg-background py-2.5 px-4 text-sm" />
            <button type="submit" className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"><Send className="h-4 w-4" /></button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
