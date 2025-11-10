import React from 'react';
import type { NavSection, NavItem } from '../types';

interface SidebarProps {
    sections: NavSection[];
    activeChapterKey: string;
    onSelectChapter: (key: string) => void;
}

const TocItem: React.FC<{ item: NavItem, isActive: boolean, onClick: () => void }> = ({ item, isActive, onClick }) => (
    <button 
        className={`w-full text-left p-2 rounded-lg flex flex-col gap-0.5 transition-all duration-100 ease-out hover:bg-white/10 hover:translate-x-0.5 ${isActive ? 'bg-brand-accent-active ring-1 ring-inset ring-brand-accent-border' : ''}`}
        onClick={onClick}
    >
        <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-slate-200/10 grid place-items-center text-xs font-medium flex-shrink-0">{item.kick}</span>
            <span className="text-sm text-slate-200">{item.text}</span>
        </div>
        {item.sub && <span className="text-xs text-slate-400 pl-7">{item.sub}</span>}
    </button>
);


export const Sidebar: React.FC<SidebarProps> = ({ sections, activeChapterKey, onSelectChapter }) => {
    return (
        <aside className="bg-slate-950 border-r border-slate-700/20 p-2 lg:p-3 overflow-y-auto hidden lg:flex flex-col gap-3 h-full">
           {sections.map((section, index) => (
                <div key={index}>
                    <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2 px-2">{section.label}</div>
                    <div className="flex flex-col gap-1">
                        {section.items.map(item => (
                            <TocItem 
                                key={item.key} 
                                item={item} 
                                isActive={item.key === activeChapterKey} 
                                onClick={() => onSelectChapter(item.key)}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </aside>
    );
};