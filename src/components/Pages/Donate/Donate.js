import React, {useEffect} from 'react'
import PageHeader from './Sections/PageHeader'
import DonateMain from './Sections/DonateMain'
import useContent from '../../../hooks/useContent'
import useSectionContent from '../../../hooks/useSectionContent'

const Donate = () => {
    
    const {getPageContent, pageContent} = useContent()

    useEffect(() => {
      getPageContent("donate")
    }, [])
    
    const renderContent = (section) => {
        const {content} = useSectionContent(pageContent, section)
        return content
    }
    
    return (
        <>
        <PageHeader sectionContent={renderContent("hero")} />
        <DonateMain sectionContent={renderContent("donation")} />
        </>
    )
}

export default Donate