import React from 'react'
import { useLocation } from 'react-router-dom'
import {DonateHeader } from '../../../../styled-components/Pages/DonatePage'
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

const HeaderSection = (props) => {

    const {sectionContent} = props

    return (
       <DonateHeader>
            <Menu />
            <Content headingContent={sectionContent} />
       </DonateHeader>
    )
}

export default HeaderSection