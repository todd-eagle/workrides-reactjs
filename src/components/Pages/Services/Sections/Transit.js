import React from 'react'
import { SpanOrange, H2After } from '../../../../styled-components/Base/Base'
import { TransitSection, TransitHeading, TransitHeadText,
         TransitContent, TransitContentText, TransitQuoteArea, 
         QuoteLeft, QuoteRight, QuoteText, PublicationText,
         H3Transit, H3TransitAfter, TransitBottomText } from '../../../../styled-components/Pages/ServicesPage'

const Content = ({transitContent}) => {

    const mainSection = () => {
        if (transitContent) {
          return ( 
            <>
                <TransitHeading>{transitContent.heading}<SpanOrange>{transitContent.heading_span}</SpanOrange>
                    <H2After />
                </TransitHeading>
                <TransitHeadText>{transitContent.lead_text}</TransitHeadText>
                <TransitContent>
                    <TransitContentText>{transitContent.content_text}</TransitContentText>
                    <TransitQuoteArea>
                        <QuoteLeft>&#8220;</QuoteLeft>
                        <QuoteText>
                            {transitContent.quoted_text}
                        </QuoteText>
                        <PublicationText>
                            {transitContent.qouted_source}
                        </PublicationText>
                        <QuoteRight>&#8221;</QuoteRight>
                    </TransitQuoteArea>
                    <H3Transit>
                        {transitContent.small_heading}
                        <H3TransitAfter />
                    </H3Transit>
                    <TransitBottomText>
                        {transitContent.botton_text}
                    </TransitBottomText>
                </TransitContent>
            </>
           )
        }
    }
    return (
        <TransitSection>
            {mainSection()}
        </TransitSection>
    )
}

const Transit = ({sectionContent}) => {

    return (
        <Content transitContent={sectionContent} />
    )
}

export default Transit