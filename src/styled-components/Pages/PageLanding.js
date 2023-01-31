import styled from 'styled-components'
import {Section, H2, H3, H4, SectionText, Span} from '../Base/Base'
import heroImage from '../../assets/images/hero.jpg'
import USAImage from '../../assets/images/unitedstates.jpg'
import SafetySectionBkgrd from '../../assets/images/6.jpg'
import SafetySectionBkgrdRight from '../../assets/images/7.jpg'
import SafetySectionBkgrdLeft from '../../assets/images/9.jpg'
import TestimonialBkgrd from '../../assets/images/8.jpg'


export const HeroSection = styled.div`
    grid-column: fullwidth;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: ${(props) => props.theme.windowWidth > "1024" ? "100vh" : "70vh"}; 
    z-index: 96;
    display: grid;
    grid-template-columns: minmax(3rem, 1fr) repeat(8, minmax(min-content, 1fr)) minmax(3rem, 1fr);
    grid-template-rows: ${(props) => props.theme.windowWidth > 900 ? 
        "3rem min-content minmax(5vh, 0.6fr) min-content minmax(15vh, 1fr)" : 
        "5.8rem min-content minmax(11vh, 0.7fr) min-content minmax(15vh, 1fr)"};     
`
export const HeadingContainerBar = styled.div`
    padding: ${(props) => props.theme.windowWidth > "900" ? "1rem 0 2rem 0" : "0.5rem 0 0.5rem 0"};         
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
    grid-row: 4/5;
    grid-column: 1/-1;
`
export const HeadingContainer = styled.h1`
    color: #fff;
    text-transform: uppercase;
    font-weight: 100;
    text-align: center;
    letter-spacing: 0.1rem;
`
export const HeroHeadingMain =  styled.span`
    font-size: calc(2.3rem + 1.7vw);
    word-spacing: 5px;
    display: block;

`
export const HeroHeadingSub = styled(HeroHeadingMain)`
    font-size: calc(.7rem + .9vw);
    margin-top: -0.5rem;
    word-spacing: 2px;
    display: block;
`
export const HeroButtonLink = styled.a`
    grid-row: 5/6;
    grid-column: 1/-1;
    align-self: center;
    justify-self: center;
`
export const HeroButton = styled.button`
    background-color: #a968c0;
    text-transform: uppercase;
    cursor: pointer;
    color: #fff;
    border: 3px solid #fff;
    font-size:  ${(props) => props.theme.windowWidth > "900" ? "2.9rem" : "calc(1.3rem + 1vw)"};
    font-weight: 100;
    border-radius: 1rem;
    padding: 2rem;  
    letter-spacing: ${(props) => props.theme.windowWidth > "550" ? "0.1rem" : "0"};
`
export const SafetySection = styled(Section)`
    grid-template-rows: 4rem repeat(3, auto) 7rem;
    background-image: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${SafetySectionBkgrd});
    background-size: cover;
    background-position: center;
`
export const SafetySideProfile = styled.div`
    margin-top: 4rem;
    grid-row: 4/5;
    opacity: 0.3;
    background-size: cover;
    z-index: 40;
`
export const SafetySideBkgrdLeft = styled(SafetySideProfile)`
    grid-column: 1/2;
    background-image: url(${SafetySectionBkgrdLeft});
    height: 92.5%;
`
export const SafetySectionInfoBlock = styled.div`
    margin-top: 4rem;
    grid-row: 4/5;
    grid-column: centercontent;
    display: grid;
    grid-template-columns: ${(props) => props.theme.windowWidth > "700" ? "repeat(auto-fit, minmax(16rem, 1fr))" : "1fr"};  
`
export const SafetyInfoCard = styled.div`
    display: grid;
    color: white;
    overflow: hidden;
`
export const SafetyCardImage = styled.img`
    grid-row: 1/2;
    grid-column: 1/-1;
    width: 100%;
    opacity: 0.5;
    transition: all 0.4s;
`
export const SafetyCardContent = styled.div`
    > * {
        padding: 1rem 3rem 1rem 3rem;
    }
    grid-row: 1/2;
    grid-column: 1/-1;
    justify-self: center;
    align-self: end;
    font-size:  ${(props) => props.theme.windowWidth < "701" ? "calc(1.6rem + .8vw)" : props.theme.windowWidth > "1874" ? "2rem"  : "calc(1rem + .6vw)"};  
    line-height: 1.3;
    padding: 2rem 0 3rem 0;
    background-color: black;
    opacity: 0.65;
    z-index: 30;
    height: 21rem;
    transition: all 0.5s ease;
`
export const SafetyText = styled.p`
`
export const SafetyTextBottom = styled(SafetyText)`
    opacity: 0;
`
export const H3SafetyCard = styled(H3)`
    font-size: calc(2.2rem + .6vw);
    font-weight: 400;
`
export const SafetySideBkgrdRight = styled(SafetySideProfile)`
    grid-column: centercontent-end/fullcontent-end;
    background-image: url${SafetySectionBkgrdRight});
    height: 92.5%;
`

