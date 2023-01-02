import React from 'react'
import {SpanPurple} from '../../../../styled-components/Base/Base'
import {ServiceSection, AboutHeading, AboutContent,
        OurStoryText, OurStoryServiceH2After, ServiceImageContent,
        ServiceImageArea, ServiceImage} from '../../../../styled-components/Pages/OurStoryPage'
import workerImage from '../../../../assets/images/34.jpg'  
import communityImage from '../../../../assets/images/33.jpg' 
import employeeImage from '../../../../assets/images/32.jpg'   

const Content = ({whoWeServeContent}) => {


    const communityImages = [workerImage, communityImage, employeeImage]

    const mainSection = () => {
        if (whoWeServeContent) {
            if (whoWeServeContent.content_text) {
                return (
                    <>
                    <AboutHeading>
                        {whoWeServeContent.heading}<SpanPurple>{whoWeServeContent.heading_span}</SpanPurple>.
                        <OurStoryServiceH2After />
                    </AboutHeading>
                    <AboutContent>
                        {whoWeAreParagraphs(whoWeServeContent.content_text)}
                    </AboutContent>
                    <ServiceImageContent>
                        {serviceImageContent(whoWeServeContent.communties_served)}
                    </ServiceImageContent>
                    </>
                )
            }
        }
    }

    const whoWeAreParagraphs = (content) => {
        const paragraphs = content.split(/\s(?=[A-Z])/)

        const paragraph = paragraphs.map((el, index)=>{

            return (
                 <OurStoryText key={el.match(/^((?:\S+\s+){2}\S+).*/)[1]}>
                     {paragraphs[index]}
                 </OurStoryText>
             )
         })
         return paragraph
    }

    const serviceImageContent = (content) => {
        const titleContent = content.split(",")

        const imageContent = titleContent.map((el, index)=>{

            return (
                <ServiceImageArea key={el}>
                    <ServiceImage src={communityImages[index]} />
                    {titleContent[index]}
                </ServiceImageArea>
            )
        })
        return imageContent
    }

    return (
        <ServiceSection>
            {mainSection()}
        </ServiceSection>
    )
}

const WhoWeServe =({sectionContent}) => {

    return (
        <Content whoWeServeContent={sectionContent}  />    
    )
}

export default WhoWeServe