import React, {useEffect}  from 'react'
import {DarkGreySeparator} from '../../../styled-components/Base/Base'
import PageHeader from './Sections/PageHeader'
import ContactInfo from './Sections/ContactInfo'
import useContent from '../../../hooks/useContent'
import useSectionContent from '../../../hooks/useSectionContent'

const Contact = () => {

    const {getPageContent, pageContent} = useContent()

    useEffect(() => {
      getPageContent("contact")
    }, [])
  
    const renderContent = (section) => {
      const {content} = useSectionContent(pageContent, section)
      return content
    }

    return (
       <>
       <PageHeader sectionContent={renderContent("")} />
       <DarkGreySeparator />
       <ContactInfo sectionContent={renderContent("contact_addresses")} />
       </>
    )
}

export default Contact