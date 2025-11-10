import React, { useRef, useEffect } from 'react';
import { FormViewer } from './FormViewer';
import { APPENDIX_STRUCTURE } from '../constants';
import type { HandbookChapter, HandbookData } from '../types';

interface ContentAreaProps {
  chapter: HandbookChapter;
  activeChapterKey: string;
  selectedFormKey: string | null;
  isSupervisorMode: boolean;
  setIsSupervisorMode: (value: boolean) => void;
  onSuggestImprovement: () => void;
  onShowForm: (formKey: string) => void;
  formsData: HandbookData;
  onFormUpdate: (formKey: string, newHtml: string) => void;
}

const SupervisorToggle: React.FC<{ isSupervisorMode: boolean; setIsSupervisorMode: (value: boolean) => void; }> = ({ isSupervisorMode, setIsSupervisorMode }) => (
    <div className="flex items-center gap-2">
        <span className="text-xs font-medium text-brand-ink">Supervisor Mode</span>
        <button
            onClick={() => setIsSupervisorMode(!isSupervisorMode)}
            className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${isSupervisorMode ? 'bg-brand-accent' : 'bg-gray-300'}`}
        >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isSupervisorMode ? 'translate-x-4' : 'translate-x-1'}`}/>
        </button>
    </div>
);

