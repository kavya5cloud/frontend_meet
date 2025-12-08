import React, { useState } from 'react';
import { Video, Keyboard, ArrowRight, Loader2, UserPlus, ShieldCheck } from 'lucide-react';

const MeetingCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'new' | 'join'>('new');
  const [meetingCode, setMeetingCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleStart = () => {
    setIsLoading(true);
    setTimeout(() => {
        window.location.href = "https://meet.google.com/new"; 
        setIsLoading(false);
    }, 1200);
  };

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!meetingCode) return;
    setIsLoading(true);
     setTimeout(() => {
        window.location.href = `https://meet.google.com/${meetingCode}`; 
        setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="relative w-full mx-auto z-10">
      
      {/* Main Card */}
      <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden transition-all duration-500 ease-pop hover:shadow-3xl hover:-translate-y-1">
        
        {/* Header/Calendar Area */}
        <div className="bg-black p-6 sm:p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-800 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-50" aria-hidden="true"></div>
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <p className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wider">Today</p>
                        <h3 className="text-2xl sm:text-3xl font-display font-bold">Start Talking</h3>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm" aria-hidden="true">
                        <Video size={18} className="text-white" />
                    </div>
                </div>
                
                {/* Sliding Tab Pill */}
                <div role="tablist" aria-label="Meeting modes" className="relative flex bg-white/10 p-1 rounded-full backdrop-blur-md isolate">
                    {/* The Sliding White Background */}
                    <div 
                        className={`absolute inset-y-1 w-[calc(50%-4px)] bg-white rounded-full shadow-lg transition-all duration-300 ease-pop z-0 ${activeTab === 'new' ? 'left-1' : 'left-[calc(50%)]'}`}
                        aria-hidden="true"
                    ></div>

                    <button 
                        role="tab"
                        aria-selected={activeTab === 'new'}
                        aria-controls="panel-new"
                        id="tab-new"
                        onClick={() => setActiveTab('new')}
                        className={`relative z-10 flex-1 py-1.5 sm:py-2 rounded-full text-sm font-bold transition-colors duration-300 ${activeTab === 'new' ? 'text-black' : 'text-gray-400 hover:text-white'}`}
                    >
                        New
                    </button>
                    <button 
                        role="tab"
                        aria-selected={activeTab === 'join'}
                        aria-controls="panel-join"
                        id="tab-join"
                        onClick={() => setActiveTab('join')}
                        className={`relative z-10 flex-1 py-1.5 sm:py-2 rounded-full text-sm font-bold transition-colors duration-300 ${activeTab === 'join' ? 'text-black' : 'text-gray-400 hover:text-white'}`}
                    >
                        Join
                    </button>
                </div>
            </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 bg-white min-h-[280px]">
             {activeTab === 'new' ? (
                <div 
                    role="tabpanel" 
                    id="panel-new" 
                    aria-labelledby="tab-new"
                    className="space-y-5 sm:space-y-6 animate-fade-in"
                >
                    <div className="flex items-center gap-4 p-3 sm:p-4 rounded-2xl bg-gray-50 border border-gray-100 transition-all duration-300 ease-pop hover:scale-[1.02]">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0" aria-hidden="true">
                            <UserPlus size={18} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 text-sm sm:text-base">Instant Meeting</p>
                            <p className="text-xs text-gray-500">No scheduling required.</p>
                        </div>
                    </div>

                    <button 
                        onClick={handleStart}
                        disabled={isLoading}
                        aria-busy={isLoading}
                        aria-label="Launch Circle Meeting"
                        className="w-full py-3.5 sm:py-4 bg-black text-white rounded-2xl font-bold text-base sm:text-lg hover:bg-gray-800 transition-all duration-300 ease-pop flex items-center justify-center gap-2 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.95]"
                    >
                         {isLoading ? <Loader2 className="animate-spin" aria-hidden="true" /> : 'Launch Circle'}
                         {!isLoading && <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />}
                    </button>
                    
                    <p className="text-center text-xs text-gray-400 font-medium">
                        Secure • Encrypted • Free
                    </p>
                </div>
             ) : (
                <form 
                    onSubmit={handleJoin} 
                    role="tabpanel" 
                    id="panel-join" 
                    aria-labelledby="tab-join"
                    className="space-y-5 sm:space-y-6 animate-fade-in"
                >
                     <div className="flex items-center gap-4 p-3 sm:p-4 rounded-2xl bg-gray-50 border border-gray-100 transition-all duration-300 ease-pop hover:scale-[1.02]">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0" aria-hidden="true">
                            <ShieldCheck size={18} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 text-sm sm:text-base">Private Room</p>
                            <p className="text-xs text-gray-500">Enter your access code.</p>
                        </div>
                    </div>

                    <div className="relative group">
                        <label htmlFor="meeting-code-input" className="sr-only">Meeting Access Code</label>
                        <input 
                            id="meeting-code-input"
                            type="text" 
                            placeholder="abc-def-ghi"
                            value={meetingCode}
                            onChange={(e) => setMeetingCode(e.target.value)}
                            aria-required="true"
                            className="w-full bg-white border-2 border-gray-100 focus:border-black rounded-2xl px-4 py-3.5 sm:py-4 outline-none text-center font-mono text-base sm:text-lg transition-all duration-300 ease-pop placeholder:text-gray-300 group-hover:border-gray-200 focus:shadow-lg focus:scale-[1.02]"
                        />
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400 transition-colors duration-300 group-focus-within:text-black" aria-hidden="true">
                            <Keyboard size={16} />
                        </div>
                    </div>

                    <button 
                        type="submit"
                        disabled={!meetingCode || isLoading}
                        aria-busy={isLoading}
                        className="w-full py-3.5 sm:py-4 bg-black text-white rounded-2xl font-bold text-base sm:text-lg hover:bg-gray-800 transition-all duration-300 ease-pop shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.95] disabled:opacity-50 disabled:shadow-none disabled:transform-none disabled:hover:bg-black"
                    >
                         {isLoading ? <Loader2 className="animate-spin mx-auto" aria-hidden="true" /> : 'Join Now'}
                    </button>
                </form>
             )}
        </div>
      </div>
      
      {/* Card Decoration */}
      <div className="absolute -z-10 top-3 -right-3 sm:top-4 sm:-right-4 w-full h-full bg-gray-900 rounded-[1.5rem] sm:rounded-[2rem] opacity-5 transition-opacity duration-500 group-hover:opacity-10" aria-hidden="true"></div>
    </div>
  );
};

export default MeetingCard;