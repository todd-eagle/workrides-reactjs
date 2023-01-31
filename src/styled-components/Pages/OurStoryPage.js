import styled from 'styled-components'
import {Section} from '../Base/Base'
import { MainHeader, ServiceHeading, H3TransitAfter} from './ServicesPage'
import HeaderImage from '../../assets/images/26.jpg'
import AboutImage from '../../assets/images/31.jpg'

export const OurStoryHeader = styled(MainHeader)`
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${HeaderImage});
    background-attachment: scroll;
    grid-template-rows: 5.8rem repeat(7, minmax(min-content, 1fr));
    height:  ${(props) => props.theme.windowWidth < "601" ? "30rem" : props.theme.windowWidth < "901" ? "55vh" : "80vh"};

    ${(props) => props.theme.windowWidth <  "318" &&`
        grid-template-columns: minmax(3rem,1fr) repeat(11,minmax(min-content,1fr)) minmax(3rem,1fr);
    `}
    ${(props) => props.theme.windowWidth <  "280" &&`
        grid-template-columns: minmax(3rem,1fr) repeat(13,minmax(min-content,1fr)) minmax(3rem,1fr);
    `}
`
export const AboutSection = styled(Section)`
    grid-template-rows: 1rem repeat(2, auto) 4rem;
    display: grid;
    row-gap: 3.5rem;
    background-image: linear-gradient(rgba(35, 33, 56, 0.88), rgba(35, 33, 56, 0.88)), url(${AboutImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: #ffffff;
`
export const AboutHeading = styled(ServiceHeading)`
    text-align: center;
    font-size: ${(props) => props.theme.windowWidth > "2630" ? "6.8rem" : "calc(3.3rem + 1.2vw)"};
    &:after {
        content: ""
        margin-top: 1.5rem;
        display: block;
        height: 0.4rem;
        width: 10rem;
        background-color: #ffffff; 
    }
`
export const HeadingContainer = styled.h1`
    grid-column: 1/-1;
    grid-row-start: 5;
    justify-self: center;
    align-self: center;
    text-shadow: #646464 0.07rem 0.07rem;
`
export const HeroHeadingMain =  styled.span`
    font-size: calc(2.1rem + 2.5vw);
    line-height: 1.2;
    font-weight: 300;
    display: block;
    color: #fff;
    text-transform: uppercase;
    font-weight: 100;
    text-align: center;
    letter-spacing: 0.1rem;

`
export const HeroHeadingSub = styled(HeroHeadingMain)`
    font-size: calc(1rem + 1.2vw);
`
export const OurStoryH2After = styled(H3TransitAfter)`
    width: 10rem;
    margin-top: 0;
`
export const AboutContent = styled.div`
    grid-row: 3/4;
    grid-column: centercontent;
    display: grid;
    row-gap: 2rem;
    padding:  ${(props) => props.theme.windowWidth <  "571" ? "0" : "0 4rem"}; 
`
export const OurStoryText = styled.p`
    font-size: calc(1rem + .85vw);
    letter-spacing: 0.1rem;
`
export const ServiceSection = styled(Section)`
    grid-template-rows: 1rem repeat(3, auto) 4rem;
    display: grid;
    row-gap: 3.5rem;
    background-color: #f7f7f7;
`
export const ServiceImageContent =styled.div`
    margin-top: 2rem;
    grid-row: 4/5;
    grid-column: centercontent;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: ${props=> props.theme.windowWidth < "380" ? "none" : "0 4rem"};
`
export const ServiceImageArea = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 3rem;
    text-align: center;
`
export const ServiceImage = styled.img`
    border-radius: 50%;
    height: 21rem;
`
export const OurStoryServiceH2After = styled(OurStoryH2After)`
    height: 0.4rem;
    background-color: #3b3b3b;
`
