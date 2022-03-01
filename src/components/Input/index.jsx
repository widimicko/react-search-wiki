import React from 'react'

const Input = ({placeholder, ...rest}) => <input className='py-1 px-2 rounded-xl border border-gray-500 text-2xl' placeholder={placeholder} {...rest}/>

export default Input;