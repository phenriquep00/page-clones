import React, { PropsWithChildren } from 'react'



export function WordleButton({  children }: PropsWithChildren) {
  return (
    <button className='h-9 px-2 flex flex-row gap-1 text-[13px] bg-[#ebedf3] text-[#69758e] font-bold align-middle items-center justify-center rounded-[7px] hover:bg-[#e2f5df] hover:text-[#57ac57] transition-colors'>
        {
            children
        }
    </button>
  )
}