import { useTheme } from "next-themes";
import { FaLightbulb } from "react-icons/fa";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    return (
        <button
            onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
            }}
            name="Dark mode toggle"
            aria-label="Dark mode toggle"
            className="fixed z-20 right-4 bottom-4 bg-white dark:bg-slate-800 rounded-full p-2 shadow-md group"
        >
            <FaLightbulb className="text-3xl dark:text-yellow-300 group-hover:opacity-50" />
        </button>
    );
};
