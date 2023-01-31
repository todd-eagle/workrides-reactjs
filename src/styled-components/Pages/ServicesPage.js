import styled from 'styled-components'
import {Section, H3, H3After} from '../Base/Base'
import headerImage from '../../assets/images/27.jpg'
import section1Image from '../../assets/images/24.jpg'
import section2Image from '../../assets/images/25.jpg'
import transitImage from '../../assets/images/23.jpg'
import foodImage from '../../assets/images/29.jpg'

export const MainHeader = styled.header`
    grid-column: fullwidth;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/hero.jpg);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 100vh;
    z-index: 96;
    display: grid;
    grid-template-columns: minmax(3rem, 1fr) repeat(8, minmax(min-content, 1fr)) minmax(3rem, 1fr);
    grid-template-rows: 3rem min-content minmax(5vh, 0.6fr) min-content minmax(15vh, 1fr);
`
export const HeadingContainer = styled.h1`
    grid-column: 5/10;
    grid-row-start: 5;
    justify-self: center;
    align-self: center;
    font-size: calc(2rem + 2.2vw);
`
export const HeroHeadingMain =  styled.span`
    line-height: 1.2;
    display: block;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: 400;
    text-align: left;
    text-shadow: #646464 0.07rem 0.07rem;
`
export const HeroHeadingSub = styled(HeroHeadingMain)`
`
export const PageHeader = styled(MainHeader)`
    display: grid;
    grid-template-rows: 5.8rem repeat(7, minmax(min-content, 1fr));
`
export const ServiceHeader = styled(PageHeader)`
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${headerImage});
    background-attachment: scroll;
    height:  ${(props) => props.theme.windowWidth < "601" ? "30rem" : props.theme.windowWidth < "901" ? "55vh" : "80vh"};
`
export const Heading = styled.h1`
    grid-column: 5/10;
    grid-row-start: 5;
    justify-self: center;
    align-self: center;
    font-size: calc(2rem + 2.2vw);
    color: #fff;
    text-transform: uppercase;
    font-weight: 100;
    text-align: center;
    letter-spacing: 0.1rem;
`
export const ServicesSection = styled(Section)`
    grid-template-rows: repeat(3, auto);
    grid-column: fullwidth;
    background-color: #e0e0e0;
    display: grid;
`
export const ServiceSection = styled.div`
    display: grid;
    grid-row: 4/5;
    background-position: center;
    background-size: cover;
    color: #4b4b4b;
`
export const ServiceSectionContent = styled.div`
    margin-top: ${(props) => props.theme.windowWidth > "2330" ? "2.4rem" : "4rem"}; 
    padding: 0 3rem 4rem 3rem;
`
export const ServiceSection1 = styled(ServiceSection)`
    grid-column: fullcontent-start/column-end 4;
    background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${section1Image});

    ${(props) => props.theme.windowWidth <  "711" &&`
        grid-column: fullcontent;
        justify-content: center;
    `}
`
export const ServiceSection2 = styled(ServiceSection1)`
    grid-column: column-start 5/fullcontent-end;
    background-image: linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(${section2Image});
   
    ${(props) => props.theme.windowWidth <  "711" &&`
        grid-row: 5/6;
        grid-column: fullcontent;
        justify-content: center;
    `}
`
export const H2 = styled.h2`
    font-family: "abolition", sans-serif;
    letter-spacing: 0.2rem;
    font-weight: 300;
    text-transform: uppercase;
`
export const ServiceHeading = styled(H2)`
    text-align: left;
    font-size: calc(1.3rem + 1.7vw);
    grid-row: 2/3;
    grid-column: centercontent;

    ${(props) => props.theme.windowWidth <  "711" &&`
        text-align: center;
        font-size: calc(2.5rem + 2vw);
        line-height: normal;
    `}
`
export const ServicePageText = styled.p`
    grid-row: 3/4;
    grid-column: centercontent;
    justify-self: center;
    margin-top: 1rem;
`
export const ServiceText = styled(ServicePageText)`
    font-size: calc(1.4rem + .48vw);
`
export const TransitSection = styled(Section)`
    grid-template-rows: 4rem repeat(3, auto) 6rem;
    background-image: linear-gradient(rgba(70, 70, 70, 0.7), rgba(100, 100, 100, 0.3)), url(${transitImage});
    background-size: cover;
    background-position: center;
    color: #ffffff;
    text-align: center;
`
export const TransitHeading = styled(H2)`
    grid-row: 2/3;
    grid-column: centercontent;
    text-align: center;
    line-height: 1.2;
    font-size: ${(props) => props.theme.windowWidth > "2630" ? "6.8rem" : "calc(2.7rem + 1.1vw)"};
`
export const TransitHeadText =  styled(ServicePageText)`
    font-size: calc(1.6rem + .48vw);
`
export const TransitContent = styled.div`
    margin-top: 1rem;
    grid-row: 4/5;
    grid-column: centercontent;
    padding: 0 5rem;

    ${(props) => props.theme.windowWidth <  "701" &&`
        grid-column: fullcontent;
        padding: 0 3rem;
    `}
`
export const TransitContentText = styled(ServicePageText)`
    font-size: calc(1.4rem + .48vw);
    text-align: left;
`
export const TransitQuoteArea = styled.div`
    margin-top: 3rem;
    margin-bottom: 4rem;
    padding: 0 8rem;
    background-image: linear-gradient(rgba(99, 99, 99, 0.7), rgba(99, 98, 99, 0.3));
    border-radius: 1rem;

    ${(props) => props.theme.windowWidth <  "771" &&`
        margin-top: 2rem;
        margin-bottom: 2rem;
        padding: 0 3rem;
    `}
`
export const Quote = styled.span`
    font-family: great-primer, sans-serif;
    font-size: 40rem;
    height: 10rem;
    color: #a5a5a5;
    opacity: 0.2;
`
export const QuoteLeft = styled(Quote)`
    float: left;
    margin-top: -15rem;
    margin-left: -5rem;
`
export const QuoteRight = styled(Quote)`
    float: right;
    margin-top: -36rem;
    margin-right: -4rem;
`
export const QuoteText = styled(ServicePageText)`
    padding-top: 4rem;
    font-size: calc(1.8rem + .48vw);
    text-align: left;
`
export const PublicationText = styled(ServicePageText)`
    padding-top: 1rem;
    padding-bottom: 4rem;
    font-size: calc(1.9rem + .48vw);
    text-align: center;
`
export const H3Transit = styled(H3)`
    font-size: 2.8rem;
    font-weight: 600;
`
export const TransitBottomText = styled(ServicePageText)`
    font-size: calc(1.4rem + .48vw);
    text-align: left;
`
export const H3TransitAfter = styled(H3After)`
    margin-top: 1.5rem;
    height: 0.4rem;
    width: 8rem;
    background-color: white;
`
export const FoodSection = styled(Section)`
    grid-template-rows: 4rem repeat(3, auto) 6rem;
    background-image: linear-gradient(to left, rgba(218, 218, 218, 0.1), rgba(180, 180, 180, 0.1)), url(${foodImage});
    background-size: cover;
    background-position: center;
    color: #ffffff;
`
export const FoodHeading = styled(TransitHeading)`
`
export const FoodHeadText = styled(TransitHeadText)`
    text-align: center;
`
export const FoodContent = styled.div`
    margin-top: 3rem;
    grid-row: 4/5;
    grid-column: centercontent;
    display: grid;
    grid-template-columns: minmax(26rem, 0.9fr) minmax(min-content, 0.8fr);

    ${(props) => props.theme.windowWidth <  "771" &&`
        grid-template-columns: minmax(26rem, 1fr);
        margin-top: 0.5rem;
    `}
`
export const FoodText = styled(ServiceText)`
`
export const FoodContentInfo = styled.div`
    grid-column: 1/2;
    color: #353535;
    margin-top: 1rem;
    background-image: linear-gradient(rgba(252, 252, 252, 0.5), rgba(238, 238, 238, 0.5));
    border-radius: 1rem;
    box-shadow: 0 2rem 5rem rgb(0 0 0 / 20%);
    padding: ${(props) => props.theme.windowWidth < "501" ? "3rem 2rem" : "3rem 4rem"};
    font-size: calc(1.6rem + .48vw);
`
export const Strong = styled.strong`
    font-weight: 700;
`
export const OrangeBold = styled.span`
    font-weight: 700;
    color: #e67e22;
`