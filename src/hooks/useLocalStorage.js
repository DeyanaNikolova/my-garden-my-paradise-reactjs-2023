import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        const persistedSataeSerialized = localStorage.getItem(key);

        if(persistedSataeSerialized){
            const persisteState = JSON.parse(persistedSataeSerialized);
    
            return persisteState;
        }

        return initialValue;
    });

 
    const setLocalStorage = (value) => {
        setSatate(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [
        state,
        setLocalStorage
    ];
};

