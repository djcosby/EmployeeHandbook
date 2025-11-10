import React, { useState, useEffect } from 'react';
import type { HandbookChapter } from '../types';

interface FormViewerProps {
    form: HandbookChapter;
    formKey: string;
    onUpdate: (formKey: string, newHtml: string) => void;
    isSupervisorMode: boolean;
}

export const FormViewer: React.FC<FormViewerProps> = ({ form, formKey, onUpdate, isSupervisorMode }) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [editedHtml, setEditedHtml] = useState(form.html);

    useEffect(() => {
        setEditedHtml(form.html);
        setIsEditMode(false);
    }, [form, formKey]);
    
    const handlePrint = () => {
        const wrapper = document.getElementById('printable-content-wrapper');
        if (wrapper) {
            document.body.classList.add('is-printing');
            window.print();
            document.body.classList.remove('is-printing');
        }
    };

    const handleSave = () => {
        onUpdate(formKey, editedHtml);
        setIsEditMode(false);
    };

    const handleCancel = () => {
        setEditedHtml(form.html);
        setIsEditMode(false);
    };

    return (
        <div id="printable-content-wrapper" className="flex flex-col h-full">
            <div className="p-4 border-b border-slate-200 flex justify-between items-center flex-shrink-0 non-printable">
                <div>
                    <h2 className="text-lg font-semibold">{form.title}</h2>
                    <p className="text-xs text-slate-500">{form.sub}</p>
                </div>
                <div className="flex items-center gap-2">
                    {isEditMode ? (
                        <>
                            <button
                                onClick={handleSave}
                                className="inline-flex items-center gap-2 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                💾 Save Changes
                            </button>
                            <button
                                onClick={handleCancel}
                                className="inline-flex items-center gap-2 justify-center py-2 px-4 border shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                            >
                                ❌ Cancel
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={handlePrint}
                                className="inline-flex items-center gap-2 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand-accent hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent"
                            >
                                🖨️ Print Form
                            </button>
                            {isSupervisorMode && (
                                <button
                                    onClick={() => setIsEditMode(true)}
                                    className="inline-flex items-center gap-2 justify-center py-2 px-4 border shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                                >
                                    ✏️ Edit HTML
                                </button>
                            )}
                        </>
                    )}
                </div>
            </div>
            <div className={`flex-1 overflow-y-auto printable-area ${isEditMode ? 'p-2' : 'p-6 prose prose-sm max-w-none'}`}>
                 {isEditMode ? (
                    <textarea
                        value={editedHtml}
                        onChange={(e) => setEditedHtml(e.target.value)}
                        className="w-full h-full p-2 border border-slate-300 rounded-md font-mono text-xs resize-none focus:ring-brand-accent focus:border-brand-accent"
                        style={{ minHeight: '60vh' }}
                        aria-label="Form HTML content editor"
                    />
                ) : (
                    <div dangerouslySetInnerHTML={{ __html: form.html }} />
                )}
            </div>
            <style>{`
              .form-container {
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                padding: 1.5rem;
              }
              .form-instructions {
                font-size: 0.8rem;
                color: #64748b;
                margin-bottom: 1rem;
              }
              .form-section {
                margin-bottom: 1.5rem;
                border-bottom: 1px solid #e2e8f0;
                padding-bottom: 1.5rem;
              }
              .form-section:last-child {
                border-bottom: none;
                padding-bottom: 0;
              }
              .form-field {
                margin-bottom: 1rem;
              }
              .form-field label {
                display: block;
                font-weight: 600;
                font-size: 0.9rem;
                margin-bottom: 0.25rem;
              }
              .form-field input[type="text"],
              .form-field input[type="date"],
              .form-field input[type="datetime-local"],
              .form-field input[type="number"],
              .form-field textarea {
                width: 100%;
                padding: 0.5rem;
                border: 1px solid #cbd5e1;
                border-radius: 0.375rem;
              }
            `}</style>
        </div>
    );
};