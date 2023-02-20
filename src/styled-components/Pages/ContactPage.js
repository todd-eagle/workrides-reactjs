import styled, {css} from 'styled-components'
import {Section, BaseButton, H2After, H2} from '../Base/Base'
import { MainHeader, ServiceHeading} from './ServicesPage'
import contactImage from '../../assets/images/35.jpg' 
import checkmarkImage from '../../assets/images/SVG/checkmark.svg'
import crossedImage from '../../assets/images/SVG/cross.svg'

export const HeaderForm = styled(MainHeader)`
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${contactImage});
    background-attachment: fixed;
    height: ${(props) => props.theme.windowWidth < "501" ? "68rem" : "77rem"};
    grid-template-rows:  ${(props) => props.theme.windowWidth < "501" ? "5.8rem repeat(9,minmax(min-content,1fr))" : "5.8rem repeat(7, minmax(min-content, 1fr))"};
`
export const ContactHeading = styled(ServiceHeading)`
    color: #e7e7e7;
    grid-column: ${(props) => props.theme.windowWidth < "601" || props.theme.windowWidth < "1370" ? "2/10" : "2/9"};
    grid-row: 2/3;
    justify-self: center;
    align-self: end;
    font-size:${(props) => props.theme.windowWidth < "601" ? " calc(1rem + 7.5vw)" : "6rem"};
    margin-left: ${(props) => props.theme.windowWidth < "1371" ? "unset" : "4.5rem"};
    margin-bottom: ${(props) => props.theme.windowWidth < " 731" ? "-2.5rem" : "-4.5rem"};
`
export const Form = styled.form`
    display: grid;
    margin-left: ${(props) => props.theme.windowWidth < "1371" ? "unset" : "4.5rem"};
    grid-column:  ${(props) => props.theme.windowWidth < "781" ? "2/10" : props.theme.windowWidth < "1371" ? "3/9" : "3/8"};
    grid-row: 3/-1;
    row-gap: 1.1rem;
    padding: ${(props) => props.theme.windowWidth < "501" ? "4rem 0 4.5rem 0" : "5rem 0 9rem 0"};
    color: #3f3f3f;
`
export const MailStatus = styled.div`
`
const checkmark = `
    background-image: url(${checkmarkImage});
    background-size: 4rem;
    // background-size: ${(props) =>props.theme.windowWidth < "400" ? "3.5rem" : "4rem"};
    background-position-x: 98%;
    background-position-y: 0.35rem;
`
const cross = `
    background-image: url(${crossedImage}) !important;
    &:-webkit-autofill,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active
    {
        background-image: url(${crossedImage}) !important;
    }
    background-size: 3.4rem;
    background-position-y: 0.7rem;
    background-position-x: 97.5%;
`
export const InputContainer = styled.div`
    position:relative; 
    padding:0;
    margin:0;
`
export const InputDiv = styled.div`
    ${props => !props.changeImage ? '' : props.changeImage === "cross" ? cross : checkmark}
    position:absolute;
    margin-left: ${(props) =>props.theme.windowWidth < "400" ? "82%" : props.theme.windowWidth < "500" ? "85%" : props.theme.windowWidth < "800" ? "88%" :  props.theme.windowWidth < "1130"? "90%" : props.theme.windowWidth < "1230" ? "92%" : "93%"};
    padding-right: 2rem;
    font-size: 2.4rem;
    height: 4.7rem;
    width: 4rem;
    padding-left: 2rem;
    background-repeat: no-repeat;
    z-index: 1;
`
export const Input = styled.input`
    ${props => !props.changeImage ? '' : props.changeImage === "cross" ? cross : checkmark}
    width: 100%;
    border: none;
    box-shadow: 0 1rem 2rem rgb(0 0 0 / 50%);
    font-size: ${(props) =>props.theme.windowWidth < "400" ? "1.8rem" : "2.4rem"};
    height: 4.7rem;
    padding-left: 2rem;
    border-radius: 1.2rem;
    background-repeat: no-repeat;
    opacity: 0.8;

    ${(props) => props.theme.windowWidth < "431"  && `
        width: 100%;
    `}
`
export const TextArea = styled.textarea`
    ${props => !props.changeImage ? null : props.changeImage === "cross" ? cross : checkmark}
    width: 100%;
    height: 20rem;
    font-family: inherit;
    font-size: ${(props) =>props.theme.windowWidth < "400" ? "1.8rem" : "2.5rem"};
    box-shadow: 0 1rem 2rem rgb(0 0 0 / 50%);
    padding-left: 2rem;
    border-radius: 1.2rem;
    background-repeat: no-repeat;
    opacity: 0.8;
`
export const ContactSection = styled(Section)`
    row-gap: 4rem;
`
export const FormButton = styled(BaseButton)`
    font-size: 2.1rem;
    padding: 1rem 3rem;
    letter-spacing: 0.1rem;
    color: #ffffff;
    justify-self: center;
    background-color: #e67e22;
`
export const DimButton = styled(FormButton)`
    background-color: #EFBF9C;
    cursor: auto;

`
export const Contact2Heading = styled(ContactHeading)`
    font-size: 4rem;
    text-align: left;
    grid-row: 2/3;
    grid-column: centercontent;
`
export const ContactInfoArea = styled.div`
    grid-row: 3/4;
    grid-column: centercontent;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
    justify-items: center;
    margin-bottom: 3rem;
    
    div: first-child {
        margin-bottom: 0;
    }
`
export const CenteredAddressContent = styled.div`
    display: grid;
    grid-column: centercontent;
    grid-row: 4/4;
    justify-items: center;
    margin-top: -7rem;
    margin-bottom: 5rem;
`
export const EmailContacContent = styled.div`
    margin-bottom: 2rem;
    font-size: ${props => props.theme.windowWidth < "330" ? "6vw" : "2rem"};
    row-gap: 1rem;
`
export const EmailInfoContainer = styled.div`
`
export const EmailTitle = styled.p`
    grid-column-start: 1;
`
export const EmailLink = styled.a`
    text-decoration: none;
    letter-spacing: 0.1rem;
    color: #37a1cc;
`
export const PhysicalAdress = styled.div`
    display: grid;
    align-self: center;

    ${(props) => props.theme.windowWidth <  "871" &&`
        text-align:  center;
        justify-items:  center;
    `}
`
export const H2Contact = styled(H2)`
    font-size: 4rem;
    text-align: ${(props) => props.theme.windowWidth < "761" ? "center" : "left"};
    grid-row: 2/3;
    grid-column: centercontent;
`
export const oneLine = css`
    white-space: pre-line;
`
export const Address = styled.p`
    ${oneLine}
    font-size: 2rem;
`
export const H2ContactAfter = styled(H2After)`
    content: "";
    margin: 0 auto;
    height: 0.2rem;
    display: block;
    margin-top: 1.5rem;
    width: 25rem;
    background-color: #e67e22;
    width: 100%;
`
export const H3Address = styled.h3`
    font-family: Abolition, sana-serif;
    letter-spacing: 0.2rem;
    font-size: 3.8rem;
    font-weight: 300;
`
export const ContactImgLogo = styled.img`
    width: 70%;
    height: auto;
`
