import React from 'react'
import { useLocation } from 'react-router-dom'
import {OurStoryHeader} from '../../../../styled-components/Pages/OurStoryPage'
import Menu from '../../../Menu/Menu'
import Heading from '../../../Layout/Heading'

const Content = ({headingContent}) => {

    const location = useLocation()

    const heroHeading = (content) => {
        if (content !== undefined) {
            if (content.heading) {
                return (
                    <>
                        <Heading content={content.heading} location={location.pathname} />
                    </>
                )
            }
        }
    }


   return (<>{heroHeading(headingContent)}</>)
}

const SectionsHeading = ({sectionContent} ) => {
    
    return (
        <OurStoryHeader>
            <Menu />
            <Content headingContent={sectionContent} />
        </OurStoryHeader>
    )
}

export default SectionsHeading