export const ContentArea: React.FC<ContentAreaProps> = ({ chapter, activeChapterKey, selectedFormKey, isSupervisorMode, setIsSupervisorMode, onSuggestImprovement, onShowForm, formsData, onFormUpdate }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const appendixListRef = useRef<HTMLDivElement>(null);
    
    const scrollToTop = () => {
        const target = contentRef.current;
        target?.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToTop();
    }, [chapter, activeChapterKey]);

    const selectedForm = selectedFormKey ? formsData[selectedFormKey] : null;

    if (activeChapterKey === 'appendixA') {
        return (
            <main className="grid grid-cols-1 md:grid-cols-[40%,60%] lg:grid-cols-[35%,65%] h-full overflow-hidden bg-gradient-to-b from-brand-content-start to-brand-content-end">
                <div ref={appendixListRef} className="col-span-1 overflow-y-auto p-4 bg-slate-50 border-r border-slate-200">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-2xl font-bold text-slate-900">{chapter.title}</h1>
                        <p className="text-sm text-slate-600 mt-1">{chapter.sub}</p>
                        <div className="prose prose-sm max-w-none text-slate-700 mt-4" dangerouslySetInnerHTML={{ __html: chapter.html }} />

                        <div className="mt-6 space-y-4">
                            {APPENDIX_STRUCTURE.map((section, index) => (
                                <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-slate-200">
                                    <h3 className="font-bold text-slate-800 text-base border-b border-slate-200 pb-2 mb-2">{section.title}</h3>
                                    <p className="text-xs text-slate-500 italic mb-3">{section.purpose}</p>
                                    <ul className="space-y-1">
                                        {section.forms.map(form => (
                                            <li key={form.key}>
                                                <button
                                                    onClick={() => onShowForm(form.key)}
                                                    className={`w-full text-left text-sm p-2 rounded-md transition-colors text-slate-800 ${selectedFormKey === form.key ? 'bg-brand-accent-active text-brand-accent-border font-semibold' : 'hover:bg-slate-200'}`}
                                                >
                                                    {form.title}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                 <div className="col-span-1 overflow-y-auto bg-slate-200 p-2 sm:p-4">
                    {selectedForm && selectedFormKey ? (
                        <div className="bg-white rounded-lg shadow-md h-full">
                           <FormViewer 
                                form={selectedForm} 
                                formKey={selectedFormKey}
                                onUpdate={onFormUpdate}
                                isSupervisorMode={isSupervisorMode}
                            />
                        </div>
                    ) : (
                         <div className="flex items-center justify-center h-full text-center text-slate-500 p-8 bg-white/50 rounded-lg border-2 border-dashed border-slate-300">
                            <div>
                                <svg xmlns="http://www.w.org/2000/svg" className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                <h2 className="text-lg font-semibold text-slate-700 mt-2">Select a Form</h2>
                                <p>Click on a form from the index on the left to view and print it.</p>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        )
    }

    return (
        <main ref={contentRef} className="bg-gradient-to-b from-brand-content-start to-brand-content-end p-2 sm:p-4 overflow-y-auto print:hidden">
            <div className="max-w-4xl mx-auto my-4 bg-white rounded-2xl border border-slate-300/50 shadow-2xl shadow-slate-900/10 min-h-[90%] flex flex-col print:shadow-none print:border-none print:rounded-none">
                <div className="p-4 sm:p-6 border-b border-slate-200 flex flex-col sm:flex-row justify-between gap-4 items-start print:hidden">
                    <div className="doc-title-block">
                        <h1 className="text-2xl font-bold text-brand-ink">{chapter.title}</h1>
                        <p className="text-sm text-brand-muted mt-1">{chapter.sub}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <SupervisorToggle isSupervisorMode={isSupervisorMode} setIsSupervisorMode={setIsSupervisorMode} />
                         <button className="btn-secondary" onClick={onSuggestImprovement}>
                            💡 Suggest
                        </button>
                        <button className="btn-secondary" onClick={() => window.print()}>
                            🖨 Print
                        </button>
                        <button className="btn-primary" onClick={scrollToTop}>
                            ↑ Top
                        </button>
                    </div>
                </div>
                <div className="p-4 sm:p-6 flex-1 doc-body prose prose-sm max-w-none prose-h2:border-l-4 prose-h2:border-brand-accent prose-h2:pl-3 prose-ul:pl-6 prose-p:text-slate-800 prose-p:leading-relaxed prose-strong:text-slate-900">
                    <div dangerouslySetInnerHTML={{ __html: chapter.html }} />
                    
                    {isSupervisorMode && chapter.supervisorNotes && (
                        <div className="mt-8 p-4 bg-teal-50 border-l-4 border-teal-500 rounded-r-lg">
                            <h3 className="font-bold text-teal-800 text-base flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" /></svg>
                                Supervisor / QA Notes
                            </h3>
                            <p className="mt-2 text-sm text-teal-700">{chapter.supervisorNotes}</p>
                        </div>
                    )}
                </div>
                <style>{`
                    .doc-body p { font-size: 0.9rem; margin-bottom: 0.75rem; color: #334155; }
                    .doc-body ul, .doc-body ol { list-style-position: inside; margin-left: 0.5rem; margin-bottom: 0.75rem; }
                    .doc-body li { margin-bottom: 0.25rem; }
                    .section-title { font-size: 1.2rem; margin-top: 1.5rem; margin-bottom: 0.5rem; border-left: 4px solid #0f766e; padding-left: 0.75rem; }
                    .callout { border-left: 4px solid rgba(15, 118, 110, .4); background: rgba(15, 118, 110, .04); padding: 0.75rem 1rem; border-radius: 0.5rem; margin: 1rem 0; }
                    .two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 1rem; margin-top: 1rem; }
                    .card { background: #fff; border: 1px solid rgba(148, 163, 184, 0.25); border-radius: 0.5rem; padding: 0.75rem; }
                    .card h4 { margin: 0 0 .2rem; font-size: .875rem; color: #1e293b; }
                    .card p { margin: 0; font-size: .8rem; color: #475569; }
                    .badge { background: rgba(15, 23, 42, .03); border: 1px solid rgba(15, 23, 42, .02); border-radius: .35rem; padding: 2px 8px; font-size: .7rem; color: #334155; }
                    .doc-body table { width: 100%; border-collapse: collapse; margin-top: 1rem; margin-bottom: 1rem; }
                    .doc-body th, .doc-body td { border: 1px solid #e2e8f0; padding: 0.5rem 0.75rem; text-align: left; font-size: 0.85rem; vertical-align: top; }
                    .doc-body th { background-color: #f8fafc; font-weight: 600; }
                    .doc-body tbody tr:nth-child(odd) { background-color: #fcfcfd; }
                    .btn-primary { background: #0f766e; color: white; border: none; font-size: .75rem; padding: 0.35rem 0.8rem; border-radius: 0.5rem; cursor: pointer; transition: background .2s; }
                    .btn-primary:hover { background: #0d655d; }
                    .btn-secondary { background: #f1f5f9; color: #334155; border: 1px solid #e2e8f0; font-size: .75rem; padding: 0.35rem 0.8rem; border-radius: 0.5rem; cursor: pointer; transition: background .2s; }
                    .btn-secondary:hover { background: #e2e8f0; }
                `}</style>
            </div>
        </main>
    );
};