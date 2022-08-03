import React, { useState } from "react"


function useFormChange<T>(initialValue: T): [T, (e: React.ChangeEvent) => void] {
    const [formData, setFormData] = useState<T>(
        initialValue
    )
    
    function handleChange(e: React.ChangeEvent): void {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement

        setFormData(prevValue => {
            return {
                ...prevValue,
                [target.className]: target.value
            }
        })
    }

    return [formData, handleChange]
}

export default useFormChange