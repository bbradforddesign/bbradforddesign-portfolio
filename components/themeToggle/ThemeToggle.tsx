import { useTheme } from "next-themes";
import { Icon } from "../icon/Icon";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    return (
        <button
            onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
            }}
            name="Dark mode toggle"
            aria-label="Dark mode toggle"
            className="fixed right-4 bottom-4 bg-white dark:bg-slate-800 rounded-full p-2 shadow-md"
        >
            <Icon icon="Lightbulb" />
        </button>
    );
};
