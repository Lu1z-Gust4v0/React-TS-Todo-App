import React, { useState, useEffect} from "react";


function usePersistingState<T>(key: string, defaultValue: T): 
    [T, React.Dispatch<React.SetStateAction<T>>] {
    const [state, setState] = useState<T> (
        () => JSON.parse(
                sessionStorage.getItem(key) || JSON.stringify(defaultValue)
            ) || defaultValue
    )

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(state));
    }, [key, state])

    return [state, setState]
}

export default usePersistingState