import { WordleGridRow } from "./WordleGridRow";

export function WordleGrid() {
    return (
        <div className="w-auto h-auto flex flex-col">
            <WordleGridRow />
            <WordleGridRow />
            <WordleGridRow />
            <WordleGridRow />
            <WordleGridRow />
            <WordleGridRow />
        </div>
    )
}