import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (darkMode) {
            setDarkMode(false);
            localStorage.theme = 'light';
            document.documentElement.classList.remove('dark');
        } else {
            setDarkMode(true);
            localStorage.theme = 'dark';
            document.documentElement.classList.add('dark');
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="切换深色模式"
        >
            {darkMode ? (
                <SunIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            ) : (
                <MoonIcon className="h-5 w-5 text-gray-500" />
            )}
        </button>
    );
}