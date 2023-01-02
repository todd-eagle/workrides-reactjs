import React, {useRef} from 'react'
import {gsap} from 'gsap'
import { SpanGreen, SectionTextLead, H2After, H3After} from '../../../../styled-components/Base/Base'
import { SafetySection,  H2Landing, SafetyInfoCard,
        SafetyCardImage, H3SafetyCard, SafetyText, SafetyTextBottom,
        SafetySectionInfoBlock, SafetyCardContent} from '../../../../styled-components/Pages/PageLanding'
import safetyImage1 from '../../../../assets/images/1.jpg'
import safetyImage2 from '../../../../assets/images/2.jpg'
import safetyImage3 from '../../../../assets/images/3.jpg'

const Content = ({safetyContent}) => {

  const onMouseOver = (effect, effect1, effect2) => {
    gsap.to(effect.current, { opacity: "1", duration: "0.2" })
    gsap.to(effect1.current, {height: "28rem", opacity: "0.8", duration: "0.1" })
    gsap.to(effect2.current, {scale: "1.05", opacity: "1" , duration: "0.1" })
  }

  const onMouseExit = (effect, effect1, effect2) => {
    gsap.to(effect.current, { opacity: "0" , duration: "0.4" })
    gsap.to(effect1.current, {clearProps: "height", opacity: "0.65" , duration: "0.1"})
    gsap.to(effect2.current, {clearProps: "scale", opacity: "0.5"  , duration: "0.1"})
  }

  const safetyCardInfo = () => {
    if(safetyContent !== undefined ){
      if (safetyContent.safety_cards) {

        const images = [safetyImage1, safetyImage2, safetyImage3]
        const cardTextEffects = [] 
        const cardContentEffects = []
        const cardImageEffects = []
  
        const safetyCards = safetyContent.safety_cards.map((el, index)=>{

          cardTextEffects.push(useRef())
          cardContentEffects.push(useRef())
          cardImageEffects.push(useRef())

          const sentences = el.content.split('. ')

          return (
            <SafetyInfoCard onMouseEnter={()=>onMouseOver(cardTextEffects[index],cardContentEffects[index], cardImageEffects[index])}  
                            onMouseLeave={()=>onMouseExit(cardTextEffects[index],cardContentEffects[index], cardImageEffects[index])} 
                            key={el.header + index}>
                <SafetyCardImage src={images[index]} ref={cardImageEffects[index]} alt={el.header} />
                <SafetyCardContent ref={cardContentEffects[index]}>
                <H3SafetyCard>
                    {el.header}
                    <H3After />
                </H3SafetyCard>
                <SafetyText>
                    {sentences[0]}
                </SafetyText>
                <SafetyTextBottom ref={cardTextEffects[index]} >
                    {sentences[1]}
                </SafetyTextBottom>
                </SafetyCardContent>
            </SafetyInfoCard>)
          }
        )
        return safetyCards
      }
    }
  }

  const safetySection = () => { 

    if(safetyContent){
      return (
        <>
          <H2Landing> { safetyContent.heading } <SpanGreen>{ safetyContent.heading_span}</SpanGreen>.
            <H2After />
          </H2Landing>
          <SectionTextLead>
              { safetyContent.lead_text }
          </SectionTextLead>
          <SafetySectionInfoBlock>
            {safetyCardInfo()}
          </SafetySectionInfoBlock> 
        </>
      )
    }
  }

  return (
    <SafetySection>
        {safetySection()}     
    </SafetySection>
  )
}

const Safety = ({sectionContent}) => {
 
  return (
    <Content safetyContent={sectionContent} />
  )

}

export default Safety