
import React from 'react';

interface HeaderProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
    return (
        <header className="h-[52px] bg-brand-surface backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 gap-4 flex-shrink-0">
            <div className="flex items-center gap-3">
                <div className="w-[30px] h-[30px] rounded-full bg-slate-200/10 grid place-items-center font-bold text-xs flex-shrink-0">
                    HB
                </div>
                <div>
                    <div className="text-sm font-semibold text-slate-200">Unified Operations & Quality Handbook</div>
                    <div className="text-xs text-slate-200/60 -mt-0.5">Survey-ready • Person-centered • Golden Thread</div>
                </div>
            </div>
            <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                </span>
                <input 
                    id="searchInput" 
                    className="bg-black/20 border border-white/20 rounded-md py-1 pl-8 pr-3 text-white text-xs w-40 md:w-52 placeholder:text-slate-400 focus:ring-2 focus:ring-brand-accent focus:outline-none transition" 
                    placeholder="Search chapters..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </header>
    );
};
