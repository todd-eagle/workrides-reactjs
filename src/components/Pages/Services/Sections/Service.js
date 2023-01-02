import React, {Fragment} from 'react'
import { SpanGreen, SpanOrange} from '../../../../styled-components/Base/Base'
import {ServicesSection, ServiceSection1, ServiceSection2,
        ServiceHeading, ServiceText, ServiceSectionContent} from '../../../../styled-components/Pages/ServicesPage'

const Content = ({serviceContent}) => {

    const colorSpan =[SpanGreen, SpanOrange]
    const serviceSections =[ServiceSection1, ServiceSection2]

    const mainSection = () =>{
        if (serviceContent !== undefined ) {
            if (serviceContent.mini_sections) {
                const sections = serviceContent.mini_sections.map((el, index)=>{
                    const ColorSpan = colorSpan[index]
                    const ServiceSections = serviceSections[index]
                    return (
                        <Fragment key={el.heading_span}>
                            <ServiceSections>
                                <ServiceSectionContent>
                                <ServiceHeading>{el.heading}<ColorSpan>{el.heading_span}</ColorSpan></ServiceHeading>
                                <ServiceText>
                                    {el.lead_text}
                                </ServiceText>
                                </ServiceSectionContent>
                            </ServiceSections>
                        </Fragment>
                    )  
                })
                
                return sections
            }  
        }
    }
    return (
        <ServicesSection>
            {mainSection()}
        </ServicesSection>
    )
}

const Service = ({sectionContent}) => {

    return ( 
        <Content serviceContent={sectionContent} />
        )
    
}

export default Service