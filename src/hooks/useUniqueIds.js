import { useRef } from 'react'
import uniqid from 'uniqid'

const useUniqeIds = count => {
    const ids = useRef([...new Array(count)].map(() => uniqid()))
}

export default useUniqeIds