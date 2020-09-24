import { useState, useEffect } from 'react'

const getDimensions = () => {

    const x = document.getElementById('mainContainer')
    
    if (x) {
        const { clientWidth: width, clientHeight: height } = x
        return { width, height }
    }

    return { width: 1080, height: 540 }
}

const useContainerDimensions = () => {
    const [dimensions, setDimensions] = useState(getDimensions())
    useEffect(() => {
        const handleResize = () => {
            setDimensions(getDimensions())
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)

    }, [])
    return dimensions
}
export default useContainerDimensions

