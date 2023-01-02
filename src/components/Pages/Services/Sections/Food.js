import React from 'react'
import DOMPurify from 'dompurify'
import { SpanGreen, H2After} from '../../../../styled-components/Base/Base'
import {FoodSection, FoodHeading, FoodHeadText, FoodContent,
        FoodText, FoodContentInfo} from '../../../../styled-components/Pages/ServicesPage'
        
const Content = ({foodContent}) => {

    
    const mainSection = () => {
        if (foodContent) {
            if (foodContent.content_text) {
                return (
                    <>
                        <FoodHeading>
                            {foodContent.heading}<SpanGreen>{foodContent.heading_span}</SpanGreen>
                            <H2After />
                        </FoodHeading>
                        <FoodHeadText>
                            {foodContent.lead_text}
                        </FoodHeadText>
                        <FoodContent>
                            <FoodContentInfo>
                                {foodParagraphs(foodContent.content_text)}
                            </FoodContentInfo>
                        </FoodContent>
                    </>
                )
            }
        }
    }

    const foodParagraphs = (content) => {
        const paragraphs = content.replace(/([.?!])\s*(?=[A-Z][^One])/g, "$1|").split("|")
        const formattedWord = ['Food insecurity', 'Food deserts']
        
        const paragraph = paragraphs.map((el, index)=>{
            const boldStyle = "font-weight:700;"
            const orangeStyle = `${boldStyle}color:#e67e22;`
          
            const formattedParagraph =  paragraphs[index].search(formattedWord[0]) !== -1 ? 
                                        paragraphs[index].replace(formattedWord[0],`<span style=${boldStyle}>${formattedWord[0]}</span>`):
                                        paragraphs[index].search(formattedWord[1]) !== -1 ? 
                                        paragraphs[index].replace(formattedWord[1],`<span style=${orangeStyle}>${formattedWord[1]}</span>`):
                                        paragraphs[index]
           return (
            <FoodText key={el.match(/[^\s]+\s+[^\s]+/)[0]} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(formattedParagraph) }}/>
              
            )
        })

        return paragraph
    }

    return (
        <FoodSection>
           {mainSection()}
        </FoodSection>
    )
}

const Food = ({sectionContent}) => {
    return (
        <Content foodContent={sectionContent} />
    )
    
}

export default Food