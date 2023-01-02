import React from 'react'

const Button = (props) => {
    const {Style=null, children=null, title=null, onClick} = props

    return (
        <Style onClick={onClick} title={title}>
            {children}
        </Style>
    )
}

export default Button