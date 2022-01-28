import { useState, useLayoutEffect } from "react";

export const useWindowSize = () => {
    const [size, setSize] = useState<number[]>([0, 0]);
    useLayoutEffect(() => {
        const updateSize: VoidFunction = () => {
            setSize([window.innerWidth, window.innerHeight]);
        };
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
};
