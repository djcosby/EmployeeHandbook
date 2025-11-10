
export interface HandbookChapter {
  title: string;
  sub: string;
  html: string;
  supervisorNotes?: string;
}

export interface HandbookData {
  [key: string]: HandbookChapter;
}

export interface NavItem {
  key: string;
  kick: string;
  text: string;
  sub?: string;
}

export interface NavSection {
  label: string;
  items: NavItem[];
}
