import { useEffect, useState } from 'react';

const useValidation = (value, validateFn, compareValue = null) => {
    const [error, setError] = useState('')

    useEffect(() => {
        setError(validateFn(value, compareValue))
    }, [value, compareValue, validateFn])

    return error;
}

export default useValidation;