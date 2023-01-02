import React from 'react'
import { useLocation } from 'react-router-dom'
import { ServiceHeader} from '../../../../styled-components/Pages/ServicesPage'
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

const HeaderSection = ({sectionContent}) => {

    return (
        <ServiceHeader>
            <Menu />
            <Content headingContent={sectionContent} />
        </ServiceHeader>
    )
}

export default HeaderSection