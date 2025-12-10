import { createContext } from "react";

export const favoritoscontext = createContext()
favoritoscontext.displayName = "Favoritos"

export default function FavoritosProvider({ children }) 
{
    const {favoritos, setfavoritos} = usestate([])
return (
        <favoritoscontext.Provider value={{favoritos, setfavoritos}}>
            {children}
            </favoritoscontext.Provider>
    )
}

