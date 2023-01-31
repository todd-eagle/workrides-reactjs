import styled, {createGlobalStyle} from 'styled-components'

export const GlobalResetStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    /* 10px/16px = 62.5% -> 1rem = 10px */
    font-size: 62.5%; 
}

body {
    font-family: "azo-sans-web", sans-serif;
    color: #4d4d4d;
    font-weight: 300;
    line-height: 1.6;
}
`
export const AbolitionFont = styled.p`
    font-family: "abolition", sans-serif;
    letter-spacing: 0.2rem;
    font-weight: 300;
`
export const Wrapper = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`
export const Container = styled.div`
    grid-template-columns: [fullwidth-start] minmax(5rem, 1fr) [centeredwidth-start] repeat(8, [column-start] minmax(min-content, 14rem) [column-end]) [centeredwidth-end] minmax(5rem, 1fr) [full-end];
`
export const H1 = styled.h1`
    color: #fff;
    text-transform: uppercase;
    font-weight: 100;
    text-align: center;
    letter-spacing: 0.1rem;
`
export const CenteredText = styled.div`
    text-align: center;
    line-height: 1;
` 
export const H2 = styled(CenteredText)`
    font-family: "abolition", sans-serif;
    letter-spacing: 0.2rem;
    font-weight: 300;
    text-transform: uppercase;
    font-size: ${(props) => props.theme.windowWidth > "2630" ? "7.3rem" : "calc(2rem + 2vw)"};         
`
export const H2After = styled(H2)`
    &:after {
        content: "";
        margin: 0 auto;
        height: 0.2rem;
        display: block;
        margin-top: 1.5rem;
        width: 25rem;
        background-color: #e67e22;
    }
`
export const H3 = styled(CenteredText)`
    font-family: "azo-sans-web", sans-serif;
`
export const H3After = styled(H3)`
    content: "";
    margin: 0 auto;
    height: 0.2rem;
    display: block;
    margin-top: 1rem;
    width: 10rem;
    background-color: #6ab76d;
`
export const H4 = styled(CenteredText)`
    font-family: "azo-sans-web", sans-serif;
    text-align: center;
    line-height: 1;
    font-weight: 600;
    font-size: 3rem;
    letter-spacing: 0.1rem;
    width: 100%;
    position: absolute;
    text-align: center;
    line-height: 1;
`
export const Section = styled.section`
    grid-column: fullwidth-start/fullwidth-end;
    display: grid;
    grid-template-columns: [fullcontent-start] minmax(3rem, 1fr) [centercontent-start] repeat(8, [column-start] minmax(min-content, 14rem) [column-end]) [centercontent-end] minmax(3rem, 1fr) [fullcontent-end];
    z-index: 5;
`
export const SectionText = styled.div`
    margin-top: 1rem; margin-top: 1rem;
    font-size: calc(1.6rem + .48vw);
`
export const Separator = styled.div`
    grid-column: fullwidth;
    padding: 0.3rem;
`
export const LightGreySeparator = styled(Separator)`
    background-color: #e6e6e6;
`
export const DarkGreySeparator = styled(Separator)`
    background-color: #333;
`
export const Span = styled.span`    
`
export const SpanPurple = styled(Span)`
    color: #a968c0;
`
export const SpanOrange = styled(Span)`
    color: #e67e22;
`
export const SpanGreen = styled(Span)`
    color: #6ab76d;
`
export const PSectionText = styled.p`
    margin-top: 1rem;
    font-size: calc(1.6rem + .48vw);
`
export const SectionTextCentered = styled(PSectionText)`
    text-align: center;
`
export const SectionTextLead = styled(SectionTextCentered)`
    grid-row: 3/4;
    grid-column: centercontent;
    justify-self: center;
`
export const BaseButton = styled.button`
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.8rem 2rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    width: max-content;
    border-radius: 2rem;
    border: 0.2rem solid #ffffff;
`