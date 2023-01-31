import styled from 'styled-components'
import { H2After, Section} from '../Base/Base'
import { MainHeader, ServiceHeading} from './ServicesPage'
import DonateImage from '../../assets/images/99.jpg'

export const HeaderDonate = styled(MainHeader)`
    display: grid;
    grid-template-rows: 5.8rem repeat(7, minmax(min-content, 1fr));
`
export const DonateHeader = styled(HeaderDonate)`
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${DonateImage});
    height:  ${(props) => props.theme.windowWidth < "601" ? "45rem" : props.theme.windowWidth < "901" ? "55vh" : "65vh"};
`
export const HeadingContainer = styled.h1`
    grid-column: 3/9;
    grid-row: 3/7;
    margin-top: 3rem;
    text-shadow: #646464 0.07rem 0.07rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.1rem;
`
export const HeroHeadingMain =  styled.span`

`
export const HeroHeadingSub = styled(HeroHeadingMain)`
`
export const DonateSection = styled(Section)`
    row-gap: 4rem;
    display: flex;
    flex-direction: column;
    grid-column: fullcontent;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;
`
export const DonateHeading = styled(ServiceHeading)`
    font-size: calc(2.5rem + 1.2vw)
    font-size: ${(props) => props.theme.windowWidth > "2630" ? "7.3rem" : "calc(2.5rem + 1.2vw)"};
`
export const DonateH2After = styled(H2After)`
`
export const DonateHeadText = styled.div`
`
export const DonateText = styled.p`
    font-size: calc(1.3rem + .48vw);
    text-align: center;
    padding: 0 5rem 1rem 5rem;
`
export const DonationContainer = styled.div`
`
export const DonateIframe = styled.iframe`
   
`
export const DonateLink = styled.a`
background-color: #a968c0;
text-transform: uppercase;
text-decoration: none;
cursor: pointer;
color: #fff;
border: 4px solid #eee;
font-size:  calc(.8rem + .7vw);
font-weight: 500;
border-radius: 2rem;
padding: 2rem;  
letter-spacing: 0.1rem;
margin-bottom: 5rem;

&:hover {
    background-color: #86549B;
}
`