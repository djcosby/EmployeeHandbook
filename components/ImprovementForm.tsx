
import React, { useState } from 'react';

interface ImprovementFormProps {
    chapterTitle: string;
    onClose: () => void;
}

export const ImprovementForm: React.FC<ImprovementFormProps> = ({ chapterTitle, onClose }) => {
    const [feedback, setFeedback] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = {
            chapter: chapterTitle,
            feedback,
            timestamp: new Date().toISOString(),
        };
        console.log("Handbook Improvement Submission:", JSON.stringify(formData, null, 2));
        setSubmitted(true);
        setTimeout(() => {
            onClose();
        }, 2000);
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg text-brand-ink transform transition-all animate-fade-in-up">
                <div className="p-5 border-b border-slate-200 flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Suggest an Improvement</h2>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-700">&times;</button>
                </div>
                {submitted ? (
                     <div className="p-6 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="mt-4 font-semibold text-slate-700">Thank you for your feedback!</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="p-6">
                            <label htmlFor="chapter" className="block text-sm font-medium text-slate-700">Chapter</label>
                            <input
                                id="chapter"
                                type="text"
                                readOnly
                                value={chapterTitle}
                                className="mt-1 block w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md shadow-sm sm:text-sm cursor-not-allowed"
                            />

                            <label htmlFor="feedback" className="block text-sm font-medium text-slate-700 mt-4">Your Suggestion</label>
                            <p className="text-xs text-slate-500">Please be specific. What could be clearer, more accurate, or more helpful?</p>
                            <textarea
                                id="feedback"
                                rows={5}
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                required
                                placeholder="e.g., 'In the section on Crisis Intervention, we should add a link to the on-call schedule...'"
                                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm"
                            ></textarea>
                        </div>
                        <div className="px-6 py-4 bg-slate-50 rounded-b-lg flex justify-end">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand-accent hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent"
                            >
                                Submit Feedback
                            </button>
                        </div>
                    </form>
                )}
            </div>
             <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};
