import { WordleTitle } from "./components/WordleTitle";

export function WordlePage() {
    return (
        <div className="w-screen h-screen flex flex-col items-center my-[5px]">
            <header>
                <WordleTitle />
            </header>
            
        </div>
    )
}