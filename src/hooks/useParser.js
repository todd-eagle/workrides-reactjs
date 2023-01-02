const useParser = () => {
   
    const parser = (content, args=null, regex = null) => {
        const splitContent = !regex ? content.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|") : content.split(regex)
        return splitContent
    }

    return {parser}
}

export default useParser