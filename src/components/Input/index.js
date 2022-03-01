import React from 'react'

const Input = ({placeholder, ...rest}) => <input className='input-field' placeholder={placeholder} {...rest}/>

export default Input;