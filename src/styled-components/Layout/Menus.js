import styled from 'styled-components'
import {NavLink} from "react-router-dom"

export const MenuBackdrop = styled.div`
    grid-row: 1/2;
    grid-column: 1/-1;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
`
export const Ul = styled.ul`
    grid-row: 1/2;
    grid-column: 6/span 4;
    list-style: none;
    grid-template-columns: repeat(4, 13rem);
    justify-self: end;
    align-items: center;
    display: grid;

    ${(props) => props.isLandingPage && `
        grid-row: 2/3;
        grid-column: 6/span 4;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(4, 13rem);
        justify-self: end;
        align-items: center;
    `}
`
export const MobileUl = styled.ul`
    list-style: none;
    display: grid;
    grid-column: 7/span 4;
    grid-template-columns: 35rem;
    grid-template-rows: min-content repeat(4,5rem);
    height: 100vh;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    cursor: pointer;
    background-color: #464646;
    box-shadow: 0 2rem 4rem rgb(0 0 0 / 70%);
    z-index: 999;
 
    ${(props) => props.theme.windowWidth <  "901" &&`
        top: 0;
        right: 0;
        width: 35rem;
        right: ${props.isMenuOpen ? "0" : "-35rem"};
        position: fixed;
    `}
`
export const MenuLogoLink = styled(NavLink)`
    align-self: center;
    font-size: 1.6rem;
    padding: 0;
`
export const MenuLogo = styled.img`
    align-self: center;
    height: 7.2rem;
    margin: 1.4rem 0;
`
export const MobileNavButton = styled.button`
    display: grid;
    align-items: center;
    justify-items: center;
    width: auto;
    margin-left: -7rem;
    margin-right: 5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
`
export const Li = styled.li`
    align-self: center;
    font-size: 1.6rem;
    padding: 0;
    &:before {
        content: "";
        margin: 0 auto;
        height: 0.1rem;
        margin-bottom: -.4rem;
        width: 85%;
        background-color:  ${(props) => props.theme.windowWidth >  "900" ? "transparent" : "#535353"}; 
        #a6a1a1;

`
export const MobileHeaderMenuLi = styled.li`
    display: flex;
    justify-self: center;
   
`
export const MenuLink = styled(NavLink)`
    font-size: 1.7rem;
    font-weight: 300;
    color: #fff;
    text-decoration: none;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    text-align: center;
    padding: 1.55rem 0;
    display: block;
    background-color:  ${(props) => props.isdonatemenu ? "#a968c0" : "transparent"};   

    &.active {
        background-color:  ${(props) => props.isdonatemenu ? "#a968c0" :"#e67e22"};
      }
    
    ${(props) => props.theme.windowWidth <  "901" &&`
        background-color: transparent;
    `}
    `

export const LogoPosition = styled.a`
    margin-top: 1.6rem;
    grid-row: 1/2;
    grid-column: 2/3;

    ${(props) => props.isLandingPage  && `
        margin-top: 0;
        grid-row: 2/3;
        grid-column: 2/3;
    `}

    ${(props) => props.theme.windowWidth <  "901" &&`
        margin-top: 0.3rem;
        grid-row: 1/2;
        grid-column: 2/3;
    `}
`
export const PageLogo = styled.img`
    height: ${(props) => props.isLandingPage  &&  props.theme.windowWidth >  "900" ? "8.5rem" :  props.theme.windowWidth <  "901" ? "5.4rem" : "7.4rem"};   
    transition: all 0.5s ease;
    `
export const MenuList = styled.li`
    justify-self: center;
    display: none;
`
const MobileMenuStripe = styled.span`
    width: 3rem;
    height: 2px;
    background-color: #fff;
    display: inline-block;
    position: relative;
`
export const MobileMenuView = styled(MobileMenuStripe)`
    &:before, &:after {
        width: 3rem;
        height: 2px;
        background-color: #fff;
        display: inline-block;
        position: relative;
        content: "";
        position: absolute;
        left: 0;
        transition: all 0.2s;
    }
    &:after {
        top: 0.8rem;
    }
    &:before {
        top: -0.8rem;
    } 
`
export const MobileMenuCloseView = styled(MobileMenuStripe)`
    background-color: transparent;
        &:before, &:after {
            
            width: 3rem;
            height: 2px;
            background-color: #fff;
            display: inline-block;
            position: relative;
            content: "";
            position: absolute;
            left: 0;
            transition: all 0.2s;
            transform: rotate(45deg);
        }
        &:after {
            top: 0;
            width: 3rem;
            transform: rotate(-45deg);
            background-color: #fff;
        } 
`
const NavButtonStuff = styled.button`
    display: grid;
    align-items: center;
    justify-self: center;
`
export const NavButton = styled(NavButtonStuff)`
    grid-row: 1/2;
    grid-column: 9/10;
    border: none;
    background-color: transparent;
    cursor: pointer;

    ${(props) => props.theme.windowWidth >  "900" &&`
        display: none;
    `}
`