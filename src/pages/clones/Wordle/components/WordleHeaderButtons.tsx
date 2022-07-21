import { ChartBar, Gear, Info, Plus } from "phosphor-react";
import { WordleButton } from "./WordleButton";


export function WordleHeardButtons() {
    return (
        <div className="w-[600px] py-[5px] flex flex-row items-center content-center justify-between">
            <div className="flex flex-row gap-[10px]">
                <WordleButton>

                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                        alt="usa flag"
                        className="w-4 h-4"
                    />
                    EN

                </WordleButton>

                <WordleButton>
                    <div className="flex flex-row items-center content-center justify-center text-[#57ac57]">
                        W
                        <Plus weight="bold" size={10} />
                    </div>
                </WordleButton>
            </div>

            <div className="flex flex-row gap-[10px]">
                <WordleButton>
                    <ChartBar size={20} weight="bold" />
                </WordleButton>
                <WordleButton>
                    <Gear size={20} weight="bold" />
                </WordleButton>
                <WordleButton>
                    <Info size={20} weight="fill" />
                </WordleButton>

            </div>

        </div>
    )
}