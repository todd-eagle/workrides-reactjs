import React, {useEffect} from 'react'
import routes from './routes'
import { useLocation } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import useEvents from './hooks/useEvents'
import {Normalize} from 'styled-normalize'
import {GlobalResetStyle, Wrapper} from './styled-components/Base/Base'
import Footer from './components/Layout/Footer'   

const App = () => {
  const location = useLocation()
  const {useCurrentWidth} = useEvents()
  const windowWidth = useCurrentWidth()

  const orgName = 'Work Rides'

  const pageTitles =
    { 
      '/': orgName,
      '/services': `${orgName} - What We Do`,
      '/about': `${orgName} - Our Story`,
      '/contact': `${orgName} - Contact`,
      '/donate' : `${orgName} - Donate `,
    }
  
  
  useEffect(() => {
    document.title = pageTitles[location.pathname]
  }, [location])

  const windowResize = {
    windowWidth: windowWidth
  }

  return (
    <ThemeProvider theme={windowResize}>
      <Normalize />
      <GlobalResetStyle />
      <Wrapper>{routes}</Wrapper>
      <Footer />
    </ThemeProvider> 
  )
}

export default App