export const GeneralSection = styled(Section)`
    grid-template-rows: 4rem repeat(3, auto) 4rem;
    background-image: url(${USAImage});
    background-size: cover;
    background-position: center;
`
export const GeneralSectionInfo = styled.div`
    margin-top: 3rem;
    grid-row: 4/5;
    grid-column: centercontent;
    display: grid;
    ${(props) => props.theme.windowWidth > '600' && `
        grid-template-columns: min-content minmax(20rem, 68rem);
    `}
    column-gap: 3rem;
    row-gap: 1rem;
    justify-content: center;
    align-items: center;
    line-height: normal;
`
export const TestimonialSection = styled(Section)`
    grid-template-rows: 4rem repeat(5, auto) 7rem;
    background-image: linear-gradient(rgba(77, 77, 77, 0.7), rgba(77, 77, 77, 0.7)), url(${TestimonialBkgrd});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: #fff;
`
export const TestimonialSectionInfo = styled.div`
    margin-top: 3rem;
    grid-column: centercontent;
    grid-row: 5/6;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    column-gap: 5rem;
`
export const TestimonialSectionStatementBox = styled.div`
    grid-column: 1/2;
    display: grid;
    justify-content: center;
    align-content: center;
    row-gap: 2rem;
    border-radius: 1.5rem;
    background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2));
    padding: 5rem;
    font-size: ${(props) => props.theme.windowWidth > "1864" ? "2.8rem" : "calc(1.4rem + .75vw)"};
    font-weight: 100;
    
    ${(props) => props.theme.windowWidth <  "851" &&`
        display: none;
    `}
`
export const TestimonialWorkersBox = styled.div`
    grid-column: 2/3;
    display: grid;
    grid-template-rows: repeat(4, min-content);
    grid-row-gap: 2.5rem;
`
export const TestimonialWorkers = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`
export const TestimonialImage = styled.img`
    border: solid 0.1rem #808080;
    border-radius: 100%;
    height: 8rem;
    filter: grayscale(70%);
    transition: all 0.3s;
`
export const TestimonialWorkersText = styled.p`
    padding: 0 3rem 0 2rem;
    font-size: ${(props) => props.theme.windowWidth < "1825" ? " calc(1rem + .62vw)" : "2.2rem"};  
    font-weight: 100;
    transition: font-weight 0.1s;
    `
export const TestimonialSectionStatement = styled.p`
    grid-row: 1/2;
    animation: fadeIn 1s ease-out;
`
export const TestimonialSectionStatementSig = styled.p`
    grid-row: 2/3;
    animation: fadeIn 1s ease-out;
`
export const TestimonialHidden = styled(Span)`
    display: none;
`
export const TestimonialsText = styled.p`
    position: absolute;
    font-weight: 400;
    letter-spacing: 0.1rem;
    cursor: pointer;
`
export const JoinSection = styled(Section)`
    grid-template-rows: 4rem repeat(5, auto) 7rem;
    background-color: #f7f7f7;
`
export const JoinOptions = styled.div`
    margin-top: 4rem;
    grid-row: 4/6;
    grid-column: centercontent;
    display: grid;
    grid-template: repeat(6, 4.5vw)/repeat(18, 1fr);
    grid-gap: 1rem;

    ${(props) => props.theme.windowWidth < 901  && `
        grid-template-rows: repeat(10, 4.5vw);
    `}
    ${(props) => props.theme.windowWidth < 601  && `
        grid-template-rows: repeat(19, 4.5vw);
    `}
`
export const OptionItems = styled.div`
    overflow: hidden;
    border-radius: 1.2rem;
    color: #ebebeb;
`
export const Option1 = styled(OptionItems)`
    grid-row: 4/7;
    grid-column: 1/5;
    display: grid;
    grid-template-columns: 1fr;
    position: relative;
    z-index: 75;
    cursor: pointer;

    ${(props) => props.theme.windowWidth < 901  && `
        grid-row: 7/11;
        grid-column: 10/-1;
    `}
    ${(props) => props.theme.windowWidth < 601  && `
        grid-row: 15/20;
        grid-column: 1/-1;
    `}
`
export const Option2 = styled(OptionItems)`
    grid-row: 4/-1;
    grid-column: 5/10;
    z-index: 70;
    position: relative;

    ${(props) => props.theme.windowWidth < 901  && `
        grid-row: 1/7;
        grid-column: 1/8;
    `}
    ${(props) => props.theme.windowWidth < 601  && `
        grid-row: 7/11;
        grid-column: 1/-1;
    `}  
