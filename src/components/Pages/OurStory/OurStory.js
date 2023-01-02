import React, {useEffect} from 'react'
import {DarkGreySeparator, LightGreySeparator} from '../../../styled-components/Base/Base'
import WhoWeAre from './Sections/WhoWeAre'
import WhoWeServe from './Sections/WhoWeServe'
import useContent from '../../../hooks/useContent'
import useSectionContent from '../../../hooks/useSectionContent'
import PageHeader from './Sections/PageHeader'

const OurStory = () => {

    const {getPageContent, pageContent} = useContent()

    useEffect(() => {
      getPageContent("about")
    }, [])
  
    const renderContent = (section) => {
      const {content} = useSectionContent(pageContent, section)
      return content
    }
    
    return (
        <>
            <PageHeader sectionContent={renderContent("hero")} />
            <LightGreySeparator />
            <WhoWeAre sectionContent={renderContent("whoweare")} />
            <DarkGreySeparator />
            <WhoWeServe sectionContent={renderContent("whoweserve")} />
        </>
        
    )
}

export default OurStory