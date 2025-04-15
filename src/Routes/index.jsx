import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Cardapio } from "../Pages/Cardapio";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cardapio" element={<Cardapio />} />
        </Routes>
    );
}
