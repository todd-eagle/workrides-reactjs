import  {useEffect, useState} from 'react'
import useContent from "./useContent"

const useSectionContent = (page, section) => {
    const {getSectiontContent} = useContent()
    const [content, setContent] = useState([])

    useEffect(() => {

        if(content === undefined || content.length === 0){
          const sectionContent = getSectiontContent(page, section)
          setContent(sectionContent)
        }     
      }, [getSectiontContent])

    return  {content}
}

export default useSectionContent