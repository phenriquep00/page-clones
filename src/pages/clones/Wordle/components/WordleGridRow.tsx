import { WordleRowBox } from "./WordleRowBox";

export function WordleGridRow() {
    return (
        <div className="w-auto h-auto flex flex-row">
            <WordleRowBox />
            <WordleRowBox />
            <WordleRowBox />
            <WordleRowBox />
            <WordleRowBox />
        </div>
    )
}