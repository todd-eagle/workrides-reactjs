import React, {Fragment} from 'react'
import useParser from '../../hooks/useParser';
import { HeadingContainer, HeroHeadingMain, HeroHeadingSub} from '../../styled-components/Layout/Header'

const Heading = ({content, location}) => {

    const {parser} = useParser()

    const headingInfo = (content) => {
       
                return (
                    <HeadingContainer page={location}>
                       {headingParser(content)}
                    </HeadingContainer>
                )
    }
    
    const headingParser = (content) => {

        const headings = parser(content)
        
        const mainHeading = headings.map((el, index)=>{
            const heading = index === 0 ? <HeroHeadingMain>{headings[index]}</HeroHeadingMain> : <HeroHeadingSub page={location}>{headings[index]}</HeroHeadingSub>
            return (
                 <Fragment key={el}>
                    {heading}
                 </Fragment>
             )
         })
         
        return mainHeading
    }

    return (
        <>
            {headingInfo(content)}
        </>
    );
}

export default Heading