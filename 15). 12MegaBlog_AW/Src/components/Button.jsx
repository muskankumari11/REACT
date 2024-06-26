import React, { Children } from 'react'

function Button({
    Children,
    type='button',
    bgcolor='bg-blue-600',
    textColor='text-white',
    className=' ',
    ...props
}) {
  return (
    <button className={` px-4 py-2 rounded-lg ${bgcolor} ${textcolor} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button
