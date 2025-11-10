import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ContentArea } from './components/ContentArea';
import { ImprovementForm } from './components/ImprovementForm';
import { HANDBOOK_DATA, NAVIGATION_SECTIONS, FORMS_DATA } from './constants';
import type { NavSection, HandbookChapter, HandbookData } from './types';

function App() {
  const [activeChapterKey, setActiveChapterKey] = useState('ch01');
  const [selectedFormKey, setSelectedFormKey] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSupervisorMode, setIsSupervisorMode] = useState(false);
  const [isImprovementFormVisible, setImprovementFormVisible] = useState(false);
  const [formsData, setFormsData] = useState<HandbookData>(FORMS_DATA);

  const activeChapter = HANDBOOK_DATA[activeChapterKey] || HANDBOOK_DATA['ch01'];

  const handleSelectChapter = (key: string) => {
    setActiveChapterKey(key);
    if (key !== 'appendixA') {
      setSelectedFormKey(null);
    }
  };

  const handleFormUpdate = (formKey: string, newHtml: string) => {
    setFormsData(prevFormsData => ({
        ...prevFormsData,
        [formKey]: {
            ...prevFormsData[formKey],
            html: newHtml,
        },
    }));
  };

  const filteredNavSections = useMemo(() => {
    if (!searchQuery) {
      return NAVIGATION_SECTIONS;
    }
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered: NavSection[] = [];

    NAVIGATION_SECTIONS.forEach(section => {
      const filteredItems = section.items.filter(item => 
        item.text.toLowerCase().includes(lowerCaseQuery) ||
        (item.sub && item.sub.toLowerCase().includes(lowerCaseQuery))
      );
      if (filteredItems.length > 0) {
        filtered.push({ ...section, items: filteredItems });
      }
    });
    return filtered;
  }, [searchQuery]);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-brand-bg-start to-brand-bg-end text-brand-ink-light">
      <div className="non-printable">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[320px_1fr] min-h-0 relative">
        <div className="non-printable">
          <Sidebar 
            sections={filteredNavSections}
            activeChapterKey={activeChapterKey}
            onSelectChapter={handleSelectChapter}
          />
        </div>
        <ContentArea 
          chapter={activeChapter}
          activeChapterKey={activeChapterKey}
          selectedFormKey={selectedFormKey}
          isSupervisorMode={isSupervisorMode}
          setIsSupervisorMode={setIsSupervisorMode}
          onSuggestImprovement={() => setImprovementFormVisible(true)}
          onShowForm={setSelectedFormKey}
          formsData={formsData}
          onFormUpdate={handleFormUpdate}
        />
        {isImprovementFormVisible && (
          <ImprovementForm 
            chapterTitle={activeChapter.title}
            onClose={() => setImprovementFormVisible(false)}
          />
        )}
      </div>
    </div>
  );
}

export default App;