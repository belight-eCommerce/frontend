// interface of pages
export interface Page {
    title: string;
    href: string;
    icon: React.ReactNode;
    section: string;
    keywords: string[]; // For improved search
}

export interface QuickAction {
    title: string;
    icon: React.ReactNode | React.JSX.Element | React.ReactElement;
    section: string;
    keywords: string[];
    do: () => void;
}