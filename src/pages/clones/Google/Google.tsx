import { DotsNine, UserCircle } from "phosphor-react";

export function Google() {
    return (
        <div className="text-[#202124]">
            {/* Header */}
            <header className="flex h-[60px] p-[6px] items-center text-[14px]">
                <div className="flex-1">
                    <div className="min-w-fit h-12">
                        <div className="pl-0 pr-1 float-right justify-end  whitespace-nowrap ">
                            <div className="pr-[15px]">
                                <div className="flex">
                                    <a className="pr-[15px] pt-2 hover:underline" href="#">Gmail</a>
                                    <a className="pr-[15px] pt-2 hover:underline" href="#">Images</a>
                                    <div className="rounded-full w-9 h-9 flex items-center p-1 hover:bg-slate-300 transition-colors">
                                        <a className="pr-[15px] mr-1" href="#"><DotsNine size={28} color="#5f6368" weight="bold" /></a>
                                    </div>
                                    <a className="pl-[15px]" href="#"><UserCircle size={40} color="#f500d4" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div>


            </div>

            <div>

            </div>

            <div>

            </div>

            <footer>

            </footer>
        </div>
    )
}