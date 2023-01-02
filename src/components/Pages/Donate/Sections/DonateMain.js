import React, {useRef, useEffect} from 'react'
import { SpanGreen } from '../../../../styled-components/Base/Base'
import {DonateSection, DonateHeading, DonateH2After, 
        DonateHeadText, DonateText, DonateLink} from '../../../../styled-components/Pages/DonatePage'


const Content = ({donateContent}) => { 
    const buttonRef = useRef()   

    const elements = [
        {
            element: "script",
            src: "https://donorbox.org/install-popup-button.js"
        },
        {
            element: "script",
            node: "window.DonorBox = { widgetLinkClassName: 'custom-dbox-popup' }"
        }
    ]
    
    useEffect(() => {
        let timeoutId = null;
        const scriptElements = createEl(elements, false)
        const clickIt = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() =>  buttonRef.current.click(), 1500);
        }
        clickIt()
    return () => {
        document.head.removeChild(scriptElements);
        }
    }, [])

    const createEl = (elements, asyncBool=null) => {

        let element = null
        let node  = null

        elements.forEach((el)=>{
            element = document.createElement(el.element)
            if (el.node !== undefined){
                node = document.createTextNode(el.node)
                element.appendChild(node)
            }

            if (el.src !== undefined)
                element.src=(el.src)

            element.async=asyncBool
            document.head.appendChild(element)

        })

        return element
    }

    const mainSection = () => {
        if (donateContent) {
            if (donateContent.section) {
                return (
                    <>
                    <DonateHeading>
                        {donateContent.heading}
                        <SpanGreen>{donateContent.heading_span}</SpanGreen>
                        <DonateH2After />
                    </DonateHeading>
                    <DonateHeadText>
                        {donateParagraphs(donateContent.content_text)}
                    </DonateHeadText>
                    </>
                )
            }
        }
    }

    const donateParagraphs = (content) => {
        const paragraphs = content.split(/\s(?=[A-Z][^Rides^All])/)
        const paragraph = paragraphs.map((el, index)=> {
            return (
                <DonateText key={el.match(/[^\s]+\s+[^\s]+/)[0]}>
                     {paragraphs[index]}        
                </DonateText>
            )
        })
        return paragraph
    }

    return (
        <DonateSection>
            {mainSection()}
            <DonateLink  className="custom-dbox-popup" ref={buttonRef} href="https://donorbox.org/donate-to-workrides-html?default_interval=o&amount=30">Donate Now!</DonateLink>
        </DonateSection>
    )
}

const DonateMain = ({sectionContent}) => {

    return (
        <Content donateContent={sectionContent} />
    )
}

export default DonateMain