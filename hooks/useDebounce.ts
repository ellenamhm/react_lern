import {useCallback, useRef} from "react";

export default function useDebounce(callback, delay) {
    const timer = useRef();


    const debouncedCallback = useCallback((...args: any) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
            // console.log(...args);
            callback(...args)
        }, delay)
    }, [callback, delay])

    return debouncedCallback;
};