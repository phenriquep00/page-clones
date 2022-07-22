import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  type: string;
}>

export const WordleKeyboardKey = ({ type, children }: Props) => {

    const keyType = type

    return (
        <div className="bg-[#dce1ed] text-[#5a6376] flex items-center font-bold text-base content-center justify-center min-h-[46px] p-[3px] m-[3px] capitalize rounded-[4px] cursor-pointer flex-1">
            {children}
        </div>
    )
}