import { Backspace } from "phosphor-react";
import { WordleKeyboardKey } from "./WordleKeyboardKey";

export function WordleKeyboard() {
    return (
        <div>
            <div className="flex flex-row flex-1">
                <WordleKeyboardKey type={"commum"}>q</WordleKeyboardKey>
                <WordleKeyboardKey type={"commum"}>w</WordleKeyboardKey>
                <WordleKeyboardKey type={"commum"}>e</WordleKeyboardKey>
                <WordleKeyboardKey type={"commum"}>r</WordleKeyboardKey>
                <WordleKeyboardKey type={"commum"}>t</WordleKeyboardKey>
                <WordleKeyboardKey type={"commum"}>y</WordleKeyboardKey>
                <WordleKeyboardKey type={"commum"}>u</WordleKeyboardKey>
                <WordleKeyboardKey type={"commum"}>i</WordleKeyboardKey>
                <WordleKeyboardKey type={"commum"}>o</WordleKeyboardKey>
                <WordleKeyboardKey type={"commum"}>p</WordleKeyboardKey>
            </div>

            <div className="flex flex-row flex-1">
                <WordleKeyboardKey type={"commum"}>a</WordleKeyboardKey>
                <WordleKeyboardKey type={"commum"}>s</WordleKeyboardKey>
                <WordleKeyboardKey type={"commum"}>d</WordleKeyboardKey>
                <WordleKeyboardKey type={"commum"}>f</WordleKeyboardKey>
                <WordleKeyboardKey type={"commum"}>g</WordleKeyboardKey>
                <WordleKeyboardKey type={"commum"}>h</WordleKeyboardKey>
                <WordleKeyboardKey type={"commum"}>j</WordleKeyboardKey>
                <WordleKeyboardKey type={"commum"}>k</WordleKeyboardKey>
                <WordleKeyboardKey type={"commum"}>l</WordleKeyboardKey>

            </div>

            <div className="flex flex-row flex-1">
                <WordleKeyboardKey type={"backspace"}><Backspace size={22} weight="bold"/></WordleKeyboardKey>
                <WordleKeyboardKey type={"commum"}>z</WordleKeyboardKey>
                <WordleKeyboardKey type={"commum"}>x</WordleKeyboardKey>
                <WordleKeyboardKey type={"commum"}>c</WordleKeyboardKey>
                <WordleKeyboardKey type={"commum"}>v</WordleKeyboardKey>
                <WordleKeyboardKey type={"commum"}>b</WordleKeyboardKey>
                <WordleKeyboardKey type={"commum"}>n</WordleKeyboardKey>
                <WordleKeyboardKey type={"commum"}>m</WordleKeyboardKey>
                <WordleKeyboardKey type={"enter"}>Enter</WordleKeyboardKey>

            </div>

        </div>
    )
} 