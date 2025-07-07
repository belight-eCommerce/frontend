'use client'

interface TabProps {
    tabs: string[];
    setSelected: (value: string) => void;
}

const Tab: React.FC<TabProps> = ({ tabs, setSelected }) => {

    const getButtonClass = (option: string) =>
        tabs.includes(option)
            ? "shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800"
            : "text-gray-500 dark:text-gray-400";

    return (
        <div className="flex items-center gap-0.5 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900">
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    onClick={() => setSelected(tab)}
                    className={`px-3 py-2 font-medium w-full rounded-md text-theme-sm hover:text-gray-900 dark:hover:text-white ${getButtonClass(
                        tab
                    )}`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default Tab;
