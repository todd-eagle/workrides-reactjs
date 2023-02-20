import React, {Fragment} from 'react'

const BaseForm = ({inputInfo, errors, Style=null, InputStyle=null, TextAreaStyle=null, children=null, handleChange, InputDiv, InputContainer}) => {

    const inputs = inputInfo.map((el, index) => {

        const otherInputs = el.textArea || el.dropDown
        const changeImage = el.value === undefined || el.value === '' ? null : errors[el.id] !== undefined ? 'cross' : 'checkmark'
       
        return (
            <Fragment key={el.id}> 
                <InputContainer>
                    <InputDiv changeImage={changeImage} />
                    {(!otherInputs) ?
                        <InputStyle 
                            key={el.id + index} 
                            id={el.id}
                            name={el.id}
                            placeholder={el.placeholder}
                            value={el.value || ''} 
                            // changeImage={changeImage}
                            onChange={handleChange}
                        />
                    :null}
                    {el.textArea ? <TextAreaStyle id={el.id} onInput={handleChange} name={el.id}  placeholder={el.placeholder}  value={el.value || ''}></TextAreaStyle> : null }
                </InputContainer>
            </Fragment>
        )
    })
   
    return (
        <Style>
            {inputs}
            {children}
        </Style>
    );
}

export default BaseForm