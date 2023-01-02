import React from 'react'
import { ContactSection, ContactInfoArea, EmailContacContent,
         EmailInfoContainer, EmailTitle, EmailLink, H2Contact,
         PhysicalAdress, H2ContactAfter, Address,
         H3Address, ContactImgLogo, CenteredAddressContent
} from '../../../../styled-components/Pages/ContactPage'
import blackImageLogo from '../../../../assets/images/logo-black.png'

const Content = ({contactInfoContent, windowWidth}) => {

    const mainSection = () => {
        if (contactInfoContent) {
            if (contactInfoContent.contact_info) {
                const localAddress = renderAddress(contactInfoContent.contact_address)
                return (
                    <>
                    <H2Contact>
                        {contactInfoContent.heading}
                        <H2ContactAfter />
                    </H2Contact>
                    <ContactInfoArea>
                        {renderContacts(contactInfoContent.contact_info)}
                        {windowWidth > 870 ? localAddress : null}
                    </ContactInfoArea>
                    {windowWidth < 871 ? localAddress : null}
                    </>
                )
            }
        }
    }

    const renderContacts = (content) => {
        const emailContainers = []
        for (let i = 0; i < 2; i++) {
                const emails = i % 2 === 0 ? content.slice(0,3) : content.slice(3,6)
                emailContainers[i] = <EmailContacContent key={i}> {formatEmailInfo(emails)}</EmailContacContent>
            }

        return  emailContainers     
    }

    const formatEmailInfo = (content) => {
        const contacts = content.map((el)=> {
            return (
                <EmailInfoContainer key={el.title}>
                    <EmailTitle>{el.title}</EmailTitle>
                    <EmailLink href={el.mailto_link}>
                        {el.email}
                    </EmailLink>
                </EmailInfoContainer>
            )
        })
        return contacts
    }

    const renderAddress = (content) => {
        const address = content.map((el) => {
            return (
            <PhysicalAdress key={el.title}>
                  <H3Address>{el.title}</H3Address>
                  <Address>
                    {el.address_1}
                    {el.address_2}
                  </Address>
                  <ContactImgLogo src={blackImageLogo} />
            </PhysicalAdress>)
        })

        const physicalAddress = windowWidth < 871 ? <CenteredAddressContent>{address}</CenteredAddressContent> : address

        return physicalAddress
    }

    return (
        <ContactSection>
            {mainSection()}
        </ContactSection>
    )
}

const ContactInfo = ({sectionContent}) => {

    return (
        <Content contactInfoContent={sectionContent}  />
    )
}

export default ContactInfo