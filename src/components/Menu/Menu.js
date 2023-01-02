import React, {useRef, useState, Fragment} from 'react'

import {gsap} from 'gsap'
import Button from '../Layout/Button'
import {MenuBackdrop, Ul, MobileUl, MobileMenuView, MobileMenuCloseView, 
        MobileNavButton, MenuLogoLink, MobileHeaderMenuLi,
        MenuLogo, Li, MenuLink, NavButton, PageLogo, LogoPosition} from '../../styled-components/Layout/Menus'
import whiteLogo from '../../assets/images/logo-white.png'
import twoToneLogo from '../../assets/images/logo-two-toned.png'
import { useLocation, useMatch } from 'react-router-dom'
import useEvents from '../../hooks/useEvents'

const RenderMenu = ({menuItems}) => {

  const location = useLocation()
  const matchLink = useMatch(location.pathname)
  const {useCurrentWidth} = useEvents()
  let [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const windowWidth = useCurrentWidth()
  const isLandingPage = location.pathname === "/" ? true :  false
  const UL = windowWidth < 901 ? MobileUl : Ul

  const buttonLogoTitle = 'Link to Workrides Homepage'
  const buttonMobileTitle = 'Mobile Menu Button'
  const altMainLogoText = 'Main Logo Link'
  const altMobileLogoText = 'Main Logo Link'

  const onMouseOver = (effect, bool) => {
    
    if(windowWidth <901) return

      if(!bool) {
        gsap.fromTo(effect.current, {backgroundColor: "transparent"}, {backgroundColor: "#e67e22", padding: "1.55rem 0"})
      } else {
        gsap.fromTo(effect.current, {backgroundColor: "#a968c0"}, {backgroundColor: "#86549B", padding: "1.55rem 0"})
      }
    }

  const onMouseExit = (effect, bool) => {
    
    if(windowWidth <901) return

    if(!bool) {
      gsap.to(effect.current, {backgroundColor: "transparent", padding: "0"})
    } else {
      gsap.to(effect.current, {backgroundColor: "#a968c0", padding: "1.55rem 0"})
    }
  }

  const buttonHandle = () => {
    setIsMenuOpen(!isMenuOpen)
  }
 
  const mobileMenuHeading = () => {

    const menuLiHeading = 
    <MobileHeaderMenuLi>
      <Button Style={MobileNavButton} title={buttonLogoTitle} onClick={()=>{buttonHandle()}}>
        <MobileMenuCloseView>&nbsp;</MobileMenuCloseView>
      </Button> 
      <MenuLogoLink to = "/">
        <MenuLogo src={whiteLogo} alt={altMobileLogoText}/>
      </MenuLogoLink>
    </MobileHeaderMenuLi>
    
    const mobileHeading = windowWidth < 901 ? menuLiHeading : null

    return mobileHeading
  }

  const renderMenu = () => {
    const menuEffects = []

    const menu = menuItems.map((el, index)=> {

      menuEffects.push(useRef())

      const isMatchedLink =  matchLink.pathname === el.itemLink ? true : false
      
      // '0 : 1' to denote true : false. Rectifies a 'non-bool' error
      const isdonatemenu = el.itemName === "Donate" ? 1 : 0
      const isDonatePage = isdonatemenu ? true : false
      
      // 'reloadDocument' needed load Donate page on route change. //
      return (
        <Fragment key={el.itemName} >
        <Li>
          <MenuLink reloadDocument={isDonatePage} to={el.itemLink}
              isdonatemenu = {isdonatemenu}
              ref={menuEffects[index]} 
              onMouseEnter={()=> !isMatchedLink ? onMouseOver(menuEffects[index], isdonatemenu) : null}  
              onMouseLeave={()=> !isMatchedLink ? onMouseExit(menuEffects[index], isdonatemenu) : null}
              >{el.itemName}
          </MenuLink>
        </Li>
        </Fragment>
      )
    })

    return menu
  }

  const menuBackDrop = () => {
    const backDrop = location.pathname === "/" ? null : <MenuBackdrop>&nbsp;</MenuBackdrop>

    return backDrop
  }

  const logo = () => {
    const logoImage =  windowWidth < 901 ? whiteLogo : location.pathname === '/services' || location.pathname === '/about' ? twoToneLogo : whiteLogo
    return (<LogoPosition isLandingPage={isLandingPage} href='/'><PageLogo isLandingPage={isLandingPage} src={logoImage} alt={altMainLogoText} /></LogoPosition>)
  }

 
  return (
    <>
    {menuBackDrop()}
    {logo()}
    <Button 
        onClick={() => buttonHandle()}
        Style={NavButton}
        title={buttonMobileTitle} > 
        <MobileMenuView>&nbsp;</MobileMenuView>
    </Button>
    <UL isLandingPage={isLandingPage} isMenuOpen={isMenuOpen}>{mobileMenuHeading()}{renderMenu()}</UL>
    </>
  )
}

const Menu = () => {

  const menuItems = [
    {itemLink: "/services", itemName: "Services"},
    {itemLink: "/about", itemName: "Our Story"},
    {itemLink: "/contact", itemName: "Contact"},
    {itemLink: "/donate", itemName: "Donate"}
  ]

  return (
    <RenderMenu menuItems={menuItems} />
  )
}

export default Menu