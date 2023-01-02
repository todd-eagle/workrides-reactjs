import React, {useEffect, Fragment} from 'react'
import {FooterStyle, FooterTop, FooterNav, FooterSocial,
Li, FooterLink, FooterSocialLink, SocialIcon, FooterCopyRight,
PFooter} from '../../styled-components/Layout/Footer'
import useContent from '../../hooks/useContent'
import useSectionContent from '../../hooks/useSectionContent'
import svgSocialIcon from '../../assets/images/SVG/social-media.svg'



const Footer = () => {
  const {getPageContent, pageContent} = useContent()
  
  useEffect(() => {
   getPageContent("footer")
  }, [])

  const renderContent = (section) => {
    const {content} = useSectionContent(pageContent, section)
    return content
  }

 const footerNav = () => {
    const nav = renderContent("navigation")

    if(nav !== undefined ){
      if (nav.footer_navigation) {
        const renderNav = nav.footer_navigation.map((el, index)=> {
            return (
              <Li key={el.name}><FooterLink href={el.link}>{el.name}</FooterLink></Li>
            )
          })

        return (
          <FooterNav>
            {renderNav}
          </FooterNav>
        )
      }
    }
 }

  const socialNav = () => {
    const nav = renderContent("svg_icons")
    
    if(nav !== undefined ){
      if (nav.social_svg_icons) {
        const renderNav = nav.social_svg_icons.map((el, index) =>{
          return (
            <Li key={el.name}>
              <FooterSocialLink href={el.link}
                target="_blank" rel="noreferrer" aria-label={el.aria_label}>   
                <SocialIcon  index={index}>
                  <use href={svgSocialIcon+el.svg_location}></use>
                </SocialIcon>
              </FooterSocialLink>
            </Li>
          )
        })
        return (
          <FooterSocial>
              {renderNav}
          </FooterSocial>
        )
      }
    }
  }

  const footerInfo = () => {

    const nav = renderContent("info")

    if(nav !== undefined ){
      if (nav.footer_info) {
        const renderContent = nav.footer_info.map((el, index) => {

        const ContentFooter = index === 0 ? <PFooter>{el.content}</PFooter> : <PFooter color="dimGrey">{el.content}</PFooter>

          return (
              <Fragment key={el.id}>
                {ContentFooter}
              </Fragment>
           )
        })
        return (
          <FooterCopyRight >
            {renderContent}
          </FooterCopyRight>
        )
      }
    }
  }

  return (
    <FooterStyle>
      <FooterTop>
        {footerNav()}
        {socialNav()}
      </FooterTop> 
      {footerInfo()}
    </FooterStyle>
  )
}

export default Footer