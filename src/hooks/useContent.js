import {useState} from 'react'
import contentRoute from '../api/route'

const useContent = () => {

    const [pageContent, setPageContent] = useState([])

    const getPageContent = async(page) => {
        try {
            const  response = await contentRoute.get(`/api/content/${page}`)
            setPageContent(response.content)
        } catch (err) {
            console.log('Get content error: ', err)
        }
    }

    const getSectiontContent = (pageInfo, section) => {
        let searchObject = []

        searchObject = pageInfo.find(sectionName => sectionName.section === section )

        return searchObject
    }

    return {getSectiontContent, getPageContent, pageContent}
}

export default useContent