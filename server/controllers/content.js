const contentData = require('../data/data.json')
module.exports = {
   
    getContent: async(req, res)=> {

        const {page_id} = req.params

        try {
            const pageContent = contentData.find(pageContent => pageContent.page_id === page_id)
            return res.status(200).send(pageContent)
        } catch (err) {
            return res.status(422).send(err)    
        }

    }
}