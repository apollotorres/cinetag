import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import Favoritos from "pages/favoritos";
import Inicio from "pages/inicio";
import { Player } from "pages/player/player";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function AppRoutes() 
{

    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <Routes>
                    <Route path="/" element={<Inicio />}></Route>
                    <Route path="/favoritos" element={<Favoritos />}></Route>
                    <Route path="/player" element={<Player />}></Route>
                </Routes>
            </Container>
            <Rodape /> 
        </BrowserRouter>
    )
}

export default AppRoutes;