import React from 'react'
import Menu from '../Menu/Menu'
import { NotFoundHeader, NotFoundHeadingContainer, 
         HeroHeadingMain, HeroHeadingSub } from '../../styled-components/Pages/PageNotFoundPage'


const PageNotFound = () => {

    return (
        <NotFoundHeader>
             <Menu />            
             <NotFoundHeadingContainer>
                <HeroHeadingMain>Page not found.</HeroHeadingMain>
                <HeroHeadingSub>If you think we lost a page, please let us know!</HeroHeadingSub>
            </NotFoundHeadingContainer>
        </NotFoundHeader>
    );
}

export default PageNotFound