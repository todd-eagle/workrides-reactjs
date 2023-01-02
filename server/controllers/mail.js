require('dotenv').config();
const sgMail = require('@sendgrid/mail')
const templateID = process.env.TEMPLATE_ID
const contactMail = process.env.STAFF_EMAIL
const fromEmail = 'no-reply@mail.workrides.org'

module.exports = {
    sendMail: async(req, res) => {
    
        const {email, subject, message} = req.body

        sgMail.setApiKey(process.env.SENDGRID_API_KEY)

        const msgToUser = {
          to: `${email}`,
          from: `${fromEmail}`,

          templateId: templateID
        }

        const msgToStaff = {
            to: `${contactMail}`,
            from: `${email}`,
            subject: `${subject}`,
            message: `${message}`  
          }
        
        const sentMail = await sgMail.send(msgToUser)
        sentMail ? res.status(200).send('Email sent') : res.status(500).send('Server error: mail not sent')

        const staffMail = await sgMail.send(msgToStaff)
        staffMail ? res.status(200).send('Email sent') : res.status(500).send('Server error: mail not sent')
    }
}