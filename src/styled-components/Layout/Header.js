import styled from 'styled-components'
//Page Landing
export const HeadingContainerBar = styled.div`
    padding: 1rem 0 2rem 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
    grid-row: 4/5;
    grid-column: 1/-1;
}
`
//Page Landing
export const HeadingContainer = styled.h1`
    color: #fff;
    text-transform: uppercase;
    font-weight: 100;
    text-align: center;
    letter-spacing: 0.1rem;
    font-size:  ${(props) => props.page === '/about' ? "calc(2.1rem + 2.5vw)" : "calc(2.3rem + 1.7vw)"};

    ${(props) => props.theme.windowWidth > "2630" && props.page === '/donate' && `
        font-size: 6.8rem;
    `}

    word-spacing: 5px;
    display: block;

    ${(props) => props.page === '/donate'  && `
        font-size: ${(props) => props.theme.windowWidth > "2630" ? "9rem" : " calc(2.3rem + 3vw)"};
        font-weight: 400;
        grid-column: 2/10;
        grid-row: 3/7;
        margin-top: 3rem;
        text-shadow: #000 .3rem .3rem;
    `}

    ${(props) => props.page === '/services'  && `
        grid-column:  ${props.theme.windowWidth < 771 ? "1/-1" : 
                        props.theme.windowWidth < 901 ? "3/-1" : 
                        props.theme.windowWidth < 1371 ? "4/10" : "5/10"};
        grid-row-start: 5;
        justify-self: center;
        align-self: center;
        font-size: ${props.theme.windowWidth < 601  ? "calc(1.7rem + 1.9vw)" : "calc(2rem + 2.2vw)"};
        font-weight: 400;
        text-shadow: #646464 0.07rem 0.07rem;
    `}
    ${(props) => props.page === '/about'  && `
        grid-column: 1/-1;
        grid-row-start: 5;
        justify-self: center;
        align-self: center;
        text-shadow: #646464 0.07rem 0.07rem;
    `}
`

//Page Landing
export const HeroHeadingMain =  styled.span` 
    
    ${(props) => props.page === '/donate'  && `
       
        word-spacing: 5px;
        display: block;
    `}
    ${(props) => props.page === '/services'  && `
        display: block;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        text-align: left;
    `}
    ${(props) => props.page === '/about'  && `
        line-height: 1.2;
        font-weight: 300;
        display: block;
        color: #fff;
        text-transform: uppercase;
        font-weight: 100;
        text-align: center;
        letter-spacing: 0.1rem;
    `}
`

//Page Landing
export const HeroHeadingSub = styled(HeroHeadingMain)`
    font-size: ${(props) => props.page === '/about' ? "calc(1rem + 1.2vw)" : props.page === '/services' ? "calc(2rem + 2.2vw)" : props.page === '/donate' ? "calc(2rem + .9vw)" :"calc(.7rem + .9vw)"};
    
    ${(props) => props.theme.windowWidth > "2630" && props.page === '/donate' && `
        font-size: 4.5rem;
    `}
    
    margin-top: -0.5rem;
    word-spacing: 2px;
    display:  ${(props) => props.theme.windowWidth < 551 && props.page === undefined ? "none" : "block"};
    text-align: ${(props) => props.theme.windowWidth < 551 ? "center" : "unset"};
`
