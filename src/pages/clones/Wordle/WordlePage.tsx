import KeyboardReact from "react-simple-keyboard";
import { WordleGrid } from "./components/WordleGrid";
import { WordleHeardButtons } from "./components/WordleHeaderButtons";
import WordleKeyboard from "./components/WordleKeyboard";
import { WordleTitle } from "./components/WordleTitle";

export function WordlePage() {
    return (
        <div className="w-[100%] max-w-[600px] self-center justify-self-center mx-auto align-middleh-screen flex flex-col items-center my-[5px]">
            <header>
                <WordleTitle />
                <WordleHeardButtons />
            </header>

            <div>
                <WordleGrid />
            </div>
            

            <div className="mt-8 w-full h-40">
                <WordleKeyboard />
            </div>
            
            
        </div>
    )
}