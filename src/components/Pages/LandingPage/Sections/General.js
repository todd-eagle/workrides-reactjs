import React, {Fragment} from 'react'
import DOMPurify from 'dompurify'
import useEvents from '../../../../hooks/useEvents'
import {SpanPurple, SectionTextLead, H2After} from '../../../../styled-components/Base/Base'
import { GeneralSection, GeneralSectionInfo,
    H2Landing, LargeOrangeText, LargePurpleText,
    LargeGreenText, GeneralSectText, OdecoratedText,
    PdecoratedText, GdecoratedText , PlaceHolder
    } from '../../../../styled-components/Pages/PageLanding'

const Content = ({generalContent}) => {

  const {useCurrentWidth} = useEvents()
  const windowWidth = useCurrentWidth()

  const topSection = () => {
    if(generalContent){
      return (
        <>
          <H2Landing>
            {generalContent.heading}<SpanPurple>{generalContent.heading_span}</SpanPurple>. 
          <H2After />
          </H2Landing>
          <SectionTextLead>
            {generalContent.lead_text}
          </SectionTextLead> 
        </>
      )
    }
  }
  
  const mainSection = () => {
    if(generalContent !== undefined ){
      if (generalContent.general_info) {
        const spanText =[LargeOrangeText, LargePurpleText, LargeGreenText]
        const textDecoration = [OdecoratedText, PdecoratedText, GdecoratedText]
        const mainContent = generalContent.general_info.map((el, index)=>{

          const ColorSpan = spanText[index]
          const DecoratedText = textDecoration[index]
          const statSpan =  windowWidth > 601 ? <ColorSpan>{el.percentage}</ColorSpan> : null
          
          const decoratedTextSpan = <DecoratedText>{el.percentage}&nbsp;</DecoratedText>
          let statInfo  = windowWidth < 601 ? decoratedTextSpan : null

          const purpleText = "no"
          const greenText = "4 times"
          const orangeText = "total"

          const boldUnderline = "font-weight:600;text-decoration:underline;"
          const purpleUnderline = `${boldUnderline}color:#a968c0;`
          const greenUnderline = `${boldUnderline}color:#6ab76d;`
          const orangeUnderline = `${boldUnderline}color:#e67e22;`
          const formattedText =  el.info.search(purpleText) !== -1 ?
                                  el.info.replace(purpleText, `<span style=${purpleUnderline}>${purpleText}</span>`):
                                  el.info.search(greenText) !== -1 ?
                                  el.info.replace(greenText, `<span style=${greenUnderline}>${greenText}</span>`):
                                  el.info.search(orangeText) !== -1 ?
                                  el.info.replace(orangeText, `<span style=${orangeUnderline}>${orangeText}</span>`):
                                  el.info
          
          
          return (
            <Fragment key={el.percentage}>
              {statSpan}
              <GeneralSectText>{statInfo}<PlaceHolder dangerouslySetInnerHTML={{ __html:DOMPurify.sanitize(formattedText) }}/></GeneralSectText>
            </Fragment>  
          )

        })
        return mainContent
      }
    }
  }

  return (
    <>
      {topSection()}
      <GeneralSectionInfo>
        {mainSection()}
      </GeneralSectionInfo>
    </>
  )
}

const General = (props) => {

  const {sectionContent} = props

  return ( 
    <GeneralSection>
        <Content generalContent={sectionContent} />
    </GeneralSection>
  )
}
 
export default General