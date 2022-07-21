import React, { PropsWithChildren } from 'react'



export function Showcase({  children }: PropsWithChildren) {
    return(
        <div className='bg-gray-600 w-full h-full'>
            {children}
        </div>
    )
}