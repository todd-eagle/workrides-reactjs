import React, {useEffect} from 'react'
import {DarkGreySeparator} from '../../../styled-components/Base/Base'
import PageHeader from './Sections/PageHeader'
import Service from './Sections/Service'      
import Transit from './Sections/Transit' 
import Food from './Sections/Food'

import useContent from '../../../hooks/useContent'
import useSectionContent from '../../../hooks/useSectionContent'

const Services = () => {
    const {getPageContent, pageContent} = useContent()

    useEffect(() => {
      getPageContent("services")
    }, [])
  
    const renderContent = (section) => {
      const {content} = useSectionContent(pageContent, section)
      return content
    }

    return (
        <>
            <PageHeader  sectionContent={renderContent("hero")} />
            <DarkGreySeparator/>
            <Service sectionContent={renderContent("service")} />
            <Transit sectionContent={renderContent("transit")} />
            <DarkGreySeparator />
            <Food sectionContent={renderContent("food")} />
        </>
        
    )
}

export default Services