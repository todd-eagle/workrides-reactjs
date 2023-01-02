import React, {Fragment, useRef, useState} from 'react'
import {gsap} from 'gsap'
import useEvents from '../../../../hooks/useEvents'
import usePreviousRef from '../../../../hooks/usePreviousRef'
import {SpanOrange,
    SectionTextLead, H2After} from '../../../../styled-components/Base/Base'
import {TestimonialSection, H2Landing, TestimonialSectionInfo,
   TestimonialSectionStatementBox, TestimonialSectionStatement,
   TestimonialSectionStatementSig, TestimonialWorkersBox,
   TestimonialWorkers, TestimonialImage, TestimonialWorkersText
   } from '../../../../styled-components/Pages/PageLanding'

import worker1Image from '../../../../assets/images/10.jpg'
import worker2Image from '../../../../assets/images/11.jpg'
import worker3Image from '../../../../assets/images/12.jpg'
import worker4Image from '../../../../assets/images/13.jpg'

const Content = ( {testimonialContent}) => {

  const [testimonial, setTestimonial] = useState("I get to work on time in the morning and they’re always prompt. At night, they wait outside for me to make sure I’m safe.")  
  const [name, setName] = useState("Alexzavia Bates")
  const [prevRef, setPrevRef] = useState(null)
  const effects = []
  const imageEffects = []

  const {useCurrentWidth} = useEvents()
  
  const windowWidth = useCurrentWidth()

  
  for (let i = 0; i <4; i++) {
    effects.push(useRef())
    imageEffects.push(useRef())
  }
  
  const comments = useRef()
  const commentName = useRef()

  const fromEffect =  {opacity: 0}
  const toEffect =  {opacity: 1, duration: 1.2,  ease: "linear"}
  const {getRef} = usePreviousRef()

  const topSection = () => {
    if(testimonialContent){
      return (
        <>
        <H2Landing> { testimonialContent.heading } <SpanOrange>{ testimonialContent.heading_span}</SpanOrange>.
            <H2After />
        </H2Landing>
        <SectionTextLead>
            { testimonialContent.lead_text }
        </SectionTextLead>
        </>
      )
    }
  }

  const onClickEvent = (comment, name) => {
      
    setPrevRef( getRef(comment))

    if(comment !== prevRef){
      setTestimonial(comment)  
      setName(name)
      gsap.fromTo(comments.current, {...fromEffect}, {...toEffect})
      gsap.fromTo(commentName.current, {...fromEffect}, {...toEffect})
    }
      
  }

  const onMouseOver = (text, image) => {
    gsap.to(text.current, {fontWeight: "500", duration: 0, filter: 0})
    gsap.to(image.current, {filter: "none", duration: 0})
  }

  const onMouseExit = (text, image) => {
    gsap.to(text.current, {fontWeight: "100"})
    gsap.to(image.current, {filter: "grayscale(70%)",  duration: 0})
  }


  const mainSection = () => {
    

    if(testimonialContent !== undefined ){
      if (testimonialContent.testimonials) {
        const images = [worker1Image, worker2Image, worker3Image, worker4Image]
        
        const mainContent = testimonialContent.testimonials.map((el, index)=> {
          const completeTestimonial = el.testimonial + el.tesimonial_hidden
          const testimonailStatements = windowWidth < 851 ?  `"${completeTestimonial}..."` : `"${el.testimonial}..."`
     
          return (
            <Fragment key={el.name}>
              <TestimonialWorkers onMouseEnter={()=>onMouseOver(effects[index], imageEffects[index])}  
                                  onMouseLeave={()=>onMouseExit(effects[index], imageEffects[index])}
                                  onClick={()=> onClickEvent(completeTestimonial, el.name)}>
                <TestimonialImage ref={imageEffects[index]} src={images[index]}  alt={el.name}/>
                <TestimonialWorkersText ref={effects[index]}>{testimonailStatements}</TestimonialWorkersText>
              </TestimonialWorkers>
            </Fragment>  
          )
        })
        return mainContent
      }
    }
  }

  const testimonialStatement = () =>{
    if(testimonialContent !== undefined ){
      if (testimonialContent.testimonials) {
  
        return (
          <>
          <TestimonialSectionStatement ref={comments}>
            {testimonial}
          </TestimonialSectionStatement>
          <TestimonialSectionStatementSig ref={commentName}>
            {name}
          </TestimonialSectionStatementSig>
          </>
        )
      }
    }
  }

  return (
    <>
      {topSection()}
      <TestimonialSectionInfo>
      <TestimonialSectionStatementBox>
        {testimonialStatement()}
      </TestimonialSectionStatementBox>
        <TestimonialWorkersBox>
          {mainSection()}
        </TestimonialWorkersBox>
      </TestimonialSectionInfo>
    </>
  )

}

const Testimonials = (props) => {

  const {sectionContent} = props
    
  return (
    <TestimonialSection>
          <Content testimonialContent={sectionContent}/>
    </TestimonialSection>
    )
}

export default Testimonials