`
export const Option3 = styled(OptionItems)`
    grid-row: 1/4;
    grid-column: 1/10;
    z-index: 65;
    position: relative;
    color: #ebebeb;

    ${(props) => props.theme.windowWidth < 901  && `
        grid-row: 7/11;
    `}
    ${(props) => props.theme.windowWidth < 601  && `
        grid-row: 11/15;
        grid-column: 1/-1;
    `}
`
export const Option4 = styled(OptionItems)`
    grid-row: 1/-1;
    grid-column: 10/-1;
    z-index: 55;
    position: relative;

    ${(props) => props.theme.windowWidth < 901  && `
        grid-row: 1/7;
        grid-column: 8/-1;
    `}
    ${(props) => props.theme.windowWidth < 601  && `
        grid-row: 1/7;
        grid-column: 1/-1;
    `}
`
export const OptionHeading = styled(JoinSection)`
    top: 1.7vw;
    font-size: 1.7vw;
    z-index: 90;
`
export const Option1H4 = styled(H4)`
    width: 100%;
    position: absolute;
    top: 1.7vw;
    font-size: ${(props) =>props.theme.windowWidth > 1714 ? "1715" : "1.7vw"};
    z-index: 90;
    font-weight: 700;

    ${(props) => props.theme.windowWidth < 901  && `
        top: 3.2vw;
        font-size: calc(1.5rem + .85vw);
        letter-spacing: normal;
    `}
    ${(props) => props.theme.windowWidth < 901  && `
    `}
`
export const Option2H4 = styled(H4)`
    top: 1.8vw;
    padding: ${(props) =>props.theme.windowWidth > 1570 ? "0 1vw" : "0 2vw"};
    font-size: ${(props) =>props.theme.windowWidth > 1570 ? "2.6rem" : "1.45vw"};   
    z-index: 71;
    font-weight: 700;

    ${(props) => props.theme.windowWidth < 901  && `
        top: 6vw;
        font-size: calc(1.4rem + .75vw);
    `}
    ${(props) => props.theme.windowWidth < 601  && `
        top: 4vw;
        font-size: calc(1.4rem + 1.1vw);
    `}
`
export const Option3H4 = styled(H4)`
    top: 2.4vw;
    font-size:  ${(props) => props.theme.windowWidth > 2400 ? "4rem" : "calc(1rem + 1.4vw)"};
    z-index: 66;
     font-weight: 700;

    ${(props) => props.theme.windowWidth < 901  && `
        top: 3.5vw;
        font-size: calc(1.4rem + 1vw);
    `}
    ${(props) => props.theme.windowWidth < 601  && `
        top: 3.5vw;
        font-size: calc(1.4rem + 1vw);
    `}
`
export const Option4H4 = styled(H4)`
    top: 7vw;
    font-size:   ${(props) =>props.theme.windowWidth < 601 ? "calc(1.5rem + 1.1vw)" : props.theme.windowWidth > 1579 ? "3.3rem" : "calc(.5rem + 1.9vw)"};   
    z-index: 60;
    font-weight: 700;
`
export const Option1InfoContainer = styled.div`
    position: absolute;
    top: 4.5vw;
    z-index: 80;
    display: grid;
    grid-template-columns: 0.3fr 0.4fr 0.8fr 0.3fr;
    grid-column-gap: 4rem;
    grid-gap: 0.5rem;
    grid-row-gap: ${(props) => props.theme.windowWidth > "1749" ? "1.3rem" : "unset"};

    ${(props) => props.theme.windowWidth < 901  && `
        top: 7.5vw;
        grid-gap: 0.1rem;
        column-gap: 1rem;
        row-gap: 0.3rem;
        grid-template-columns: 0.3fr 0.3fr 0.8fr 0.3fr;
    `}

    ${(props) => props.theme.windowWidth < 601  && `
        top: 11.5vw;
        grid-template-columns: 1fr 0.6fr 1fr;
        left: 0;
    `}
`
export const Icon = styled.svg`
    height: ${(props) =>props.theme.windowWidth > 1714 ? "3rem" : "2.2vw"};
    width: 100%;
    z-index: 81;
`
export const Option1FbSvg = styled(Icon)`  
    grid-column:  ${(props) =>props.theme.windowWidth < 601 ? "1/2" : "2/3"};   

    ${(props) => props.theme.windowWidth < 901  && `
        height: calc(2.1rem + .7vw);
        width: calc(2.1rem + .7vw);
    `}
    ${(props) => props.theme.windowWidth < 601  && `
        height: 14vw;
        width: 100%;
    `}
    
`
export const Option1TwSvg = styled(Option1FbSvg)`  
    grid-row: 2/3;

    ${(props) => props.theme.windowWidth < 601  && `
        height: 14vw;
        width: 100%;
    `}
    ${(props) => props.theme.windowWidth < 601  && `
        grid-column: 2/3;
        grid-row: 1/2;
    `}
