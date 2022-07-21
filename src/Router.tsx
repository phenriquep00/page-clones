import { Route, Routes } from "react-router-dom";
import { NetflixProfilePage } from "./pages/clones/Netflix/NetflixProfilePage";
import { NetflixHomePage } from "./pages/clones/Netflix/NetlixHomePage";
import { WordlePage } from "./pages/clones/Wordle/WordlePage";
import { HomePage } from "./pages/HomePage";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>

            {/* clone routes */}
            <Route path="/clones/netflix-profile-page" element={<NetflixProfilePage />}/>
            <Route path="/clones/netflix-home" element={<NetflixHomePage username="pedro"/>}/>
            <Route path="/clones/wordle" element={<WordlePage />}/>
        </Routes>
    )
}