import React, {useState, useEffect, useCallback}  from 'react'
import Button from '../../../Layout/Button'
import ContactForm from '../../../Layout/BaseForm'
import { HeaderForm, ContactHeading, Form, MailStatus,
    Input, TextArea, FormButton, InputDiv, InputContainer,
    DimButton
} from '../../../../styled-components/Pages/ContactPage'
import Menu from '../../../Menu/Menu'
import useValidation from '../../../../hooks/useFormValidation'
import useMail from '../../../../hooks/useMail'

const HeaderSection = () => {

    const [values, setValues] = useState({})
    const [formValid, setFormValid] = useState(false)
    const [buttonText, setButtonText] = useState('Send')
    const {sendMail, mailMessage} = useMail()

    const Styles = {
        formStyle: Form,
        inputStyle: Input,
        textAreaStyle: TextArea,
        containerStyle: InputContainer
    }

    const buttonStyle = formValid ? FormButton : DimButton

    const onSubmit = async e => {
        e.preventDefault()
            
        if (formValid) {
            setButtonText('Sending...')
            await sendMail(values)
            setValues('')
            setButtonText('Sent!')
            setTimeout(()=>{
                setButtonText('Send')
            }, '2000')
        }   
    }

    const handleChange = e => {
        e.persist()
        setValues(values => ({ ...values, [e.target.id]: e.target.value}))    
        console.log('values -----" ', values)    
    }

    const inputInfo =
    [
        {type: 'text', placeholder: 'Full Name', id: 'full_name', value: values.full_name, required: true, charLength: {min: 3, max: 28}, chars: 'letter'},
        {type: 'text', placeholder: 'Email', id: 'email', value: values.email, required: true, email: true },
        {type: 'text', placeholder: 'Subject', id: 'subject', value: values.subject, required: true, charLength: {min: 2, max: 28}, chars: 'alphaNumeric'},
        {textArea: true, placeholder: 'Message', id: 'message', value: values.message, required: true, charLength: {min: 4, max: 200}, chars: 'alphaNumeric'}
    ]

    const {errors, isReqInputsSatisfied, isFormValid} = useValidation(values, inputInfo)

    const formIsValidated = useCallback((reqInputs) => {
        isFormValid ? setFormValid(true) : setFormValid(false)
    },[isFormValid])    

    useEffect(() => {
       formIsValidated(isReqInputsSatisfied)
    },[formIsValidated, isReqInputsSatisfied] )

    return (
    <HeaderForm>
    <Menu />
        <ContactHeading>Contact Us.</ContactHeading>
        <ContactForm 
            Style={Styles.formStyle} 
            InputStyle={Styles.inputStyle} 
            InputDiv={InputDiv}
            InputContainer={InputContainer}
            inputInfo={inputInfo} 
            TextAreaStyle={Styles.textAreaStyle} 
            errors = {errors}
            handleChange={handleChange}
           >
            <MailStatus>{mailMessage}</MailStatus>
            <Button Style={buttonStyle} formValid={formValid} onClick={onSubmit}>{buttonText}</Button>
        </ContactForm>
    </HeaderForm>
    
    )
}

export default HeaderSection