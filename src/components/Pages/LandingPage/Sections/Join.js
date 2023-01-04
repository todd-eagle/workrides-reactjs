import React, {useRef, Fragment} from 'react'
import {gsap} from 'gsap'
import useEvents from '../../../../hooks/useEvents'
import {SpanPurple, SectionTextLead, H2After} from '../../../../styled-components/Base/Base'
import {JoinSection, H2Landing, JoinOptions, Option1, Option1H4,
   OptionsLink, Option1InfoContainer, Image, Option1FbSvg,
   PFb, PTw, Option1TwSvg, Option1InstSvg, PInst, Option2,
   Option2H4, Options1Text, Options2Text, Option3, Option3H4, Options3Text,
   Option4, Option4H4, Options4Text, OptionMediaSpan
   } from '../../../../styled-components/Pages/PageLanding'

import svgSocialMedia from '../../../../assets/images/SVG/social-media.svg'
import OptionImage  from '../../../../assets/images/17.jpg'
import Option2Image  from '../../../../assets/images/14.jpg'
import Option3Image from '../../../../assets/images/16.jpg'
import Option4Image from '../../../../assets/images/15.jpg'   

const images = [OptionImage, Option2Image, Option3Image, Option4Image]
const optionBoxes = [Option1, Option2, Option3, Option4]
const headings = [Option1H4, Option2H4, Option3H4, Option4H4]
const joinText = [Options1Text, Options2Text, Options3Text, Options4Text]
const svgContainer = [Option1FbSvg, Option1TwSvg, Option1InstSvg]
const socialMediaContainer = [PFb, PTw, PInst]

const Content = ({joinContent, windowWidth}) => {

    const onMouseOver = (effect) => {
      gsap.fromTo(effect.current, { filter:" brightness(0.6)"}, {scale: "1.05", filter: "brightness(0.8)", duration: 0.3,  ease: "sine.inOut", })
    }
  
    const onMouseExit = (effect) => {
      gsap.to(effect.current, {scale: "1", duration: 0.3,  ease: "sine.out", filter: "brightness(0.6)"})
    }

    const topSection = () => {
        if(joinContent){
          return (
            <>
              <H2Landing>
                {joinContent.heading}<SpanPurple>{joinContent.heading_span}</SpanPurple>. 
              <H2After />
              </H2Landing>
              <SectionTextLead>
                {joinContent.lead_text}
              </SectionTextLead> 
            </>
          )
        }
    }

    const mainSection = () => {
        if(joinContent !== undefined ){
          if (joinContent.join_options) {
            const imageEffects = []

            const mainContent = joinContent.join_options.map((el, index)=>{
             
              const OptionBoxes = optionBoxes[index]
              const Headings = headings[index]
              const JoinText = joinText[index] 
              imageEffects.push(useRef())

              const socialMedia = Array.isArray(el.join_info) ? socialMediaBox(el.join_info, images[index], Headings, el.join_heading, imageEffects[index]) : null
              return (
                <Fragment key={el.join_heading}>
                    <OptionBoxes>
                    {socialMedia !== null ? socialMedia :
                        <OptionsLink
                            onMouseEnter={()=>onMouseOver(imageEffects[index])} 
                            onMouseLeave={()=>onMouseExit(imageEffects[index])}>
                            <Headings>
                                {el.join_heading}
                            </Headings>
                            <JoinText>
                                {el.join_info}
                            </JoinText>
                            <Image 
                                ref={imageEffects[index]} 
                                src={images[index]} 
                                alt={el.join_heading}
                               />
                        </OptionsLink>  
                    }    
                    </OptionBoxes>  
                </Fragment>
              )
            })

            return mainContent
          }
        }
    }

    const socialMediaBox = (joinInfo, bkImage, headings, textHeading, effect) => {
      const Headings = headings
      const socialInfo = joinInfo.map((el, index)=> {
        const SvgContainer  = svgContainer[index]
        const SocialMediaContainer = socialMediaContainer[index]
        const socialPlatformLink =  windowWidth < 601 ? null : windowWidth < 901 ? el.social_platform_full : el.social_platform
        return(
          <Fragment key={el.social_platform}>
            <SvgContainer>
               <use href={svgSocialMedia+el.svg}></use>
            </SvgContainer>
            <SocialMediaContainer>
              <OptionsLink href={el.link} target="_blank" rel="noreferrer">
                <OptionMediaSpan>{socialPlatformLink}</OptionMediaSpan>
              </OptionsLink>
            </SocialMediaContainer>
          </Fragment>
         
        )          
      })

      return (
        <>
          <Headings>
              {textHeading}
          </Headings>
          <Option1InfoContainer 
              onMouseEnter={()=>onMouseOver(effect)} 
              onMouseLeave={()=>onMouseExit(effect)}>
              {socialInfo}
          </Option1InfoContainer>
          <OptionsLink>
              <Image ref={effect} src={bkImage} alt={textHeading} />
          </OptionsLink>
        </>
      )
    }

    return (
        <>
        {topSection()}
        <JoinOptions>
            {mainSection()}
        </JoinOptions>
        </>
      
    )
}

const Join = ({sectionContent}) => {

    const {useCurrentWidth} = useEvents()
    const windowWidth = useCurrentWidth()
    
    return (
        <JoinSection>
            <Content joinContent ={sectionContent} windowWidth={windowWidth} />
        </JoinSection>
    )
}

export default Join