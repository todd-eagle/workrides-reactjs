import React, {useEffect} from 'react'
import {DarkGreySeparator, LightGreySeparator} from '../../../styled-components/Base/Base'
import PageHeader from './Sections/PageHeader'
import General from '../LandingPage/Sections/General'
import Safety from '../LandingPage/Sections/Safety'
import Testimonials from '../LandingPage/Sections/Testimonials'
import Join from '../LandingPage/Sections/Join'

import useContent from '../../../hooks/useContent'
import useSectionContent from '../../../hooks/useSectionContent'

const LandingPage = () => {

  const {getPageContent, pageContent} = useContent()

  useEffect(() => {
    getPageContent("landing")
  }, [])

  const renderContent = (section) => {
    const {content} = useSectionContent(pageContent, section)
    return content
  }

  return (
    <>
      <PageHeader sectionContent={renderContent("hero")} />
      <DarkGreySeparator />
      <General  sectionContent={renderContent("general")}/>
      <LightGreySeparator />
      <Safety sectionContent={renderContent("safety")} />
      <DarkGreySeparator />
      <Testimonials sectionContent={renderContent("testimonials")} />
      <LightGreySeparator />
      <Join sectionContent={renderContent("join")} />
    </>
  )
}

export default LandingPage