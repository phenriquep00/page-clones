import { CloneCard } from "../components/CloneCard"
import { Showcase } from "../components/Showcase"
import { SideBar } from "../components/SideBar"

export function HomePage() {
    return (
        <div className="w-screen h-screen bg-gray-800">
            

            <div className="flex flex-row w-screen h-screen">
                <SideBar />

                <Showcase>
                    <h2>page_clones</h2>
                    <div className="flex flex-row gap-5 p-5">
                        <CloneCard name="Netflix" path="./clones/netflix-profile-page" img=""/>
                        <CloneCard name="Wordle" path="./clones/wordle" img=""/>
                    </div>
                </Showcase>

            </div>
        </div>
    )
}