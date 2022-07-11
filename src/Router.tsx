import { Route, Routes } from "react-router-dom";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<h1>Home</h1>}/>
            <Route path="/teste" element={<h1>Teste</h1>}/>
        </Routes>
    )
}