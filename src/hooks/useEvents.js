import {useEffect, useState} from 'react'

const useEvents = () => {

    const getWidth = () => {
        return window.innerWidth || 
               document.documentElement.clientWidth || 
               document.body.clientWidth
    }
    
    const [width, setWidth] = useState(getWidth())
   
    const useCurrentWidth = () => {    
        useEffect(() => {
            let timeoutId = null;
            const resizeListener = () => {
              clearTimeout(timeoutId);
              timeoutId = setTimeout(() => setWidth(getWidth()), 15);
            };
            window.addEventListener('resize', resizeListener);
        
            return () => {
              window.removeEventListener('resize', resizeListener);
            }
          }, [])
          
          return width
    }

 
    return {getWidth, useCurrentWidth}
}

export default useEvents;