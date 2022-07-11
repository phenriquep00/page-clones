import { Route, Routes } from "react-router-dom";
import { Google } from "./pages/clones/Google/Google";
import { HomePage } from "./pages/HomePage";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>

            {/* clone routes */}
            <Route path="/clones/google" element={<Google />}/>
        </Routes>
    )
}