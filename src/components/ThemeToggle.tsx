
import { ThemeProvider, useTheme } from '@/components/ThemeProvider'; // Ensure correct import path

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'; // Ensure you're using Heroicons v2

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
    </button>
  );
};

export default ThemeToggle;
