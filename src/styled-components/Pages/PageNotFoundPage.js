import styled, {css} from 'styled-components'
import { MainHeader,} from './ServicesPage'
import noFoundImage from '../../assets/images/404.jpg'
import { HeadingContainer } from '../Layout/Header'


export const NotFoundHeader = styled(MainHeader)`
background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${noFoundImage});
background-attachment: scroll;
grid-template-rows: 5.8rem repeat(7, minmax(min-content, 1fr));
height: 100vh;
`
export const NotFoundHeadingContainer = styled(HeadingContainer)`
    font-size: ${(props) => props.theme.windowWidth > "2630" ? "9rem" : " calc(2.3rem + 3vw)"};
    font-weight: 400;
    grid-column: 2/10;
    grid-row: 4/7;
    margin-top: 3rem;
    text-shadow: #646464 0.07rem 0.07rem;
`
export const HeroHeadingMain = styled.span`
    word-spacing: 5px;
    display: block;
`
export const HeroHeadingSub = styled(HeroHeadingMain)`
    font-size: ${(props) => props.page === '/about' ? "calc(1rem + 1.2vw)" : props.page === '/services' ? "calc(2rem + 2.2vw)" : props.page === '/donate' ? "calc(2rem + .9vw)" :"calc(.7rem + .9vw)"};
        
    ${(props) => props.theme.windowWidth > "2630" && props.page === '/donate' && `
        font-size: 4.5rem;
    `}

    margin-top: -0.5rem;
    word-spacing: 2px;
`