`
export const Option1InstSvg = styled(Option1FbSvg)`  
    grid-row: 3/4;   

    ${(props) => props.theme.windowWidth < 601  && `
        grid-column: 3/4;
        grid-row: 1/2;
    `}
`
export const POption1 = styled.p`
    grid-column: 3/4;
    &:hover {
        font-weight: 600;
    }
`
export const PFb = styled(POption1)`
    grid-row: 1/2;
`
export const PTw = styled(POption1)`
    grid-row: 2/3;
`
export const PInst = styled(POption1)`
    grid-column: 3/4;
    grid-row: 3/4;
`
export const OptionMediaSpan = styled(Span)`
    font-size:  ${(props) =>props.theme.windowWidth > 1714 ? "2.2rem" : "calc(.6rem + 1vw)"};
    letter-spacing: .06em;
    color: #ebebeb;
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: brightness(60%);
    border-radius: 1.2rem;
    cursor: pointer;
`
export const LargeText = styled.p`
    font-family: "abolition", sans-serif;
    font-size: calc(6rem + 4vw);
    font-weight: 300;
    letter-spacing: 1px;
    text-align: end;
`
export const LargeOrangeText = styled(LargeText)`
    color: #f2ba9d;
`
export const LargePurpleText = styled(LargeText)`
    color:#c59cd4;
`
export const LargeGreenText = styled(LargeText)`
    color: #9ed0a0;
`
export const H2Landing = styled(H2)`
    grid-row: 2/3;
    grid-column: centercontent;
`
export const GeneralSectText = styled(SectionText)`
    font-size: calc(1.2rem + .5vw);
    line-height: 1.6;
    letter-spacing: 0.1rem;
`
export const StrongSpanUnderLine = styled(Span)`
    font-weight: 600;
    text-decoration: underline;
`
export const StrongPurpleUnderline = styled(StrongSpanUnderLine)`
    color: #a968c0;
`
export const StrongOrangeUnderline = styled(StrongSpanUnderLine)`
    color: #e67e22;
`
export const StrongGreenUnderline = styled(StrongSpanUnderLine)`
    color: #6ab76d;
`
export const OptionsLink = styled.a`
    text-decoration: none;
    color: #ebebeb;
`
export const Options1Text = styled(TestimonialsText)`
    display: none;
`
export const Options2Text = styled(TestimonialsText)`
    margin-top: 1rem;
    color: #ebebeb;
    top: 3vw;
    padding: 2vw;
    font-size: ${(props) =>props.theme.windowWidth > 1570 ? "1.8rem" : "calc(.5rem + .8vw)"};   
    z-index: 72;
   
    ${(props) => props.theme.windowWidth < 901  && `
        top: 8vw;
        font-size: calc(.6rem + 1vw);
        padding: 4vw;
        line-height: 1.4;
    `}
    ${(props) => props.theme.windowWidth < 601  && `
        top: 5.5vw;
        padding: 3vw 6vw;
        font-size: calc(.7rem + 1.4vw);
    `}
`
export const Options3Text = styled(TestimonialsText)`
    top: 3.5vw;
    padding: 2.6vw;
    font-size: 1.3vw;
    font-size: calc(.6rem + 1vw);
    z-index: 67;

    ${(props) => props.theme.windowWidth > 1849  && `
        padding: 2.5vw 2.2vw;
        font-size: 2.4rem;
    `}
    ${(props) => props.theme.windowWidth < 901  && `
        top: 4vw;
        font-size: calc(.6rem + 1vw);
        padding: 4vw;
    `}
    ${(props) => props.theme.windowWidth < 601  && `
        top: 5.5vw;
        padding: 3vw 6vw;
        font-size: calc(.7rem + 1.4vw);
    `}
    
`
export const Options4Text = styled(TestimonialsText)`
    margin-top: 7.5vw;
    padding: 5vw 6vw;
    font-size: calc(1.1rem + .7vw);
    z-index: 61;

    ${(props) => props.theme.windowWidth > 1669  && `
        padding: 5vw 3vw;
        font-size: 2.4rem;
    `}
    ${(props) => props.theme.windowWidth < 901  && `
        font-size: calc(.8rem + 1vw);
    `}
    ${(props) => props.theme.windowWidth < 601  && `
        margin-top: 8.5vw;
        font-size: calc(.6rem + 1.6vw);
    `}
`
const DecoratedText = styled.span `
        font-weight:600;
        font-size: 2.2rem;
`
export const OdecoratedText = styled(DecoratedText)`
    color: #e67e22;
`
export const PdecoratedText = styled(DecoratedText)`
    color: #a968c0;
`
export const GdecoratedText = styled(DecoratedText)`
    color: #6ab76d;
`
export const PlaceHolder = styled.span`
`