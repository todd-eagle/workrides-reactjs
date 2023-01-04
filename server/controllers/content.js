const contentData = require('../data/data.json')
module.exports = {
   
    getContent: async(req, res)=> {

        const {pageid} = req.params

        try {
            const pageContent = contentData.find(pageContent => pageContent.pageid === pageid)
            return res.status(200).send(pageContent)
        } catch (err) {
            return res.status(422).send(err)    
        }

    }
}