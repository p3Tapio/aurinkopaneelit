import { useState, useEffect } from 'react'

const useContainerWidth = () => {

    const [width, setWidth] = useState({})

    useEffect(() => {

        if (Object.keys(width).length === 0)  setWidth({width: document.getElementById('mainContainer').clientWidth})

        const handleResize = () =>  setWidth({ width: document.getElementById('mainContainer').clientWidth })

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)

    }, [width])

    return width
}
export default useContainerWidth

