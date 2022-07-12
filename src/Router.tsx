import { Route, Routes } from "react-router-dom";
import { NetflixProfilePage } from "./pages/clones/Netflix/NetflixProfilePage";
import { HomePage } from "./pages/HomePage";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>

            {/* clone routes */}
            <Route path="/clones/netflix-profile-page" element={<NetflixProfilePage />}/>
        </Routes>
    )
}