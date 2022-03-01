import React from 'react'

const Input = ({placeholder, ...rest}) => <input className='rounded-2xl border border-gray-500 text-2xl px-8 box-border' placeholder={placeholder} {...rest}/>

export default Input;