import { Route, Routes } from "react-router-dom";
import { Google } from "./pages/clones/Google/Google";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<h1>Home</h1>}/>
            <Route path="/teste" element={<h1>Teste</h1>}/>
            <Route path="/clones/google" element={<Google />}/>
        </Routes>
    )
}