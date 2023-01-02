import React from 'react'
import {SpanGreen} from '../../../../styled-components/Base/Base'
import {AboutSection, AboutHeading, OurStoryH2After,
        AboutContent, OurStoryText} from '../../../../styled-components/Pages/OurStoryPage'

const Content = ({whoWeAreContent}) => {

    const mainSection = () => {
        if (whoWeAreContent) {
            if (whoWeAreContent.content_text) {
                return (
                    <>
                    <AboutHeading>
                        {whoWeAreContent.heading}<SpanGreen>{whoWeAreContent.heading_span}</SpanGreen>.
                        <OurStoryH2After />
                    </AboutHeading>
                    <AboutContent>
                        {whoWeAreParagraphs(whoWeAreContent.content_text)}
                    </AboutContent>
                    </>
                )
            }
        }
    }

    const whoWeAreParagraphs = (content) => {
        const paragraphs = content.split(/\s(?=[A-Z][^Newberry][^South][^Carolina])/)

        const paragraph = paragraphs.map((el, index)=>{
            return (
                 <OurStoryText key={el.match(/[^\s]+\s+[^\s]+/)[0]}>
                     {paragraphs[index]}
                 </OurStoryText>
             )
         })
         return paragraph
    }

    return (
        <AboutSection>
            {mainSection()}
        </AboutSection>
    )
}
const WhoWeAre = ({sectionContent}) => {

    return (
        <Content whoWeAreContent={sectionContent} />    
    )
}

export default WhoWeAre