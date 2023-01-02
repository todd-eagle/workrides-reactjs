import React from 'react'
import {HeroSection, HeadingContainer, HeadingContainerBar, 
    HeroHeadingMain, HeroHeadingSub, HeroButton, HeroButtonLink
} from '../../../../styled-components/Pages/PageLanding'
import Menu from '../../../Menu/Menu'
import Heading from '../../../Layout/Heading'
import { useLocation } from 'react-router-dom'
import Button from '../../../Layout/Button'

const Content = ({headingContent}) => {

    const location = useLocation()

    const Bar = location.pathname === "/" ? HeadingContainerBar :''
    
    const StylesContainter = {
        container: HeadingContainer,
        main : HeroHeadingMain,
        sub: HeroHeadingSub
    }

    const heroHeading = (content) => {
        if (content !== undefined) {
            if (content.heading) {
                return (
                    <>
                    <Bar>
                        <Heading content={content.heading} Styles={StylesContainter} />
                    </Bar>
                    <HeroButtonLink a href ="/donate">
                        <Button Style={HeroButton}>
                            Donate Today
                        </Button>
                    </HeroButtonLink>
                    </>
                )
            }
        }
    }

   return (<>{heroHeading(headingContent)}</>)
}

const SectionsHeading = ({sectionContent}) => {

    return (
        <HeroSection>
            <Menu />
            <Content headingContent={sectionContent}/>
        </HeroSection>
    )
}

export default SectionsHeading