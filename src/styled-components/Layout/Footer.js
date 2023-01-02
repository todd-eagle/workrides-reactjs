import styled from 'styled-components'
import footerImage from '../../assets/images/footer.jpg'

export const FooterStyle = styled.footer`
    grid-column: fullwidth-start/fullwidth-end;
    display: grid;
    grid-template-rows: repeat(2, minmax(6rem, 6.5rem));
    grid-template-columns: minmax(3rem, 1fr) [centercontent-start] minmax(10rem, 114rem) [centercontent-end] minmax(3rem, 1fr);
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${footerImage});
    background-size: cover;
    background-position: center;
    color: #919191;
    row-gap: 2rem;
    padding-bottom: 5rem;
`
export const FooterTop = styled.div`
    padding: 5rem 4rem;
    grid-column: 2/3;
    grid-row: 1/2;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 3.5rem;

    ${(props) => props.theme.windowWidth <  "601" &&`
        justify-content: center;
    `}
`
export const FooterNav = styled.ul`
    grid-column: 2/3;
    grid-row: 1/2;
    display: ${props => props.theme.windowWidth > "450" ? "grid" : "flex"};
    grid-template-columns: repeat(5, min-content);
    column-gap: 1.5rem;
    padding-right: 2rem;
    &:hover {
        color: #fff;
    }

    ${(props) => props.theme.windowWidth < "451"  &&`
        justify-content: center;
        flex-wrap: wrap;
    `}
`
export const FooterSocial = styled.ul`
    grid-column: 2/3;
    grid-row: 2/3;
    display: grid;
    grid-template-columns: repeat(3, 3rem);
    grid-gap: 1.4rem;
    list-style: none;
    align-content: center;
   
    --color1: dimgrey;
    --color2: dimgrey;
    --color3: dimgrey;

    ${(props) => props.theme.windowWidth < "601"  &&`
        margin-top: -3rem;
    `}
`
export const Li = styled.li`
    list-style: none;
    align-self: center;
    padding-bottom: 3rem;
`
export const FooterLink = styled.a`
    text-decoration: none;
    font-size: 1.6rem;
    color: #919191;
    &:hover {
        color: #fff;
    }
`
export const FooterSocialLink = styled.a`
`
export const SocialIcon = styled.svg`
    height: 2.5rem;
    width: 2.5rem;
    &:hover {
        --color${(props) => props.index+1}: ${(props) =>props.index+1 === 1 ? "#1877f2" : props.index+1 === 2 ? "#1da1f2" : " #e4405f" };
    }
`
export const FooterCopyRight = styled.div`
    grid-column: 2/3;
    grid-row: 3/4;
    display: grid;
    justify-items: center;
    row-gap: 1rem;
    font-size: 1.5rem;
    margin-top:  ${(props) =>  props.theme.windowWidth < "400" ? 
                                "8rem":props.theme.windowWidth < "451" ? 
                                "3rem": props.theme.windowWidth < "335" ? 
                                "8rem": "unset"
    };
`
export const PFooter = styled.p`
    letter-spacing: 0.1rem;
    word-spacing: 0.2rem;
    text-align: center;
    padding-top:  ${(props) => props.theme.windowWidth < "601" ? "2rem" : "none"}; 
    
    ${(props) => props.color === "dimGrey"  &&`
        color: #616161;
    `}
`