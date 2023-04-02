import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {

    const [state, setState] = useState(() => {
        const serialized = localStorage.getItem(key);

        if (serialized) {
            const persistedState = JSON.parse(serialized);

            return persistedState;
        }

        return initialValue;
    });


    const setLocalStorageState = (value) => {
        setState(value);

        localStorage.setItem(key, JSON.stringify(value));
    };

    return [
        state,
        setLocalStorageState
    ];
};

