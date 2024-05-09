import React, {useId} from 'react'

const Input=React.forwardRef(function Input({
    lebel,
    type="text",
    className="",
    ...props
}, ref){
    const id=useId()
    return (
        <div className='w-full'>
            {lebel && <lebel className='inline-block mb-1 pl-1'
            htmlFor={id}>
                {lebel}
                </lebel>
                }
                <input
                type={type}
                className={`${className}`}
                ref={ref}
                {...props}
                id={id}
                />
        </div>
    )
})

export default input
