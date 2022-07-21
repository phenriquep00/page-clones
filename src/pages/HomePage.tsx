import { CloneCard } from "../components/CloneCard"
import { Showcase } from "../components/Showcase"
import { SideBar } from "../components/SideBar"

export function HomePage() {
    return (
        <div className="w-screen h-screen bg-gray-800">
            <header>
                <h1 className="text-center text-2xl">page_clones</h1>
            </header>

            <div className="flex flex-row w-screen h-[96vh]">
                <SideBar />

                <Showcase>
                    <h2>Cloned pages</h2>
                    <div className="flex flex-row gap-5 p-5">
                        <CloneCard name="Netflix" path="./clones/netflix-profile-page"/>
                        <CloneCard name="Wordle" path="./clones/wordle"/>
                    </div>
                </Showcase>

            </div>
        </div>
    )
}