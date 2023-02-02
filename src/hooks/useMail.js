import {useState} from 'react'
import mailRoute from '../api/route'

const useMail = () => {

    const [mailMessage, setMailMessage] = useState(null)

    const sendMail = async(values) => {
        console.log('values -----:-----: ', values)
            try {
                const response = await mailRoute.post('/api/mail', values)
                setMailMessage(response.data)
            } catch (err) {
                setMailMessage(err)
            }
    }

    return {sendMail, mailMessage}
}

export default useMail